import React, { ReactNode, useEffect, useState } from 'react'
import { Route, Routes, HashRouter, useParams, useLocation } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Products from '../components/Products'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import { AppProvider, useAppContext } from '../context'
import Collaboration from '../components/Collaboration'
import Blog from '../components/Blog'
import { AnimatePresence } from 'framer-motion'
import { sections } from '../store'
import HomeTest from '../components/HomeTest'

export default function APPRouter() {
    return (
        <HashRouter>
            <AppProvider>
                <RouteControl>
                    <Navbar />
                    <PageTransitions />
                </RouteControl>
            </AppProvider>
        </HashRouter>
    );
}



const PageTransitions = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route path="" element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="collaboration" element={<Collaboration />} />
                <Route path="products" element={<Products />} />
                <Route path="blog" element={<Blog />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    );
};


const RouteControl = (props: {
    children: ReactNode
}) => {

    const { children } = props;
    const { page, setPage } = useAppContext()

    useEffect(() => {
        window.location.href = `#${page.toLowerCase()}`
    }, [page]);

    const handleScroll = (e: WheelEvent) => {
        const direction = e.deltaY > 0 ? 1 : -1
        if (shouldUseCustomScroll(direction)) {
            console.log('Menggunakan custom scroll');
            e.preventDefault();
            if (direction > 0) {
                // Scroll ke bawah
                console.log('Scroll ke bawah')
                setPage(prev => {
                    const index = sections.indexOf(prev);
                    // Menggunakan Math.min untuk memastikan indeks tidak melebihi panjang array - 1
                    const newIndex = Math.min(sections.length - 1, index + 1);
                    return sections[newIndex];
                });

            } else if (direction < 0) {
                console.log('Scroll ke atas')
                // Scroll ke atas
                setPage(prev => {
                    const index = sections.indexOf(prev)
                    const newIndex = Math.max(0, index - 1);
                    return sections[newIndex];
                })
            }

        } else {
            console.log('Menggunakan default scroll');
        }

    };



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


    return <>{children}</>
}