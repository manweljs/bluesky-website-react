import React from 'react'
// import { Article } from './Article'
import s from '../Article.module.sass'
import 'bsblog/dist/style.css'
import dynamic from 'next/dynamic'
import { Metadata, ResolvingMetadata } from 'next'
import { APP_ID, BSBLOG_API_URL } from '@/consts'
import { Article } from './Article'


interface Props {
    params: {
        slug: string
    }
}

export default async function page(props: Props) {
    const { slug } = props.params
    const privateKey = process.env.PRIVATE_KEY || ''
    const response = await getArticle(slug)
    if (!response?.id) {
        return <div>Article not found</div>
    }
    return (
        <div className={s.article}>
            <Article
                slug={slug}
                privateKey={privateKey}
            />
        </div>
    )
}


const getArticle = async (slug: string) => {
    const endpoint = `${BSBLOG_API_URL}/api/Article/Share/GetArticleBySlug?slug=${slug}&app_id=${APP_ID}`
    const response = await fetch(endpoint, {method: "GET", cache: "no-store"})
    const result = await response.json()
    return result.data
}


export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const slug = params.slug
    try {
        const article = await getArticle(slug)
        if (!article?.id) {
            return {}
        }
        return {
            title: article.meta_title || article.title,
            description: article.meta_description,
            keywords: article.tags,
            openGraph: {
                images: [article.image],
            },
        }

    } catch (error) {
        return {}
    }

}