import React, { useEffect, useState } from 'react';
import download from '../assets/icon-downloads.png';
import rating from '../assets/icon-ratings.png';
import review from '../assets/icon-review.png';
import { ToastContainer, toast } from 'react-toastify';
import useApps from '../Hooks/useApps';


const Installation = () => {
    const [installData, setInstallData] = useState([]);

    const [sortOrder, setSortOrder] = useState("none");

    useEffect(() => {
        const saveLocalStorageData = JSON.parse(localStorage.getItem('wishlist') || '[]');
        if (saveLocalStorageData) setInstallData(saveLocalStorageData)
    }, [])


    const sortedItem = (() => {
        if (sortOrder === 'downloads-asc') {
            return [...installData].sort((a, b) => parseInt(a.downloads) - parseInt(b.downloads));
        }
        else if (sortOrder === 'downloads-desc') {
            return [...installData].sort((a, b) => parseInt(b.downloads) - parseInt(a.downloads))
        }
        else {
            return installData;
        }
    })()

    


    const handleRemove = (id) => {
        toast('deleted successfully');
        const totalLocalStorageData = JSON.parse(localStorage.getItem('wishlist'));
        let updateData = totalLocalStorageData.filter(p => p.id !== id);
        setInstallData(updateData);
        localStorage.setItem('wishlist', JSON.stringify(updateData))
    }

    const {loading} = useApps();


    return (
        <div>
            <div className='flex flex-col text-center items-center mt-10'>
                <h1 className='text-4xl text-black font-bold'>Your Installed Apps</h1>
                <p className='text-[#afb4b9] pt-3'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex flex-col items-center lg:flex-row justify-between my-10 '>
                <h1 className='text-2xl pb-5 lg:pb-0 font-bold'>this is installation: {sortedItem.length}</h1>
                <label className='form-control w-full max-w-xs'>
                    <select className='select select-bordered' value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
                        <option value="none">Sort By Size</option>
                        <option value="downloads-asc">Low-&gt; High</option>
                        <option value="downloads-desc">High-&gt; Low</option>
                    </select>
                </label>
            </div>
            <div>
                {loading && <><span className="loading lg:ml-[550px] loading-bars loading-xl"></span></>}
                {
                    sortedItem.map(p => (
                            <div className='flex flex-col lg:flex-row  justify-between items-center bg-white rounded-2xl shadow-2xl p-2 my-5'>
                                <div className='flex flex-col lg:flex-row gap-10 items-center '>
                                    <img className='bg-[#D9D9D9] p-2 shadow-2xl rounded-xl h-[100px] w-[100px]' src={p.image} alt="" />
                                     <div className='space-y-5'>
                                        <h1 className='text-2xl font-bold'>Forest: Focus for Productivity</h1>
                                        <div className='flex gap-5'>
                                            <p className='flex flex-col items-center font-bold'><img className='h-7' src={download} alt="" /> {p.downloads}</p>
                                            <p className='flex flex-col items-center font-bold'><img className='h-7' src={rating} alt="" /> {p.ratingAvg}</p>
                                            <p className='flex flex-col items-center font-bold'><img className='h-7' src={review} alt="" />{p.reviews} MB</p>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <button onClick={() => handleRemove(p.id)} className='btn btn-active btn-success text-white'>Uninstall</button>

                                </div>

                            </div>

                    ))
                }
                <ToastContainer />
            </div>


        </div>
    );
};

export default Installation;