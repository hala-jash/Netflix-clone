"use client"
import Navbar from "@/components/Navbar";
import {useSession, signOut} from "next-auth/react";
export default function Home() {
  const {data:session} = useSession()
  
  console.log("useSession",  session)

  return (
    <>
<Navbar/>
    </>
  );
}
