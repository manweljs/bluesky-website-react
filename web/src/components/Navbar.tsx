import React, { useEffect, useState } from 'react'
import { sections, socialMedia } from '../store'
import { SVG } from '../store/svg';
import { useNavigate } from 'react-router-dom';



export default function Navbar() {

  const [minimized, setMinimized] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  const handleScroll = (e: WheelEvent) => {
    const direction = e.deltaY > 0 ? 1 : -1
    if (shouldUseCustomScroll(direction)) {
      console.log('Menggunakan custom scroll');
      e.preventDefault();
      if (direction > 0) {
        // Scroll ke bawah
        console.log('masuk - sini')
        setCurrentSection((prev: number) => {
          const nextSection = Math.min(sections.length - 1, prev + 1);
          return nextSection;
        });

      } else if (direction < 0) {
        console.log('masuk - sana')

        // Scroll ke atas
        setCurrentSection((prev) => {

          const prevSection = Math.max(0, prev - 1);
          return prevSection;
        });
      }

    } else {
      console.log('Menggunakan default scroll');
    }

  };

  useEffect(() => {
    const page = sections[currentSection];

    if (currentSection !== 0) {
      setMinimized(true)
    } else {
      setMinimized(false)
    }

    window.location.href = `#${page.toLowerCase()}`

  }, [currentSection]);

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  const shouldUseCustomScroll = (direction: number) => {
    // Misalnya, kamu bisa memeriksa apakah scroll sudah mencapai batas tertentu,
    // atau berdasarkan state atau props tertentu yang menentukan "mode" scroll.
    // Contoh sederhana:
    let isNextPage = false
    if (direction > 0) {
      const n = 5
      const h = document.documentElement.scrollHeight;
      const y = window.innerHeight + window.scrollY + n
      isNextPage = y >= h;

    } else {
      const y = window.scrollY
      console.log('y', y)
      isNextPage = y <= 0;
    }

    return isNextPage;
  };


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



