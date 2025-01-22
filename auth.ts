import NextAuth from "next-auth"
import {PrismaAdapter} from '@auth/prisma-adapter';
import {prisma} from '@/prisma';
import Google from '@auth/core/providers/google';

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Credential(

    )],
    adapter: PrismaAdapter(prisma),
})