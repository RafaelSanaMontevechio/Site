import React from 'react';

import selo from '../assets/selo.png';

const Selo = () => {
    const selos = [1, 2, 3, 4];
    return (
        <div className='flex flex-col items-center sm:flex-row justify-around'>
        {
            selos.map(() => {
                return <img src={selo} alt='Selo' className='my-4' />
            })
        }
        </div>
    )
}

export default Selo 
