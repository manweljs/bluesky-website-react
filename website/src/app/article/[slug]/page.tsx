import React from 'react'
// import { Article } from './Article'
import s from '../Article.module.sass'
import 'bsblog/dist/style.css'

import dynamic from 'next/dynamic'

const Article = dynamic(() => import('./Article')
    .then(mod => mod.Article), { ssr: false })

export default function page(props: { params: { slug: string } }) {
    const { slug } = props.params
    const privateKey = process.env.PRIVATE_KEY || ''
    console.log('privateKey', privateKey)
    return (
        <div className={s.article}>
            <Article
                slug={slug}
                privateKey={privateKey}
            />
        </div>
    )
}
