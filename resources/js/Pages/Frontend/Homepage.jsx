import React from 'react';
import '../../../css/app/front.css';
import MenuBar from './Components/MenuBar';
import { FiMenu, FiChevronDown } from 'react-icons/fi'; // Import FiMenu for toggler icon

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
