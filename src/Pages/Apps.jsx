import React, { useState } from 'react';
import useApps from '../Hooks/useApps';
import AppsCard from '../Components/AppsCard';
import searchIcon from '../assets/search.png';
import LoadingSpinner from '../Components/LoadingSpinner';

const Apps = () => {
    const { apps, loading } = useApps();
    const [search, setSearch] = useState('');
    const term = search.trim().toLocaleLowerCase();
    const searchApps = term ? apps.filter(app => app.title.toLocaleLowerCase().includes(term)) : apps
    // console.log(searchApps);


    const handleSearchLoading = e =>{
        e.preventDefault();
        setSearch(e.target.value)

    }

    return (
        <div>

            <div>
                <div className='flex flex-col items-center mt-10'>
                    <h1 className='text-4xl text-black font-bold'>Our All Applications</h1>
                    <p className='text-[#afb4b9] pt-3'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='flex justify-between mt-10'>
                    <p className='text-xl font-bold'>(<span>{searchApps.length}</span>)Apps Found</p>
                    <label className="input">
                        <img src={searchIcon} alt="" />
                        <input value={search} onChange={handleSearchLoading} type="search" required placeholder="Search Apps" />
                    </label>
                </div>
            </div>
            {
                loading ? (
                    <LoadingSpinner></LoadingSpinner>
                ) : (
                    <div className='grid grid-cols-1 mx-5 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>

                        {
                            searchApps.map(app => (
                                <AppsCard key={app.id} app={app}></AppsCard>
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
};

export default Apps;