import React, {useEffect} from 'react';
import { useForm, usePage } from '@inertiajs/inertia-react';
import { toast } from 'react-toastify';

import MenuBar from './Components/MenuBar';
import { FiMenu, FiChevronDown } from 'react-icons/fi'; // Import FiMenu for toggler icon
import '../../../css/app/front.css';

const Withdraw = () => {
    const { flash } = usePage().props;

    const balance = 1200;
    const pending_amount = 12320;
    const { data, setData, post, processing, errors } = useForm({
        amount: '',
        currency: 'USDT',
        wallet_address: ''
    });
    useEffect(() => {
        let toastId = null;

        if (flash.success || flash.error) {
            if (toastId) {
                toast.dismiss(toastId);
            }

            if (flash.success) {
                toastId = toast.success(flash.success, {
                    pauseOnHover: false, 
                    autoClose:2000,
                    // onClose: () => window.location.reload()
                });
                setData({
                    email: '',
                    password: ''
                });
            } else if (flash.error) {
                toastId = toast.error(flash.error, {
                    pauseOnHover: false, 
                    autoClose:2000,
                    // onClose: () => window.location.reload()
                });
            }
        }

        return () => {
            if (toastId) {
                toast.dismiss(toastId);
            }
        };
    }, [flash]);
   
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route('withdraw'), data)
    };
    return (
        <div>
            <MenuBar />
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <div className="flex items-center">
                    <h2 className="text-xl font-extrabold text-gray-900 mb-4">Withdraw From Account</h2>
                    <p className="mt-1 text-sm text-gray-900 sm:mt-0 sm:w-2/3 ml-auto">
                        Balance: <span className='font-bold'>{balance} USDT ~ {balance * 83.45} INR</span>
                        <span className='mt-1 text-sm text-gray-900 sm:mt-0 sm:w-2/3 ml-4'>
                            Pending Deposit: <span className='font-bold'>~{pending_amount}</span> INR
                        </span>
                    </p>
                </div>

            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
            <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                    Withdraw Amount
                </label>
                <div className="mt-1">
                    <input
                        id="amount"
                        name="amount"
                        type="number"
                        onChange={(e) => {
                            e.preventDefault();
                            setData('amount', e.target.value)
                        }}
                        value={data.amount}
                        className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                {errors.amount && (
                    <p className="mt-2 text-sm text-red-600" id="amount-error">{errors.amount}</p>
                )}
            </div>

            <div>
                <label htmlFor="currency" className="block text-sm font-medium text-gray-700">
                    Choose Currency
                </label>
                <div className="mt-1">
                    <select
                        id="currency"
                        name="currency"
                        defaultValue={data.currency}
                        // onChange={handleChange}
                        className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option value="USDT">USDT</option>
                    </select>
                </div>
            </div>
            <div>
            <label htmlFor="wallet_address" className="block text-sm font-medium text-gray-700">
                Wallet Address (Network: TRC20)
            </label>
            <div className="mt-1">
                <input
                    id="wallet_address"
                    name="wallet_address"
                    type="text"
                    onChange={(e) => {
                        e.preventDefault();
                        setData('wallet_address', e.target.value)
                    }}
                    value={data.wallet_address}
                    className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            {errors.wallet_address && (
                <p className="mt-2 text-sm text-red-600" id="amount-error">{errors.wallet_address}</p>
            )}
        </div>
         

            <div>
                <button
                    type="submit"
                    disabled={processing}
                    className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${processing ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    {processing ? 'Processing...' : 'Withdraw'}
                </button>
            </div>
        </form>
        </div>

        </div>
    );
}

export default Withdraw;
