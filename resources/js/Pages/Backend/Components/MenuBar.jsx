import React, { useState } from 'react';

const MenuBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isUserMenuOpen, setUserMenuOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const toggleUserMenu = () => {
        setUserMenuOpen(!isUserMenuOpen);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button */}
                        <button type="button" onClick={toggleMobileMenu} className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            {/* Icon when menu is closed. */}
                            {!isMobileMenuOpen && (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                            {/* Icon when menu is open. */}
                            {isMobileMenuOpen && (
                                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a>
                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Customers</a>
                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</a>
                                {/* Actions dropdown */}
                                <div className="relative inline-block text-left">
                                    <div>
                                        <button type="button" onClick={toggleDropdown} className="inline-flex justify-center w-full rounded-md px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
                                            Settings
                                        </button>
                                    </div>
                                    {isOpen && (
                                        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Deposit Accounts</a>
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">General Setting</a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        {/* User profile dropdown */}
                        <div className="relative">
                            <button onClick={toggleUserMenu} className="flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid" id="user-menu" aria-label="User menu" aria-haspopup="true">
                                <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            </button>
                            {isUserMenuOpen && (
                                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                                    <div className="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Logout</a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile menu, show/hide based on menu state. */}
            {isMobileMenuOpen && (
                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Customers</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default MenuBar;
