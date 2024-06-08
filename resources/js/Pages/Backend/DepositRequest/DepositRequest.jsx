import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import Layout from "../Components/Layout";
import PageHeader from "../Components/PageHeader";
import { AiFillEye, AiFillEdit } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import Modal from "../Components/Modal";

const DepositRequest = ({ depositRequests, search }) => {
    console.log(depositRequests);

    const [openModalId, setOpenModalId] = useState(null);
    const [currentRow, setCurrentRow] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const breadcrumbItems = [
        { name: 'Home', link: '/' },
        { name: 'Deposit Requests', link: '/dashboard' },
    ];

    const updateStatus = (isChecked) => {
        console.log(`Toggle is now ${isChecked ? 'ON' : 'OFF'}`);
    };

    const handleOpenModal = (row) => {
        setOpenModalId(row.id);
        setCurrentRow(row);
    };

    const handleCloseModal = () => {
        setOpenModalId(null);
        setCurrentRow(null);
    };

    const renderDepositDetails = (row) => {
        if (row.deposit_info.currency === "INR") {
            return (
                <div>
                    <div className="sm:flex sm:items-center sm:justify-between p-2">
                        <dt className="text-sm font-medium text-gray-500 sm:w-1/3">Bank Name</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:w-2/3 font-bold">{row.deposit_info.flat_bank_name}</dd>
                    </div>
                    <div className="sm:flex sm:items-center sm:justify-between p-2">
                        <dt className="text-sm font-medium text-gray-500 sm:w-1/3">Account No.</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:w-2/3 font-bold">{row.deposit_info.flat_account_no}</dd>
                    </div>
                    <div className="sm:flex sm:items-center sm:justify-between p-2">
                        <dt className="text-sm font-medium text-gray-500 sm:w-1/3">Account Name</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:w-2/3 font-bold">{row.deposit_info.flat_account_name}</dd>
                    </div>
                </div>
            );
        } else if (row.deposit_info.currency === "USDT") {
            return (
                <div>
                    <div className="sm:flex sm:items-center sm:justify-between p-2">
                        <dt className="text-sm font-medium text-gray-500 sm:w-1/3">Network Type</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:w-2/3 font-bold">{row.deposit_info.network_type}</dd>
                    </div>
                    <div className="sm:flex sm:items-center sm:justify-between p-2">
                        <dt className="text-sm font-medium text-gray-500 sm:w-1/3">Wallet Address</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:w-2/3 font-bold">{row.deposit_info.wallet_address}</dd>
                    </div>
                </div>
            );
        }
    };

    const handleSearchInputChange = (event) => {
        const { value } = event.target;
        setSearchQuery(value);
    };
    
    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            Inertia.get(route('admin.deposit-requests'), { search: searchQuery });
        }
    };

    const cancelSearch = (e) => {
        setSearchQuery('');
        Inertia.get(route('admin.deposit-requests'), { search: searchQuery });

    }
    

    return (
        <Layout>
            <PageHeader 
                title="Manage Deposit Requests" 
                buttonLabel="Add New" 
                buttonLink={route('admin.create.deposit-info') }
                breadcrumbItems={breadcrumbItems} 
            />
 {/* Search input */}
 <div className="my-4 mx-auto max-w-md">
 <input
 type="search"
 value={searchQuery}
 onChange={handleSearchInputChange}
 onKeyDown={handleSearch}
 placeholder="Search..."
 className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
/>

</div>
{search && (
    <div className="flex items-center bg-yellow-200 text-gray-700 px-3 py-2 rounded">
    <p>Showing Search Results for : <span className='font-bold'>{search}</span></p>  
    <p className="ml-4 mr-2">Cancel Search</p>
      <AiOutlineCloseCircle className="h-5 w-5 cursor-pointer" onClick={(e) => cancelSearch(e)} />
    </div>
  )}
            <table className="min-w-full divide-y divide-gray-200 mt-4">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left font-bold text-gray-500 uppercase tracking-wider">
                            Customer ID 
                        </th>
                        <th scope="col" className="px-6 py-3 text-left font-bold text-gray-500 uppercase tracking-wider">
                            Request Amount
                        </th>
                        <th scope="col" className="px-6 py-3 text-left font-bold text-gray-500 uppercase tracking-wider">
                            Code
                        </th>
                        <th scope="col" className="px-6 py-3 text-left font-bold text-gray-500 uppercase tracking-wider">
                            Approve
                        </th>
                        <th scope="col" className="px-6 py-3 text-left font-bold text-gray-500 uppercase tracking-wider">
                            Action
                        </th>
                    </tr>
                </thead>
                
                <tbody className="bg-white divide-y divide-gray-200">
                    {depositRequests.data.map((row, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-black-500">
                                {row.deposited_by.customer_code}
                                <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold text-white ml-4 ${row.status === 'Pending' ? 'bg-blue-500' : row.status === 'Approved' ? 'bg-green-500' : 'bg-red-500'}`}>
                                    {row.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-black-500">
                                {row.amount} {row.currency}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-black-500">
                                {row.transaction_code} 
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-black-500">
                                {row.is_approved ? (
                                    <div>
                                        <span className="block text-xs">{row.approved_amount} USDT</span>
                                    </div>
                                ) : (
                                    <button className="bg-green-500 text-white px-3 py-1 rounded-md text-xs">
                                        Approve
                                    </button>
                                )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-black-500">
                                <div className="flex items-center">
                                    <AiFillEye 
                                        onClick={() => handleOpenModal(row)} 
                                        className="text-blue-500 hover:text-blue-700 cursor-pointer" 
                                    />
                                    <AiFillEdit 
                                        className="ml-2 text-green-500 hover:text-green-700 cursor-pointer" 
                                    />
                                    {openModalId === row.id && (
                                        <Modal isOpen={openModalId === row.id} onClose={handleCloseModal}>
                                            <h1 className="font-bold mb-3">Deposit Request Details</h1>
                                            <dl className="grid grid-cols-2 gap-x-4">
                                                <div className="py-2">
                                                    <dt className="font-bold">Amount:</dt>
                                                    <dd>{row.amount} {row.currency}</dd>
                                                </div>
                                                <div className="py-2">
                                                    <dt className="font-bold">Transaction Code:</dt>
                                                    <dd>{row.transaction_code}</dd>
                                                </div>
                                            </dl>
                                            <dl className="grid grid-cols-1 gap-x-4">
                                                <div className="py-2">
                                                    <dt className="font-bold">Deposited By:</dt>
                                                    <dd>{row.deposited_by.customer_code} ({row.deposited_by.email})</dd>
                                                </div>
                                                <div className="py-2">
                                                    <h3 className="font-bold font-md">Deposited At</h3>
                                                    {renderDepositDetails(row)}
                                                </div>
                                                <div className="py-2">
                                                    <dt className="font-bold">Status:</dt>
                                                    <dd>{row.status}</dd>
                                                </div>
                                                <div className="py-2">
                                                    <dt className="font-bold">Deposit Request At:</dt>
                                                    <dd>{row.created_at}</dd>
                                                </div>
                                                {row.is_approved && (
                                                    <div className="py-2">
                                                        <dt className="font-bold">Approved Amount:</dt>
                                                        <dd>{row.approved_amount} {row.currency}</dd>
                                                    </div>
                                                )}
                                                {row.remark && (
                                                    <div className="py-2">
                                                        <dt className="font-bold">Remark:</dt>
                                                        <dd>{row.remark}</dd>
                                                    </div>
                                                )}
                                            </dl>
                                        </Modal>
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

             {/* Pagination */}
             <div className="flex justify-center mt-4">
             <ul className="flex">
                 {depositRequests.links.map((link, index) => (
                     <li key={index}>
                     <a
                     href={link.url}
                     className={`mx-1 px-3 py-1 rounded-md ${link.active ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                     disabled={!link.url}
                 >
                     {link.label}
                 </a>
                     </li>
                 ))}
             </ul>
         </div>
        </Layout>
    );
}

export default DepositRequest;
