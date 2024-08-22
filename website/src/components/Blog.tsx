"use client";
import React from 'react'
import { motion } from 'framer-motion'
import s from "@/styles/style.module.sass"
import { ArticleList } from 'bsblog';
import dynamic from 'next/dynamic';

import { APP_ID, PATH, PRIMARY_COLOR } from '@/consts';
import { Button } from 'antd';
import { useAppContext } from '@/context';


export default function Blog({ isMobile }: { isMobile?: boolean }) {
    console.log('isMobile', isMobile)
    const { navigate } = useAppContext()
    return (
        <motion.section className={s.blog} id={isMobile ? "blog" : ""}>
            <div className={s.blog_wrapper}>
                <h3 style={{ textAlign: "center" }}
                >Blog</h3>

                <ArticleList maxArticles={4} />
                <Button
                    type="primary"
                    ghost
                    block
                    onClick={() => navigate(PATH.BLOG)}
                >Read More</Button>
            </div>
        </motion.section>
    )
}
