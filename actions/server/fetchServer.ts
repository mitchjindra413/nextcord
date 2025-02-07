"use server";
import {prisma} from '@/prisma';

const fetchServer = async (id: string) => {
    try {
        return prisma.server.findUnique({
            where: {
                id: id
            },
            include: {
                channels: true
            }
        });
    } catch (error) {
        console.log(error);
    }
};

export default fetchServer;