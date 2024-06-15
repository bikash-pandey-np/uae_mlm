import React from 'react';
import MenuBar from './Components/MenuBar';
import '../../../css/app/front.css';

const Homepage = () => {
    return (
        <div>
            <MenuBar />
            <section style={{ height: "70vh" }} className='bg-gray-800 banner_section'>
            </section>

            <section className='text-center mt-4'>
    <a href={route('register')} target="_blank" className='text-xl font-bold'>Register</a><br />
    <a href={route('login')} target="_blank" className='text-xl font-bold'>Login</a><br />
    <a href={route('test')} target="_blank" className='text-xl font-bold'>Chart Demo</a><br />
    <a href={route('dashboard')} target="_blank" className='text-xl font-bold'>dashboard</a><br />
    <a href={route('deposit')} target="_blank" className='text-xl font-bold'>Deposit</a>
    <br /><br /><br />
    <h2>Backend</h2>
    <a href={route('admin.login')} target="_blank" className='text-xl font-bold'>Backend Login</a><br />
    <a href={route('admin.dashboard')} target="_blank" className='text-xl font-bold'>Backend Dashboard</a><br />
    <a href={route('admin.deposit-info')} target="_blank" className='text-xl font-bold'>Backend Deposit Info</a><br />
    <a href={route('admin.customers')} target="_blank" className='text-xl font-bold'>Backend Customers List</a><br />


</section>

            
        </div>
    );
}

export default Homepage;
