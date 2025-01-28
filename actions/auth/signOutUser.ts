"use server";
import {signOut} from '@/auth';

const signOutUser = async() => {
    try {
        await signOut();
    } catch(error) {
        throw error;
    }
};

export default signOutUser;