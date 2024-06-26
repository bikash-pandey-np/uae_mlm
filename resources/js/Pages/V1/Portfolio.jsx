import React, { useState, useEffect } from 'react';
import SwitchComponent from './Components/SwitchComponent';
import { FaWallet } from "react-icons/fa";
import Layout from "./Components/Layout";

import { FiUsers } from 'react-icons/fi';
import CardDisplay from './Components/CardDisplay';


const Portfolio = ({ active, balance, total_deposit_amount, pending_deposit, total_withdraw, total_pending_withdraw }) => {
    useEffect(() => {
        document.title = "Portfolio | TheCapex.pro";

    }, []);


    return (
        <Layout>
            <section
        style={{ marginTop: '5rem', marginBottom: '5rem' }}

            >
                <h2 className='text-xl mx-4 my-4'>Portfolio</h2>
                <div className="mx-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* First column */}
                    <div className="bg-white-800 p-4 rounded-lg shadow-md flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 font-semibold">Balance</p>
                            <p className="text-black-600 text-xl font-bold">{balance} USDT</p>
                            <p className="text-black-600 text-xl font-bold">~ ₹ {(balance * 83.23).toFixed(2)} </p>

                        </div>
                        <a href={route('v1.deposit')} className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-gray-600 focus:outline-none">
                        Deposit
                    </a>
                    <a href={route('v1.withdraw')} className="ml-4 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none">
                        Withdraw
                    </a>
                        
                    </div>

                    <div className='mt-4'>
                   
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
        </Layout>
    );
}

export default Portfolio;
