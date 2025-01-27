'use server';
import {z} from 'zod';
import {AuthResponse} from '@/types/authTypes';
import {LoginUserSchema} from '@/schemas/auth';
import {prisma} from '@/prisma';
import bcrypt from 'bcryptjs';
import {signIn} from '@/auth';
import {AuthError} from 'next-auth';

export const loginUser = async(data: z.infer<typeof LoginUserSchema>): Promise<AuthResponse> => {
    try {
        const validatedData = LoginUserSchema.parse(data);
        if(!validatedData) {
            return {error: "Invalid form data"};
        }

        const {email, password} = validatedData;
        const user = prisma.user.findFirst({
            where: {
                email: email
            }
        });
        if(!user || !user.password) {
            return {error: "User with given email not found"}
        }

        await signIn("credentials", {
            email: user.email,
            password: password,
            redirectTo: "/channels"
        });

    } catch(error) {
        if(error instanceof AuthError) {
            return {error: "Invalid credientals"};
        }
        return {error: "An error has occurred with login"};
    }

    return {success: "Login successful!"};
};