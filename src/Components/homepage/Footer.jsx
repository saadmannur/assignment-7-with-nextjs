import React from 'react';
import { FaFacebook, FaSquareInstagram, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-green-900 p-10 text-white text-center mt-10'>
            <div className='space-y-4'>
                <h2 className='text-5xl font-bold'>KeenKeeper</h2>
                <p className='text-gray-400'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <div>
                    <h2 className='text-xl font-semibold my-3 text-gray-300'>Social Links</h2>
                    <div className='flex justify-center items-center space-x-3'>
                        <FaSquareInstagram />
                        <FaFacebook />
                        <FaXTwitter />
                    </div>
                </div>
            </div>
            <div className='divider my-5 text-white'></div>
            <div className='flex justify-between items-center text-gray-400'>
                <p><small>© 2026 KeenKeeper. All rights reserved.</small></p>
                <ul>
                    <small className='flex gap-4'>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Cookies</li>
                    </small>
                </ul>
            </div>
            
        </div>
    );
};

export default Footer;