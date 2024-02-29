import React, { useCallback, useEffect, useRef, useState } from 'react'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"
import type { Container, Engine } from "@tsparticles/engine";
import { contents, homeImages } from '../store';
import { motion } from 'framer-motion';

const HeadingAnimation = ({ text }: { text: string }) => {
    // Pisahkan teks menjadi kata-kata, lalu setiap kata menjadi huruf
    const words = text.split(' ').map(word => Array.from(word));

    return (
        <h1>
            {words.map((word, wordIndex) => (
                <span key={wordIndex} style={{ whiteSpace: 'nowrap' }}>
                    {word.map((letter, letterIndex) => (
                        <motion.span
                            key={letterIndex}
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: wordIndex * 0.4 + letterIndex * 0.05, type: "spring", duration: 0.3 }}
                            style={{ display: "inline-block", marginRight: letterIndex === word.length - 1 ? '0.3em' : '0' }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </span>
            ))}
        </h1>
    );
};

export default function Home() {
    return (
        <motion.section id='home' >
            <ParticlesContainer />
            <div className="content-holder" >
                <div className="text-box">
                    <div className="animation-container">
                        <HeadingAnimation text={contents.heading.title} />
                        <motion.h6
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5, type: "spring", duration: 0.5 }}
                        >{contents.heading.subtitle}</motion.h6>
                    </div>
                </div>
                <div className="image-box">
                    <div className="images">
                        {homeImages.map((image, index) => (
                            <img src={image} alt="" key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    )
}


const ParticlesContainer = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);

        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container: Container | undefined) => {
        console.log("container ->", container);
    };

    return (
        <>
            {init &&
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={{
                        background: {

                        },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "bubble",
                                    parallax: {
                                        enable: false,
                                        force: 100,
                                        smooth: 10,
                                    }
                                },
                                resize: {
                                    enable: true,
                                },
                            },
                            modes: {
                                bubble: {
                                    distance: 50,
                                    duration: 1,
                                    opacity: 8,
                                    size: 10,
                                    speed: 1
                                },
                                push: {
                                    quantity: 1,
                                },
                                repulse: {
                                    distance: 100,
                                    duration: 2,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: ["#4285f4", "#34A853", "#FBBC05", "#EA4335"],
                            },
                            links: {
                                color: "#ffffff",
                                distance: 50,
                                enable: true,
                                opacity: 0.5,
                                width: 2,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: .3,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                },
                                value: 200,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 3 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
            }
        </>
    )
}

