// TopMenu.js
import React, { useState, useEffect } from 'react';
import { Link } from "@inertiajs/inertia-react";

import { AiOutlineMail, AiFillBulb, AiOutlineBulb } from 'react-icons/ai';

const TopMenu = ({ mode, toggleMode }) => {
    return (
        <div className={`fixed w-full top-0 z-50 flex justify-between items-center p-4 ${mode === 'Dark' ? 'bg-gray-700' : 'bg-white'} shadow-md py-4`}
        >
            <div className="font-bold text-xl">
            <a href={route('v1.homepage')}>
                <img src="https://capex.com/assets/logo/capex-com-logo-red.svg"
                    style={{ height:'30px' }} />
            </a></div>
            <div className="flex-grow mx-4">
                <input className="w-full px-4 py-2 border border-gray-300 rounded" type="text" placeholder="Search. dasd.." />
            </div>
            <div className="flex items-center">
                <button onClick={toggleMode} className="ml-4">
                    {mode === 'Dark' ? <AiFillBulb className="h-6 w-6 text-yellow-500" /> : <AiOutlineBulb className="h-6 w-6 text-gray-500" />}
                </button>
            </div>
        </div>
    );
};

export default TopMenu;
