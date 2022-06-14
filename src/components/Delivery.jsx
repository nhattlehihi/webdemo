import React from 'react';
import feat2 from '../images/feat2.png';
const Delivery = () => {
    return (
        <>
        <div className="py-4 padding-responsive">
            <div className="px-4 flex justify-center items-center">
                <img src={feat2} alt="feat" />
            </div>
            <div className="py-8 centerr">
            <div className="text-center font-popins px-4 py-8">
                <h3 className="text-yellow-cf text-title1">HOME DELIVERY</h3>
                <h2 className="text-title2">
                {/* <h2 className="text-2xl leading-10 text-title2"> */}
                Sit At Home We Will Take Care Your Order
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

export default Delivery;