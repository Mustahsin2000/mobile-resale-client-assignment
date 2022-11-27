import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import Product from './Product';

const Products = () => {
  
//    const[samsung,setSamsung]=useState([]);
//    useEffect(()=>{
//     fetch('http://localhost:5000/products')
//     .then(res=>res.json())
//     .then(data=>setSamsung(data))
//     .then(data=>console.log(data))
//    })

     const products = useLoaderData();
     const [mobile,setMobile] = useState(null);
    //  console.log(products);
    return (
        <div >
         
           <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 mt-11'>
           {
                products.map(product=><Product key={product._id} product={product}
                setMobile={setMobile}
                ></Product>)
            }
           </div>

           <div>
            { 
               mobile &&
                <BookingModal
            mobile={mobile}
            setMobile={setMobile}
            ></BookingModal>}
           </div>
        </div>
    );
};

export default Products;