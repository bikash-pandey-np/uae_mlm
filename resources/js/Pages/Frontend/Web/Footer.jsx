import React from 'react';
import logo from '../../../../images/capex_email_logo.svg'; // Replace with your logo path

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-800 text-white py-8">
    <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div>
          <a>
          <img src={logo} style={{ width:'24%' }}/>
          </a>
            <p className='mt-2'>
            Capex Pro is a premier trading platform for both Crypto and Stocks, offering users a seamless and intuitive experience to manage their investments and stay informed with real-time market data.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul>
              <li><a href={route('homepage')} className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            Capex Pro LLC,<br />
            <p>support@capexpro.com</p>
            <p>
            Office 183, Business Bay,<br />
            Dubai, UAE<br />
            </p>
          </div>
        </div>
      </div>
     
    </footer>
    <div className="bg-gray-900 text-gray-400 text-center py-4">
      <p>&copy; {new Date().getFullYear()} The Capex Pro. All rights reserved.</p>
    </div>
    </>

  );
};

export default Footer;
