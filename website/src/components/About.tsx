"use client";
import React from 'react'
import { motion } from 'framer-motion'
import s from "@/styles/style.module.sass"
import { Container } from './ui/Container';

export default function About() {

    return (
        <motion.section className={s.about}>
            <Container className={s.container}>
                <h2><span className={s.text_primary}>About: </span> Who we are and what we stand for</h2>
                <p>
                    At BlueSky Creations, we are passionate about using technology to solve complex business problems.
                    We  push the boundaries of what&apos;s possible in AI, machine learning, and optimization to help you optimize
                    your business and create a better world for everyone.
                </p>
            </Container>
        </motion.section>
    )
}
