"use client";
import { APP_ID } from '@/consts';
import { ArticleDetail, CoreProvider } from 'bsblog';
import React from 'react'
import s from "../Article.module.sass"
import Footer from '@/components/Footer';
import { cls } from '@/utils';

export function Article({ slug, privateKey }: { slug: string, privateKey: string }) {
    return (
        <div className={cls(s.blog, s.article_detail)}>
            <CoreProvider
                appId={APP_ID}
                navbarHeight={80}
            >
                <ArticleDetail
                    slug={slug}
                    privateKey={privateKey}
                    appId={APP_ID}

                />
            </CoreProvider>
            <Footer />
        </div>
    )
}
