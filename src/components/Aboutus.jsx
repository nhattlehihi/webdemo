import React from 'react';
import feat from '../images/feat.png';
import { Button } from 'antd';

const Aboutus = () => {
    return (
        <>
        <div className="py-4 padding-responsive">
            <div className="px-4 flex justify-center items-center">
                <img src={feat} alt="feat" />
            </div>
            <div className="centerr">
            <div className="text-center font-popins mt-6 px-4 py-8">
                <h3 className="text-green-cf text-title1 ">WHY CHOOSE US</h3>
                <h2 className="text-title2">
                Find Favorites and Discover New Ones
                </h2>
                <h3 className="text-content">
                At vero eos et accusamus et iusto odio dignissimos ducimus blanditiis praesen voluptatum deleniti.
                </h3>
            </div>
            <div className="flex justify-center items-center">
            <button className="text-[1.2rem] rounded-2xl bg-redd text-white px-4 py-2 mt-2">
                    <a href="/" className="text-white">Explore Now</a>
            </button>
            </div>
            </div>
        </div>
        </>
    );
};

export default Aboutus;