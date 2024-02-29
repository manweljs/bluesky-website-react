// AppContext.tsx
import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

// Mendefinisikan tipe untuk state dan fungsi updater
interface AppContextType {
    page: string;
    setPage: Dispatch<SetStateAction<string>>;
}

// Membuat context dengan tipe yang sesuai
const AppContext = createContext<AppContextType | undefined>(undefined);

// Props untuk AppProvider
interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [page, setPage] = useState<string>('home');

    const value = { page, setPage };

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
