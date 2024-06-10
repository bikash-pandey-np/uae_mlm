import React, { useState } from 'react';
import { FiMenu, FiChevronDown, FiX } from 'react-icons/fi'; // Import FiMenu and FiX for icons

const MenuBar = () => {
    const [showMenu, setShowMenu] = useState(false); // State to control menu visibility

    // Function to toggle menu visibility
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className="bg-gray-800 py-4 px-8">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <a href="#" className="flex items-center text-white text-lg font-semibold">
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

                <div className="hidden md:flex items-center">
                    <a href={route('login')} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Login
                    </a>
                    <a href={route('register')} className="ml-4 py-2 px-4 rounded-full border border-transparent shadow-sm register_btn" style={{ backgroundColor: '#fe4948', letterSpacing: '1.5px', color: '#f1f1f1' }}>Register</a>
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