import React from 'react';

const Footer = ({ children }) => {
    return (
        <div className='p-4 bg-gray-200 sm:flex justify-between items-center'>
            <div>
                <h5>Lorem Ipsum</h5>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            {children}
        </div>
    )
}

export default Footer