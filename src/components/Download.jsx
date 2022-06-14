import React from 'react';
import mobile from '../images/mobile.svg';
import apple from '../images/apple.svg';
import android from '../images/playstore.svg';

const Download = () => {
    return (
        <>
        <div className=" bg-red-1 padding-responsive">
            <div className="centerr px-16 lg:w-[50%]">
                <img src={mobile} alt="feat" />
            </div>
            <div className="py-8 centerr ">
            <div className="text-center font-popins px-4 py-4">
                <h3 className="text-red-cf text-title1">Download our app</h3>
                <h2 className="text-title2">
                    Get The Groceries App Order More Easily.
                </h2>
                <h3 className="text-gray-cf leading-[2rem]">
                At vero eos et accusamus et iusto odio dignissimos ducimus blanditiis praesen voluptatum deleniti.
                </h3>
            </div>
            <div className="flex justify-evenly	 items-center">
            <div className="buttondownload">
                   <img src={apple} alt="app store" /> <a href="/" className="text-black pl-2 ">App Store</a>
            </div>
            <div className="buttondownload md:ml-[3rem]">
                   <img src={android} alt="Play store" /> <a href="/" className="text-black pl-2 ">Play Store</a>
            </div>
            </div>
            </div>
        </div>
        </>
    );
};

export default Download;