import bcrypt from 'bcrypt';
import prismadb from '@/../../lib/prismadb';
import { NextResponse } from 'next/server'

export async function POST(request:Request)
{
  const body = await request.json()
  // console.log(body)
  try {
    if (request.method !== 'POST') {
      return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 })
    }

    const { email, name, password } = body
    console.log(email); // Log the email separately to check its value
    
    const existingUser = await prismadb.user.findUnique({
      where: {
        email
      }
    })

    if (existingUser) {
      return NextResponse.json({ error: 'Email taken' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
        image: '',
        emailVerified: new Date(),
      }
    })

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: `Something went wrong: ${error}` });
  }
}

