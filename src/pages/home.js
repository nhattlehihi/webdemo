import React from 'react';
import Aboutus from '../components/Aboutus';
import Catalog from '../components/Catalog';
import Delivery from '../components/Delivery';
import Download from '../components/Download';
import Service from '../components/Service';
const Home = () => {
    return (
        <div>
            <Catalog/>
            <Service/>
            <Aboutus/>
            <Delivery/>
            <Download/>
        </div>
    );
};

export default Home;