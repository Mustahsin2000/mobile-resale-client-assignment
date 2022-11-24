import React from 'react';
import './BannerItem.css'

const BannerItem = ({ slide }) => {
    const { Image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousol-img'>
                <img src={Image} alt="" className="w-full rounded-lg" />
            </div>
            <div className="absolute flex justify-end  transform -translate-y-1/2 left-24  top-1/3 ">
                <h1 className='text-5xl font-bold text-white '>
                   Resale 
                   <br />
                   For Your Comfort
                   <br />
                    With Your Choise
                </h1>
            </div>
            <div className="absolute flex justify-end  transform -translate-y-1/2 left-24 w-1/2  top-1/2 mt-11 ">
                <p className='text-white text-xl'>Ready to sell some of your old tech? We've found the best services to use for getting you the most cash.</p>
            </div>
            <div className="absolute flex justify-start  transform -translate-y-1/2 left-24 w-1/2  top-3/4 ">
                <button className="btn btn-primary mr-5 text-white">Discover More</button>
                <button className="btn btn-outline btn-primary text-white">Categories</button>
            </div>
            <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 top-1/2  ">
                <a href={`#slide${prev}`} className="btn btn-circle bg-purple-500 mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle bg-purple-500">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;