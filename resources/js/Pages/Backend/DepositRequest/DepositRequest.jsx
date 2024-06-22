import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/inertia-react';
import Layout from "../Components/Layout";
import PageHeader from "../Components/PageHeader";
import { AiFillEye, AiFillEdit } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const DepositRequest = ({ depositRequests, search }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const breadcrumbItems = [
        { name: 'Home', link: '/' },
        { name: 'Deposit Requests', link: '/dashboard' },
    ];

    const { data: formData, setData: setFormData } = useForm({
        approved_amount: 0,
        remark: ''
    });

    const handleSearchInputChange = (event) => {
        const { value } = event.target;
        setSearchQuery(value);
    };

    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            Inertia.get(route('admin.deposit-requests'), { search: searchQuery });
        }
    };

    const cancelSearch = () => {
        setSearchQuery('');
        Inertia.get(route('admin.deposit-requests'));
    };

    return (
        <Layout>
            <PageHeader
                title="Manage Deposit Requests"
                breadcrumbItems={breadcrumbItems}
                buttonLabel="Create New"
                buttonLink={route("admin.add.deposit-requests")}
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
                    <p className="ml-4 mr-2 cursor-pointer" onClick={cancelSearch}>Cancel Search</p>
                    <AiOutlineCloseCircle className="h-5 w-5 cursor-pointer" onClick={cancelSearch} />
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
                                       <>
                                        <p>{row.status}</p>
                                       </>
                                    )}
                            </td>
                           <td className="px-6 py-4 whitespace-nowrap text-sm text-black-500">
    <div className="flex items-center">
        <a href={route('admin.single-deposit-requests', row.transaction_code)} className="flex items-center bg-blue-400 text-blue-500 px-4 py-2 text-white hover:text-blue-700 cursor-pointer">
            <AiFillEye className="mr-1" /> View Detail
        </a>
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
};

export default DepositRequest;
