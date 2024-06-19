import React, { useState } from 'react';

const SwitchComponent = ({fetchMarketData, fetchShareData}) => {
    const [selectedOption, setSelectedOption] = useState('Crypto'); // Default selected option

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };
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
    const iconForShare = (crypto) => {
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
    const getSlugS = (crypto) => {
        var output = null;
        if(crypto.id === "amzn"){
            output = "AMZN"
        }

        if(crypto.id === "google"){
            output = "GOOG"
        }

        if(crypto.id === "facebook"){
            output = "META"
        }
        if(crypto.id === "apple"){
            output = "APPL"
        }

        if(crypto.id === "nvidia"){
            output = "NVDA"
        }
        if(crypto.id === "tesla"){
            output = "TSLA"
        }
        if(crypto.id === "netflix"){
            output = "NFLX"
        }

        return output;
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
        <div className='m-4'>
        <a
        className={`inline-block px-4 py-2 rounded-md text-white-100 ${selectedOption === 'Crypto' ? 'bg-orange-500' : 'bg-orange-300 hover:bg-orange-400'}`}
        onClick={() => handleOptionClick('Crypto')}
    >
        Crypto
    </a>
    <a
    className={`ml-4 inline-block px-4 py-2 rounded-md text-white-100 ${selectedOption === 'Shares' ? 'bg-orange-500' : 'bg-orange-300 hover:bg-orange-400'}`}
    onClick={() => handleOptionClick('Shares')}
>
    Shares
</a>


            {selectedOption === 'Crypto' && (
                <div className='crypto-details mt-5'>
                    {/* Display Crypto details */}
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
            )}

            {selectedOption === 'Shares' && (
                <div className='shares-details mt-5'>
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
                {Object.values(fetchShareData).map((crypto) => {
                    console.log(crypto);
                    return (
                        <tr id={crypto.id} className='hover:cursor-pointer hover:bg-red-200'>
                            <td className="px-4 py-2 flex items-center">
                             { iconForShare(crypto)}
                                <span className='ml-2'>{crypto.display}</span>
                            </td>
                            <td className="px-4 py-2">{crypto.buy}</td>
                            <td className="px-4 py-2">{crypto.sell}</td>
                            <td className={`hidden md:table-cell px-4 py-2 ${parseFloat(crypto.change) < 0 ? 'text-red-500' : 'text-green-500'}`}>
                                {crypto.change}
                            </td>
                            <td className="px-4 py-2">
                            <a href={route('trade', ['shares', getSlugS(crypto)])} className="bg-white text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white py-1 px-4 rounded text-sm">
                                Trade
                            </a>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
            
            </table>
                </div>
            )}
        </div>
    );
};

export default SwitchComponent;
