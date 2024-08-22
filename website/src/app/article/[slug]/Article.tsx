"use client";
import { ArticleDetail, CoreProvider } from 'bsblog';
import React from 'react'
import s from "../Article.module.sass"
import Footer from '@/components/Footer';
import { cls } from '@/utils';

export function Article({ slug, privateKey }: { slug: string, privateKey: string }) {
    return (
        <div className={cls(s.blog, s.article_detail)}>
            <ArticleDetail
                slug={slug}
                privateKey={privateKey}
            />
            <Footer />
        </div>
    )
}
