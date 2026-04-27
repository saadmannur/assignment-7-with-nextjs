"use client"
import React, { useContext } from 'react';
import { InstallAppContext } from '../context/InstallContext';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

const PiChart = () => {
    const fromContext = useContext(InstallAppContext);
    const { storeFriend } = fromContext;

    const filteredCall = storeFriend.filter(fd => fd.isClick === "call");
    const filteredText = storeFriend.filter(fd => fd.isClick === "text");
    const filteredVideo = storeFriend.filter(fd => fd.isClick === "video");
    console.log(filteredCall)
    console.log(filteredText)
    console.log(filteredVideo)

    const data = [
        { name: "Call", value: filteredCall.length, fill: "#FF8042" },
        { name: "Text", value: filteredText.length, fill: "#0088FE" },
        { name: "Video", value: filteredVideo.length, fill: "#8834d8" },
    ];

    return (
        <div>
            {
                storeFriend.length == 0 ?
                    <div className='bg-white rounded-2xl py-5'>
                        <h2 className='text-xl font-semibold text-center text-gray-400'>No interaction yet</h2>
                    </div> :
                    <div className='bg-white rounded-2xl'>
                        <div >
                            <h2 className='p-5 m-5 text-4xl font-bold text-green-900'>My Interaction Time</h2>
                            <div>
                                <PieChart
                                    style={{
                                        width: '100%',
                                        maxWidth: '500px',
                                        maxHeight: '80vh',
                                        aspectRatio: 1,
                                        margin: "auto",
                                        paddingBottom: "30px"
                                    }}
                                    responsive>
                                    <Pie
                                        data={data}
                                        innerRadius="80%"
                                        outerRadius="100%"
                                        // Corner radius is the rounded edge of each pie slice
                                        cornerRadius="50%"
                                        fill="#8884d8"
                                        // padding angle is the gap between each pie slice
                                        paddingAngle={5}
                                        dataKey="value"
                                        isAnimationActive={true}
                                    />
                                    <Legend></Legend>
                                    <Tooltip></Tooltip>
                                </PieChart>
                            </div>

                        </div>
                    </div>
            }
        </div>
    );
};

export default PiChart;