import React,{useState,useEffect} from 'react';
import service1 from '../images/service-ic1.svg'
import service2 from '../images/service-ic2.svg'
import service3 from '../images/service-ic3.svg'

const Service = () => {
    const [isOpen, setIsOpen] = useState(false);
    // const [isMobile,setIsMobile] = useState(false);
  
    const toggle = () =>{
      setIsOpen(!isOpen);
      console.log("clickkk",toggle);
    };    return (
        <>
        <div className=" bg-red-1 font-popins py-24 xl:py-32">
            <div className=" pb-12 text-center px-4">
                <h3 className="text-red-cf text-title1">What we Serve</h3>
                <h1 className=" text-title2">Fruit And Vegetable Delivered To Your Home</h1>
            </div>
            <div className="container md:flex ">
            <div className="wrap-content">
            <div className="card-items" >
               <div className="img-services">
               <img src={service1} alt="freeshiping" className="h-[60px]" />
               </div>
                <div className="pt-6">
                    <h3 className="text-[1.3rem]">Free shipping</h3>
                    <p className="text-content">Enjoy Order in a hand using the fresness of groceries</p>
                </div>
            </div>

            </div>
            <div className="wrap-content">
            <div className="card-items ">
               <div className="img-services">
               <img src={service2} alt="freeshiping" className="h-[60px]" />
               </div>
                <div className="pt-6">
                    <h3 className="text-[1.3rem]">15 days returns</h3>
                    <p className="text-content">Order in a handy way using the freshness of the groceries.</p>
                </div>
            </div>

            </div>
            <div className="wrap-content">
            <div className="card-items">
               <div className="img-services">
               <img src={service3} alt="freeshiping" className="h-[60px]" />
               </div>
                <div className="pt-6">
                    <h3 className="text-[1.3rem]">Secure checkout</h3>
                    <p className="text-content">If you get rotten items - return immediately to us.</p>
                </div>
            </div>
            </div> 

            </div>
        </div> 
        </>
    );
};

export default Service;