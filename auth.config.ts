import type { NextAuthConfig } from 'next-auth';

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
            if (user) { // User is available during sign-in
                token.id = user.id
            }
            return token
        },
    },
    providers: [],
} satisfies NextAuthConfig;