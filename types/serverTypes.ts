import { Prisma } from '@prisma/client';

export type Server = Prisma.ServerSelect;

export type FetchServersResult = {
    status: "success" | "error",
    message: string,
    servers: Server[] | null;
};