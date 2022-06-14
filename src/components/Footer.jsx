import React from 'react';
import logo from '../images/logo.svg';

const Footer = () => {
    return (
        <>
            <div className="container-footer">
                <div className="flex flex-col lg:flex-row px-4">
                    <div className=" flex flex-col lg:w-[33%] lg:items-start lg:pr-[5rem]">
                        <img src={logo} alt="logooo" className="h-[40px]"/>
                       <span className="item-footer mt-4 text-center">Fast delivery, which is active all over the world, serves with many transportation vehicles.</span>
                    </div>
                   <div className="wrapp-footer-items lg:w-[66%]">
                   <div className=" item-footer-title" >
                        <h2 className="font-normal text-2xl">Company</h2>
                        <div className="text-gray-cf flex flex-col">
                            <a className="item-footer">About Us</a>
                            <a className="item-footer">Blog</a>
                            <a className="item-footer">All Products</a>
                            <a className="item-footer">Locations Map</a>
                        </div>
                    </div>
                    <div className=" item-footer-title" >
                        <h2 className="font-normal text-2xl ">Services</h2>
                        <div className="text-gray-cf flex flex-col">
                            <a className="item-footer">Order tracking</a>
                            <a className="item-footer">Wish List</a>
                            <a className="item-footer">My accounts</a>
                            <a className="item-footer">Terms & Conditions</a>
                        </div>
                    </div>
                    <div className="item-footer-title" >
                        <h2 className="font-normal text-2xl">Get in touch</h2>
                        <div className="">
                           <span className="item-footer">Subscribe to our weekly Newsletter and receive updates via email.</span>
                        </div>
                    </div>
                   </div>
                </div>
               <div className="text-center pt-10">
               <div>
                   <span className="text-gray-cf">All Rights Reserved @ NhatLe 2022</span>
               </div>
                <div className="text-gray-cf ">
                <a className="text-gray-cf mr-4">Privacy & Policy</a>
                <a  className="text-gray-cf ">Terms & Conditions</a>
                </div>
               </div>
            </div>
        </>
    );
};

export default Footer;