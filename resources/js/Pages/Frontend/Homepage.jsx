import React from 'react';
import Navbar from './Web/Navbar';
import Banner from './Web/Banner';
import Intro from './Web/Intro';
import Footer from './Web/Footer';

const Homepage = ({balance}) => {
   

    return (
      <div>
      <Navbar />
      <Banner />
      <Intro />
      <Footer />
      </div>
    );
}

export default Homepage;
