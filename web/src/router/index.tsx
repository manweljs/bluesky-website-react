import React from 'react'
import { Route, Routes, HashRouter } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Products from '../components/Products'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import { AppProvider } from '../context'
import Collaboration from '../components/Collaboration'
import Blog from '../components/Blog'


export default function APPRouter() {
    return (
        <AppProvider>
            <HashRouter >
                <Navbar />
                <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="collaboration" element={<Collaboration />} />
                    <Route path="products" element={<Products />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </HashRouter>
        </AppProvider>
    )
}


