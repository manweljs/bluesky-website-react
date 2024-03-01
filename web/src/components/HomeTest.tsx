import React from 'react'
import { motion } from 'framer-motion'
import { Transition } from './Transition'

export default function HomeTest() {

    return (
        <Transition>
            <motion.section id='about'>
                <h2>HomeTest</h2>
            </motion.section>

        </Transition>
    )
}
