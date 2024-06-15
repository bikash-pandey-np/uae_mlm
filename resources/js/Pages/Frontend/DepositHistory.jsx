import React, { useState, useEffect } from 'react';
import { usePage } from '@inertiajs/inertia-react';
import { MdInfo } from 'react-icons/md';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import FrontModal from './Components/FrontModal';

import { toast } from 'react-toastify';
import MenuBar from './Components/MenuBar';
import '../../../css/app/front.css';

const DepositHistory = ({ balance, pending_amount, deposit_histories }) => {
    const { flash } = usePage().props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedHistory, setSelectedHistory] = useState(null); // Track which history is selected for the modal
    const [searchValue, setSearchValue] = useState('');
    const [filterValue, setFilterValue] = useState('all');

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleFilterChange = (e) => {
        setFilterValue(e.target.value);
    };
    const handleFilterButtonClick = () => {
        // Perform filtering based on searchValue and filterValue
    };
    console.log(deposit_histories);
    useEffect(() => {
        document.title = "Deposit History | TheCapex.pro";

        let toastId = null;

        if (flash.success || flash.error) {
            if (toastId) {
                toast.dismiss(toastId);
            }

            if (flash.success) {
                toastId = toast.success(flash.success, {
                    pauseOnHover: false,
                    autoClose: 2000,
                    onClose: () => window.location.reload()
                });
            } else if (flash.error) {
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

    const handleIconClick = (history) => {
        setSelectedHistory(history);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section>
            <MenuBar />
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <div className="flex items-center">
                    <h2 className="text-xl font-bold text-gray-700 mb-4">Deposit History</h2>
                    <p className="mt-1 text-sm text-gray-900 sm:mt-0 sm:w-2/3 ml-auto">
                        Balance: <span className='font-bold'>{balance} USDT ~ {balance * 83.45} INR</span>
                        <span className='mt-1 text-sm text-gray-900 sm:mt-0 sm:w-2/3 ml-4'>
                            Pending Deposit: <span className='font-bold'>~{pending_amount}</span> INR
                        </span>
                    </p>
                </div>

                {deposit_histories.length === 0 ? (
                    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-black-700 p-4 flex my-4" role="alert">
                        <div className="mr-2">
                            <MdInfo size={24} />
                        </div>
                        <div>
                            <p className="font-bold">No Record Found</p>
                            <p>Please Deposit First to view Deposit History</p>
                            <a
                                href={route('deposit')}
                                className="mt-2 inline-block text-white py-1 px-2 rounded"
                                style={{ backgroundColor: '#E88D67', fontSize: '9pt', letterSpacing: '1.1px' }}
                            >
                                Deposit Now
                            </a>
                        </div>
                    </div>
                ) : (
                    <div className="overflow-x-auto mt-4">
                    <div className="flex items-center mt-3 mb-3">
                    {/* Search Input */}
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchValue}
                        onChange={handleSearchChange}
                        className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
                    />
        
                    {/* Filter Dropdown */}
                    <div className='ml-4'>
                    <label>Status</label>
                    <select
                    value={filterValue}
                    onChange={handleFilterChange}
                    className="px-4 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring focus:border-blue-300"
                >
                    <option value="all">All</option>
                    <option value="approved">Approved</option>
                    <option value="pending">Pending</option>
                    <option value="rejected">Rejected</option>
                </select>
                </div>
        
                    {/* Filter Button */}
                    <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                        Filter
                    </button>
                </div>
                        <table className="min-w-full bg-white">
                        <thead className="bg-gray-200">
                        <tr>
                            <th className="px-4 py-2 font-bold text-md">Transaction Code</th>
                            <th className="px-4 py-2 font-bold text-md">Deposit Amount</th>
                            <th className="px-4 py-2 font-bold text-md">Approved Amount</th>
                            <th className="px-4 py-2 font-bold text-md">Deposited Time</th>
                            <th className="px-4 py-2 font-bold text-md">Status</th>
                        </tr>
                    </thead>
                    
                            <tbody>
                                {deposit_histories.map((history) => (
                                    <tr key={history.id}>
                                        <td className="border px-4 py-2">
                                            <span className="flex items-center">
                                                {history.transaction_code}
                                                <AiOutlineInfoCircle
                                                    className="ml-2 text-blue-500 text-xl cursor-pointer"
                                                    onClick={() => handleIconClick(history)}
                                                />
                                            </span>
                                        </td>
                                        <td className="border px-4 py-2">{history.amount} {history.currency}</td>
                                        <td className="border px-4 py-2">{history.is_approved ? history.approved_amount + ' USDT' : <span className='text-center'>-</span>}</td>
                                        <td className="border px-4 py-2">{history.created_at}</td>
                                        <td className="border px-4 py-2">
                                            <span className={`inline-block py-1 px-2 rounded ${history.status === 'Pending' ? 'bg-blue-500' : history.status === 'Rejected' ? 'bg-red-500' : 'bg-green-500'} text-white text-xs`}>
                                                {history.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <p className='mt-4 text-center'>Showing {deposit_histories.length} Records</p>
                    </div>
                )}

                {/* Render modal if selectedHistory is not null */}
                {selectedHistory && (
                    <FrontModal isOpen={isModalOpen} onClose={handleCloseModal}>
                        {/* Modal content here, you can use selectedHistory to display specific information */}
                        <h2 className='font-bold' style={
                            { fontSize: '14pt', letterSpacing:'1.1px' }
                        }>Deposit Details</h2>
                        <p>Transaction Code: {selectedHistory.transaction_code}</p>
                        <p>Deposit Amount: {selectedHistory.amount} {selectedHistory.currency}</p>
                        <p>Status:<span className='font-semibold'> {selectedHistory.status}</span></p>
                        {selectedHistory.approved_amount && <p>Approved Amount: {selectedHistory.approved_amount} USDT</p>}
                        <p className='font-semibold mt-2 mb-2'>Deposited To</p>
                        {selectedHistory.currency === 'INR' ? (
                            <div>
                                <p>Bank Name: {selectedHistory.deposit_info.flat_bank_name}</p>
                                <p>Account No: {selectedHistory.deposit_info.flat_account_no}</p>
                                <p>Account Name: {selectedHistory.deposit_info.flat_account_name}</p>

                            </div>
                        ) : (
                            <div>
                                <p>Network: {selectedHistory.deposit_info.network_type}</p>
                                <p>Wallet Address: {selectedHistory.deposit_info.wallet_address}</p>

                            </div>
                        )}

                        {selectedHistory.remark && <p className='mt-1'>Remark: {selectedHistory.remark}</p>}

                        {console.log(selectedHistory)}
                    </FrontModal>
                )}
            </div>
        </section>
    );
};

export default DepositHistory;
