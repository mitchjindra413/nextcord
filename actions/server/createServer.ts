'use server';

import {z} from 'zod';
import {CreateServerSchema} from '@/schemas/server';
import {prisma} from '@/prisma';
import {APIResponse} from '@/types/response';
import {Server} from '@prisma/client';
import {auth} from '@/auth';
import {revalidatePath} from 'next/cache';
import AuthenticationError from '@/errors/AuthenticationError';

// TODO: Add S3 upload ability and image link
const createServer = async (data: z.infer<typeof CreateServerSchema>): Promise<APIResponse<Server>> => {
    const session = await auth();
    if(!session?.user?.id) {
        throw new AuthenticationError("Must be signed")
    }

    const validatedData = CreateServerSchema.safeParse(data);
    if(!validatedData.success) {
        return {
            status: "error",
            message: "Invalid data",
            data: null
        };
    }
    const {name, image} = data;
    try {
        const server = await prisma.server.create({
            data: {
                name: name,
                inviteCode: crypto.randomUUID(),
                user: {
                    connect: {id: session.user.id}
                },
                imageUrl: "",
                members: {
                    create: [
                        {
                            role: "ADMIN",
                            user: {
                                connect: {id: session.user.id}
                            }
                        }
                    ],
                },
                channels: {
                    create: [
                        {
                            name: "General",
                            type: 'TEXT',
                            user: {
                                connect: {id: session.user.id}
                            }
                        },
                        {
                            name: "General",
                            type: "AUDIO",
                            user: {
                                connect: {id: session.user.id}
                            }
                        }
                    ]
                }
            },
        })
        revalidatePath("/servers")
        return {
            status: "success",
            message: "Server created successfully",
            data: server
        };
    } catch (error) {
        console.log(error);

        return {
            status: "error",
            message: "An error occurred making the server",
            data: null
        };
    }
};

export default createServer;