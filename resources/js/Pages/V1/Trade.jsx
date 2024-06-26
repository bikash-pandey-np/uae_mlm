import React, { useState, useEffect, useRef } from 'react';
import { FiMenu, FiChevronDown } from 'react-icons/fi';
import Switch from 'react-switch'; // Import react-switch component
import { useForm, usePage } from '@inertiajs/inertia-react';
import { toast } from 'react-toastify';
import CountdownTimer from './Components/CountdownTimer';
import { MdClose } from 'react-icons/md'; // Importing close icon from react-icons
import Layout from "./Components/Layout";

const Trade = ({ slug, type, active, balance, trades }) => {

    console.log('trades', trades);
    const containerRef = useRef(null);

    const { flash } = usePage().props;

    const widgetRef = useRef(null);
    const [orderBookType, setOrderBookType] = useState('long'); // 'long' or 'short'
    const [currentPrice, setCurrentPrice] = useState(null);
    const [showLongModal, setShowLongModal] = useState(false);
    const [modalType, setModalType] = useState('Long');
    
    const { data, setData, post, processing, errors } = useForm({
        trade_amount: '',
        pair:slug,
        type: '',
        trade_duration: 1,
        
    });
    const showLongMdl = () => {
        console.log('long modal');
        setModalType('Long')
        setData('type', 'Long')
        setShowLongModal(true)
    }

    const showShortMdl = () => {
        console.log('short modal');
        setModalType('Short')
        setData('type', 'Short')
        setShowLongModal(true)
    }

    const closeModal = () => {
        setModalType('Long')
        setData('type', '')
        setShowLongModal(false)
    }

    const handleLongSubmit = async (e) => {
        e.preventDefault();
    
        // Set type in the form data
        console.log('before send', data);
        // Post the form data
        await post(route('take_trade'), data);
    
       
    }
    
    useEffect(() => {
        console.log('use effect toast');
        let toastId = null;

        if (flash.success || flash.error) {
            if (toastId) {
                toast.dismiss(toastId);
            }

            if (flash.success) {
                console.log('success toast');
                toastId = toast.success(flash.success, {
                    pauseOnHover: false,
                    autoClose: 2000,
                    onClose: () => window.location.reload()
                });
            } else if (flash.error) {
                console.log('error toast');

                toastId = toast.error(flash.error, {
                    pauseOnHover: false,
                    autoClose: 2000,
                    onClose: () => window.location.reload()
                });
            }
        }

        return () => {
            if (toastId) {
                toast.dismiss(toastId);
            }
        };
    }, [flash]);


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
        <Layout>
            <section
        style={{ marginTop: '5rem', marginBottom: '5rem' }}
        >
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
                    <button className={`bg-green-500 text-white py-2 rounded-md font-semibold hover:bg-green-600 transition duration-200 ${orderBookType === 'long' ? 'bg-opacity-100' : 'bg-opacity-50'}`} 
                        onClick={showLongMdl}
                    >Long</button>
                    <button className={`bg-red-500 text-white py-2 rounded-md font-semibold hover:bg-red-600 transition duration-200 ${orderBookType === 'short' ? 'bg-opacity-100' : 'bg-opacity-50'}`} 
                        onClick={showShortMdl}
                    >Short</button>
                
                    {showLongModal && (
                        <div className="fixed inset-0 flex items-center justify-center z-50">
                            <div className="fixed inset-0 bg-gray-800 bg-opacity-50"></div>
                            <div className="bg-white rounded-lg p-8 max-w-md w-full relative z-50">
                                {modalType === 'Long' && <h2 className="text-xl font-semibold mb-4">Enter Long Trade</h2>}
                                {modalType === 'Short' && <h2 className="text-xl font-semibold mb-4">Enter Short Trade</h2>}
                                <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={closeModal}>
                                    <MdClose size={24} />
                                </button>
                                <form onSubmit={handleLongSubmit}>
                                    <label className="block mb-2">Enter Trade amount (USDT)</label>
                                    <input
                                        type="number"
                                        className="border border-gray-300 rounded-md w-full py-2 px-3 mb-4"
                                        placeholder="Enter trade amount"
                                        value={data.trade_amount}
                                        onChange={(e) => setData('trade_amount', e.target.value)}
                                    />
                                    {errors.trade_amount && (
                                        <p className="text-sm text-red-600">{errors.trade_amount}</p>
                                    )}
                    
                                    <div className="mt-2 mb-4">
                                        <label className="block mb-2">Trade Duration (Minutes)</label>
                                        <select
                                            id="tradeDuration"
                                            className="border border-gray-300 rounded-md px-3 py-2 ml-4"
                                            value={data.trade_duration}
                                            onChange={(e) => setData('trade_duration', e.target.value)}
                                        >
                                            <option value="1">1 minute</option>
                                            <option value="3">3 minutes</option>
                                            <option value="5">5 minutes</option>
                                            <option value="15">15 minutes</option>
                                        </select>
                                    </div>
                    
                                    <button
                                        type="submit"
                                        className={`py-2 px-4 rounded-md font-semibold transition duration-200 ${
                                            modalType === 'Long' ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-red-500 text-white hover:bg-red-600'
                                        }`}
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}
                    
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
                        <div className="overflow-x-auto bg-gray-100 p-4 rounded-md shadow-md">
                            <h3 className="text-lg font-semibold text-green-500">Long Order Book</h3>
                            <table className='mb-6 w-full border-collapse border border-gray-200'>
                            <thead>
                            <tr className='bg-gray-100'>
                            <th className='border border-gray-200 px-4 py-2'>Amount</th>
                    <th className='border border-gray-200 px-4 py-2'>Price</th>
                    <th className='border border-gray-200 px-4 py-2'>Duration (minutes)</th>
                    <th className='border border-gray-200 px-4 py-2'>Outcome</th>
                    <th className='border border-gray-200 px-4 py-2'>Ends in</th>
                            
                            </tr>
                            </thead>

                            <tbody>
                            {trades.map((item, index) => {
                                if(item.type === "Long")
                                    {
                                        return (
                                            <tr key={index} className='border border-gray-200'>
                                                <td className='border border-gray-200 px-4 py-2'>{item.amount}</td>
                                                <td className='border border-gray-200 px-4 py-2'>{item.trade_price}</td>
                                                <td className='border border-gray-200 px-4 py-2'>{item.duration_minutes} Minutes</td>
                                                <td className='border border-gray-200 px-4 py-2'>{item.is_active ? 'Running' : item.outcome}</td>
                                                <td className='border border-gray-200 px-4 py-2'>
                                                    <CountdownTimer ends_at={item.expired_time} />

                                                    </td>
                                            </tr>
                                        );
                
                                    }
                            })}
                            </tbody>
                            </table>
                        </div>
                    )}
                    {orderBookType === 'short' && (
                        <div className="overflow-x-auto bg-gray-100 p-4 rounded-md shadow-md">
                            <h3 className="text-lg font-semibold text-red-500">Short Order Book</h3>
                            <table className='mb-6 w-full border-collapse border border-gray-200'>
                            <thead>
                            <tr className='bg-gray-100'>
                            <th className='border border-gray-200 px-4 py-2'>Amount</th>
                    <th className='border border-gray-200 px-4 py-2'>Price</th>
                    <th className='border border-gray-200 px-4 py-2'>Duration (minutes)</th>
                    <th className='border border-gray-200 px-4 py-2'>Outcome</th>
                    <th className='border border-gray-200 px-4 py-2'>Ends in</th>
                            
                            </tr>
                            </thead>

                            <tbody>
                            {trades.map((item, index) => {
                                if(item.type === "Short")
                                    {

                                        return (
                                            <tr key={index} className='border border-gray-200'>
                                                <td className='border border-gray-200 px-4 py-2'>{item.amount}</td>
                                                <td className='border border-gray-200 px-4 py-2'>{item.trade_price}</td>
                                                <td className='border border-gray-200 px-4 py-2'>{item.duration_minutes} Minutes</td>
                                                <td className='border border-gray-200 px-4 py-2'>{item.is_active ? 'Running' : item.outcome}</td>
                                                <td className='border border-gray-200 px-4 py-2'>
                                                <CountdownTimer ends_at={item.expired_time} />
                                                </td>
                                            </tr>
                                        );
                
                                    }
                            })}
                            </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    );
}

export default Trade;
