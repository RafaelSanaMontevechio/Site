import React from 'react';

import img from '../assets/img.jpg';

const Hero = () => {
    return (
        <div className='flex flex-col items-center sm:flex-row sm:justify-between py-5'>
            <div className='p-8'>
                <h2 className='font-bold text-2xl'>Lorem ipsum dolor sit amet</h2>
                <p className='text-xl'>consectetur adipiscing elit</p>
                <p className='text-gray-700'>consectetur adipiscing elit</p>
            </div>
            <div>
                <img src={img} alt='Lorem ipsum dolor sit amet' />
            </div>
        </div>
    )
}

export default Hero