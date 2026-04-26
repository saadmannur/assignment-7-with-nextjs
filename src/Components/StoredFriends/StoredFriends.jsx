"use client"
import React, { useContext } from 'react';
import { InstallAppContext } from '../context/InstallContext';
import RenderStoredFriends from './RenderStoredFriends';

const StoredFriends = () => {
    const fromContext = useContext(InstallAppContext)
    const { storeFriend } = fromContext;
    // console.log(storeFriend)
    return (
        <div>
            {
                storeFriend.length == 0 ?
                    <div>
                        your time line is empty
                    </div>
                :
                    <div className='space-y-5'>
                        {
                            storeFriend.map(friend => <RenderStoredFriends key={friend.id} friend={friend}></RenderStoredFriends>)
                        }
                    </div>
            }
        </div>
    );
};

export default StoredFriends;