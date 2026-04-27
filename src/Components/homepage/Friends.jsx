import React from 'react';
import FriendCard from './FriendCard';

const Friends = async() => {
    const res = await fetch("https://a-7keen-keeper.vercel.app/friends.json");
    
    //     , {
    //     cache: "no-store"
    // }

    const friends = await res.json();
    // console.log(friends)
    return (
        <div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 m-5 md:m-0'>
                <div className='bg-white text-center rounded-2xl shadow p-6 space-y-3'>
                    <p className='text-xl font-semibold'>10</p>
                    <p className='text-gray-500'>Total Friends</p>
                </div>
                <div className='bg-white text-center rounded-2xl shadow p-6 space-y-3'>
                    <p className='text-xl font-semibold'>5</p>
                    <p className='text-gray-500'>On-Track</p>
                </div>
                <div className='bg-white text-center rounded-2xl shadow p-6 space-y-3'>
                    <p className='text-xl font-semibold'>3</p>
                    <p className='text-gray-500'>Need Attention</p>
                </div>
                <div className='bg-white text-center rounded-2xl shadow p-6 space-y-3'>
                    <p className='text-xl font-semibold'>12</p>
                    <p className='text-gray-500'>Interactions This Month</p>
                </div>
                
            </div>
            <div className='divider my-5 mt-10'></div>
            <div>
                <h2 className='font-semibold text-2xl my-4'>Your Friends</h2>
                <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4 m-5 md:m-0'>
                    {
                        friends.map(friend => <FriendCard key={friend.id} friend={friend}></FriendCard>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Friends;