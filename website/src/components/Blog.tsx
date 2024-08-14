"use client";
import React from 'react'
import { motion } from 'framer-motion'
import s from "@/styles/style.module.sass"

export default function Blog() {
    return (
        <motion.section id="blog" className={s.blog}>
            <h2>Blog</h2>
        </motion.section>
    )
}
