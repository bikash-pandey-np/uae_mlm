import React, {useState, useEffect} from 'react';
import MenuBar from './Components/MenuBar';
import banner_crypto from '../../../images/crypto_banner.jpg'

import '../../../css/app/front.css';

const Crypto = ({balance}) => {
    const [fetchMarketData, setFetchMarketData] = useState({});

    
    useEffect(() => {
        document.title = "Crypto currencies Data | TheCapex.pro";

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

    const iconForCrypto = (crypto) => {
        var path = null;
        if(crypto.id === "aaveusd"){
            path = "https://cdn.capex.com/uploads/aave_logo_552d83ae93/aave_logo_552d83ae93.png"
        }

        if(crypto.id === "linkusd"){
            path = "https://cdn.capex.com/uploads/Chain_Link_ed2ba099b3/Chain_Link_ed2ba099b3.png"
        }

        if(crypto.id === "bitcoin"){
            path = "https://cdn.capex.com/uploads/Bitcoin_61110681a4/Bitcoin_61110681a4.png"
        }

        if(crypto.id === "ethereum"){
            path = "https://cdn.capex.com/uploads/Ethereum_4cb32422d4/Ethereum_4cb32422d4.png"
        }
        if(crypto.id === "adausd"){

            path = "https://cdn.capex.com/uploads/Cardano_icon_dd9e2ed4f8/Cardano_icon_dd9e2ed4f8.png"
        }
        return  (<img src={path}
            alt={crypto.display}
            style={{ width: "25px", height: "25px" }} />);
    }

    const getSlug = (crypto) => {
        var output = null;
        if(crypto.id === "aaveusd"){
            output = "AAVEUSDT"
        }

        if(crypto.id === "linkusd"){
            output = "LINKUSDT"
        }

        if(crypto.id === "bitcoin"){
            output = "BTCUSDT"
        }

        if(crypto.id === "ethereum"){
            output = "ETHUSDT"
        }
        if(crypto.id === "adausd"){

            output = "ADAUSDT"
        }

        return output;
    }

    
    return (
        <div>
            <MenuBar balance={balance} />
            <section
            style={{
                height: "70vh",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0px 8px 10px -5px rgba(0, 0, 0, 0.75)', // Only bottom shadow
            }}
            className='bg-white-800'
        >
         <img src={banner_crypto} />
            </section>

            <section className='text-center mt-6 mx-4'>
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Crypto Market Data</h2>
                    <table className="table-auto w-4/5 border-collapse mx-auto">
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
                            return (
                                <tr id={crypto.id} className='hover:cursor-pointer hover:bg-red-200'>
                                    <td className="px-4 py-2 flex items-center">
                                     { iconForCrypto(crypto)}
                                        <span className='ml-2'>{crypto.display}</span>
                                    </td>
                                    <td className="px-4 py-2">{crypto.buy}</td>
                                    <td className="px-4 py-2">{crypto.sell}</td>
                                    <td className={`hidden md:table-cell px-4 py-2 ${parseFloat(crypto.change) < 0 ? 'text-red-500' : 'text-green-500'}`}>
                                        {crypto.change}
                                    </td>
                                    <td className="px-4 py-2">
                                    <a href={route('trade', ['crypto', getSlug(crypto)])} className="bg-white text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white py-1 px-4 rounded text-sm">
                                    Trade
                                    </a>
                                  
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                    
                    </table>
                </div>
            </section>
        </div>
    );
}

export default Crypto;
