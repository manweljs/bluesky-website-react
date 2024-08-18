"use client";
import { useAppContext } from '@/context'
import s from "./Navbar.module.sass"
import React, { useEffect, useState } from 'react'
import { sections } from '@/store'
import { motion } from 'framer-motion'
import { cls } from '@/utils'
import { Logo } from '@/store/svg'

export const NavbarMobile = ({
    handleNavClick
}: {
    handleNavClick: (target: string, isMobile?: boolean) => void
}) => {

    const [open, setOpen] = React.useState(false)
    const [brand, setBrand] = useState<string>("/icons/icon-AC.svg")
    const { slide } = useAppContext()

    const handleMenuClick = (link: string) => {
        console.log('clicked')
        setOpen(false)
        handleNavClick(link, true)
    }

    useEffect(() => {
        if (open) {
            setBrand("/icons/icon-AC.svg")
        }
    }, [open]);



    const backgroundColor = "#000000"

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

                <div className={cls(s.background, open && s.open)}>
                    <div style={{ backgroundColor: backgroundColor }} />
                    <div style={{ backgroundColor: backgroundColor }} />
                    <div style={{ backgroundColor: backgroundColor }} />
                    <div style={{ backgroundColor: backgroundColor }} />
                    <div style={{ backgroundColor: backgroundColor }} />
                    <img src={brand} alt="" />
                </div>
            </div>

        </div>
    )
}
