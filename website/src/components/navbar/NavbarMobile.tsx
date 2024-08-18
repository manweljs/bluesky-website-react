"use client";
import { useAppContext } from '@/context'
import s from "./Navbar.module.sass"
import React, { useEffect, useState } from 'react'
import { sections } from '@/store'
import { color, motion } from 'framer-motion'
import { cls } from '@/utils'
import { Logo } from '@/store/svg'

const icons = [
    {
        href: "/icons/icon-MO.svg",
        color: "#0062ff"
    },
    {
        href: "/icons/icon-SQ.svg",
        color: "#7310eb"
    },
    {
        href: "/icons/icon-OP.svg",
        color: "#ff5e29"
    },
    {
        href: "/icons/icon-AC.svg",
        color: "#065bf7"
    },
    {
        href: "/icons/icon-RC.svg",
        color: "#00be68"
    },
    {
        href: "/icons/icon-BS.svg",
        color: "#0062ff"
    },
]

const getRandomIcon = () => {
    const index = Math.floor(Math.random() * icons.length);
    return icons[index];
};


export const NavbarMobile = ({
    handleNavClick
}: {
    handleNavClick: (target: string, isMobile?: boolean) => void
}) => {

    const [open, setOpen] = React.useState(false)
    const [brand, setBrand] = useState<{
        href: string;
        color: string;
    }>(icons[0])
    const { slide } = useAppContext()


    const handleMenuClick = (link: string) => {
        console.log('clicked')
        setOpen(false)
        handleNavClick(link, true)
    }

    useEffect(() => {
        if (open) {
            const brand = getRandomIcon()
            setBrand(brand)
        }
    }, [open]);


    return (

        <div className={s.navbar_mobile}>
            <div className={s.brand}>
                <div onClick={() => handleMenuClick(`/#home`)} style={{ cursor: "pointer" }}>
                    <Logo className={s.main_logo} />
                </div>
            </div>

            <div className={cls(s.hamburger, open && s.open)} onClick={() => setOpen(prev => !prev)}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className={cls(s.nav_menu_items, open && s.open)}>
                <div className={cls(s.links, open && s.open)}>
                    {sections.map((item, index) => (
                        <motion.div
                            style={{ cursor: "pointer" }}
                            onClick={() => handleMenuClick(`/#${item}`)} key={index}
                            className={cls(s.link, slide === index && s.active)}
                        >
                            <span>{item}</span>
                        </motion.div>
                    ))}
                </div>

                <div className={cls(s.background, open && s.open)} >
                    <div style={{ backgroundColor: brand.color }} />
                    <div style={{ backgroundColor: brand.color }} />
                    <div style={{ backgroundColor: brand.color }} />
                    <div style={{ backgroundColor: brand.color }} />
                    <div style={{ backgroundColor: brand.color }} />
                    <img src={brand.href} alt="" />
                </div>
            </div>

        </div>
    )
}
