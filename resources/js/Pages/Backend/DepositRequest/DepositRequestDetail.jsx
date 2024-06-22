import React from 'react';
import Layout from "../Components/Layout";
import { useForm } from "@inertiajs/inertia-react";

const DepositRequestDetail = ({ detail }) => {
    const { data, setData, post, processing, errors } = useForm({
        approved_amount: '',
        remark: '',
        transaction_code: detail.transaction_code
    });

    const { data: rejectData, setData: setRejectData, post: rejectPost, processing: rejectProcessing, errors: rejectErrors } = useForm({
        remark: '',
        transaction_code: detail.transaction_code
    });

    const handleApproveSubmit = (e) => {
        e.preventDefault();
        post(route('admin.approve.deposit', { code: detail.transaction_code }), {
            onSuccess: () => {
                // Handle success, e.g., show a success message
                alert('Deposit request approved successfully!');
            },
        });
    };

    const handleRejectSubmit = (e) => {
        e.preventDefault();
        rejectPost(route('admin.reject.deposit', { code: detail.transaction_code }), {
            onSuccess: () => {
                // Handle success, e.g., show a success message
                alert('Deposit request rejected successfully!');
            },
        });
    };

    if (!detail) {
        return <div>Loading...</div>; // Handle loading state if needed
    }

    const {
        amount,
        transaction_code,
        currency,
        deposited_by,
        status,
        approved_amount,
        remark,
        created_at,
        updated_at,
        deposit_info,
    } = detail;

    // Determine the background color for status badges
    let statusBgColor = '';
    switch (status) {
        case 'Pending':
            statusBgColor = 'bg-yellow-300';
            break;
        case 'Approved':
            statusBgColor = 'bg-green-300';
            break;
        case 'Rejected':
            statusBgColor = 'bg-red-300';
            break;
        default:
            statusBgColor = 'bg-gray-300';
    }

    return (
        <Layout>
            <div className="mt-5 p-5 bg-white shadow sm:rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                    {/* Left Column */}
                    <div className='border border-gray-400'>
                        <div className="mb-4 bg-blue-500 px-4 py-2">
                            <h3 className="text-lg font-medium leading-6 text-white">Deposit Request Information</h3>
                            <p className="mt-1 max-w-2xl text-sm text-white">Details for transaction code: <span className='font-bold'>{transaction_code}</span></p>
                        </div>
                        <div className='px-4'>
                            <dl className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-8">
                                <div className="py-3">
                                    <dt className="text-sm font-medium text-gray-500">Amount</dt>
                                    <dd className="mt-1 text-sm text-gray-900 font-bold">{amount} {currency}</dd>
                                </div>
                                <div className="py-3">
                                    <dt className="text-sm font-medium text-gray-500">Status</dt>
                                    <dd className={`mt-1 text-sm font-semibold ${statusBgColor} py-1 px-2 rounded-md inline-block`}>{status}</dd>
                                </div>
                                <div className="py-3">
                                    <dt className="text-sm font-medium text-gray-500">Approved Amount</dt>
                                    <dd className="mt-1 text-sm text-gray-900 font-bold">{approved_amount ? `${approved_amount} ${currency}` : 'Not approved'}</dd>
                                </div>
                                <div className="py-3">
                                    <dt className="text-sm font-medium text-gray-500">Created At</dt>
                                    <dd className="mt-1 text-sm text-gray-900 font-bold">{created_at}</dd>
                                </div>
                                <div className="py-3">
                                    <dt className="text-sm font-medium text-gray-500">Remark</dt>
                                    <dd className="mt-1 text-sm text-gray-900 font-bold">{remark || '-'}</dd>
                                </div>
                                <div className="py-3">
                                    <dt className="text-sm font-medium text-gray-500">Deposited By</dt>
                                    <dd className="mt-1 text-sm text-gray-900 font-bold">{deposited_by.full_name} ({deposited_by.customer_code}) - {deposited_by.email}</dd>
                                </div>

                                <div className="py-3">
                                    <dt className="text-sm font-medium text-gray-500">Deposit Info Type</dt>
                                    <dd className="mt-1 text-sm text-gray-900 font-bold">{deposit_info.type}</dd>
                                </div>
                                {deposit_info.type === "flat" && (
                                    <>
                                        <div className="py-3">
                                            <dt className="text-sm font-medium text-gray-500">Bank Name</dt>
                                            <dd className="mt-1 text-sm text-gray-900 font-bold">{deposit_info.flat_bank_name}</dd>
                                        </div>
                                        <div className="py-3">
                                            <dt className="text-sm font-medium text-gray-500">Account Number</dt>
                                            <dd className="mt-1 text-sm text-gray-900 font-bold">{deposit_info.flat_account_no}</dd>
                                        </div>
                                        <div className="py-3">
                                            <dt className="text-sm font-medium text-gray-500">Account Name</dt>
                                            <dd className="mt-1 text-sm text-gray-900 font-bold">{deposit_info.flat_account_name}</dd>
                                        </div>
                                    </>
                                )}

                                {deposit_info.type === "crypto" && (
                                    <>
                                        <div className="py-3">
                                            <dt className="text-sm font-medium text-gray-500">Wallet Address</dt>
                                            <dd className="mt-1 text-sm text-gray-900 font-bold">{deposit_info.wallet_address}</dd>
                                        </div>
                                    </>
                                )}

                                <div className="py-3">
                                    <dt className="text-sm font-medium text-gray-500">Deposit Instruction</dt>
                                    <dd className="mt-1 text-sm text-gray-900 font-bold">{deposit_info.deposit_instruction}</dd>
                                </div>
                            </dl>
                        </div>
                    </div>

                    {/* Right Column */}
                    {status === 'Pending' && (
                        <div>
                            <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-lg">
                                <div className="px-4 py-5 sm:px-6 bg-green-500">
                                    <h3 className="text-lg leading-6 font-medium text-white">Approve</h3>
                                </div>
                                <div className="border-t border-gray-200">
                                    <form onSubmit={handleApproveSubmit}>
                                        <div className="px-4 py-5 sm:p-6">
                                            <div className="mb-4">
                                                <label htmlFor="approved_amount" className="block text-sm font-medium text-gray-700">Approved Amount</label>
                                                <input
                                                    type="number"
                                                    name="approved_amount"
                                                    id="approved_amount"
                                                    value={data.approved_amount}
                                                    onChange={(e) => setData('approved_amount', e.target.value)}
                                                    className="px-4 py-2 mt-1 block w-full bg-gray-100 border border-green-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900 placeholder-gray-500"
                                                    placeholder="Enter approved amount"
                                                />
                                                {errors.approved_amount && (
                                                    <p className="mt-2 text-sm text-red-600">{errors.approved_amount}</p>
                                                )}
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="remark" className="block text-sm font-medium text-gray-700">Remark</label>
                                                <textarea
                                                    id="remark"
                                                    name="remark"
                                                    rows="3"
                                                    value={data.remark}
                                                    onChange={(e) => setData('remark', e.target.value)}
                                                    className="mt-1 px-4 py-2 block w-full bg-white border border-green-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900 placeholder-gray-500"
                                                    placeholder="Enter remark"
                                                ></textarea>
                                                {errors.remark && (
                                                    <p className="mt-2 text-sm text-red-600">{errors.remark}</p>
                                                )}
                                            </div>
                                            <div className="flex justify-end">
                                                <button type="submit" disabled={processing} className={`inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${processing ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'}`}>
                                                    {processing ? 'Approving...' : 'Approve'}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-lg">
                                <div className="px-4 py-5 sm:px-6 bg-red-400">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">Reject</h3>
                                </div>
                                <div className="border-t border-gray-200">
                                    <form onSubmit={handleRejectSubmit}>
                                        <div className="px-4 py-5 sm:p-6">
                                            <div className="mb-4">
                                                <label htmlFor="reject_remark" className="block text-sm font-medium text-gray-700">Remark</label>
                                                <textarea
                                                    id="reject_remark"
                                                    name="reject_remark"
                                                    rows="3"
                                                    value={rejectData.remark}
                                                    onChange={(e) => setRejectData('remark', e.target.value)}
                                                    className="mt-1 px-4 py-2 block w-full bg-white border border-red-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900 placeholder-gray-500"
                                                    placeholder="Enter remark"
                                                ></textarea>
                                                {rejectErrors.remark && (
                                                    <p className="mt-2 text-sm text-red-600">{rejectErrors.remark}</p>
                                                )}
                                            </div>
                                            <div className="flex justify-end">
                                                <button type="submit" disabled={rejectProcessing} className={`inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${rejectProcessing ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'}`}>
                                                    {rejectProcessing ? 'Rejecting...' : 'Reject'}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default DepositRequestDetail;
