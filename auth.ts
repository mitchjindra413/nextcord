import NextAuth from "next-auth"
import {PrismaAdapter} from '@auth/prisma-adapter';
import {prisma} from '@/prisma';
import {authConfig} from '@/auth.config';
import Credentials from '@auth/core/providers/credentials';
import {LoginUserSchema} from '@/schemas/auth';
import bcrypt from 'bcryptjs';
import Google from '@auth/core/providers/google';

export const { handlers: {GET, POST}, signIn, signOut, auth } = NextAuth({
    ...authConfig,
    session: {strategy: 'jwt'},
    providers: [
        Credentials({
            async authorize(credentials) {
                const validatedCredentials = LoginUserSchema.safeParse(credentials);
                if(!validatedCredentials.success) {
                    return null;
                }
                const {email, password} = validatedCredentials.data;
                const user = await prisma.user.findFirst({
                    where: {
                        email: email,
                    }
                })

                if(!user || !user.password || !user.email) {
                    return null
                }

                const passwordMatch = await bcrypt.compare(password, user.password);
                if(passwordMatch) {
                    return user;
                } else {
                    return null;
                }
            },
        }),
        Google({
            clientId: process.env.AUTH_GOOGLE_CLIENT_ID,
            clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET
        }),
    ],
    adapter: PrismaAdapter(prisma),
})