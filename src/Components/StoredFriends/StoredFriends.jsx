"use client"
import React, { useContext } from 'react';
import { InstallAppContext } from '../context/InstallContext';
import RenderStoredFriends from './RenderStoredFriends';

const StoredFriends = ({ filteredData }) => {
    const fromContext = useContext(InstallAppContext)
    const { storeFriend } = fromContext;
    // console.log(filteredData)
    // console.log(storeFriend)
    return (
        <div>
            {
                storeFriend.length == 0 ?
                    <div className='text-center p-30 border border-gray-300 bg-white text-3xl font-semibold rounded-2xl text-gray-500'>
                        Your Timeline is Empty
                    </div>
                :
                    <div className='space-y-5'>
                        {
                            filteredData.map(friend => <RenderStoredFriends key={friend.id} friend={friend}></RenderStoredFriends>)
                        }
                    </div>
            }
        </div>
    );
};

export default StoredFriends;