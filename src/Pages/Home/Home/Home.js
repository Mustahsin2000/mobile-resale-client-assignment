import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Overview from '../Overview/Overview';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Overview></Overview>
        </div>
    );
};

export default Home;