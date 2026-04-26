import React from 'react';

const Header = () => {
    return (
        <div className='text-center p-10 space-y-5'>
            <h2 className='font-bold text-5xl'>Friends to keep close in your life</h2>
            <p className='text-gray-500'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                relationships that matter most.</p>
            <button className='bg-green-900 py-3 px-5 rounded-lg mt-5 text-white'>+ Add Friend</button>
        </div>
    );
};

export default Header;