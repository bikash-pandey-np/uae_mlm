import React from 'react';
import MenuBar from './Components/MenuBar';
import banner from '../../../images/homepage-banner.jpeg';
import '../../../css/app/front.css';

const Dashboard = () => {
    // const sectionStyle = {
    //     height: "90vh",
    //     backgroundImage: `url(${banner})`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //     backgroundRepeat: 'no-repeat'
    // };

    return (
        <div>
        <MenuBar />
        <section className='mt-4'>
        <div className="mx-4 grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* First column */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <p className="text-white font-semibold">Total Deposit:</p>
            <p className="text-green-600 text-xl">$340 USDT</p>
        </div>

        {/* Second column */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <p className="text-white font-semibold">Pending Deposit:</p>
            <p className="text-green-600 text-xl">$340 USDT</p>
        </div>

        {/* Third column */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <p className="text-white font-semibold">Total Withdraw:</p>
            <p className="text-green-600 text-xl">$340 USDT</p>
        </div>

        {/* Fourth column */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <p className="text-white font-semibold">Pending Withdraw:</p>
            <p className="text-green-600 text-xl">$340 USDT</p>
        </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4">
        {/* Left column (col-4 equivalent) */}
        <div className="bg-gray-600 p-4 rounded-lg shadow-md md:col-span-4 mx-4">
            <h2 className="text-white text-md font-semibold mb-2">Importang Links</h2>
            <ul className="text-green-500">
                <li><a href="#">Profile</a></li>
                <li><a href="#">Deposit Account</a></li>
                <li><a href="#">Deposit History</a></li>
                <li><a href="#">Withdraw From Account</a></li>
                <li><a href="#">Withdraw History</a></li>
                <li><a href="#">Trade</a></li>
                <li><a href="#">Trade History</a></li>

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

            <section className='text-center mt-4'>
                <a href={route('register')} target="_blank" className='text-xl font-bold'>Register</a><br />
                <a href={route('login')} target="_blank" className='text-xl font-bold'>Login</a><br />
                <a href={route('test')} target="_blank" className='text-xl font-bold'>Chart Demo</a><br />
                <a href={route('dashboard')} target="_blank" className='text-xl font-bold'>dashboard</a><br />
                <a href={route('deposit')} target="_blank" className='text-xl font-bold'>Deposit</a>
                <br /><br /><br />
                <h2>Backend</h2>
                <a href={route('admin.login')} target="_blank" className='text-xl font-bold'>Backend Login</a><br />
                <a href={route('admin.dashboard')} target="_blank" className='text-xl font-bold'>Backend Dashboard</a><br />
                <a href={route('admin.deposit-info')} target="_blank" className='text-xl font-bold'>Backend Deposit Info</a><br />
                <a href={route('admin.customers')} target="_blank" className='text-xl font-bold'>Backend Customers List</a><br />
            </section>
        </div>
    );
}

export default Dashboard;

