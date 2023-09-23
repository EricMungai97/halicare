"use client"

import React from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/footer';
import { SessionProvider } from 'next-auth/react';
import ToasterProvider from '@/app/providers/ToasterProvider';

export default function Layout({
    children
}: {
    children: React.ReactNode
}) {

  return (
    <div>
          <SessionProvider>
          <ToasterProvider />
          <Navbar />
          {children}
          <Footer />
          </SessionProvider>
       
    </div>
   
  )
}
