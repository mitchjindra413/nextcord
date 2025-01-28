'use server';
import {signIn} from '@/auth';
import {AuthError} from 'next-auth';
import {redirect} from 'next/navigation';

export const googleLogin = async() => {
    try {
        console.log("hello")
        await signIn('google');
        redirect('/channels');
    } catch(error) {
        console.log(error);
        if(error instanceof AuthError) {
            console.log(error);
            return {error: "Failed to login with Google"};
        }
        return {error: "An error occurred when trying to login"}
    }
};