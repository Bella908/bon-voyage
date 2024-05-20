import React from 'react';
import Banner from './Banner';
import AllTouristsSpot from '../All Tourists Spot/AllTouristsSpot';
import NewsLetter from './NewsLetter';
import FAQ from './FAQ';
import SubContries from './SubContries/SubContries';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllTouristsSpot></AllTouristsSpot>
            <SubContries></SubContries>
            <NewsLetter></NewsLetter>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;
