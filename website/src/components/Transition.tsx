"use client";
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';

export const anim = (variants: any, custom?: number) => {
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
            top: 0,
            opacity: 1,
            scale: 1

        },
        enter: {
            top: "-100vh",
            opacity: 1,
            scale: 1,
            transition: {
                duration: .3,

            }
        },
        exit: {
            top: 0,
            opacity: 1,
            transition: {
                duration: .4,
                delay: .02

            }
        }
    }

    return (
        <motion.div
            style={{ position: 'fixed', width: '100%' }}
        >
            <motion.div {...anim(variants)} className='transition-cover' />
            {children}
        </motion.div>
    )
}

