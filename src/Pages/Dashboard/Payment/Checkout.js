import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';


const Checkout = ({productspay}) => {
    const [cardError, setCardError] = useState();
    const [success, setSuccess] = useState();
    const [processing, setProcessing] = useState(false);
    const [transection, setTransection] = useState('');
    const [clientSecret, setclientSecret] = useState();
    const stripe = useStripe();
    const elements = useElements();
    const { name, price,  _id } = productspay;


    useEffect(() => {
        
        fetch("https://mobile-resale-server.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setclientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log(error);
            setCardError(error.message);
        } else {
            setCardError('');
        }
        setSuccess('');
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        if (paymentIntent.status === 'succeeded') {
            console.log('card Info', card);
            setSuccess('congrats');
            setTransection(paymentIntent.id);

            const pament = {
                price,
                transectionId: paymentIntent.id,
                name,
                bookingId: _id
            }

            fetch('https://mobile-resale-server.vercel.app/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(pament)

            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        console.log(data);
                        setSuccess('congrats for your payment');
                        setTransection(paymentIntent.id);
                    }
                })

        }

        setProcessing(false);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-oputline mt-9 ' type="submit"
                    disabled={!stripe} // || !clientSecret || processing
                >
                    Pay
                </button>
            </form>
            <p className='text-red-500' >{cardError}</p>
            {
                success && <div>
                    <p className='text-green-600'>{success}</p>
                    <p className='text-green-600'>{success}Your TransectionId:{transection}</p>
                </div>
            }
        </>
    );
};

export default Checkout;