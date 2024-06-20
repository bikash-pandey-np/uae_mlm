import React from 'react';
import MenuBar from './Components/MenuBar';
import banner from '../../../images/homepage-banner.jpeg';
import '../../../css/app/front.css';

const Homepage = ({balance}) => {
    const sectionStyle = {
        height: "90vh",
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };

    return (
        <div>
        <MenuBar balance={balance} />
        <section style={sectionStyle} className='bg-gray-800 banner_section'>
        {/* Content of the banner section goes here if needed */}
        </section>

           
        </div>
    );
}

export default Homepage;
