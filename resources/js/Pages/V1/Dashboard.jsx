import { useState, useEffect } from "react";
import SwitchComponent from './Components/SwitchComponent';
import Layout from "./Components/Layout";

const Dashboard = ({ balance, username }) => {
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


    return (
        <Layout>    
            <section style={{ marginTop: '5rem' }} >
                <h2 className='text-xl mx-4 my-4'>Welcome, {username}</h2>
                <div className="mx-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* First column */}
                    <div className="bg-white-800 p-4 rounded-lg shadow-md flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 font-semibold">Balance</p>
                            <p className="text-black-600 text-xl font-bold">{balance} USDT</p>
                            <p className="text-black-600 text-xl font-bold">~ ₹ {(balance * 83.23).toFixed(2)} </p>

                        </div>
                        <a href={route('v1.deposit')} className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none">
                            Deposit
                        </a>
                    </div>
                </div>

                <div className='container' style={{ marginBottom: '5rem' }}>
                    <SwitchComponent fetchMarketData={fetchMarketData}
                    fetchShareData={fetchMarketDataS} />
                </div>
            </section>
        </Layout>
    );
}


export default Dashboard;
