'use server'

import {prisma} from '@/prisma';
import {z} from 'zod';
import bcrypt from 'bcryptjs';
import {RegisterUserSchema} from '@/schemas/auth';
import {AuthResponse} from '@/types/authTypes';

export const registerUser = async (data: z.infer<typeof RegisterUserSchema>): Promise<AuthResponse> => {
    try {
        const validatedData = RegisterUserSchema.parse(data);
        if(!validatedData) {
            return {error: "Invalid form data"};
        }

        const {email, password} = validatedData;
        const hashedPassword = await bcrypt.hash(password, 10);

        const userExist = await prisma.user.findFirst({
            where: {
                email
            }
        });
        if(userExist) {
            return {error: "User with email already exists"}
        }

        const user = await prisma.user.create({
            data: {
                email: email,
                password: hashedPassword
            }
        });

        if(!user) {
            return {error: "An error occurred saving user"}
        }

        return {success: "User created successfully"};

    } catch (error) {
        console.error(error);
        return {error: "An error occurred creating user"};
    }
}