import React from 'react';
import Navber from '../pages/Home/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;