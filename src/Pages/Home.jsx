import React, { Suspense } from 'react';

import ProductiveApps from './ProductiveApps';
import Trusted from './Trusted';
import { Link } from 'react-router';
import AppsCard from '../Components/AppsCard';
import useApps from '../Hooks/useApps';
import LoadingSpinner from '../Components/LoadingSpinner';

const Home = () => {
    const { apps, loading } = useApps();
    const trendingApps = apps.slice(0, 8);
    return (
        <div>
            <ProductiveApps></ProductiveApps>
            <Trusted></Trusted>
            <div className='flex flex-col'>
                <div className='flex flex-col items-center mt-10'>
                    <h1 className='text-4xl text-black font-bold'>Trending Apps</h1>
                    <p className='text-[#afb4b9] pt-3'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                {loading ? (
                    <LoadingSpinner></LoadingSpinner>
                ) :
                 (<div className='grid grid-cols-1 mx-5 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
                    
                    {
                        trendingApps.map(app => (
                            <AppsCard key={app.id} app={app}></AppsCard>
                        ))
                    }

                </div>)}
                <div className='mt-10 mx-auto'>
                    <Link to='/apps' className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text- text-white font-bold">Show All</Link>
                </div>
            </div>

        </div>
    );
};

export default Home;