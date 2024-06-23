import React, {useState} from 'react';
import Layout from "../Components/Layout";
import PageHeader from "../Components/PageHeader";
import { Inertia } from '@inertiajs/inertia';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import CountdownTimer from '../Components/CountdownTimer';

const ListTrade = ({ trades, search }) => {
    console.log(trades);
    const [searchQuery, setSearchQuery] = useState('');

    const breadcrumbItems = [
        { name: 'Home', link: '/' },
        { name: 'Deposit Info', link: '/dashboard' },
    ];

    const handleSearchInputChange = (event) => {
        const { value } = event.target;
        setSearchQuery(value);
    };

    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            Inertia.get(route('admin.trades'), { search: searchQuery });
        }
    };

    const cancelSearch = () => {
        setSearchQuery('');
        Inertia.get(route('admin.trades'));
    };
  return (
    <Layout>
    <PageHeader 
    title="Manage Trades" 
    breadcrumbItems={breadcrumbItems} 
/>
     {/* Search input */}
     <div className="my-4 mx-auto max-w-md">
     <input
         type="search"
         value={searchQuery}
         onChange={handleSearchInputChange}
         onKeyDown={handleSearch}
         placeholder="Search..."
         className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
     />
 </div>

 {search && (
     <div className="flex items-center bg-yellow-200 text-gray-700 px-3 py-2 rounded">
         <p>Showing Search Results for : <span className='font-bold'>{search}</span></p>
         <p className="ml-4 mr-2 cursor-pointer" onClick={cancelSearch}>Cancel Search</p>
         <AiOutlineCloseCircle className="h-5 w-5 cursor-pointer" onClick={cancelSearch} />
     </div>
 )}


    <div className="">
      <table className="min-w-full bg-white border-gray-200 border rounded-lg">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Amount</th>
            <th className="border border-gray-300 px-4 py-2">Pair</th>
            <th className="border border-gray-300 px-4 py-2">Trade Price</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Active</th>
            <th className="border border-gray-300 px-4 py-2">Type</th>
            <th className="border border-gray-300 px-4 py-2">Duration</th>
            <th className="border border-gray-300 px-4 py-2">Traded By</th>
          </tr>
        </thead>
        <tbody>
          {trades.data.map((trade) => (
            <tr key={trade.id}>
              <td className="border border-gray-300 px-4 py-2">{trade.amount} - {trade.outcome ? trade.outcome : 0} USDT</td>
              <td className="border border-gray-300 px-4 py-2">{trade.pair}</td>
              <td className="border border-gray-300 px-4 py-2">{trade.trade_price}</td>
              <td className="border border-gray-300 px-4 py-2">{trade.status}</td>
              <td className="border border-gray-300 px-4 py-2">{trade.is_active ? 'Active' : 'Inactive'}</td>
              <td className="border border-gray-300 px-4 py-2">{trade.type}</td>
              <td className='border border-gray-200 px-4 py-2'>
              <CountdownTimer trade_id={trade.id} ends_at={trade.expired_time}
                status={trade.status} />
              </td>
              <td className="border border-gray-300 px-4 py-2">{trade.customer.customer_code}</td>
            
            </tr>
          ))}
        </tbody>
      </table>


            {/* Pagination */}
            <div className="flex justify-center mt-4">
                <ul className="flex">
                    {trades.links.map((link, index) => (
                        <li key={index}>
                            <a
                                href={link.url}
                                className={`mx-1 px-3 py-1 rounded-md ${link.active ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                                disabled={!link.url}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
    </div>
    </Layout>

  );
};

export default ListTrade;
