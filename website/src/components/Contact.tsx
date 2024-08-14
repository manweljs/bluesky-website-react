"use client";
import React from 'react'
import { motion } from 'framer-motion'
import Footer from './Footer'
import s from "@/styles/style.module.sass"

export default function Contact() {
    return (

        <motion.section id='contact' className={s.contact}>
            <h2>Contact</h2>
        </motion.section>
    )
}
