import React from 'react';
import { AiOutlineLineChart, AiOutlineDollarCircle, AiOutlineWallet } from 'react-icons/ai';

const BottomNavbar = ({ active }) => {
    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-3 shadow-lg">
            <a href={route('dashboard')} className={`flex flex-col items-center text-gray-600 hover:text-gray-900 ${active === 'dashboard' ? 'text-red-500' : ''}`}>
                <AiOutlineLineChart className="text-xl" />
                <span className="text-xs mt-1">Home</span>
            </a>
            <a href="#" className={`flex flex-col items-center text-gray-600 hover:text-gray-900 ${active === 'trade' ? 'text-red-500' : ''}`}>
                <AiOutlineDollarCircle className="text-xl" />
                <span className="text-xs mt-1">Trade</span>
            </a>
            <a href={route('portfolio')} className={`flex flex-col items-center text-gray-600 hover:text-gray-900 ${active === 'portfolio' ? 'text-red-500' : ''}`}>
                <AiOutlineWallet className="text-xl" />
                <span className="text-xs mt-1">Portfolio</span>
            </a>
        </nav>
    );
};

export default BottomNavbar;
