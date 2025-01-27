import NextAuth from "next-auth"
import {PrismaAdapter} from '@auth/prisma-adapter';
import {prisma} from '@/prisma';
import {authConfig} from '@/auth.config';
import Credentials from '@auth/core/providers/credentials';
import {LoginUserSchema} from '@/schemas/auth';
import bcrypt from 'bcryptjs';

export const { handlers, signIn, signOut, auth } = NextAuth({
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
                const user = await prisma.findFirst({
                    email: email,
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
    ],
    adapter: PrismaAdapter(prisma),
})