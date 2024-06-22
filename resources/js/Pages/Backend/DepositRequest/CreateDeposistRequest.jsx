import React, { useEffect } from "react";
import { useForm } from "@inertiajs/inertia-react";

import Layout from "../Components/Layout";
import PageHeader from "../Components/PageHeader";

const CreateDepositRequest = ({ depositInfos, customers }) => {
    const { data, setData, post, processing, errors } = useForm({
        amount: "",
        currency: "INR",
        deposit_info_id: "",
        deposited_by: "",
        is_approved: false,
        status: "Pending",
        approved_amount: "",
        remark: "",
    });

    useEffect(() => {
        // Reset form data if type or currency changes
        if (data.currency === "INR") {
            setData({ ...data, is_approved: false });
        }
    }, [data.currency]);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("admin.add.deposit-requests"), data);
    };

    const breadcrumbItems = [
        { name: "Home", link: "/" },
        { name: "Deposit Info", link: "/dashboard" },
        { name: "Create", link: "#" },
    ];

    return (
        <Layout>
            <PageHeader
                title="Create Deposit Payment Request"
                buttonLabel="Back"
                buttonLink={route("admin.deposit-info")}
                breadcrumbItems={breadcrumbItems}
            />
            <form onSubmit={handleSubmit} className="mt-4 w-2/3 mx-auto">
                <div className="mb-4">
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="amount"
                    >
                        Amount (e.g., 123.45)
                    </label>
                    {errors.amount && (
                        <p className="text-red-500 text-xs italic">{errors.amount}</p>
                    )}
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        id="amount"
                        type="number"
                        step="0.01"
                        value={data.amount}
                        onChange={(e) => setData("amount", e.target.value)}
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="mb-4">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="currency"
                        >
                            Currency
                        </label>
                        {errors.currency && (
                            <p className="text-red-500 text-xs italic">{errors.currency}</p>
                        )}
                        <select
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="currency"
                            value={data.currency}
                            onChange={(e) => setData("currency", e.target.value)}
                        >
                            <option value="INR">INR</option>
                            <option value="USDT">USDT</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="depositInfoId"
                        >
                            Deposit Info ID
                        </label>
                        {errors.deposit_info_id && (
                            <p className="text-red-500 text-xs italic">{errors.deposit_info_id}</p>
                        )}
                        <select
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="depositInfoId"
                            value={data.deposit_info_id}
                            onChange={(e) => setData("deposit_info_id", e.target.value)}
                        >
                            <option value="">Select Deposit Info</option>
                            {depositInfos.map((info) => (
                                <option key={info.id} value={info.id}>{info.title}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="depositedBy"
                        >
                            Deposited By
                        </label>
                        {errors.deposited_by && (
                            <p className="text-red-500 text-xs italic">{errors.deposited_by}</p>
                        )}
                        <select
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="depositedBy"
                            value={data.deposited_by}
                            onChange={(e) => setData("deposited_by", e.target.value)}
                        >
                            <option value="">Select Customer</option>
                            {customers.map((customer) => (
                                <option key={customer.id} value={customer.id}>{customer.full_name}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="mb-4">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="isApproved"
                        >
                            Is Approved
                        </label>
                        {errors.is_approved && (
                            <p className="text-red-500 text-xs italic">{errors.is_approved}</p>
                        )}
                        <select
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="isApproved"
                            value={data.is_approved ? "true" : "false"}
                            onChange={(e) => setData("is_approved", e.target.value === "true")}
                        >
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="status"
                        >
                            Status
                        </label>
                        {errors.status && (
                            <p className="text-red-500 text-xs italic">{errors.status}</p>
                        )}
                        <select
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="status"
                            value={data.status}
                            onChange={(e) => setData("status", e.target.value)}
                        >
                            <option value="Pending">Pending</option>
                            <option value="Approved">Approved</option>
                            <option value="Rejected">Rejected</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="approvedAmount"
                        >
                            Approved Amount (e.g., 123.45)
                        </label>
                        {errors.approved_amount && (
                            <p className="text-red-500 text-xs italic">{errors.approved_amount}</p>
                        )}
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            id="approvedAmount"
                            type="number"
                            step="0.01"
                            value={data.approved_amount}
                            onChange={(e) => setData("approved_amount", e.target.value)}
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="remark"
                    >
                        Remark
                    </label>
                    {errors.remark && (
                        <p className="text-red-500 text-xs italic">{errors.remark}</p>
                    )}
                    <textarea
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        id="remark"
                        value={data.remark}
                        onChange={(e) => setData("remark", e.target.value)}
                    />
                </div>

                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                    type="submit"
                    disabled={processing}
                >
                    {processing ? "Submitting..." : "Submit"}
                </button>
            </form>
        </Layout>
    );
};

export default CreateDepositRequest;
