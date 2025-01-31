'use server';
import {z} from 'zod';
import {AuthResponse} from '@/types/authTypes';
import {LoginUserSchema} from '@/schemas/auth';
import {prisma} from '@/prisma';
import {signIn} from '@/auth';
import {AuthError} from 'next-auth';

export const loginUser = async(data: z.infer<typeof LoginUserSchema>): Promise<AuthResponse> => {
    const validatedData = LoginUserSchema.parse(data);
    if(!validatedData) {
        return {error: "Invalid form data"};
    }

    const {email, password} = validatedData;
    const user = await prisma.user.findFirst({
        where: {
            email: email
        }
    });

    if(!user) {
        return {error: "User with given email not found"}
    }
    if(!user.password) {
        return {error: "User previously created with 3rd party option. Please sign in with one used"}
    }

    try {
        await signIn("credentials", {
            email: user.email,
            password: password,
            redirect: true,
            redirectTo: "/servers"
        });
    } catch(error) {
        if(error instanceof AuthError) {
            if(error.type === "CredentialsSignin") {
                return {error: "Invalid credentials"}
            }
        }
        throw error;
    }

    return {success: "User logged in successfully"}
};