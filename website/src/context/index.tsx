"use client";
import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction, useEffect, useRef } from 'react';

interface AppContextType {
    page: string;
    setPage: Dispatch<SetStateAction<string>>;
    navigate: (path: string, _blank?: boolean) => void;
    slide: number;
    setSlide: Dispatch<SetStateAction<number>>;
    swiperRef: React.RefObject<any>;
    allowSlideNext: boolean;
    setAllowSlideNext: Dispatch<SetStateAction<boolean>>;
    allowSlidePrev: boolean;
    setAllowSlidePrev: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [page, setPage] = useState<string>('home');
    const [slide, setSlide] = useState<number>(0);
    const router = useRouter();
    const swiperRef = useRef<any | null>(null);
    const [allowSlideNext, setAllowSlideNext] = useState(true);
    const [allowSlidePrev, setAllowSlidePrev] = useState(true);

    const navigate = (path: string, _blank?: boolean | "_blank") => {
        if (_blank) {
            window.open(path, '_blank');
        } else {
            router.push(path);
        }
    }

    const value = {
        page,
        setPage,
        navigate,
        slide,
        setSlide,
        swiperRef,
        allowSlideNext,
        setAllowSlideNext,
        allowSlidePrev,
        setAllowSlidePrev,
    };

    useEffect(() => {
        if (typeof window === 'undefined') return;
        window.scrollTo(0, 0);
    }, []);

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Hook untuk menggunakan context
export const useAppContext = (): AppContextType => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within a AppProvider');
    }
    return context;
};
