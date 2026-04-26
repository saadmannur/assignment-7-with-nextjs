import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FriendCard = ({friend}) => {
    // console.log(friend)
    const { name, picture, tags, days_since_contact, status, id } = friend; 
    return (
        <Link href={`/${id}`}>
            <div className='bg-white rounded-2xl border border-gray-300 p-5 text-center flex flex-col justify-center items-center space-y-3 shadow-md'>
                <div>
                    <Image
                        src={picture}
                        alt={name}
                        width={100}
                        height={100}
                        className='rounded-full border border-gray-300'
                    ></Image>
                </div>
                <div className='space-y-4'>
                    <div>
                        <h2 className='text-xl font-bold'>{name}</h2>
                        <p className='text-gray-400'>{days_since_contact}d ago</p>
                    </div>
                    <div className='flex gap-2'>
                        {
                            tags.map((tag, i) => <span className='bg-green-200 px-2 rounded-2xl flex justify-center items-center py-1' key={i}>{tag}</span>)
                        }
                    </div>
                    <p className={`border bg-amber-200 ${status == "on-track" && "bg-green-800 text-white"} ${status == "overdue" && "bg-red-600 text-white"} ${status == "almost due" && "bg-yellow-500 text-white"} rounded-2xl py-1 px-2`}>{status}</p>
                </div>


            </div>
        </Link>
    );
};

export default FriendCard;