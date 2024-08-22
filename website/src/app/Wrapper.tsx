"use client";
import Navbar from '@/components/navbar/Navbar';
import { APP_ID, PRIMARY_COLOR } from '@/consts';
import { AppProvider } from '@/context'
import AntdRegistry from '@/context/AntdRegistry';
import { CoreProvider } from 'bsblog';
import React from 'react'

export default function Wrapper(
    { children }: { children: React.ReactNode }
) {
    return (
        <AppProvider>
            <AntdRegistry>
                <CoreProvider
                    primaryColor={PRIMARY_COLOR}
                    appId={APP_ID}
                    navbarHeight={80}
                >
                    <Navbar />
                    {children}
                </CoreProvider>
            </AntdRegistry>
        </AppProvider>
    )
}
