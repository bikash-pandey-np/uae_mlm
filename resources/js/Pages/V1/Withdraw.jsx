import React, { useEffect } from 'react';
import { useForm, usePage } from '@inertiajs/inertia-react';
import { toast } from 'react-toastify';
import { MdInfo } from 'react-icons/md';
import Layout from "./Components/Layout";

const Withdraw = ({ balance }) => {
    const { flash } = usePage().props;

    const { data, setData, post, processing, errors, reset } = useForm({
        amount: '',
        currency: 'USDT',
        wallet_address: '',
        bank_name: '',
        account_no: '',
        account_name: ''
    });

    useEffect(() => {
        document.title = "Withdraw | The Capex Pro";
    }, []);

    useEffect(() => {
        let toastId = null;

        if (flash.success || flash.error) {
            console.log('here');
            if (toastId) {
                toast.dismiss(toastId);
            }

            if (flash.success) {
                toastId = toast.success(flash.success, {
                    pauseOnHover: false,
                    autoClose: 2000,
                    onClose: () => {
                        window.location.reload();
                    }
                });
            } else if (flash.error) {
                toastId = toast.error(flash.error, {
                    pauseOnHover: false,
                    autoClose: 2000, 
                    onClose: () => {
                        window.location.reload();
                    }
                });
            }
        }

        return () => {
            if (toastId) {
                toast.dismiss(toastId);
            }
        };
    }, [flash, reset]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await post(route('v1.withdraw'));
        } catch (error) {
            if (error.response && error.response.status === 422) {
                const validationErrors = error.response.data.errors;
                if (validationErrors) {
                    setData((prevData) => ({
                        ...prevData,
                        ...validationErrors,
                    }));
                }
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        if (name === 'currency') {
            if (value === 'USDT') {
                setData({
                    ...data,
                    currency: value,
                    wallet_address: '',
                    bank_name: '',
                    account_no: '',
                    account_name: ''
                });
            } else if (value === 'INR') {
                setData({
                    ...data,
                    currency: value,
                    wallet_address: '',
                    bank_name: data.bank_name || '',
                    account_no: data.account_no || '',
                    account_name: data.account_name || ''
                });
            }
        } else {
            setData({
                ...data,
                [name]: value
            });
        }
    };

    return (
        <Layout>
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
                style={{ marginTop: '5rem', marginBottom: '5rem' }}
            >
                <div className="flex items-center">
                    <h2 className="text-xl font-extrabold text-gray-900 mb-4">Withdraw From Account</h2>
                </div>
                <div className="bg-yellow-100 border-l-4 border-yellow-500 text-black-700 p-4 flex my-4" role="alert">
                    <div className="mr-2">
                        <MdInfo size={24} />
                    </div>
                    <div>
                        <p className="font-bold">Info</p>
                        <p>No fees are deducted while withdrawing from Crypto </p>
                        <p>You can manually request a bank withdrawal with a fee of 10% of the amount. </p>
                    </div>
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
                                onChange={handleChange}
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
                                value={data.currency}
                                onChange={handleChange}
                                className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option value="USDT">USDT</option>
                                <option value="INR">INR</option>
                            </select>
                        </div>
                    </div>

                    {data.currency === 'USDT' && (
                        <div>
                            <label htmlFor="wallet_address" className="block text-sm font-medium text-gray-700">
                                Wallet Address (Network: TRC20)
                            </label>
                            <div className="mt-1">
                                <input
                                    id="wallet_address"
                                    name="wallet_address"
                                    type="text"
                                    onChange={handleChange}
                                    value={data.wallet_address}
                                    className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            {errors.wallet_address && (
                                <p className="mt-2 text-sm text-red-600" id="wallet-address-error">{errors.wallet_address}</p>
                            )}
                        </div>
                    )}

                    {data.currency === 'INR' && (
                        <>
                            <div>
                                <label htmlFor="bank_name" className="block text-sm font-medium text-gray-700">
                                    Bank Name
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="bank_name"
                                        name="bank_name"
                                        type="text"
                                        onChange={handleChange}
                                        value={data.bank_name}
                                        className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                                {errors.bank_name && (
                                    <p className="mt-2 text-sm text-red-600" id="bank-name-error">{errors.bank_name}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="account_no" className="block text-sm font-medium text-gray-700">
                                    Account Number
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="account_no"
                                        name="account_no"
                                        type="text"
                                        onChange={handleChange}
                                        value={data.account_no}
                                        className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                                {errors.account_no && (
                                    <p className="mt-2 text-sm text-red-600" id="account-no-error">{errors.account_no}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="account_name" className="block text-sm font-medium text-gray-700">
                                    Account Name
                                </label>

                                <div className="mt-1">
                                    <input
                                        id="account_name"
                                        name="account_name"
                                        type="text"
                                        onChange={handleChange}
                                        value={data.account_name}
                                        className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                                {errors.account_name && (
                                    <p className="mt-2 text-sm text-red-600" id="account-name-error">{errors.account_name}</p>
                                )}
                            </div>
                        </>
                    )}

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
        </Layout>
    );
}

export default Withdraw;
