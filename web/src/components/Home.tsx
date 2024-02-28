import React, { useCallback, useEffect, useRef, useState } from 'react'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"
import type { Container, Engine } from "@tsparticles/engine";
import { contents } from '../store';
import { motion } from 'framer-motion';


export default function Home() {
    return (
        <div id='home' >
            <div className="content-holder" >
                <ParticlesContainer />
                <div className="text">
                    <motion.h1>{contents.heading.title}</motion.h1>
                    <h6>{contents.heading.subtitle}</h6>
                </div>
            </div>
        </div>
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

    const particlesLoaded = (container: Container) => {
        console.log(container);
    };

    return (
        <>
            {init &&
                <Particles
                    id="tsparticles"
                    //@ts-ignore
                    particlesLoaded={particlesLoaded}
                    options={{
                        background: {

                        },
                        fpsLimit: 90,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                //@ts-ignore
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 1,
                                },
                                repulse: {
                                    distance: 80,
                                    duration: 2,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 120,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: .5,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    //@ts-ignore
                                    area: 300,
                                },
                                value: 80,
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

