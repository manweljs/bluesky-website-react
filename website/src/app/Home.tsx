"use client";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, EffectCreative, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import About from '@/components/About';
import Blog from '@/components/Blog';
import Collaboration from '@/components/Collaboration';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Product from '@/components/Product';
import { useAppContext } from '@/context';
import { productList } from '@/store';

export default function Home() {

    const nestedSwiperRef = useRef<any | null>(null);
    const { slide, setSlide, swiperRef } = useAppContext();
    const [allowSlideNext, setAllowSlideNext] = useState(true);
    const [allowSlidePrev, setAllowSlidePrev] = useState(true);
    const [nestedAtEnd, setNestedAtEnd] = useState(false);
    const [nestedAtBeginning, setNestedAtBeginning] = useState(true);

    const handleSlideChange = () => {
        const swiper = swiperRef.current?.swiper;
        if (swiper) {
            const currentSlideIndex = swiper.activeIndex;
            console.log("Slide berubah ke:", currentSlideIndex);
            setSlide(currentSlideIndex);

            if (currentSlideIndex === 3) {
                setAllowSlideNext(nestedAtEnd);
                setAllowSlidePrev(nestedAtBeginning);
            } else {
                setAllowSlideNext(true);
                setAllowSlidePrev(true);
            }
        }
    };

    const handleNestedReachEnd = () => {
        setNestedAtEnd(true);
        setAllowSlideNext(true);
    };

    const handleNestedReachBeginning = () => {
        setNestedAtBeginning(true);
        setAllowSlidePrev(true);
    };

    const handleNestedSlideChange = () => {
        const nestedSwiper = nestedSwiperRef.current?.swiper;
        if (nestedSwiper) {
            setNestedAtEnd(nestedSwiper.isEnd);
            setNestedAtBeginning(nestedSwiper.isBeginning);

            // Blokir slide next dan prev di swiper utama ketika berada di tengah-tengah nested swiper
            if (!nestedSwiper.isEnd && !nestedSwiper.isBeginning) {
                setAllowSlideNext(false);
                setAllowSlidePrev(false);
            } else if (nestedSwiper.isEnd) {
                setAllowSlideNext(true);
            } else if (nestedSwiper.isBeginning) {
                setAllowSlidePrev(true);
            }
        }
    };

    return (
        <div style={{ backgroundColor: "#000" }}>
            <Navbar />
            <div style={{ height: '100vh' }}>
                <Swiper
                    ref={swiperRef}
                    direction="vertical"
                    pagination={{
                        type: 'bullets',

                    }}

                    onSlideChange={handleSlideChange}
                    navigation={false}
                    mousewheel={true}
                    modules={[Pagination, Navigation, Mousewheel, EffectCreative]}
                    style={{ height: '100%' }}
                    allowSlideNext={allowSlideNext}
                    allowSlidePrev={allowSlidePrev}

                    speed={700}
                    effect={'creative'}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: [0, -100, -100],
                            opacity: 0,

                        },
                        next: {
                            translate: [0, "100%", 0],
                            opacity: 1,
                        },
                    }}
                >
                    <SwiperSlide><Hero /></SwiperSlide>
                    <SwiperSlide><About /></SwiperSlide>
                    <SwiperSlide><Collaboration /></SwiperSlide>
                    <SwiperSlide>
                        <Swiper
                            ref={nestedSwiperRef}
                            direction="horizontal"
                            pagination={{
                                type: 'bullets',
                            }}
                            navigation={false}
                            mousewheel={true}
                            modules={[Pagination, Navigation, Mousewheel, EffectCreative]}
                            style={{ height: '100%' }}
                            onReachEnd={handleNestedReachEnd}
                            onReachBeginning={handleNestedReachBeginning}
                            onSlideChange={handleNestedSlideChange}

                            effect={'creative'}
                            speed={600}
                            creativeEffect={{
                                prev: {
                                    shadow: true,
                                    translate: [0, 0, -100],
                                    opacity: 0,
                                },
                                next: {
                                    translate: ['100%', 0, 0],
                                    opacity: 1,
                                },
                            }}
                        >
                            {productList.map((product, index) => (
                                <SwiperSlide key={index}>
                                    <Product product={product} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </SwiperSlide>
                    <SwiperSlide><Blog /></SwiperSlide>
                    <SwiperSlide><Contact /></SwiperSlide>
                </Swiper>
            </div>
            {/* <Footer /> */}
        </div>
    );
}

