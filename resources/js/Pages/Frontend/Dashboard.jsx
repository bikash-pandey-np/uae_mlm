import React from 'react';
import MenuBar from './Components/MenuBar';
import banner from '../../../images/homepage-banner.jpeg';
import '../../../css/app/front.css';

const Dashboard = ({total_deposit_amount, pending_deposit, total_withdraw, total_pending_withdraw, balance}) => {
    // const sectionStyle = {
    //     height: "90vh",
    //     backgroundImage: `url(${banner})`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //     backgroundRepeat: 'no-repeat'
    // };
    console.log(balance);
    return (
        <div>
        <MenuBar />
        <section className='mt-4'>
        <div className="mx-4 grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* First column */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <p className="text-white font-semibold">Total Deposit:</p>
            <p className="text-green-600 text-xl">{total_deposit_amount} USDT</p>
        </div>

        {/* Second column */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <p className="text-white font-semibold">Pending Deposit:</p>
            <p className="text-green-600 text-xl">{pending_deposit} USDT</p>
        </div>

        {/* Third column */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <p className="text-white font-semibold">Total Withdraw:</p>
            <p className="text-green-600 text-xl">{total_withdraw}USDT</p>
        </div>

        {/* Fourth column */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <p className="text-white font-semibold">Pending Withdraw:</p>
            <p className="text-green-600 text-xl">{total_pending_withdraw} USDT</p>
        </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4">
        {/* Left column (col-4 equivalent) */}
        <div className="bg-gray-600 p-4 rounded-lg shadow-md md:col-span-4 mx-4">
            <h2 className="text-white text-md font-semibold mb-2">Importang Links</h2>
            <ul className="text-green-500">
                <li><a href="#">Profile</a></li>
                <li><a href={route('deposit')}>Deposit Account</a></li>
                <li><a href={route('deposit-history')}>Deposit History</a></li>
                <li><a href={route('withdraw')}>Withdraw From Account</a></li>
                <li><a href="#">Withdraw History</a></li>

            </ul>
        </div>

        {/* Right column (col-8 equivalent) */}
        <div className="bg-white p-4 rounded-lg shadow-md md:col-span-8">
            <h2 className="text-gray-800 text-lg font-semibold mb-2">Trading Analysis</h2>
            <p>Total Traded Amount : 230 Usdst</p>
            <p className="text-green-500">Profibility : 230 Usdst</p>
            <p className='text-red-500s'>Profibility : 230 Usdst</p>

        </div>
    </div>


        </section>

          
        </div>
    );
}

export default Dashboard;

