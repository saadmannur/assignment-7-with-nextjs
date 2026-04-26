"use client"
import Image from 'next/image';
import React, { useContext } from 'react';
import call from "@/assets/call.png"
import text from "@/assets/text.png"
import video from "@/assets/video.png"
import { InstallAppContext } from '../context/InstallContext';
import { toast } from 'react-toastify';

const FriendDetailsBtn = ({ detailsFriend }) => {
    const fromContext = useContext(InstallAppContext)
    const { storeFriend, setStoreFriend } = fromContext;

    //Call button handler
    const handleCallBtn = () => {
        // console.log("btn Click", detailsFriend)
        const updatedFriend = {
            ...detailsFriend,
            isClick: "call",
            calledAt: new Date().toLocaleString()
        }
        setStoreFriend([...storeFriend, updatedFriend]);
        toast.success(`Calling to ${detailsFriend.name}`, {
            position: "top-center"
        })
    }

    //text button handler
    const handleTextBtn = () => {
        const updatedFriend = {
            ...detailsFriend,
            isClick: "text",
            calledAt: new Date().toLocaleString()
        }
        setStoreFriend([...storeFriend, updatedFriend]);
        toast.success(`Texting to ${detailsFriend.name}`, {
            position: "top-center"
        })
    }

    //Video button handler
    const handleVideoBtn = () => {
        const updatedFriend = {
            ...detailsFriend,
            isClick: "video",
            calledAt: new Date().toLocaleString()
        }
        setStoreFriend([...storeFriend, updatedFriend]);
        toast.success(`Video Calling to ${detailsFriend.name}`, {
            position: "top-center"
        })
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
            <button
                onClick={handleTextBtn}
             className='flex flex-col justify-center items-center gap-2 rounded-xl border border-gray-400  py-3 px-18 bg-base-300 btn-ghost'>
                <Image
                    src={text}
                    alt='call'
                    width={30}
                    height={30}
                ></Image>
                Text
            </button>
            <button
                onClick={handleVideoBtn} 
            className='flex flex-col justify-center items-center gap-2 rounded-xl border border-gray-400  py-3 px-18 bg-base-300 btn-ghost'>
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