"use client"
import React, { useContext, useMemo, useState } from 'react';
import { InstallAppContext } from '../context/InstallContext';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import StoredFriends from '../StoredFriends/StoredFriends';

const Sorted = () => {
    const fromContext = useContext(InstallAppContext);
    const { storeFriend, setStoreFriend } = fromContext;
    // console.log(storeFriend)
    const [open, setOpen] = useState(false)
    const [sortingType, setSortingType] = useState("all")

    const filteredData = useMemo(()=>{
        if (sortingType === "all") return storeFriend;
            return storeFriend.filter(fd => fd.isClick === sortingType);
    },[storeFriend, sortingType])
    // console.log(filteredData)
    
    return (
        <div>
            <div className='mb-8'>
                <div className="dropdown">
                    <button onClick={() => setOpen(!open)} >
                        <div tabIndex={0} role="button" className="border py-2 m-1 flex justify-between gap-17 rounded-md bg-base-100 border-gray-300 px-2 items-center">
                            <span>
                                {
                                    sortingType == "all" ? "Filter Timeline" : `Sorted By: ${sortingType}`
                                }
                            </span>
                            <span>
                                {
                                    open ? <IoIosArrowUp /> : <IoIosArrowDown />
                                }
                            </span>
                        </div>
                    </button>
                    <ul tabIndex="-1" className={`dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm ${open ? '' : "hidden"}`}>
                        
                        <li onClick={() => { setSortingType("call"); setOpen(false) }}><a>Call</a></li>

                        <li onClick={() => { setSortingType("text"); setOpen(false) }}><a>Text</a></li>

                        <li onClick={() => { setSortingType("video"); setOpen(false) }}><a>Video</a></li>

                        <li onClick={() => { setSortingType("all"); setOpen(false) }}><a>All</a></li>
                    </ul>
                </div>
            </div>

            <StoredFriends filteredData={filteredData}></StoredFriends>
        </div>
    );
};

export default Sorted;