import React from 'react';
import playstor from '../assets/playstor.png'
import appstore from '../assets/appstore.png'
import { Link } from 'react-router';

const ProductiveApps = () => {
    return (
        <div className='text-center flex flex-col items-center space-y-5 mt-20'>
            <h1 className='text-5xl font-bold'>We Build <br />
                <span className='text-[#9F62F2]'>Productive</span> Apps</h1>
            <p className='text-[#627382]'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

            <div className='flex gap-5'>
                <Link to='https://play.google.com/store/games?hl=en' className="btn text-black font-bold"><span><img src={playstor} alt="" /></span>Google Play</Link>
                <Link to='https://www.apple.com/app-store/' className="btn text-black font-bold"><span><img src={appstore} alt="" /></span>App Store</Link>
            </div>
            
        </div>
    );
};

export default ProductiveApps;