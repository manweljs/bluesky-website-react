import React, { useEffect, useState } from 'react'
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ProductType {
    title: string;
    description: string;
    image: string;
    button: string;
    color: string;
    paragraph: string[];
}

export default function Products() {

    return (
        <div id='products'>
            {productList.map((product, index) => (
                <Product key={index} product={product} />
            ))}
        </div>

    )
}



const Product = ({ product }: { product: ProductType }) => {

    const ref = useRef(null);
    const isInView = useInView(ref);

    console.log('element in view', isInView)

    return (
        <section ref={ref} className={isInView ? "product inView" : "product"}>
            <div className="columns">
                <motion.div className="column text">
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
            <div className="bg"
                style={{ backgroundImage: `linear-gradient(150deg, #fff, ${product.color})` }}
            ></div>
        </section>

    )
}




const productList = [
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