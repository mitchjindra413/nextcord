'use server';

import {z} from 'zod';
import {CreateServerSchema} from '@/schemas/server';
import {prisma} from '@/prisma';

const createServer = async (data: z.infer<typeof CreateServerSchema>) => {
    try {
        const server = await prisma.server.create({
            name: data.name,
        });
    } catch (error) {
        return {error: "An error has occurred creating server"}
    }
};

export default createServer;