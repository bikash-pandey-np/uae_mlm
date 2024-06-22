import React, { useState } from 'react';
import Layout from "../Components/Layout";
import PageHeader from "../Components/PageHeader";
import ToggleSwitch from "../Components/ToggleSwitch";
import { AiFillEye, AiFillEdit } from 'react-icons/ai'; 
import Modal from "../Components/Modal";

const DepositInfo = ({rows}) => {
    const [openModalId, setOpenModalId] = useState(null);
    const [currentRow, setCurrentRow] = useState(null);

    const breadcrumbItems = [
        { name: 'Home', link: '/' },
        { name: 'Deposit Info', link: '/dashboard' },
    ];

    const updateStatus = (isChecked) => {
        console.log(`Toggle is now ${isChecked ? 'ON' : 'OFF'}`);
    }
    console.log('props', rows);
    const handleOpenModal = (row) => {
        setOpenModalId(row.id);
        setCurrentRow(row);
    };

    const handleCloseModal = () => {
        setOpenModalId(null);
        setCurrentRow(null);
    };

    return (
        <Layout>
            <PageHeader 
                title="Manage Deposit Payment Info" 
                buttonLabel="Add New" 
                buttonLink={route('admin.create.deposit-info') }
                breadcrumbItems={breadcrumbItems} 
            />
 
            <table className="min-w-full divide-y divide-gray-200 mt-4">
                <thead className="bg-gray-50">
                   <tr>
                   <th scope="col" className="px-6 py-3 text-left font-bold text-gray-500 uppercase tracking-wider">
                   Title
               </th>
               <th scope="col" className="px-6 py-3 text-left font-bold text-gray-500 uppercase tracking-wider">
                   Type
               </th>
              
              
               <th scope="col" className="px-6 py-3 text-left font-bold text-gray-500 uppercase tracking-wider">
                   Is Active
               </th>
               <th scope="col" className="px-6 py-3 text-left font-bold text-gray-500 uppercase tracking-wider">
                   Action
               </th>
               </tr>

                </thead>
                

                <tbody className="bg-white divide-y divide-gray-200">
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-black-500">
                                {row.title}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-black-500">
                                {row.type} ({row.currency})
                            </td>
                           
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-black-500">
                                <ToggleSwitch id={row.id} defaultChecked={row.is_active} 
                                    onChange={updateStatus}/>

                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-black-500">
                            <div className="flex items-center">
                            <a className='bg-blue-500 text-white px-3 py-1'
                            onClick={() => handleOpenModal(row)}
                            >
                            <AiFillEye
                            className="text-white hover:text-blue-700 cursor-pointer"
                        /> Info
                            </a>
                        <a href={route('admin.update.deposit-info', row.id)} className="ml-2 flex items-center bg-yellow-500 px-4 py-2">
                            <AiFillEdit className="text-green-500 hover:text-green-700 cursor-pointer" />
                            <span className="ml-1">Update</span>
                        </a>
                                {openModalId === row.id && (
                                    <Modal isOpen={openModalId === row.id} onClose={handleCloseModal}>
                                    <h1 className="font-bold mb-3">{currentRow.title} Details</h1>
                                    <p>Title: <span className='font-bold'>{currentRow.title}</span></p>
                                    <p>Type: <span className='font-bold'>{currentRow.type}</span></p>
                                    <p>Status: <span className='font-bold'>{currentRow.is_active ? 'Active' : 'InActive'}</span></p>
                                    <br />
                                    <p>Currency: <span className='font-bold'>{currentRow.currency}</span></p>
                                    <br />
                                    <p>Created At: <span className='font-bold'>{currentRow.created_at}</span></p>
                                    <p>Last Updated At: <span className='font-bold'>{currentRow.updated_at}</span></p>
                                    <br />
                                    {currentRow.type === 'flat' && (
                                        <>
                                            <p>Account Name: <span className='font-bold'>{currentRow.flat_account_name}</span></p>
                                            <p>Bank Name: <span className='font-bold'>{currentRow.flat_bank_name}</span></p>
                                            <p>Account No: <span className='font-bold'>{currentRow.flat_account_no}</span></p>
                                        </>
                                    )}
                                    {currentRow.type === 'crypto' && (
                                        <>
                                            <p>Wallet Address: <span className='font-bold'>{currentRow.wallet_address}</span></p>
                                            <p>Network Type: <span className='font-bold'>{currentRow.network_type}</span></p>
                                        </>
                                    )}
                                    <br />
                                    <p>Deposit Instructions: 
                                    <span className='font-bold'>{currentRow.deposit_instruction}</span></p>
                                </Modal>
                                
                                
                                )}
                            </div>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>

        </Layout>
    );
}

export default DepositInfo;
