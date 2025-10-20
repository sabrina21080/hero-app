import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='lg:ml-[550px] mt-10'>
            {
                Array.from({length:1}).map((_, i) =>(
                    <div key={i}>
                        <span className="loading loading-bars loading-xl"></span>
                    </div>
                    
                ))
            }
            
        </div>
    );
};

export default LoadingSpinner;