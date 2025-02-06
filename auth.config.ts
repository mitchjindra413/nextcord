import type { NextAuthConfig } from 'next-auth';
import {JWT} from '@auth/core/jwt';

interface CustomToken extends JWT {
    id: string;
}

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/servers');
            if (isOnDashboard) {
                return isLoggedIn;

            } else if (isLoggedIn) {
                return Response.redirect(new URL('/servers', nextUrl));
            }
            return true;
        },
        jwt({ token, user }) {
            if (user) {
                token.id = user.id
            }
            console.log(token);
            return token
        },
        session({ session, token }) {
            session.user.id = (token as CustomToken).id;
            return session
        },
    },
    providers: [],
} satisfies NextAuthConfig;