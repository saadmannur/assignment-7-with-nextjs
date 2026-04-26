"use client"
import InstallContext from '@/Components/context/InstallContext';
import React from 'react';

const Provider = ({ children }) => {
    return (

        <InstallContext>
            {children}
        </InstallContext>

    );
};

export default Provider;