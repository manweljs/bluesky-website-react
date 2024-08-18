import React from 'react'
// import { Article } from './Article'
import s from '../Article.module.sass'
import 'bsblog/dist/style.css'

import dynamic from 'next/dynamic'
import { Metadata, ResolvingMetadata } from 'next'
import { APP_ID, BSBLOG_API_URL } from '@/consts'

const Article = dynamic(() => import('./Article')
    .then(mod => mod.Article), { ssr: false })

interface Props {
    params: {
        slug: string
    }
}

export default function page(props: Props) {
    const { slug } = props.params
    const privateKey = process.env.PRIVATE_KEY || ''
    return (
        <div className={s.article}>
            <Article
                slug={slug}
                privateKey={privateKey}
            />
        </div>
    )
}



export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const slug = params.slug
    // fetch data from API
    const endpoint = `${BSBLOG_API_URL}/api/Article/Share/GetArticleBySlug?slug=${slug}&app_id=${APP_ID}`

    try {
        const response = await fetch(endpoint)
        const result = await response.json()
        return {
            title: result.data.meta_title,
            description: result.data.meta_description,
            openGraph: {
                images: [result.data.image],
            },
        }

    } catch (error) {
        return {}
    }

}