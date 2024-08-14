"use client";
import React from 'react'
import { motion } from 'framer-motion'
import Footer from './Footer'
export default function Contact() {
    return (
        <>
            <motion.section id='contact'>
                <h2 >Contact</h2>

                <motion.div
                    initial={{ y: "100vh" }}
                    animate={{ y: 0 }}
                    transition={{
                        duration: 1,
                        type: "spring"
                    }}
                    style={{
                        backgroundColor: "red",
                        height: "100svh",
                        width: "100vw",
                        position: "absolute",
                        top: 0,
                        left: 0
                    }}
                >
                </motion.div>
            </motion.section>
            <Footer />
        </>
    )
}
