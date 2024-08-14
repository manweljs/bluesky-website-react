"use client";
import React, { useEffect, useState } from 'react'
import { sections, socialMedia } from '@/store'
import { SVG } from '@/store/svg';
import { useAppContext } from '@/context';
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import s from "@/styles/style.module.sass"
import { cls } from '@/utils';
import { Button } from 'antd';
import FIcon from './ui/FIcon';


export default function Navbar() {

  const [minimized, setMinimized] = useState(false);
  const { page, setPage, navigate } = useAppContext()

  useEffect(() => {

    if (page !== "home") {
      setMinimized(true)
    } else {
      setMinimized(false)
    }

  }, [page]);


  const handleClick = (target: string) => {

    setPage(target.replace("#", ""))
    window.location.href = target
  }

  const { scrollY } = useScroll()


  useMotionValueEvent(scrollY, "change", (latest) => {
    // console.log("Page scroll: ", latest)
    latest > 400 ? setMinimized(true) : setMinimized(false)
  })

  return (
    <div className={cls(s.navbar, minimized && s.min)}>
      <div className={s.container}>

        <div className={cls(s.nav_item, s.brand)}>
          <a href="#home">
            {SVG.logo}
          </a>
        </div>

        <div className={cls(s.nav_item, s.link)}>
          {sections.map((item, index) => (
            <motion.div
              style={{ cursor: "pointer" }}
              onClick={() => handleClick(`#${item.toLowerCase()}`)} key={index} className={s.is_link}>
              <span>{item}</span>
            </motion.div>
          ))}
        </div>

        <div className={cls(s.nav_item, s.social)}>
          {socialMedia.map((item, index) => (
            <Button
              key={index}
              icon={<FIcon name={item.icon} pointer />}
              type='text'
              onClick={() => navigate(item.link, true)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}



