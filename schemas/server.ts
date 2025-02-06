import {z} from 'zod';

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
export const CreateServerSchema = z.object({
    name: z.string().trim().min(5, {
        message: "Server name must be at least 5 characters long"
    }).max(25, "Server name must be at max 25 characters long"),
    image: z.any().refine((file) => file?.size <= 1024*1024, {
        message: "Max image size is 1MB"
    }).refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), {
        message: "Only .jpg, .jpeg, .png and .webp formats are supported"
    }).optional(),
});