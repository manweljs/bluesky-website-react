"use client";
import React from 'react'
import s from './Blog.module.sass'
import { ArticleList, CoreProvider } from 'bsblog'
import { APP_ID } from '@/consts'
import { PageHeading } from '@/components/ui/PageHeading';
import Footer from '@/components/Footer';

const content = {
    title: "Blog",
    description: []
}

export function Blog() {
    return (
        <div className={s.blog}>
            <PageHeading content={content} className={s.heading} />
            <ArticleList />
            <Footer />
        </div>
    )
}
