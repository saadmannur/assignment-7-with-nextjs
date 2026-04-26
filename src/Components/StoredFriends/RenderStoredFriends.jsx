import Image from 'next/image';
import React from 'react';
import call from "@/assets/call.png"
import text from "@/assets/text.png"
import video from "@/assets/video.png"

const RenderStoredFriends = ({ friend }) => {
    // console.log(friend)

    const { isClick, calledAt, action } = friend

    // if(isClick === "call"){
    //     const img = callImg;
    // }else if(isClick === "text"){
    //     const img = textImg;
    // }else{
    //     const img = videoImg
    // }
    const img = isClick === "call" ?
        call :
        isClick === "text" ?
            text :
            video
    return (
        <div className='flex items-center gap-4 rounded-xl p-5 bg-white'>
            <div>
                <Image
                    src={img}
                    alt='something'
                    width={50}
                    height={50}
                ></Image>
            </div>
            <div className='space-y-1'>
                <h2 className='text-semibold text-lg'>{action}</h2>
                <p className='text-gray-400'>{calledAt}</p>
            </div>
        </div>
    );
};

export default RenderStoredFriends;