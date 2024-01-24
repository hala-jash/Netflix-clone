"use client"

import {useSession, signOut} from "next-auth/react"
export default function Home() {
  const {data:session} = useSession()
  
  console.log("useSession",  session)
  console.log("logged in user",  session?.user.name)
  return (
    <>
    
<h1 className="text-2xl text-green-500">Netflix Clone</h1>
<button onClick={() => signOut()} className="h-10 w-full bg-white">{session?.user.name} logout</button>
    </>
  );
}
