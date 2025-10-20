import React from 'react';
import downArrow from '../assets/downarrow.png'
import star from '../assets/star.png';
import { Link } from 'react-router';

const AppsCard = ({ app }) => {
    const { image, title, downloads, ratingAvg, id } = app;
    return (
        <Link to={`/app/${id}`} className="card shadow-xl/20 hover:scale-105 transition ease-in-out bg-white">
            <figure className='p-2  overflow-hidden'>
                <img className='h-[250px] w-full rounded-md'
                    src={image}
                />
            </figure>
            <div className="card-body">
                <p className='text-2xl font-bold'>{title}</p>
                <div className="card-actions flex justify-between">
                    <div className="btn btn-soft btn-warning"><span><img src={downArrow} alt="" /></span>{downloads}</div>
                    <div className="btn btn-soft btn-warning"><span><img src={star} alt="" /></span>{ratingAvg}</div>
                </div>
            </div>
        </Link>
    );
};

export default AppsCard;