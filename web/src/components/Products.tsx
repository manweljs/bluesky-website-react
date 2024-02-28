import React, { useEffect, useState } from 'react'
import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
} from "framer-motion";

interface ProductType {
    title: string;
    description: string;
    image: string;
    button: string;
    color: string;
    paragraph: string[];
}



function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

const Product = ({ product }: { product: ProductType }) => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    console.log('scrollYProgress', y)

    return (
        <section >
            <div className="columns">
                <motion.div className="column text" style={{ y }}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    {product.paragraph.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                    <button>{product.button}</button>
                </motion.div>

                <motion.div className="column image" ref={ref}>
                    <img src={product.image} alt={product.title} />
                </motion.div>
            </div>

            <motion.div
                transition={{ duration: 1, delay: 0.1, ease: [.59, .15, .36, .85] }}
                style={{
                    backgroundImage: `linear-gradient(150deg, #fff, ${product.color})`,
                    height: "100svh",
                    width: "100vw",
                    position: "absolute",
                    zIndex: -1,
                    y: y
                }}
            ></motion.div>

        </section>
    )
}

export default function Products() {

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className='products'>
            {products.map((product, index) => (
                <Product key={index} product={product} />
            ))}
        </div>

    )
}



const products = [
    {
        title: "OptimizeDC",
        description: "Unlock the full potential of your data center operations",
        image: "https://via.placeholder.com/150",
        button: "Learn more",
        color: "#ff5e29",
        paragraph: [
            `Improve the performance, efficiency, and cost-effectiveness of your data center operations.
            Get customized solutions that meet your specific needs from our team of experts.`,
            `OptimizeDC is designed to provide you with the best results and take your data center operations to the next level.`
        ]
    },
    {
        title: "MetaOPT",
        description: "Unlock the full potential of your data center operations",
        image: "https://via.placeholder.com/150",
        button: "Learn more",
        color: "#0062ff",
        paragraph: [
            `Improve the performance, efficiency, and cost-effectiveness of your data center operations.
            Get customized solutions that meet your specific needs from our team of experts.`,
            `OptimizeDC is designed to provide you with the best results and take your data center operations to the next level.`
        ]
    },
    {
        title: "SquirrelHR",
        description: "Unlock the full potential of your data center operations",
        image: "https://via.placeholder.com/150",
        button: "Learn more",
        color: "#7310eb",
        paragraph: [
            `Improve the performance, efficiency, and cost-effectiveness of your data center operations.
            Get customized solutions that meet your specific needs from our team of experts.`,
            `OptimizeDC is designed to provide you with the best results and take your data center operations to the next level.`
        ]
    },
    {
        title: "RecruitComplete",
        description: "Unlock the full potential of your data center operations",
        image: "https://via.placeholder.com/150",
        button: "Learn more",
        color: "#00be68",
        paragraph: [
            `Improve the performance, efficiency, and cost-effectiveness of your data center operations.
            Get customized solutions that meet your specific needs from our team of experts.`,
            `OptimizeDC is designed to provide you with the best results and take your data center operations to the next level.`
        ]
    },
]