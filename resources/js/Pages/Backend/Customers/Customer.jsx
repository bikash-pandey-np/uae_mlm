import React, { useState } from 'react';
import Layout from "../Components/Layout";
import PageHeader from "../Components/PageHeader";
import Modal from "../Components/Modal";
import { AiFillEye, AiFillEdit, AiOutlineBlock, AiOutlineCheckCircle, AiOutlineDisconnect } from 'react-icons/ai';

const Customer = ({ customers }) => {
    const [openModalId, setOpenModalId] = useState(null);
    const [currentCustomer, setCurrentCustomer] = useState(null);
    console.log(customers);
    const breadcrumbItems = [
        { name: 'Home', link: '/' },
        { name: 'Customers', link: '/customers' },
    ];

    const handleOpenModal = (customer) => {
        setOpenModalId(customer.id);
        setCurrentCustomer(customer);
    };

    const handleCloseModal = () => {
        setOpenModalId(null);
        setCurrentCustomer(null);
    };
   
    return (
        <Layout>
            <PageHeader 
                title="Manage Customers" 
                buttonLabel="Add New" 
                buttonLink="/customers/create"
                breadcrumbItems={breadcrumbItems} 
            />
 
            <table className="min-w-full divide-y divide-gray-200 mt-4">
                <thead className="bg-gray-50">
                   <tr>
                       <th scope="col" className="px-6 py-3 text-left font-bold text-gray-500 uppercase tracking-wider">
                           Full Name
                       </th>
                       <th scope="col" className="px-6 py-3 text-left font-bold text-gray-500 uppercase tracking-wider">
                           Email
                       </th>
                       <th scope="col" className="px-6 py-3 text-left font-bold text-gray-500 uppercase tracking-wider">
                           Customer Code
                       </th>
                       <th scope="col" className="px-6 py-3 text-left font-bold text-gray-500 uppercase tracking-wider">
                           Contact Number
                       </th>
                       <th scope="col" className="px-6 py-3 text-left font-bold text-gray-500 uppercase tracking-wider">
                           Action
                       </th>
                   </tr>
                </thead>
                
                <tbody className="bg-white divide-y divide-gray-200">
                    {customers.map((customer, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-black-500">
                                {customer.full_name} - <b>{customer.balance} USDT</b>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-black-500">
                                {customer.email}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-black-500">
                                {customer.customer_code}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-black-500">
                                {`+${customer.country_code} ${customer.contact_number}`}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-md text-black-500">
                                <AiFillEye onClick={() => handleOpenModal(customer)} className="text-blue-500 hover:text-blue-700 cursor-pointer" />
                                <br />
                                {customer.is_active ? 
                                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-sm">
  Block
</button>
 : <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded text-sm">
 UnBlock
</button>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {currentCustomer && (
                <Modal isOpen={openModalId === currentCustomer.id} onClose={handleCloseModal}>
                    <h1 className="font-bold mb-3">{currentCustomer.full_name} Details</h1>
                    <p>Balance: <span className='font-bold'>{currentCustomer.balance} USDT</span></p>
                    <p>Full Name: <span className='font-bold'>{currentCustomer.full_name}</span></p>
                    <p>Email: <span className='font-bold'>{currentCustomer.email}</span></p>
                    <p>Customer Code: <span className='font-bold'>{currentCustomer.customer_code}</span></p>
                    <p>Contact Number: <span className='font-bold'>{`+${currentCustomer.country_code} ${currentCustomer.contact_number}`}</span></p>
                    <br />
                    <p>Registered At: <span className='font-bold'>{currentCustomer.created_at}</span></p>
                    <p>Updated At: <span className='font-bold'>{currentCustomer.updated_at}</span></p>
                    <br />
                    <p>Account Status: <span className='font-bold'>{currentCustomer.is_active ? 'Active' : 'Inactive'}</span></p>
                    <p>Is Verified: <span className='font-bold'>{currentCustomer.is_verified ? 'Verified' : 'Not Verified'}</span></p>
                    <br />
                    <p>Profile Img: <span className='font-bold'>{currentCustomer.profile_img}</span></p>
                    <p>Doc Img: <span className='font-bold'>{currentCustomer.doc_img}</span></p>
                    
                </Modal>
            )}
        </Layout>
    );
}

export default Customer;
