"use client"
import Image from 'next/image';
import React, { useContext } from 'react';
import call from "@/assets/call.png"
import text from "@/assets/text.png"
import video from "@/assets/video.png"
import { InstallAppContext } from '../context/InstallContext';

const FriendDetailsBtn = ({ detailsFriend }) => {
    const fromContext = useContext(InstallAppContext)
    const { storeFriend, setStoreFriend } = fromContext;


    const handleCallBtn = () => {
        // console.log("btn Click", detailsFriend)
        setStoreFriend([...storeFriend, detailsFriend])
    }
    console.log(storeFriend)

    return (
        <div className='flex flex-col md:flex-row flex-wrap gap-2 justify-between items-center'>
            <button
             onClick={handleCallBtn}
             className='flex flex-col justify-center items-center gap-2 rounded-xl border border-gray-400 py-3 px-18 bg-base-300 btn-ghost'>
                <Image
                    src={call}
                    alt='call'
                    width={30}
                    height={30}
                ></Image>
                Call
            </button>
            <button className='flex flex-col justify-center items-center gap-2 rounded-xl border border-gray-400  py-3 px-18 bg-base-300 btn-ghost'>
                <Image
                    src={text}
                    alt='call'
                    width={30}
                    height={30}
                ></Image>
                Text
            </button>
            <button className='flex flex-col justify-center items-center gap-2 rounded-xl border border-gray-400  py-3 px-18 bg-base-300 btn-ghost'>
                <Image
                    src={video}
                    alt='call'
                    width={30}
                    height={30}
                ></Image>
                Video
            </button>
        </div>
    );
};

export default FriendDetailsBtn;