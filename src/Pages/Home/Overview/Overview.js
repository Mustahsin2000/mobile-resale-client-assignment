import React from 'react';
import pic1 from '../../../assets/images/ac-1.jpg';
import pic2 from '../../../assets/images/pic2.jpg';
import pic3 from '../../../assets/images/pic3.jpg';
import Review from './Review';


const reviews = [
    {
        _id:1,
        name: 'Mustahsin Al Rafi',
        review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        location:'Dhaka',
        img:pic1
    },
    {
        _id:2,
        name: 'Tushar',
        review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        location:'Chittagong',
        img:pic2
    },
    {
        _id:3,
        name: 'Topu',
        review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        location:'Barisal',
        img:pic3  
    }
]

const Overview = () => {
    return (
        <section className='my-16'>
            <div className='flex justify-between'>
               <div>
                <h4 className='text-3xl text-primary font-bold'>overviews from our users</h4>
               </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3'>
                {
                    reviews.map(review=><Review key={review._id} review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Overview;