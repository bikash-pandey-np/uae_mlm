import React, {useEffect} from 'react';
import { useForm, usePage } from '@inertiajs/inertia-react';
import { toast } from 'react-toastify';

import MenuBar from './Components/MenuBar';
import '../../../css/app/front.css';

const DepositForm = ({ inr_deposit_info, usdt_deposit_info }) => {
    const { flash } = usePage().props;

    const { data, setData, post, processing, errors } = useForm({
        amount: '',
        currency: 'INR',
        deposit_info: inr_deposit_info
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        if (name === 'currency') {
            const depositInfo = value === 'INR' ? inr_deposit_info : usdt_deposit_info;
            setData({ ...data, currency: value, deposit_info: depositInfo });
        } else {
            setData({ ...data, [name]: value });
        }
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route('deposit'), data)
    };
    useEffect(() => {
        let toastId = null;

        if (flash.success || flash.error) {
            if (toastId) {
                toast.dismiss(toastId);
            }

            if (flash.success) {
                toastId = toast.success(flash.success, {pauseOnHover: false, autoClose:2000});
                setData({
                    email: '',
                    password: ''
                });
            } else if (flash.error) {
                toastId = toast.error(flash.error, {pauseOnHover: false, autoClose:2000});
            }
        }

        return () => {
            if (toastId) {
                toast.dismiss(toastId);
            }
        };
    }, [flash]);

    return (
        <section>
            <MenuBar />
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <h2 className="text-xl font-extrabold text-gray-900 mb-4">Fund your Account</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                            Deposit Amount
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
                                <option value="INR">INR</option>
                                <option value="USDT">USDT</option>
                            </select>
                        </div>
                    </div>

                    {data.deposit_info && (
                        <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-lg">
                            <div className="p-4 bg-indigo-100">
                                <h3 className="text-md font-medium text-gray-900">Deposit Information</h3>
                            </div>
                            <div className="border-t border-gray-200 px-4 py-5 sm:p-0 bg-gray-50">

                                <dl className="sm:divide-y sm:divide-gray-200">
                    
                                    {data.currency === 'INR' && (
                                        <React.Fragment>
                                            <div className="sm:flex sm:items-center sm:justify-between p-2">
                                                <dt className="text-sm font-medium text-gray-500 sm:w-1/3">Bank Name</dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:w-2/3">{data.deposit_info.flat_bank_name}</dd>
                                            </div>
                                            <div className="sm:flex sm:items-center sm:justify-between p-2">
                                                <dt className="text-sm font-medium text-gray-500 sm:w-1/3">Account Name</dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:w-2/3">{data.deposit_info.flat_account_name}</dd>
                                            </div>
                                            <div className="sm:flex sm:items-center sm:justify-between p-2">
                                                <dt className="text-sm font-medium text-gray-500 sm:w-1/3">Account Number</dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:w-2/3">{data.deposit_info.flat_account_no}</dd>
                                            </div>
                                        </React.Fragment>
                                    )}
                    
                                    {data.currency === 'USDT' && (
                                        <React.Fragment>
                                            <div className="sm:flex sm:items-center sm:justify-between p-2">
                                                <dt className="text-sm font-medium text-gray-500 sm:w-1/3">Wallet Address</dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:w-2/3">{data.deposit_info.wallet_address}</dd>
                                            </div>
                                            <div className="sm:flex sm:items-center sm:justify-between p-2">
                                                <dt className="text-sm font-medium text-gray-500 sm:w-1/3">Network Type</dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:w-2/3">{data.deposit_info.network_type}</dd>
                                            </div>
                                        </React.Fragment>
                                    )}

                                    <div className="sm:flex sm:items-center sm:justify-between p-2">
                                        <dt className="text-sm font-medium text-gray-500 sm:w-1/3">Deposit Instruction</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:w-2/3">{data.deposit_info.deposit_instruction}</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    )}

                    <div>
                        <button
                            type="submit"
                            disabled={processing}
                            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${processing ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {processing ? 'Processing...' : 'Deposit'}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default DepositForm;
