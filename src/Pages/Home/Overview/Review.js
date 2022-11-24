import React from 'react';

const Review = ({ review }) => {
    const { name, img, review: userreview, location } = review;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">

                <p>{userreview}</p>
                <div className="flex items-center mt-3">
                    <div className="avatar mr-5">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h5 className='text-lg font-bold'>{name}</h5>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;