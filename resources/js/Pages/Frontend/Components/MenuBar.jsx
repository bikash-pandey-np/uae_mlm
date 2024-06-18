import React, { useState } from 'react';
import { usePage } from '@inertiajs/inertia-react';

import { FiMenu, FiChevronDown, FiX } from 'react-icons/fi'; // Import FiMenu and FiX for icons

const MenuBar = () => {
    const { is_customer_auth } = usePage().props;
    console.log(is_customer_auth);
    const [showMenu, setShowMenu] = useState(false); // State to control menu visibility
    const [isUserMenuOpen, setUserMenuOpen] = useState(false);

    // Function to toggle menu visibility
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const toggleUserMenu = () => {
        setUserMenuOpen(!isUserMenuOpen);
    };

    return (
        <nav className="bg-gray-700 bg-opacity-90 py-4 px-8">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <a href={route('homepage')} className="flex items-center text-white text-lg font-semibold">
                        TheCapex <sup>Pro</sup>
                    </a>
                </div>
                <div className="md:hidden"> {/* Show toggler on smaller screens */}
                    <button onClick={toggleMenu} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        <FiMenu />
                    </button>
                </div>
                <div className={`md:flex md:items-center md:justify-center md:space-x-3 hidden`}> 
                    {/* Home Nav Item */}
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>

                    {/* Market Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            Market <FiChevronDown />
                        </button>
                        {/* Dropdown Content */}
                        <div className="absolute left-0 hidden group-hover:block bg-gray-700 text-gray-300 rounded-md shadow-lg z-10">
                        <a href={route('market.crypto')} className="block px-4 py-2 hover:bg-gray-700">Crypto</a>
                            <a href={route('market.shares')} className="block px-4 py-2 hover:bg-gray-700">Stocks</a>
                        </div>
                    </div>

                    {/* Resources Dropdown */}
                    {!is_customer_auth ? (<div className="relative group">
                        <button className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            Resources <FiChevronDown />
                        </button>
                        {/* Dropdown Content */}
                        <div className="absolute left-0 hidden group-hover:block bg-gray-700 text-gray-300 rounded-md shadow-lg z-10">
                        <a href="#" className="block px-4 py-2 hover:bg-gray-700">News</a>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-700">Academy</a>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-700">Financial dictionary</a>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-700">Account Types</a>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-700">Trading Conditions</a>
                        </div>
                    </div>) : null}

                    {/* Company Dropdown */}
                    {!is_customer_auth ? (<div className="relative group">
                        <button className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            Company <FiChevronDown />
                        </button>
                        {/* Dropdown Content */}
                        <div className="absolute left-0 hidden group-hover:block bg-gray-700 text-gray-300 rounded-md shadow-lg z-10">
                        <a href="#" className="block px-4 py-2 hover:bg-gray-700">About Us</a>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-700">Sponsorships</a>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-700">Awards</a>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-700">Licenses & Regulations</a>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-700">Safety</a>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-700">Contact Us</a>
                        </div>
                    </div>) : null }

                    {/* Become a Partner Dropdown */}
                    {!is_customer_auth ? (<div className="relative group">
                        <button className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            Become a Partner <FiChevronDown />
                        </button>
                        {/* Dropdown Content */}
                        <div className="absolute left-0 hidden group-hover:block bg-gray-700 text-gray-300 rounded-md shadow-lg z-10">
                        <a href="#" className="block px-4 py-2 hover:bg-gray-700">Item1</a>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-700">Item2</a>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-700">Item3</a>
                        </div>
                    </div>) : null }
                    
                    {is_customer_auth && (
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Trade</a>
                    )}
                </div>
                <div className='flex item-center'>
                {!is_customer_auth ? (
                    // Render login and register links for non-authenticated users
                    <div className="hidden md:flex items-center">
                        <a href={route('login')} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            Login
                        </a>
                        <a href={route('register')} className="ml-4 py-2 px-4 rounded-full border border-transparent shadow-sm register_btn" style={{ backgroundColor: '#fe4948', letterSpacing: '1.5px', color: '#f1f1f1' }}>Register</a>
                    </div>
                ) : (
                    // Render user profile dropdown for authenticated customers
                    <div className="relative">
                        <button onClick={toggleUserMenu} className="flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid" id="user-menu" aria-label="User menu" aria-haspopup="true">
                            <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        </button>
                        {isUserMenuOpen && (
                            <div className="origin-top-right absolute right-0 z-10 mt-2 w-48 rounded-md shadow-lg z-10">
                            <div className="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                                <h3 className='block px-4 py-2 bg-blue-200 text-black-300'>Balance: 120 USDT</h3>
                                <a href={route('dashboard')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" role="menuitem">Dashboard</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" role="menuitem">Profile</a>
                                <a href={route('deposit')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" role="menuitem">Deposit</a>
                                <a href={route('withdraw')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" role="menuitem">Withdraw</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">Trade History</a>
                                <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" role="menuitem">Logout</button>
                            </div>
                        </div>
                        )}
                    </div>
                )}
                </div>

               

                 
            </div>
             {/* Sidebar */}
             <div className={`sidebar bg-gray-800 w-1/2 md:w-auto z-50 overflow-y-auto ${showMenu ? 'block' : 'hidden md:hidden'}`}>
             {/* Logo */}
             <div className="flex items-center justify-between px-6 py-4">
             <a href="#" className="text-white text-lg font-semibold">
                 TheCapex <sup>Pro</sup>
             </a>
             {/* Close Icon */}
             <button onClick={toggleMenu} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                 <FiX />
             </button>
         </div>
             {/* Menu Items */}
        <div className="mt-5">
            {/* Home Nav Item */}
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium">Home</a>
            {/* Market Dropdown */}
            <div className="relative group">
                <button className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Market <FiChevronDown />
                </button>
                {/* Dropdown Content */}
                <div className="absolute left-0 hidden group-hover:block bg-gray-700 text-gray-300 rounded-md shadow-lg z-10">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">Crypto</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">Stocks</a>
                </div>
            </div>
            {/* Resources Dropdown */}
            <div className="relative group">
                <button className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Resources <FiChevronDown />
                </button>
                {/* Dropdown Content */}
                <div className="absolute left-0 hidden group-hover:block bg-gray-700 text-gray-300 rounded-md shadow-lg z-10">
                <a href="#" className="block px-4 py-2 hover:bg-gray-700">News</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">Academy</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">Financial dictionary</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">Account Types</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">Trading Conditions</a>
                </div>
            </div>
            {/* Company Dropdown */}
            <div className="relative group">
                <button className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Company <FiChevronDown />
                </button>
                {/* Dropdown Content */}
                <div className="absolute left-0 hidden group-hover:block bg-gray-700 text-gray-300 rounded-md shadow-lg z-10">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">About Us</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">Sponsorships</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">Awards</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">Licenses & Regulations</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">Safety</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">Contact Us</a>
                </div>
            </div>
            {/* Become a Partner Dropdown */}
            <div className="relative group">
                <button className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Become a Partner <FiChevronDown />
                </button>
                {/* Dropdown Content */}
                <div className="absolute left-0 hidden group-hover:block bg-gray-700 text-gray-300 rounded-md shadow-lg z-10">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">Item1</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">Item2</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">Item3</a>
                </div>
            </div>
        </div>
        <div className="md:flex items-center mt-6 ml-8">
    <a href="#" className="ml-4 py-2 px-4 rounded-full border border-transparent shadow-sm mbl_login_btn">
        Login
    </a>
    <a href="#" className="ml-4 py-2 px-4 rounded-full border border-transparent shadow-sm register_btn">Register</a>
</div>

    </div>
        </nav>
    );
}


export default MenuBar;