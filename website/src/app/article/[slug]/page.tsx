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
        const response = await getArticle(slug)
        // console.log('response :>> ', response);
        return {
            title: response.meta_title,
            description: response.meta_description,
            keywords: response.tags,
            openGraph: {
                images: [response.data.image],
            },
        }

    } catch (error) {
        return {}
    }

}