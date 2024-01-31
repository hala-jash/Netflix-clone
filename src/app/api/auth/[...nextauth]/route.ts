import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import prismadb from '@/../../lib/prismadb';
import { compare } from 'bcrypt';
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter"

const handler  = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || ""
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
    }),
    Credentials({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
        },
        password: {
          label: 'Password',
          type: 'password'
        }
      },
      async authorize(credentials) {
        // console.log(credentials , "credentials")
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email and password required');
        }

        const user = await prismadb.user.findUnique({
          where: {
            email: credentials.email
          }
        });

        if (!user || !user.hashedPassword) {
          throw new Error('Email does not exist');
        }

        const isCorrectPassword = await compare(credentials.password, user.hashedPassword)


        if (!isCorrectPassword) {
          throw new Error('Incorrect password');
        }

        return user;
      }
    })
  ],

  callbacks: {
    async jwt({ token, user }) {
      // console.log("jwt callback", { token, user });
      if (user) {
        return {
          ...token,
          id: user.id,
          name: user.name,
          email: user.email,
          image:user.image
        };
      }
      return token;
    },
    async session({ session, token, user }) {
      // console.log("session callback", { token, user, session });
      // pass in userid and name and email to the session
      return {
        ...session,
        user:{
          id: token.id,
          name: token.name,
          email: token.email,
          image:token.image
        }
      };
      return session
    },
  },
  
  pages: {
    signIn: '/auth',
  },

  debug: process.env.NODE_ENV === 'development',
  adapter:PrismaAdapter(prismadb),
  session: {
    strategy: 'jwt',
  },

  jwt: {
  secret: process.env.NEXTAUTH_JWT_SECRET
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST }