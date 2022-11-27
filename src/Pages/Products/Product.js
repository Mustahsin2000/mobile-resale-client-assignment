import React from 'react';

const Product = ({ product ,setMobile}) => {
    const { img, name, Location, Actual_price, Resale_Price,Years_of_use,time_of_the_product_post,sellers_name } = product;
    return (
        <div className="card h-full  shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <div className='font-semibold'>
                <p>Actual_price: {Actual_price}</p>
                <p>Resale_Price: {Resale_Price}</p>
                <p>Years_of_use: {Years_of_use}</p>
                <p>time_of_the_product_post: {time_of_the_product_post}</p>
                <p>sellers_name: {sellers_name}</p>
                <p>Location: {Location}</p>
                </div>
                <div className="card-actions">
                    <label htmlFor="booking-modal" 
                    onClick={()=>setMobile(product)}
                    className="btn btn-primary">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default Product;