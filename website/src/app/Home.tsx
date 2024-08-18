"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, EffectCreative, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import About from '@/components/About';
// import Blog from '@/components/Blog';
import Collaboration from '@/components/Collaboration';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/navbar/Navbar';
import Product from '@/components/Product';
import { useAppContext } from '@/context';
import { productList } from '@/store';
import dynamic from 'next/dynamic';

const Blog = dynamic(() => import('@/components/Blog'), { ssr: false });

export default function Home() {
    const { slide, setSlide, swiperRef, allowSlideNext, setAllowSlideNext,
        allowSlidePrev, setAllowSlidePrev
    } = useAppContext();

    const [isMobile, setIsMobile] = useState(false);
    const [mousewheel, setMousewheel] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        handleResize(); // Set awal
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const nestedSwiperRef = useRef<any | null>(null);


    const [nestedAtEnd, setNestedAtEnd] = useState(false);
    const [nestedAtBeginning, setNestedAtBeginning] = useState(true);

    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {

        const container = containerRef.current;

        const handleScroll = (event: WheelEvent) => {
            const swiper = swiperRef.current?.swiper;

            if (swiper && event.deltaY < 0 && container?.scrollTop === 0) { // Menggulung ke atas
                swiper.mousewheel.enable(); // Mengaktifkan kembali mousewheel
            }
        };

        if (container) {
            container.addEventListener('wheel', handleScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener('wheel', handleScroll);
            }
        };
    }, []);

    const handleSlideChange = () => {
        const swiper = swiperRef.current?.swiper;
        if (swiper) {
            const currentSlideIndex = swiper.activeIndex;
            // console.log("Slide berubah ke:", currentSlideIndex);
            setSlide(currentSlideIndex);

            if (currentSlideIndex === 5) {
                swiper.mousewheel.disable()
            } else {
                swiper.mousewheel.enable()
            }

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

    if (isMobile) {
        return (
            <main >
                <Navbar />
                <Hero />
                <About />
                <Collaboration />
                {productList.map((product, index) => (
                    <Product product={product} key={index} />
                ))}
                <Blog />
                <Contact />
            </main>
        );
    }


    return (
        <div style={{ backgroundColor: "#000" }} >
            <Navbar />
            <div style={{ height: '100svh' }}>
                <Swiper
                    ref={swiperRef}
                    direction="vertical"
                    pagination={{
                        type: 'bullets',

                    }}

                    onSlideChange={handleSlideChange}
                    navigation={false}
                    mousewheel={mousewheel}
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
                    <SwiperSlide
                        style={{ overflow: 'auto' }}
                    ><Collaboration /></SwiperSlide>
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
                    <SwiperSlide >
                        <div ref={containerRef} style={{ height: '100%', overflow: 'auto' }}>
                            <Contact />
                            <Footer />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

