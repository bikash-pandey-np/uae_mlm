import React, { useState, useEffect } from 'react';
import SwitchComponent from './Components/SwitchComponent';
import { FaWallet } from "react-icons/fa";
import Layout from "./Components/Layout";
import  depo from '../../../images/Deposit.jpg'
import wd from '../../../images/wd.jpg'
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
                <div className="flex flex-row items-center justify-between px-4">
                    <a href={route('v1.deposit')}>
                        <img
                        src={depo} 
                        alt="Portfolio Image" className="my-4 mx-2" />
                    </a>
                    <a href={route('v1.withdraw')}>
                        <img
                        src={wd} 
                        alt="Portfolio Image" className="my-4 mx-2" />
                    </a>
                </div>
                <div className="mx-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* First column */}
                   
                    <div className='mt-4'>
                   
                    </div>
                </div>

            <div className="grid grid-cols gap-4 mt-8 mx-4 max-w-2xl">
            <CardDisplay title="Aviable Balance" number={`$ ${balance}`} />
            <CardDisplay title="Total Withdraw" number={`$ ${total_withdraw}`} />
        </div>
        <div className="grid grid-cols gap-4 mt-8 mx-4 max-w-2xl">
        <CardDisplay title="Total Deposits" number={`$ ${total_deposit_amount}`} />
        <CardDisplay title="Credit Score" number="100" />
        </div>
    <div className="grid grid-cols gap-4 mt-8 mx-4 max-w-2xl">
    <CardDisplay title="Freezed Amount" number="0" />
    <CardDisplay title="Pending Withdrawl" number={`$ ${total_pending_withdraw}`}/>

</div>

               
            </section>
        </Layout>
    );
}

export default Portfolio;
