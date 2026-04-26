'use client'
import React, { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import { LuCircleX } from 'react-icons/lu';
import NavLinks from './NavLinks';

const NavbarBtn = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <span onClick={() => setOpen(!open)} className='text-3xl md:hidden '>
                {
                    open ? <LuCircleX /> : <IoMdMenu />
                }
            </span>
            <ul className={`p-3 space-y-1 bg-gray-500 text-white rounded-2xl absolute z-50 duration-1000 ${open ? `top-22 left-8` : `-left-90 top-22`} flex flex-col`}>
                <NavLinks></NavLinks>
            </ul>
        </div>
    );
};

export default NavbarBtn;