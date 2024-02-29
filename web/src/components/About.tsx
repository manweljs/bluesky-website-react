import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
export default function About() {

    return (
        <AnimatePresence mode='wait'>
            <motion.section id='about'
                initial={{ y: "100vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100vh", opacity: 0 }}
                transition={{
                    duration: .5,
                    type: "just"
                }}
                style={{
                    backgroundColor: "white",
                    height: "100svh",
                    width: "100vw",
                    position: "absolute",
                    top: 0,
                    left: 0
                }}
            >
                <h2 >About</h2>
            </motion.section>
        </AnimatePresence>
    )
}
