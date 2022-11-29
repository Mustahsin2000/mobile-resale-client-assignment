import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const productspay = useLoaderData();
    
    return (
        <div>
            <p className='text-success font-semibold text-2xl'>payment for {productspay.name}</p>
            <p className='text-2xl font-semibold mt-6'>Pay ${productspay.price} for this product you choose</p>
            
        </div>
    );
};

export default Payment;