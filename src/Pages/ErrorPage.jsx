import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import error from '../assets/error-404.png';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='max-w-[1200px] mx-auto flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className='max-w-screen mx-auto w-full px-5 flex-1 justify-center my-10 flex flex-col items-center'><img className='text-center' src={error} alt="" /> <h1 className='text-4xl font-bold pb-5'>Oops, page not found!</h1>
                <p>The page you are looking for is not available.</p>
                <div className='mt-10 mx-auto'>
                    <Link to='/' className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text- text-white font-bold">Go Back</Link>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;