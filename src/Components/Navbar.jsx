'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { ImStatsDots } from 'react-icons/im';
import { IoHome } from 'react-icons/io5';
import { RiTimeFill } from 'react-icons/ri';

const Navbar = () => {

    const pathName = usePathname();
    // console.log(pathName)

    const links = <>
        <Link href={"/"}><button className={`${pathName === "/" && `px-4 py-2 bg-green-900 text-white rounded-lg`}`}><div className='flex items-center gap-1'><span><IoHome /></span> <span>Home</span></div></button></Link>

        <Link href={"/timeline"}><button className={`${pathName === "/timeline" && `px-4 py-2 bg-green-900 text-white rounded-lg`}`}><div className='flex items-center gap-1'><span><RiTimeFill /></span> <span>Timeline</span></div></button></Link>

        <Link href={"/stats"}><button className={`${pathName === "/stats" && `px-4 py-2 bg-green-900 text-white rounded-lg`}`}><div className='flex items-center gap-1'><span><ImStatsDots /></span> <span>Stats</span></div></button></Link>
        
    </>
    return (
        <div>
            <nav>
                <div className="navbar bg-base-100 shadow-sm px-15">
                    <div className="flex-1">
                        <a className="text-3xl text-green-900 font-semibold"><span className='text-black font-bold'>Keen</span>Keeper</a>
                    </div>
                    <div className="flex-none space-x-10">
                        {links}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;