'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { ImStatsDots } from 'react-icons/im';
import { IoHome } from 'react-icons/io5';
import { RiTimeFill } from 'react-icons/ri';

const NavLinks = () => {
    const pathName = usePathname();
    // console.log(pathName)

    const links = <>
        <Link href={"/"}><button className={`${pathName === "/" && `px-4 py-2 bg-green-900 text-white rounded-lg`}`}><div className='flex items-center gap-1'><span><IoHome /></span> <span>Home</span></div></button></Link>

        <Link href={"/timeline"}><button className={`${pathName === "/timeline" && `px-4 py-2 bg-green-900 text-white rounded-lg`}`}><div className='flex items-center gap-1'><span><RiTimeFill /></span> <span>Timeline</span></div></button></Link>

        <Link href={"/stats"}><button className={`${pathName === "/stats" && `px-4 py-2 bg-green-900 text-white rounded-lg`}`}><div className='flex items-center gap-1'><span><ImStatsDots /></span> <span>Stats</span></div></button></Link>

    </>
    return (
        <div className='space-x-10'>
            {links}
        </div>
    );
};

export default NavLinks;