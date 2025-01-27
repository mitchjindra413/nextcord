import {z} from 'zod';

export const RegisterUserSchema = z.object({
    email: z.string().email({
        message: "Must be valid email address"
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters long"
    }),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
});

export const LoginUserSchema = z.object({
    email: z.string().email({
        message: "Must be valid email address",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters long"
    })
});
