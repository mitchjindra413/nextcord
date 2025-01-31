import {z} from 'zod';

export const CreateServerSchema = z.object({
    name: z.string().min(1, {
        message: "Server name must be at least one character long"
    }).trim(),
    image: z.instanceof(File).refine((file) => file.type.startsWith("image/"), {
        message: "Only image files are allowed",
    }).refine((file) => file.size <= 1024 * 1024, {
        message: "File size must be less than 1MB",
    }).optional(),
});