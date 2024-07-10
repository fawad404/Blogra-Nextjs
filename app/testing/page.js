"use client"
import Write from '@/app/components/write/Write'
import React from 'react'
import { useSession } from 'next-auth/react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
const page = () => {
    const { data: session } = useSession(); // Get session from next-auth
  return (
    <>
    <Navbar />
    <Write userSession={session}/>
    <Footer />
    </>
  )
}

export default page