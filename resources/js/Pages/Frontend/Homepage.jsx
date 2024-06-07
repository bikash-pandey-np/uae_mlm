import React from 'react';
import MenuBar from './Components/MenuBar';
import { FiMenu, FiChevronDown } from 'react-icons/fi'; // Import FiMenu for toggler icon
import '../../../css/app/front.css';

const Homepage = () => {
    return (
        <div>
            <MenuBar />
            <section style={{ height: "70vh" }} className='bg-gray-800 banner_section'>
            </section>
            
        </div>
    );
}

export default Homepage;
