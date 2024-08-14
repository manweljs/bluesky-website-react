"use client";
import { AppProvider } from '@/context'
import React from 'react'

export default function Wrapper(
    { children }: { children: React.ReactNode }
) {
    return (
        <AppProvider>
            {children}
        </AppProvider>
    )
}
