'use client';
import { createContext, useState } from "react";


export const DateContext = createContext(null);

export const DateProvider = ({children}) => {
    const [currentDate, setCurrentDate] = useState(new Date());

    return (
        <DateContext.Provider value={{currentDate, setCurrentDate}}>
            {children}
        </DateContext.Provider>
    );
};