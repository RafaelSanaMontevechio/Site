import React from 'react';

import wa from '../assets/wp.png'

const BtnWhatsapp = () => {
    return (
        <div className='bg-white shadow rounded px-5 py-2 flex flex-col items-center mt-6 sm:mt-0 sm:flex-row'>
            <img src={wa} alt='Whatsapp' />
            <div className='ml-2'>
                <h3 className='font-bold text-2xl'>Peça seu orçamento!</h3>
                <p className='text-xs'>Projetos e orçamentos sem compromisso</p>
                <p className='font-bold'>(35)x.xxxx-xxxx</p>
            </div>
        </div>
    )
}

export default BtnWhatsapp