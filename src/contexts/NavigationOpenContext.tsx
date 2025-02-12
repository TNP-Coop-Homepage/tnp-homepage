"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface NavigationOpenContextType {
    isOpen: boolean;
    toggleOpen: () => void;
}

const NavigationOpenContext = createContext<NavigationOpenContextType | undefined>(undefined);

export function useNavigationOpen() {
    const context = useContext(NavigationOpenContext);
    if (context === undefined) {
        throw new Error('useNavigationOpen must be used within a NavigationContextProvider');
    }
    return context;
}

interface NavigationOpenProviderProps {
    children: ReactNode;
}

export function NavigationOpenProvider({ children }: NavigationOpenProviderProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <NavigationOpenContext.Provider value={{ isOpen, toggleOpen }}>
            {children}
        </NavigationOpenContext.Provider>
    );
}