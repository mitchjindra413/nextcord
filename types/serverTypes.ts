import { Server } from '@prisma/client';

export type FetchServersResult = {
    status: "success" | "error",
    message: string,
    servers: Server[] | null;
};

export type CreateServerResult = {

}