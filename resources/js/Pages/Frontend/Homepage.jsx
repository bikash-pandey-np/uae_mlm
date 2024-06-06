import React from 'react';
import '../../../css/app/front.css';
import MenuBar from './Components/MenuBar';

const Homepage = () => {
    return (
        <div>
            <section style={{ height: "70vh" }} className='bg-gray-800 banner_section'>
               <MenuBar />
            </section>
        </div>
    );
}

export default Homepage;
