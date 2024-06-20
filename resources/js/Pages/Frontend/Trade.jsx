import React, { useState, useEffect, useRef } from 'react';
import MenuBar from './Components/MenuBar';
import BottomNavbar from './Components/BottomNavbar';
import { FiMenu, FiChevronDown } from 'react-icons/fi';
import '../../../css/app/front.css';
import Switch from 'react-switch'; // Import react-switch component

const Trade = ({ slug, type, active, balance }) => {
    const containerRef = useRef(null);
    const widgetRef = useRef(null);
    const [orderBookType, setOrderBookType] = useState('long'); // 'long' or 'short'
    const [currentPrice, setCurrentPrice] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(route('current-price'));
                if (response.ok) {
                    const data = await response.json();
                    if (slug === 'AAVEUSDT') {
                        setCurrentPrice(data['aaveusd']);
                    }
                    if (slug === 'LINKUSDT') {
                        setCurrentPrice(data['linkusd']);
                    }
                    if (slug === 'BTCUSDT') {
                        setCurrentPrice(data['bitcoin']);
                    }
                    if (slug === 'ETHUSDT') {
                        setCurrentPrice(data['ethereum']);
                    }
                    if (slug === 'ADAUSDT') {
                        setCurrentPrice(data['adausd']);
                    }
                    if (slug === 'META') {
                        setCurrentPrice(data['facebook']);
                    }
                    if (slug === 'TSLA') {
                        setCurrentPrice(data['tesla']);
                    }
                    if (slug === 'GOOG') {
                        setCurrentPrice(data['google']);
                    }
                    if (slug === 'NVDA') {
                        setCurrentPrice(data['nvidia']);
                    }
                    if (slug === 'AMZN') {
                        setCurrentPrice(data['amzn']);
                    }
                    if (slug === 'NFLX') {
                        setCurrentPrice(data['netflix']);
                    }
                } else {
                    console.error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Initial fetch
        const intervals = setInterval(fetchData, 3000); // Fetch data every 3 seconds

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.async = true;
        script.innerHTML = JSON.stringify({
            "symbol": type === 'crypto' ? `BINANCE:${slug}` : `NASDAQ:${slug}`,
            "interval": "1",
            "timezone": "Etc/UTC",
            "theme": "light",
            "style": "1",
            "locale": "en",
            "allow_symbol_change": false,
            "save_image": false,
            "calendar": false,
            "support_host": "https://www.tradingview.com",
            "container_id": "tv-chart-container", // ID of the container element
            "library_path": "https://s3.tradingview.com/tv.js",
            "autosize": true,
            "width": "100%",
            "height": "100%", // Let TradingView handle initial height
            "client_id": "tradingview-widget-container"
        });

        script.onload = () => {
            if (containerRef.current) {
                containerRef.current.appendChild(script);
            }
        };

        if (containerRef.current) {
            containerRef.current.appendChild(script);
        }

        return () => {
            if (containerRef.current) {
                containerRef.current.removeChild(script);
                clearInterval(intervals);
            }
        };
    }, [slug, type]);

    useEffect(() => {
        if (typeof window.TradingView !== 'undefined' && !widgetRef.current) {
            window.TradingView.onready(() => {
                const widget = new window.TradingView.widget({
                    "autosize": true,
                    "symbol": type === 'crypto' ? `BINANCE:${slug}` : `NASDAQ:${slug}`,
                    "interval": "1",
                    "timezone": "Etc/UTC",
                    "theme": "light",
                    "style": "1",
                    "locale": "en",
                    "allow_symbol_change": false,
                    "save_image": false,
                    "calendar": false,
                    "support_host": "https://www.tradingview.com",
                    "container_id": "tv-chart-container",
                    "library_path": "https://s3.tradingview.com/tv.js",
                    "client_id": "tradingview-widget-container"
                });

                widgetRef.current = widget;

                // Adjust height after the widget has fully rendered
                const adjustHeight = () => {
                    const container = document.getElementById("tv-chart-container");
                    if (container) {
                        container.style.height = "60vh"; // Set the desired height here
                    }
                };

                // Call adjustHeight when widget is ready
                adjustHeight();
            });
        }
    }, [slug, type]);

    const toggleOrderBook = (checked) => {
        setOrderBookType(checked ? 'short' : 'long');
    };

    return (
        <div>
            <MenuBar balance={balance} />

            <section>
                <div className='my-5 px-6 py-4'>
                    <h3 className='text-xl font-semibold'>{slug}</h3>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='price'>
                            <p>Price</p>
                            <h3 className='font-semibold text-xl'>$ {currentPrice ? currentPrice.price : null}</h3>
                            <h3 className='font-semibold text-md'>~ ₹ {currentPrice ? (currentPrice.price * 83.5).toFixed(2) : null}</h3>
                        </div>
                        <div className='info col-span-1 text-right mt-2'>
                            <div className="flex flex-col">
                                <p>24H High</p>
                                <p className='font-semibold'>$ {currentPrice ? currentPrice.high : null}</p>
                            </div>
                            <div className="flex flex-col">
                                <p>24H Low</p>
                                <p className='font-semibold'>$ {currentPrice ? currentPrice.low : null}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="tv-chart-container" ref={containerRef} style={{ height: "60vh", width: "100%" }}>
                    {/* Placeholder for TradingView widget */}
                </div>

                {/* Trading buttons */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <button className={`bg-green-500 text-white py-2 rounded-md font-semibold hover:bg-green-600 transition duration-200 ${orderBookType === 'long' ? 'bg-opacity-100' : 'bg-opacity-50'}`} >Long</button>
                    <button className={`bg-red-500 text-white py-2 rounded-md font-semibold hover:bg-red-600 transition duration-200 ${orderBookType === 'short' ? 'bg-opacity-100' : 'bg-opacity-50'}`} >Short</button>
                </div>

                {/* Toggle switch for Long and Short order books */}
                <div className="flex justify-center items-center mb-4 mt-6">
                    <label className="flex items-center cursor-pointer">
                        <Switch
                            checked={orderBookType === 'short'}
                            onChange={toggleOrderBook}
                            // onColor="#10B981"
                            // offColor="#EF4444"
                            // checkedIcon={<div className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"></div>}
                            // uncheckedIcon={<div className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0"></div>}
                            className="react-switch"
                        />
                        <div className="ml-3 text-gray-700 font-medium">Toggle Order Book: {orderBookType === 'long' ? 'Long' : 'Short'}</div>
                    </label>
                </div>

                {/* Order book details */}
                <div className="my-8">
                    {orderBookType === 'long' && (
                        <div className="bg-gray-100 p-4 rounded-md shadow-md">
                            <h3 className="text-lg font-semibold text-green-500">Long Order Book</h3>
                            <p>Details for Long position...</p>
                        </div>
                    )}
                    {orderBookType === 'short' && (
                        <div className="bg-gray-100 p-4 rounded-md shadow-md">
                            <h3 className="text-lg font-semibold text-red-500">Short Order Book</h3>
                            <p>Details for Short position...</p>
                        </div>
                    )}
                </div>
            </section>

            <BottomNavbar active={active} />
        </div>
    );
}

export default Trade;
