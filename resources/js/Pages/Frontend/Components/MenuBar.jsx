import { FiChevronDown } from 'react-icons/fi';

const MenuBar = () => {
    return (
        <nav className="bg-gray-800 py-4 px-8">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <a href="#" className="flex items-center text-white text-lg font-semibold">
                        TheCapex <sup>Pro</sup>
                    </a>
                </div>
                <div className="hidden md:flex items-center justify-center space-x-3">
                    {/* Home Nav Item */}
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>

                    {/* Market Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            Market <FiChevronDown />
                        </button>
                        {/* Dropdown Content */}
                        <div className="absolute left-0 hidden group-hover:block bg-gray-700 text-gray-300 rounded-md shadow-lg">
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
                        <div className="absolute left-0 hidden group-hover:block bg-gray-700 text-gray-300 rounded-md shadow-lg">
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
                        <div className="absolute left-0 hidden group-hover:block bg-gray-700 text-gray-300 rounded-md shadow-lg">
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
                        <div className="absolute left-0 hidden group-hover:block bg-gray-700 text-gray-300 rounded-md shadow-lg">
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
                    <a href={route('register')} className="ml-4 py-2 px-4 rounded-full border border-transparent shadow-sm register_btn">Register</a>
                </div>
            </div>
        </nav>
    );
}

export default MenuBar;
