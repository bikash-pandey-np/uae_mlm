import React, { useEffect } from "react";
import { useForm } from "@inertiajs/inertia-react";

import Layout from "../Components/Layout";
import PageHeader from "../Components/PageHeader";

const UpdateInfo = ({ selected }) => {
    const { data, setData, post, processing, errors } = useForm({
        title: selected.title,
        is_active: selected.is_active ? 'active' : 'inactive',
        currency: selected.currency,
        type: selected.type,
        wallet_address: selected.wallet_address || '',
        network_type: selected.network_type || '',
        flat_account_name: selected.flat_account_name || '',
        flat_bank_name: selected.flat_bank_name || '',
        flat_account_no: selected.flat_account_no || '',
        deposit_instruction: selected.deposit_instruction,
    });

    useEffect(() => {
        // Update currency and wallet_address if type changes
        if (data.type === "flat") {
            setData({
                ...data,
                currency: "INR",
                wallet_address: "",
            });
        } else if (data.type === "crypto") {
            setData({
                ...data,
                currency: "USDT",
                flat_account_name: "",
                flat_bank_name: "",
                flat_account_no: "",
            });
        }
    }, [data.type]);

    useEffect(() => {
        // Update type and flat fields if currency changes
        if (data.currency === "INR") {
            setData({
                ...data,
                type: "flat",
                wallet_address: '',
            });
        } else if (data.currency === "USDT") {
            setData({
                ...data,
                type: "crypto",
                flat_account_name: "",
                flat_bank_name: "",
                flat_account_no: "",
            });
        }
    }, [data.currency]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.is_active === 'active') {
            setData('is_active', true);
        } else if (data.is_active === 'inactive') {
            setData('is_active', false);
        }
        post(route('admin.update.deposit-info', selected.id), data);
    };

    const breadcrumbItems = [
        { name: "Home", link: "/" },
        { name: "Deposit Info", link: "/dashboard" },
        { name: "Create", link: "#" },
    ];

    return (
        <Layout>
            <PageHeader
                title="Update Deposit Payment Info"
                buttonLabel="Back"
                buttonLink={route("admin.deposit-info")}
                breadcrumbItems={breadcrumbItems}
            />
            <form onSubmit={handleSubmit} className="mt-4 w-2/3 mx-auto">
                <div className="mb-4">
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="title"
                    >
                        Title
                    </label>
                    {errors.title && (
                        <p className="text-red-500 text-xs italic">{errors.title}</p>
                    )}
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        id="title"
                        type="text"
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="mb-4">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="isActive"
                        >
                            Is Active
                        </label>
                        {errors.is_active && (
                            <p className="text-red-500 text-xs italic">{errors.is_active}</p>
                        )}
                        <select
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="isActive"
                            value={data.is_active}
                            onChange={(e) => setData("is_active", e.target.value)}
                        >
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
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
                            htmlFor="type"
                        >
                            Type
                        </label>
                        {errors.type && (
                            <p className="text-red-500 text-xs italic">{errors.type}</p>
                        )}
                        <select
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="type"
                            value={data.type}
                            onChange={(e) => setData("type", e.target.value)}
                        >
                            <option value="flat">Flat</option>
                            <option value="crypto">Crypto</option>
                        </select>
                    </div>
                </div>

                {data.type === "crypto" || data.currency === "USDT" ? (
                    <div className="grid grid-cols-2 gap-6">
                        <div className="mb-4 col-span-1">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="networkType"
                            >
                                Network Type
                            </label>
                            {errors.network_type && (
                                <p className="text-red-500 text-xs italic">{errors.network_type}</p>
                            )}
                            <select
                                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="networkType"
                                value={data.network_type}
                                onChange={(e) => setData("network_type", e.target.value)}
                            >
                                <option value="TRC20">TRC20</option>
                                <option value="ERC20">ERC20</option>
                            </select>
                        </div>

                        <div className="mb-4 col-span-2">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="walletAddress"
                            >
                                Wallet Address
                            </label>
                            {errors.wallet_address && (
                                <p className="text-red-500 text-xs italic">{errors.wallet_address}</p>
                            )}
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                id="walletAddress"
                                type="text"
                                value={data.wallet_address}
                                onChange={(e) => setData("wallet_address", e.target.value)}
                            />
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-3 gap-6">
                        <div className="mb-4">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="flatAccountName"
                            >
                                Flat Account Name
                            </label>
                            {errors.flat_account_name && (
                                <p className="text-red-500 text-xs italic">{errors.flat_account_name}</p>
                            )}
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                id="flatAccountName"
                                type="text"
                                value={data.flat_account_name}
                                onChange={(e) => setData("flat_account_name", e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="flatBankName"
                            >
                                Flat Bank Name
                            </label>
                            {errors.flat_bank_name && (
                                <p className="text-red-500 text-xs italic">{errors.flat_bank_name}</p>
                            )}
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                id="flatBankName"
                                type="text"
                                value={data.flat_bank_name}
                                onChange={(e) => setData("flat_bank_name", e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="flatAccountNo"
                            >
                                Flat Account No
                            </label>
                            {errors.flat_account_no && (
                                <p className="text-red-500 text-xs italic">{errors.flat_account_no}</p>
                            )}
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                id="flatAccountNo"
                                type="text"
                                value={data.flat_account_no}
                                onChange={(e) => setData("flat_account_no", e.target.value)}
                            />
                        </div>
                    </div>
                )}

                <div className="mb-4">
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="depositInstruction"
                    >
                        Deposit Instruction
                    </label>
                    {errors.deposit_instruction && (
                        <p className="text-red-500 text-xs italic">{errors.deposit_instruction}</p>
                    )}
                    <textarea
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        id="depositInstruction"
                        value={data.deposit_instruction}
                        onChange={(e) => setData("deposit_instruction", e.target.value)}
                    />
                </div>

                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                    type="submit"
                    disabled={processing}
                >
                    Update
                </button>
            </form>
        </Layout>
    );
};

export default UpdateInfo;
