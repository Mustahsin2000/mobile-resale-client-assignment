import React from 'react';
import img1 from '../../../assets/images/1.jpg'
import img2 from '../../../assets/images/2.jpg'
import img3 from '../../../assets/images/3.jpg'
import BannerItem from './BannerItem';

const bannerData = [
    {
        Image: img1,
        prev: 6,
        id: 1,
        next: 2
    },
    {
        Image: img2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        Image: img3,
        prev: 2,
        id: 3,
        next: 4
    }
]

const Banner = () => {
    return (
        <div className="carousel w-full ">
            {
                bannerData.map(slide => <BannerItem key={slide.id} slide={slide}></BannerItem>)
            }
        </div>
    );
};

export default Banner;