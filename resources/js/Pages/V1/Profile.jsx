import React, { useState, useEffect } from 'react';
import SwitchComponent from './Components/SwitchComponent';
import { FaWallet } from "react-icons/fa";
import Layout from "./Components/Layout";
import { Inertia } from '@inertiajs/inertia';

import { FiUsers } from 'react-icons/fi';
import CardDisplay from './Components/CardDisplay';


const Profile = ({user, member_date}) => {
    useEffect(() => {
        document.title = "Profile | TheCapex.pro";

    }, []);

    const handleLogout = (e) => {
        e.preventDefault();
        console.log('logout clicked');
        Inertia.post(route('customer_logout'));
            
    }
    return (
        <Layout>
            <section
        style={{ marginTop: '5rem', marginBottom: '5rem' }}

            >
                <h2 className='text-xl mx-4 my-4'>Profile</h2>
                <div className="bg-white p-4 shadow-md rounded-md">
                <div className="mb-4">
                    <p className="mb-2">Full Name: <span className="font-bold">{user.full_name}</span></p>
                    <p className="mb-2">Email: <span className="font-bold">{user.email}</span></p>
                    <p className="mb-2">Country Code: <span className="font-bold">+{user.country_code}</span></p>
                    <p className="mb-2">Phone: <span className="font-bold">{user.contact_number}</span></p>
                    <p className="mb-2">Code: <span className="font-bold">{user.customer_code}</span></p>
                    <p className="mb-2">Status: <span className="font-bold">{user.is_active ? 'Active' : 'Blocked'}</span></p>
                    <p className="mb-2">Verification Status: <span className="font-bold">{user.is_verified ? 'Verified' : 'Not Verified'}</span></p>
                </div>
            </div>
            <div className="bg-white p-4 shadow-md rounded-md mt-4">
            <ul>
                <li>
                 <p className="mb-2">Member since: <span className="font-bold">{member_date }</span></p>
                </li>
               
            </ul>
            </div>
            <div className="bg-white p-4 shadow-md rounded-md mt-4 hover:bg-gray-300 hover:cursor-pointer">
            <ul>
                <li>
                    <a>Change password</a>
                </li>
               
            </ul>
            </div>
            <div className="bg-white p-4 shadow-md rounded-md mt-4 hover:bg-gray-300 hover:cursor-pointer">
            <ul>
                <li>
                    <a
                    onClick={(e) => handleLogout(e)}
                    >Log out</a>
                </li>
               
            </ul>
            </div>
               
            </section>
        </Layout>
    );
}

export default Profile;
