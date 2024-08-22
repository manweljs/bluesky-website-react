"use client";
// import { ArticleDetail, CoreProvider } from 'bsblog';
import React from 'react'
import s from "../Article.module.sass"
import Footer from '@/components/Footer';
import { cls } from '@/utils';
import dynamic from 'next/dynamic';

const ArticleDetail = dynamic(() => import('bsblog').then(mod => mod.ArticleDetail), { ssr: false });

export function Article({ slug, privateKey }: { slug: string, privateKey: string }) {
    return (
        <div className={cls(s.blog, s.article_detail)}>
            <div className={s.article_detail_wrapper}>
                <ArticleDetail
                    slug={slug}
                    privateKey={privateKey}
                />
            </div>
            <Footer />
        </div>
    )
}
