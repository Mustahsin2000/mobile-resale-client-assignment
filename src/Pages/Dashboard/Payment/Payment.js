import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Checkout from './Checkout';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise)
const Payment = () => {
    const productspay = useLoaderData();

    return (
        <div>
            <p className='text-success font-semibold text-2xl'>payment for {productspay.name}</p>
            <p className='text-2xl font-semibold mt-6'>Pay ${productspay.price} for this product you choose</p>
            <div className='card shadow-xl w-96 mt-6 p-11'>
                <Elements stripe={stripePromise}>
                    <Checkout
                     productspay={productspay}
                    ></Checkout>
                   
                </Elements>
            </div>
        </div>
    );
};

export default Payment;