import { PrismaClient } from "@prisma/client"
// prevent next js hot preloading 
/* 
This line initializes a Prisma client instance. It checks if a global variable prismadb is already defined. If it is, it uses the existing instance; otherwise, it creates a new instance of the Prisma client

This conditional statement checks if the NODE_ENV environment variable is set to "production." If true, it sets the global variable prismadb to the Prisma client instance. This is likely done to ensure that in a production environment, the Prisma client is initialized only once and reused across subsequent requests.

 */
const client = global.prismadb || new PrismaClient();
if (process.env.NODE_EN === "production") global.prismadb = client;

export default client