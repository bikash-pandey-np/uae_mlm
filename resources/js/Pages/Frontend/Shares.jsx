import React, {useState, useEffect} from 'react';
import MenuBar from './Components/MenuBar';
import '../../../css/app/front.css';

const Shares = ( ) => {
    const [fetchMarketData, setFetchMarketData] = useState({});

    
    useEffect(() => {
        document.title = "Shares Data | TheCapex.pro"
        const fetchData = async () => {
            try {
                const response = await fetch(route('market.share-data'));
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
        if(crypto.id === "amzn"){
            path = "https://cdn.capex.com/uploads/dma_amzn_7c2c7f2d6c/dma_amzn_7c2c7f2d6c.png"
        }

        if(crypto.id === "google"){
            path = "https://cdn.capex.com/uploads/google_d332823ed3/google_d332823ed3.png"
        }

        if(crypto.id === "facebook"){
            path = "https://cdn.capex.com/uploads/meta_icon_7ec2dc3bb5/meta_icon_7ec2dc3bb5.webp"
        }
        if(crypto.id === "apple"){
            path = "https://cdn.capex.com/uploads/apple_4a039036e4/apple_4a039036e4.svg"
        }

        if(crypto.id === "nvidia"){
            path = "https://cdn.capex.com/uploads/nvidia_logo_adeaf6e9b8/nvidia_logo_adeaf6e9b8.png"
        }
        if(crypto.id === "tesla"){

            path = "https://cdn.capex.com/uploads/tesla_c50a817690/tesla_c50a817690.png"
        }
        if(crypto.id === "netflix"){

            path = "https://cdn.capex.com/uploads/dma_netflix_8734c13a9a/dma_netflix_8734c13a9a.png"
        }
        return  (<img src={path}
            alt={crypto.display}
            style={{ width: "25px", height: "25px" }} />);
    }

    
    return (
        <div>
            <MenuBar />
            <section style={{ height: "70vh" }} className='bg-gray-800 banner_section'>
            </section>

            <section className='text-center mt-4 mx-4'>
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Shares Market Data</h2>
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
                                        <button className="bg-white text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white py-1 px-4 rounded text-sm">
                                            Trade
                                        </button>
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

export default Shares;
