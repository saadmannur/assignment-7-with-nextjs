"use client"
import React, { createContext, useState } from 'react';

export const InstallAppContext = createContext();

const InstallContext = ({ children }) => {
    const [storeFriend , setStoreFriend] = useState([]);

    const data = {
        storeFriend,
        setStoreFriend
    };

    return (

        <InstallAppContext.Provider value={data}>
            {children}
        </InstallAppContext.Provider>

    );
};

export default InstallContext;