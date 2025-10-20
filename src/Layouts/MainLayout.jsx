import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='max-w-[1200px] mx-auto flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className='max-w-screen mx-auto w-full px-5 flex-1'>
                <Outlet />
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;