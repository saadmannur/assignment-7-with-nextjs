'use client'
import Link from 'next/link';
import React from 'react';

const ErrorPage = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-gray-900 to-black text-white px-6">
                <div className="text-center max-w-xl">

                    {/* 404 Title */}
                    <h1 className="text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">
                        404
                    </h1>

                    {/* Heading */}
                    <h2 className="mt-4 text-2xl font-semibold text-gray-200">
                        Page Not Found
                    </h2>

                    {/* Description */}
                    <p className="mt-3 text-gray-400">
                        Sorry, the page you are looking for does not exist or has been moved.
                    </p>

                    {/* Button */}
                    <div className="mt-6">
                        <Link href="/">
                            <button className="px-6 py-3 rounded-xl bg-linear-to-r from-indigo-500 to-cyan-500 hover:opacity-90 transition-all duration-300 shadow-lg">
                                Go Back Home
                            </button>
                        </Link>
                    </div>

                    {/* Decorative */}
                    <div className="mt-10 text-sm text-gray-500">
                        Error Code: 404 | Resource not found
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ErrorPage;<div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-gray-900 to-black text-white px-6">
                <div className="text-center max-w-xl">

                    {/* 404 Title */}
                    <h1 className="text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">
                        404
                    </h1>

                    {/* Heading */}
                    <h2 className="mt-4 text-2xl font-semibold text-gray-200">
                        Page Not Found
                    </h2>

                    {/* Description */}
                    <p className="mt-3 text-gray-400">
                        Sorry, the page you are looking for does not exist or has been moved.
                    </p>

                    {/* Button */}
                    <div className="mt-6">
                        <Link href="/">
                            <button className="px-6 py-3 rounded-xl bg-linear-to-r from-indigo-500 to-cyan-500 hover:opacity-90 transition-all duration-300 shadow-lg">
                                Go Back Home
                            </button>
                        </Link>
                    </div>

                    {/* Decorative */}
                    <div className="mt-10 text-sm text-gray-500">
                        Error Code: 404 | Resource not found
                    </div>

                </div>
            </div>