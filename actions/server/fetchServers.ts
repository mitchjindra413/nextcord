"use server";

import {prisma} from '@/prisma';
import {auth} from '@/auth';
import type {FetchServersResult} from '@/types/serverTypes';

const fetchServers = async (): Promise<FetchServersResult> => {
    const session = await auth();
    const userId = session?.user?.id;

    if(!userId) {
        return {status: "error", message: "User must be signed in to view servers"}
    }

    try {
        const servers = await prisma.server.findMany({
            where: {
                OR: [
                    {userId: userId},
                    { members: { some: { userId } } }
                ]
            }
        });
        return {status: "success", servers: servers};

    } catch (error) {
        console.log(error);
        return {status: "error", message: "An error occurred fetching your servers"};
    }
};

export default fetchServers;