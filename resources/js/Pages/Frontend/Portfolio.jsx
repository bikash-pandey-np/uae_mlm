import React, { useState, useEffect } from 'react';
import MenuBar from './Components/MenuBar';
import SwitchComponent from './Components/SwitchComponent';
import BottomNavbar from './Components/BottomNavbar';
import { FaWallet } from "react-icons/fa";

import { FiUsers } from 'react-icons/fi';
import CardDisplay from './Components/CardDisplay';

import '../../../css/app/front.css';

const Portfolio = ({ active, balance, total_deposit_amount, pending_deposit, total_withdraw, total_pending_withdraw }) => {
    useEffect(() => {
        document.title = "Portfolio | TheCapex.pro";

    }, []);


    return (
        <div>
            <MenuBar balance={balance} />
            <section className='mt-4'>
                <h2 className='text-xl mx-4 my-4'>Portfolio</h2>
                <div className="mx-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* First column */}
                    <div className="bg-white-800 p-4 rounded-lg shadow-md flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 font-semibold">Balance</p>
                            <p className="text-black-600 text-xl font-bold">{balance} USDT</p>
                            <p className="text-black-600 text-xl font-bold">~ ₹ {(balance * 83.23).toFixed(2)} </p>

                        </div>
                        <a href={route('deposit')} className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none">
                        Deposit
                    </a>
                    <a href={route('withdraw')} className="ml-4 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none">
                        Withdraw
                    </a>
                        
                    </div>

                    <div className='mt-4'>
                   
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-5 mx-4 max-w-2xl">
                {/* Crypto Wallet column */}
                <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
                    <div className="mr-4">
                        <FaWallet className="text-4xl text-green-500" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Crypto Wallet</h3>
                        <p className="text-gray-600">Manage your crypto assets securely.</p>
                    </div>
                </div>
    
                {/* P2P column */}
                <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
                    <div className="mr-4">
                        <FiUsers className="text-4xl text-blue-500" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">P2P</h3>
                        <p className="text-gray-600">Trade directly with other users.</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8 mx-4 max-w-2xl">
            <CardDisplay title="Total Deposits" number={`$ ${total_deposit_amount}`} />
            <CardDisplay title="Pending Deposits" number={`$ ${pending_deposit}`} />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8 mx-4 max-w-2xl">
        <CardDisplay title="Total Withdraw" number={`$ ${total_withdraw}`} />
        <CardDisplay title="Pending Withdraw" number={`$ ${total_pending_withdraw}`} />
    </div>
    <div className="grid grid-cols-2 gap-4 mt-8 mx-4 max-w-2xl">
    <CardDisplay title="Credit Score" number="100" />
    <CardDisplay title="Freezed Amount" number="0" />

</div>

               
            </section>
            <BottomNavbar active={active} />
        </div>
    );
}

export default Portfolio;
