import React from 'react';
import Banner from './Banner';
import AllTouristsSpot from '../All Tourists Spot/AllTouristsSpot';
import NewsLetter from './NewsLetter';
import FAQ from './FAQ';
import Countries from './Countries/Countries';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllTouristsSpot></AllTouristsSpot>
            <Countries></Countries>
            <NewsLetter></NewsLetter>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;