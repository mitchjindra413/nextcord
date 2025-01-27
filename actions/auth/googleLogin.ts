'use server';
import {signIn} from '@/auth';
import {AuthError} from 'next-auth';

export const googleLogin = async() => {
    try {
        await signIn('google');
    } catch(error) {
        if(error instanceof AuthError) {
            return {error: "Failed to login with Google"};
        }
        return {error: "An error occurred when trying to login"}
    }
};