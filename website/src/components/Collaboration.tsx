"use client";
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/Container';
import s from '@/styles/style.module.sass';
import { useAppContext } from '@/context';

export default function Collaboration() {
    const playerRef = useRef<any>(null);
    const { slide } = useAppContext();

    useEffect(() => {
        // Load YouTube IFrame API
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

        // Initialize the YouTube Player after API code downloads
        (window as any).onYouTubeIframeAPIReady = () => {
            playerRef.current = new (window as any).YT.Player('youtube-player', {
                events: {
                    onReady: onPlayerReady,
                },
            });
        };
    }, []);

    const onPlayerReady = (event: any) => {
        console.log("Player is ready");
        // Optional: Start playing video when the player is ready
        if (slide === 2) {
            playerRef.current?.playVideo();
        }
    };

    useEffect(() => {
        // Ensure that playerRef.current is an instance of YT.Player
        if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
            if (slide === 2) {
                playerRef.current.playVideo();
            } else {
                playerRef.current.pauseVideo();
            }
        }
    }, [slide]);

    return (
        <motion.section className={s.collaboration}>
            <Container className={s.container}>
                <h3>Coles and IBM Collaboration</h3>
                <p>
                    BlueSky Creations, in proud collaboration with Coles and IBM,
                    is leading the charge in technological innovation,
                    revolutionizing how businesses approach decision-making with unmatched efficiency.
                </p>
                <p>
                    Leveraging the power of IBM Cplex and our innovative algorithms,
                    we&apos;ve crafted advanced solutions tailored to overcome today&apos;s operational challenges.
                    We invite you to explore the future of operational excellence with us and witness
                    firsthand how our collaboration is propelling success across various industries.
                </p>

                <div className={s.video_wrapper}>
                    <div style={styles.videoContainer}>
                        <iframe
                            id="youtube-player"
                            src="https://www.youtube.com/embed/HtiGijgbmZU?enablejsapi=1"
                            title="YouTube video player"
                            style={styles.iframe}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </Container>
        </motion.section>
    );
}

const styles = {
    videoContainer: {
        position: 'relative' as 'relative',
        paddingBottom: '56.25%', // 16:9 aspect ratio
        height: 0,
        overflow: 'hidden' as 'hidden',
        maxWidth: '100%',
        backgroundColor: '#000',
        margin: '0 auto',
    },
    iframe: {
        position: 'absolute' as 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: 0,
    },
};
