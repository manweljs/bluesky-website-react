"use client";
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { productList } from '@/store';
import Image from 'next/image';
import s from "@/styles/style.module.sass"
import { Container } from './ui/Container';
import { cls } from '@/utils';
import { Button, ConfigProvider } from 'antd';
import { useAppContext } from '@/context';
import { Swiper, SwiperSlide } from 'swiper/react';

interface ProductType {
    title: string;
    logo: string;
    image1: React.ReactNode;
    image2: React.ReactNode;
    button: null | {
        title: string;
        href: string;
    };
    color: string;
    paragraph: string[];
}



export default function Product({ product }: { product: ProductType }) {
    const { navigate } = useAppContext()
    return (
        <ConfigProvider
            theme={{ token: { colorPrimary: product.color } }}
        >
            <section
                className={s.product}
                style={{ backgroundImage: `linear-gradient(150deg, #fff, ${product.color})` }}
            >
                <Container className={s.container}>
                    <motion.div className={s.text}>
                        <Image
                            className={s.logo}
                            src={product.logo}
                            alt={product.title}
                            width={250}
                            height={60}
                        />
                        <h3>{product.title}</h3>
                        {product.paragraph.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                        {product.button &&
                            <Button
                                onClick={() => navigate(product.button?.href as string, true)}
                                shape='round'
                                type='primary'
                                ghost
                            >
                                {product.button?.title}
                            </Button>
                        }
                    </motion.div>

                    <motion.div className={s.images} >
                        {product.image1}
                        {product.image2}
                    </motion.div>
                </Container>
            </section>
        </ConfigProvider>

    )
}


