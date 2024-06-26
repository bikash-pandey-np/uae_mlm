import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

import { usePage } from '@inertiajs/inertia-react';
import { FiMenu, FiChevronDown, FiX } from 'react-icons/fi';
import user_profile from '../../../../images/profile.png'
import Logo from './Logo';
const MenuBar = ({balance}) => {
    const { is_customer_auth } = usePage().props;
    const [showMenu, setShowMenu] = useState(false);
    const [isUserMenuOpen, setUserMenuOpen] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const toggleUserMenu = () => {
        setUserMenuOpen(!isUserMenuOpen);
    };

    const mobileCss = {
            'marginRight' : '0.4rem'
       }
    
    const handleLogout = (e) => {
        e.preventDefault();
        console.log('logout clicked');
        Inertia.post(route('customer_logout'));
            
    }
    return (
        <div className='container'>
        <nav className="bg-gray-800 py-4 px-8">
            <div className="container mx-auto flex justify-between">
                {/* Logo */}
                <div className="flex items-center">
                   <Logo />
                </div>
                {/* Mobile Menu Toggler */}
               
                {/* Desktop Menu Items */}
                <div className="md:flex md:items-center md:justify-center hidden">
                    <a href="#" className="text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md">Home</a>
                    {/* Market Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md">
                            Market <FiChevronDown className="h-4 w-4" />
                        </button>
                        {/* Dropdown Content */}
                        <div className="absolute left-0 hidden group-hover:block bg-gray-700 text-gray-300 rounded-md shadow-lg z-10">
                            <a href={route('market.crypto')} className="block px-4 py-2 hover:bg-gray-600">Crypto</a>
                            <a href={route('market.shares')} className="block px-4 py-2 hover:bg-gray-600">Stocks</a>
                        </div>
                    </div>
                    {/* Resources Dropdown */}
                    {!is_customer_auth && (
                        <div className="relative group">
                            <button className="flex items-center text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md">
                                Resources <FiChevronDown className="h-4 w-4" />
                            </button>
                            {/* Dropdown Content */}
                            <div className="absolute left-0 hidden group-hover:block bg-gray-700 text-gray-300 rounded-md shadow-lg z-10">
                                <a href="#" className="block px-4 py-2 hover:bg-gray-600">News</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-600">Academy</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-600">Financial dictionary</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-600">Account Types</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-600">Trading Conditions</a>
                            </div>
                        </div>
                    )}
                    {/* Company Dropdown */}
                    {!is_customer_auth && (
                        <div className="relative group">
                            <button className="flex items-center text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md">
                                Company <FiChevronDown className="h-4 w-4" />
                            </button>
                            {/* Dropdown Content */}
                            <div className="absolute left-0 hidden group-hover:block bg-gray-700 text-gray-300 rounded-md shadow-lg z-10">
                                <a href="#" className="block px-4 py-2 hover:bg-gray-600">About Us</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-600">Sponsorships</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-600">Awards</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-600">Licenses & Regulations</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-600">Safety</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-600">Contact Us</a>
                            </div>
                        </div>
                    )}
                    {/* Become a Partner Dropdown */}
                    {!is_customer_auth && (
                        <div className="relative group">
                            <button className="flex items-center text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md">
                                Become a Partner <FiChevronDown className="h-4 w-4" />
                            </button>
                            {/* Dropdown Content */}
                            <div className="absolute left-0 hidden group-hover:block bg-gray-700 text-gray-300 rounded-md shadow-lg z-10">
                                <a href="#" className="block px-4 py-2 hover:bg-gray-600">Affiliate Program</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-600">Agent Program</a>
                            </div>
                        </div>
                    )}
                    {/* Trade link - Show only if authenticated */}
                    {is_customer_auth && (
                        <a href="#" className="text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md">Trade</a>
                    )}
                </div>
                <div className="flex items-center">
                <div className="flex md:hidden items-center">
                <div className="flex-1 flex items-center justify-end" style={mobileCss}>
                    <button onClick={toggleMenu} className="text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md">
                        <FiMenu className="h-6 w-6" />
                    </button>
                </div>
            </div>
                    {!is_customer_auth ? (
                        <div className="hidden md:flex items-center">
                            <a href={route('login')} className="text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md">
                                Login
                            </a>
                            <a href={route('register')} className="ml-4 py-2 px-4 rounded-full border border-transparent shadow-sm register_btn" style={{ backgroundColor: '#fe4948', letterSpacing: '1.5px', color: '#f1f1f1' }}>Register</a>
                        </div>
                    ) : (
                        <div className="relative">
                            <button onClick={toggleUserMenu} className="flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid" id="user-menu" aria-label="User menu" aria-haspopup="true">
                                <img className="h-8 w-8 rounded-full" src={user_profile} alt="" />
                            </button>
                            {isUserMenuOpen && (
                                <div className="origin-top-right absolute right-0 z-10 mt-2 w-48 rounded-md shadow-lg z-10">
                                    <div className="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                                        <h3 className='block px-4 py-2 bg-blue-200 text-black-300'>Balance: {balance} USDT</h3>
                                        <a href={route('dashboard')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" role="menuitem">Dashboard</a>
                                        <a href={route('deposit')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" role="menuitem">Deposit</a>
                                        <a href={route('withdraw')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" role="menuitem">Withdraw</a>
                                        <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" 
                                            role="menuitem"
                                            onClick={(e) => handleLogout(e)
                                                
                                            }>Logout</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
            {/* Sidebar - Responsive menu */}
            <div className={`sidebar bg-gray-700 w-3/5 md:w-auto z-50 overflow-y-auto ${showMenu ? 'block' : 'hidden md:hidden'}`}>
                {/* Logo and close button */}
                <div className="flex items-center justify-between px-6 py-4">
                <Logo />

                    <button onClick={toggleMenu} className="text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md">
                        <FiX className="h-6 w-6" />
                    </button>
                </div>
                {/* Mobile Menu Items */}
                <div className="mt-6">
                    <a href="#" className="block text-gray-300 hover:bg-gray-600 hover:text-white px-4 py-2">Home</a>
                    {/* Market Dropdown */}
                    <div className="relative group mt-1">
                        <button className="flex items-center text-gray-300 hover:bg-gray-600 hover:text-white px-4 py-2">
                            Market <FiChevronDown className="h-4 w-4" />
                        </button>
                        {/* Dropdown Content */}
                        <div className="absolute left-0 hidden group-hover:block bg-gray-700 text-gray-300 rounded-md shadow-lg z-10">
                            <a href={route('market.crypto')} className="block px-4 py-2 hover:bg-gray-600">Crypto</a>
                            <a href={route('market.shares')} className="block px-4 py-2 hover:bg-gray-600">Stocks</a>
                        </div>
                    </div>
                    {/* Resources Dropdown */}
                    {!is_customer_auth && (
                        <div className="relative group mt-1">
                            <button className="flex items-center text-gray-300 hover:bg-gray-600 hover:text-white px-4 py-2">
                                Resources <FiChevronDown className="h-4 w-4" />
                            </button>
                            {/* Dropdown Content */}
                            <div className="absolute left-0 hidden group-hover:block bg-gray-700 text-gray-300 rounded-md shadow-lg z-10">
                                <a href="#" className="block px-4 py-2 hover:bg-gray-600">News</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-600">Academy</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-600">Financial dictionary</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-600">Account Types</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-600">Trading Conditions</a>
                            </div>
                        </div>
                    )}
                    {/* Company Dropdown */}
                    {!is_customer_auth && (
                        <div className="relative group mt-1">
                            <button className="flex items-center text-gray-300 hover:bg-gray-600 hover:text-white px-4 py-2">
                                Company <FiChevronDown className="h-4 w-4" />
                            </button>
                            {/* Dropdown Content */}
                            <div className="absolute left-0 hidden group-hover:block bg-gray-700 text-gray-300 rounded-md shadow-lg z-10">
                                <a href="#" className="block px-4 py-2 hover:bg-gray-600">About Us</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-600">Sponsorships</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-600">Awards</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-600">Licenses & Regulations</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-600">Safety</a>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-600">Contact Us</a>
                            </div>
                        </div>
                    )}
                    {/* Become a Partner Dropdown */}
                    {!is_customer_auth && (
                        <div className="relative group mt-1">
                            <button className="flex items-center text-gray-300 hover:bg-gray-600 hover:text-white px-4 py-2">
                                Become a Partner <FiChevronDown className="h-4 w-4" />
                            </button>
                            {/* Dropdown Content */}
                            <div className="absolute left-0 hidden group-hover:block bg-gray-700 text-gray-300 rounded-md shadow-lg z-10">
                            <a href="#" className="block px-4 py-2 hover:bg-gray-600">Affiliate Program</a>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-600">Agent Program</a>
                        </div>
                        </div>
                    )}
                    {/* Trade link - Show only if authenticated */}
                    {is_customer_auth && (
                        <a href="#" className="text-gray-300 hover:bg-gray-600 hover:text-white px-4 py-2 mt-1">Trade</a>
                    )}
                </div>
                {/* User menu - Show login/register or user profile dropdown */}
                <div className="mt-6">
                    {!is_customer_auth ? (
                        <div className="flex flex-col items-center">
                            <a href={route('login')} className="text-gray-300 hover:bg-gray-600 hover:text-white px-4 py-2">Login</a>
                            <a href={route('register')} className="mt-2 py-2 px-4 rounded-full border border-transparent shadow-sm register_btn" style={{ backgroundColor: '#fe4948', letterSpacing: '1.5px', color: '#f1f1f1' }}>Register</a>
                        </div>
                    ) :null}
                </div>
            </div>
        </nav>
        </div>
    );
};

export default MenuBar;
