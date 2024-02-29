import React, { useEffect, useState } from 'react'
import { navList, socialMedia } from '../store'
import { useScroll } from 'framer-motion';
import { SVG } from '../store/svg';
export default function Navbar() {

  const [minimized, setMinimized] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      // console.log('Scroll Y Position:', latest);
      if (latest > 600) {
        setMinimized(true);
      } else {
        setMinimized(false);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div id='navbar' className={minimized ? "min" : ""}>
      <div className="container">

        <div className="nav-item brand">
          <a href="#home">
            {SVG.logo}
          </a>
        </div>

        <div className="nav-item link">
          {navList.map((item, index) => (
            <a href={`#${item.toLowerCase()}`} key={index} className='is-link'>
              <span>{item}</span>
            </a>
          ))}
        </div>

        <div className="nav-item social">
          {socialMedia.map((item, index) => (
            <a href={item.link} key={index} className='is-link'>
              <i className={`${item.icon}`} ></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}



