import React from 'react';
import strawberry from '../images/strawberry.svg'
import {FiPlayCircle} from 'react-icons/fi'
import play from '../images/button-play.svg'
import headerimg from '../images/header-img.png'

const Catalog = () => {
    return (
        <div className="lg:flex padding-responsive ">
        <div className=" flex flex-col  justify-center items-center font-popins ">
            <div className=" flex bg-pink-cf rounded-full px-[16px] py-[12px] mt-4">
            <span className="text-[16px] md:text-[1.5rem] font-medium text-red-cf px-2">More than Faster </span><span><img src={strawberry} alt="strawberry "/></span>
            </div>
            <div className="mt-10 text-center">
                <h1 className="text-catalog font-black w-full">
                Groceries delivered in as little as <span className="text-red-cf font-medium"> 2 hours</span>
                </h1>
                <h3 className="text-content">Grocen atssures fresh grocery every morning to your family without getting out in this pandemic.</h3>
            </div>
            <div className="mt-10 flex ">
                <div>
                <button className="text-[1rem] rounded-2xl bg-redd text-white p-4 mr-10 ">
                    <a href="/" className="text-white">Order Now</a>
                </button>
                </div>
                <div className="flex justify-center items-center">
                <img src={play} alt="process" /><span>  Order Process</span>
                </div>
            </div>
            </div>
            <div>
                <img src={headerimg} alt="catalog"/>
            </div>
        
        </div>
    );
};

export default Catalog;