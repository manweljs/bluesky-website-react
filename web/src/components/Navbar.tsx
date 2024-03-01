import React, { useEffect, useState } from 'react'
import { sections, socialMedia } from '../store'
import { SVG } from '../store/svg';
import { useAppContext } from '../context';
import { motion } from "framer-motion"


export default function Navbar() {

  const [minimized, setMinimized] = useState(false);
  const { page, setPage } = useAppContext()

  console.log('page --->', page)
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

  return (
    <div id='navbar' className={minimized ? "min" : ""}>
      <div className="container">

        <div className="nav-item brand">
          <a href="#home">
            {SVG.logo}
          </a>
        </div>

        <div className="nav-item link">
          {sections.map((item, index) => (
            <motion.div
              style={{ cursor: "pointer" }}
              onClick={() => handleClick(`#${item.toLowerCase()}`)} key={index} className='is-link'>
              <span>{item}</span>
            </motion.div>
          ))}
        </div>

        <div className="nav-item social">
          {socialMedia.map((item, index) => (
            <a href={item.link} target='_blank' key={index} className='is-link'>
              <i className={`${item.icon}`} ></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}



