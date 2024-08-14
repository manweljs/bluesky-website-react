import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { productList } from '../store';
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
        <motion.section id='products' >
            {productList.map((product, index) => (
                <Product product={product} />
            ))}
        </motion.section>

    )
}



const Product = ({ product }: { product: ProductType }) => {

    return (
        <div className="product">
            <div className="container">
                <div className="columns">
                    <motion.div className="column text">
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        {product.paragraph.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                        <button>{product.button}</button>
                    </motion.div>

                    <motion.div className="column image" >
                        <img src={product.image} alt={product.title} />
                    </motion.div>
                </div>
            </div>
            <div className="bg"
                style={{ backgroundImage: `linear-gradient(150deg, #fff, ${product.color})` }}
            ></div>
        </div>

    )
}


