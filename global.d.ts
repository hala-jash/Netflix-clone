import { PrismaClient } from "@prisma/client";

declare global{
    namespace globalThis{
        var prismadb:PrismaClient
    }
}

/* 
With this type declaration in place, you can use globalThis.prismadb elsewhere in your TypeScript code without TypeScript raising errors. This is especially useful in situations where you want to maintain a single instance of the Prisma client across different modules or files within your application.
 */