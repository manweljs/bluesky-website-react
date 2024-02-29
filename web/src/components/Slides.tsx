import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion';


const Slide = (props: {
    children: React.ReactNode;
}) => {

    return (
        <div>
            {props.children}
        </div>
    )
}

export const Slides = (props: {
    children: React.ReactNode;
}) => {
    const { children } = props;
    const ref = useRef<HTMLDivElement>(null);
    const [top, setTop] = useState(0); // State untuk menyimpan posisi awal Slides

    useEffect(() => {
        // Setelah komponen mount, simpan posisi awal dari Slides
        if (ref.current) {
            setTop(ref.current.getBoundingClientRect().top)
        }
    }, []);

    const inView = useInView(ref)

    const scrollToTop = () => {
        if (!ref.current) return;
        window.scrollTo({
            top: top,
            behavior: 'smooth'
        });
        // setHasScrolledToTop(true); // Set state bahwa sudah scroll ke atas
    };

    // Handle custom scroll
    // Handle custom scroll
    const handleCustomScroll = (e: WheelEvent) => {
        if (!inView) return;

        e.preventDefault();
        scrollToTop();
    };

    // Menambah atau menghapus event listener berdasarkan Slides in view
    useEffect(() => {
        console.log('inView ---> ', inView);
        if (inView) {
            scrollToTop();
        }

        window.addEventListener('wheel', handleCustomScroll, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleCustomScroll);
        };
    }, [inView]);

    console.log('top', top);
    return (
        <div ref={ref} className="slides-container">
            {React.Children.map(children, (child, index) => (
                <Slide key={index}>{child}</Slide>
            ))}
        </div>
    );
};