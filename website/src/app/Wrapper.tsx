"use client";
import Navbar from '@/components/navbar/Navbar';
import { AppProvider } from '@/context'
import AntdRegistry from '@/context/AntdRegistry';
import React from 'react'

export default function Wrapper(
    { children }: { children: React.ReactNode }
) {
    return (
        <AppProvider>
            <AntdRegistry>
                <Navbar />
                {children}
            </AntdRegistry>
        </AppProvider>
    )
}
