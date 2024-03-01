import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';

const animate = (variants: any, custom?: number) => {
    return {
        initial: 'initial',
        animate: 'enter',
        exit: 'exit',
        variants,
        custom
    }
}

export const Transition = (props: {
    children: React.ReactNode;
}) => {
    const { children } = props;

    const variants = {
        initial: {
            top: "100vh",
            opacity: 0,
            scale: 0.8

        },
        enter: {
            top: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: .3
            }
        },
        exit: {
            top: "30vh",
            opacity: 0,
            transition: {
                duration: .4
            }
        }
    }

    return (
        <motion.div {...animate(variants)}
            style={{ position: 'fixed', width: '100%' }}
        >
            {children}
        </motion.div>
    )
}

