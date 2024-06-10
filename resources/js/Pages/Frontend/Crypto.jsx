import React, {useState, useEffect} from 'react';
import MenuBar from './Components/MenuBar';
import { FiMenu, FiChevronDown } from 'react-icons/fi'; // Import FiMenu for toggler icon
import '../../../css/app/front.css';

const Crypto = ( ) => {
    const [fetchMarketData, setFetchMarketData] = useState({});

    
    useEffect(() => {
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
        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    
    return (
        <div>
            <MenuBar />
            <section style={{ height: "70vh" }} className='bg-gray-800 banner_section'>
            </section>

            <section className='text-center mt-4 mx-4'>
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Crypto Market Data</h2>
                    <table className="table-auto w-full border-collapse">
                        <thead className="border-b">
                            <tr>
                                <th className="px-4 py-2">Display</th>
                                <th className="px-4 py-2">Buy</th>
                                <th className="px-4 py-2">Sell</th>
                                <th className="hidden md:table-cell px-4 py-2">24H Change</th>
                                <th className="hidden md:table-cell px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                        {Object.values(fetchMarketData).map((crypto) => {
                            console.log(crypto);
                           return (  <tr id={crypto.id} className='hover:cursor-pointer hover:bg-red-200'>
                            
                            <td className="px-4 py-2">{crypto.display}</td>
                            <td className="px-4 py-2">{crypto.buy}</td>
                            <td className="px-4 py-2">{crypto.sell}</td>
                            <td className={`hidden md:table-cell px-4 py-2 ${parseFloat(crypto.change) < 0 ? 'text-red-500' : 'text-green-500'}`}>

                            {crypto.change}</td>                            
                            <td className="px-4 py-2">
                            <button className="bg-white text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white py-1 px-4 rounded text-sm">
                            Trade
                        </button>
                        
                        
                            </td>
                        </tr>);
                        })}
                            
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}

export default Crypto;
