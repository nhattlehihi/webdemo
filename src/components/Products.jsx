import React, {useState,useEffect} from 'react';
import Catalog from './Catalog';
import { Skeleton } from 'antd';
import fruit1 from '../assets/data/fruit1.jpeg'
const Products = () => {
    const [data,setData] = useState([]);
    const [filter,setFilter] =useState(data);
    const [loading,setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () =>{
            setLoading(true);
            const url = 'https://fakestoreapi.com/products';
            const response = await fetch(url);
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
            }
            return () =>{
                componentMounted = false;
            }
            
        }
        getProducts();
    }, []);
    
    const Loading = () =>{
        return(
            <>
            <Skeleton/>
            </>
        );
    }

    const ShowProducts = () =>{
        return (
            <div>
                <button>All</button>
            </div>
        )
    }
    console.log(filter);
    return (
        <>
           <div>
           <div>
               <div className="flex flex-col justify-center items-center">
                   <h1 className="text-title2">Get The Best Offers</h1>
                   <h3> The food at your doorstep. Why starve when you have us You hunger partner. Straight out of the oven to your doorstep </h3>
               </div>
               <div>
                <div className="card-container flex">
                    <div className="card-product-items">
                    <div className="image-item">
                    <img src={fruit1} alt="fruit1"/>
                    </div>
                    <div className="content-item">
                        <div className=" title1-item ">
                            <h2>Organic from Mexico</h2>
                            <h2>$5.99</h2>
                        </div>
                        <div className="title1-item">
                            <h2>Meyer Lemons</h2>
                            <h2>1lb</h2>
                        </div>
                    </div>
                    <div className="addtocart-item">
                        <button>+ Add to delivery</button>
                    </div>
                    </div>
                    <div className="card-product-items">
                    <div className="image-item">
                    <img src={fruit1} alt="fruit1"/>
                    </div>
                    <div className="content-item">
                        <div className="title1-item">
                            <h2>Organic from Mexico</h2>
                            <h2>$5.99</h2>
                        </div>
                        <div className="title1-item">
                            <h2>Meyer Lemons</h2>
                            <h2>1lb</h2>
                        </div>
                    </div>
                    <div className="addtocart-item">
                        <button>+ Add to delivery</button>
                    </div>
                    </div>
                    <div className="card-product-items">
                    <div className="image-item">
                    <img src={fruit1} alt="fruit1"/>
                    </div>
                    <div className="content-item">
                        <div className="title1-item">
                            <h2>Organic from Mexico</h2>
                            <h2>$5.99</h2>
                        </div>
                        <div className="title1-item">
                            <h2>Meyer Lemons</h2>
                            <h2>1lb</h2>
                        </div>
                    </div>
                    <div className="addtocart-item">
                        <button>+ Add to delivery</button>
                    </div>
                    </div>
                    <div className="card-product-items">
                    <div className="image-item">
                    <img src={fruit1} alt="fruit1"/>
                    </div>
                    <div className="content-item">
                        <div className="title1-item">
                            <h2>Organic from Mexico</h2>
                            <h2>$5.99</h2>
                        </div>
                        <div className="title1-item">
                            <h2>Meyer Lemons</h2>
                            <h2>1lb</h2>
                        </div>
                    </div>
                    <div className="addtocart-item">
                        <button>+ Add to delivery</button>
                    </div>
                    </div>
                    
                </div>
               </div>
           </div>
           </div>
        </>
    );
};

export default Products;