import React, { useEffect, useState } from 'react';
import Addver from './Addver';

const Add = () => {
    const [adds,setAdd] = useState([]);
    useEffect(()=>{
       fetch('https://mobile-resale-server.vercel.app/addproducts')
       .then(res=>res.json())
       .then(data=>setAdd(data))
    },[])
    return (
        <div>
            <h2 className='text-2xl font-bold text-secondary'>Add for unsold products</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-6'>
                {
                    adds.map(add=><Addver key={add._id} add={add}></Addver>)
                }
            </div>
        </div>
    );
};

export default Add;