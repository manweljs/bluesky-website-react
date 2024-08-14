"use client";
import { AppProvider } from '@/context'
import AntdRegistry from '@/context/AntdRegistry';
import React from 'react'

export default function Wrapper(
    { children }: { children: React.ReactNode }
) {
    return (
        <AppProvider>
            <AntdRegistry>
                {children}
            </AntdRegistry>
        </AppProvider>
    )
}
