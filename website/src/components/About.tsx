"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { Transition } from './Transition'
export default function About() {

    return (
        <Transition>
            <motion.section id='about'>
                <h2>About</h2>
            </motion.section>
        </Transition>
    )
}
