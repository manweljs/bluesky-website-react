"use client";
import React from 'react'
import { motion } from 'framer-motion'
import s from "@/styles/style.module.sass"
import { ArticleList, CoreProvider } from 'bsblog';
import dynamic from 'next/dynamic';

import { APP_ID } from '@/consts';


export default function Blog() {
    return (
        <motion.section className={s.blog}>
            <div className={s.blog_wrapper}>
                <h3>Blog</h3>
                <CoreProvider
                    appId={APP_ID}
                >
                    <ArticleList
                        appId={APP_ID}
                    />
                </CoreProvider>

            </div>
        </motion.section>
    )
}
