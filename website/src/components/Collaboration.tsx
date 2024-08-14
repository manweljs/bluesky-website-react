"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { Transition } from './Transition'
import s from "@/styles/style.module.sass"
import { Container } from './ui/Container';

export default function Collaboration() {

    return (
        <motion.section id='collaboration' className={s.collaboration}>
            <Container>
                <h2>Coles and IBM Collaboration</h2>
                <p>
                    BlueSky Creations, in proud collaboration with Coles and IBM,
                    is leading the charge in technological innovation,
                    revolutionizing how businesses approach decision-making with unmatched efficiency.
                </p>
                <p>
                    Leveraging the power of IBM Cplex and our innovative algorithms,
                    we&apos;ve crafted advanced solutions tailored to overcome today&apos;s operational challenges.
                    We invite you to explore the future of operational excellence with us and witness
                    firsthand how our collaboration is propelling success across various industries.
                </p>
            </Container>
        </motion.section>
    )
}
