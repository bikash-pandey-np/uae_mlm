import React, { useState, useEffect } from 'react';
import MenuBar from './Components/MenuBar';
import SwitchComponent from './Components/SwitchComponent';
import banner from '../../../images/homepage-banner.jpeg';
import '../../../css/app/front.css';

const Dashboard = ({ total_deposit_amount, pending_deposit, total_withdraw, total_pending_withdraw, balance, username }) => {
    const [fetchMarketData, setFetchMarketData] = useState({});
    const [fetchMarketDataS, setFetchMarketDataS] = useState({});

    useEffect(() => {
        document.title = "Dashboard | TheCapex.pro";
        const fetchDataS = async () => {
            try {
                const response = await fetch(route('market.share-data'));
                if (response.ok) {
                    const data = await response.json();
                    setFetchMarketDataS(data);
                } else {
                    console.error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchDataS(); // Initial fetch
        const intervals = setInterval(fetchDataS, 3000); // Fetch data every 2 seconds
        const fetchData = async () => {
            try {
                const response = await fetch(route('market.crypto-data'));
                if (response.ok) {
                    const data = await response.json();
                    setFetchMarketData(data);
                } else {
                    console.error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Initial fetch
        const interval = setInterval(fetchData, 3000); // Fetch data every 2 seconds

        return () => {
            clearInterval(interval);
            clearInterval(intervals)
        } // Cleanup interval on component unmount
    }, []);

    console.log('fetchMarketData', fetchMarketData);

    return (
        <div>
            <MenuBar />
            <section className='mt-4'>
                <h2 className='text-xl mx-4 my-4'>Welcome, {username}</h2>
                <div className="mx-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* First column */}
                    <div className="bg-white-800 p-4 rounded-lg shadow-md flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 font-semibold">Balance</p>
                            <p className="text-black-600 text-xl font-bold">{balance} USDT</p>
                        </div>
                        <a href={route('deposit')} className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none">
                            Deposit
                        </a>
                    </div>
                </div>

                <div className='container'>
                    <SwitchComponent fetchMarketData={fetchMarketData}
                    fetchShareData={fetchMarketDataS} />
                </div>
            </section>
        </div>
    );
}

export default Dashboard;
