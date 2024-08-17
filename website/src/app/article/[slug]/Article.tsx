"use client";
import { APP_ID } from '@/consts';
import { ArticleDetail, CoreProvider } from 'bsblog';
import React from 'react'
import s from "../Article.module.sass"

export function Article({ slug, privateKey }: { slug: string, privateKey: string }) {
    return (
        <div className={s.article_detail}>
            <CoreProvider
                appId={APP_ID}
            >
                <ArticleDetail
                    slug={slug}
                    privateKey={privateKey}
                    appId={APP_ID}
                />
            </CoreProvider>
        </div>
    )
}
