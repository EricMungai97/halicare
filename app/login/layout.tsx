"use client";
import React from 'react'
import { SessionProvider } from 'next-auth/react';
import ToasterProvider from '@/app/providers/ToasterProvider';
import { ModalProvider } from '../providers/modal-provider';

export default function StaffLayout({ children }: { children: React.ReactNode }) {

  return (
    <div>
        <SessionProvider>
        <ToasterProvider />
        <ModalProvider />
        {children}
        </SessionProvider>
      
    </div>
  )
}
