"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { Transition } from './Transition'
import s from "@/styles/style.module.sass"
import { Container } from './ui/Container';

export default function About() {

    return (
        <motion.section id='about' className={s.about}>
            <Container>
                <h2>About: Who we are and what we stand for</h2>
                <p>
                    At BlueSky Creations, we are passionate about using technology to solve complex business problems.
                    We  push the boundaries of what&apos;s possible in AI, machine learning, and optimization to help you optimize
                    your business and create a better world for everyone.
                </p>
            </Container>
        </motion.section>
    )
}
