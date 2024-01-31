'use client';
import Navbar from '@/components/Navbar';
import BillBoard from '@/components/BillBoard';
import { useSession, signOut } from 'next-auth/react';
export default function Home() {
  return (
    <>
      <Navbar />
      <BillBoard />
    </>
  );
}
