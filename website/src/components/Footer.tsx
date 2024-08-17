import React from 'react'
import s from "@/styles/style.module.sass"
import Image from 'next/image'
import { BRAND_NAME, PAGE, PATH } from '@/consts'
import Link from 'next/link'

export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <div className={s.footer}>
            <Image src="bluesky-icon.svg" alt="bluesky" width={50} height={50} />

            <div className={s.links}>
                {legals.map((legal, index) => (
                    <Link key={index} href={legal.href} className={s.link}>{legal.title}</Link>
                ))}

            </div>
            <div className={s.copyright}>
                <span>{BRAND_NAME} © {year}. All Rights Reserved</span>
            </div>
        </div>
    )
}

const legals = [
    {
        title: PAGE.TERMS_OF_SERVICE,
        href: PATH.TERMS_OF_SERVICE
    },
    {
        title: PAGE.PRIVACY_POLICY,
        href: PATH.PRIVACY_POLICY
    },
    {
        title: PAGE.AI_ACT_GROUP_POLICY,
        href: PATH.AI_ACT_GROUP_POLICY
    },
    {
        title: PAGE.COOKIE_POLICY,
        href: PATH.COOKIE_POLICY
    },
    {
        title: PAGE.DATA_SUBJECT_ACCESS_RIGHTS_AND_PROCEDURE,
        href: PATH.DATA_SUBJECT_ACCESS_RIGHTS_AND_PROCEDURE
    },
    {
        title: PAGE.EU_UK_GDPR_REPRESENTATIVES,
        href: PATH.EU_UK_GDPR_REPRESENTATIVES
    },
    {
        title: PAGE.GENERAL_DATA_PROTECTION_POLICY,
        href: PATH.GENERAL_DATA_PROTECTION_POLICY
    }
]