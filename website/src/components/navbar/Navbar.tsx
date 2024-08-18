"use client";
import React, { useEffect, useState } from 'react'
import { sections, socialMedia } from '@/store'
import { Logo } from '@/store/svg';
import { useAppContext } from '@/context';
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import s from "./Navbar.module.sass"
import { cls } from '@/utils';
import { Button } from 'antd';
import FIcon from '../ui/FIcon';
import { usePathname } from 'next/navigation';
import { NavbarMobile } from './NavbarMobile';


export default function Navbar() {

  const [minimized, setMinimized] = useState(false);
  const { page, setPage, navigate, slide, setSlide, swiperRef, setAllowSlideNext, setAllowSlidePrev } = useAppContext()
  const pathName = usePathname()


  useEffect(() => {

    if (slide > 0) {
      setMinimized(true)
    } else {
      setMinimized(false)
    }

  }, [slide]);

  useEffect(() => {
    console.log('pathName', pathName)
    if (pathName !== "/") {
      setSlide(-1)
    } else {
      const currentHash = window.location.hash.replace('#', '');
      console.log('currentHash', currentHash)
      const changeSlide = sections.indexOf(currentHash)
      setTimeout(() => {
        handleSlideChange(changeSlide)
      }, 500)

    }
  }, [pathName])


  const handleNavClick = (target: string) => {
    console.log('pathName', pathName)
    console.log('target', target)
    if (pathName === "/") {
      window.history.pushState({}, '', target)
      handleSlideChange(sections.indexOf(target.replace('/#', '')))
      return
    } else {
      window.location.href = target
    }
  }

  const handleSlideChange = (slide: number) => {
    console.log('slide di handle slide change', slide)
    const swiper = swiperRef.current?.swiper
    if (!swiper) return
    setAllowSlideNext(true)
    setAllowSlidePrev(true)
    setTimeout(() => {
      swiper.slideTo(slide)
    }, 0)
  }

  const { scrollY } = useScroll()


  useMotionValueEvent(scrollY, "change", (latest) => {
    // console.log("Page scroll: ", latest)
    latest > 400 ? setMinimized(true) : setMinimized(false)
  })


  return (
    <div className={s.navbar_container}>

      <div className={cls(s.navbar, minimized && s.min)}>
        <div className={s.container}>

          <div className={cls(s.nav_item, s.brand)}>
            <div onClick={() => handleNavClick(`/#home`)} style={{ cursor: "pointer" }}>
              <Logo className={s.main_logo} />
            </div>
          </div>

          <div className={cls(s.nav_item, s.links)}>
            {sections.map((item, index) => (
              <motion.div
                onClick={() => handleNavClick(`/#${item}`)} key={index}
                className={cls(s.link, slide === index && s.active)}
              >
                <span>{item}</span>
                {slide === index &&
                  <motion.span
                    layoutId='link_underline'
                    className={s.underline}
                    style={{ originY: "top" }}
                  />
                }
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

      <NavbarMobile handleNavClick={handleNavClick} />

    </div>
  )
}



