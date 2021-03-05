import React from 'react';
import CardLinks from '../Card_links/card_links';
import './Card.style.css';

const Card = () => (
    <div className='min-h-screen flex justify-center items-center text-white shadow-md'>
        <div className='relative w-64 h-82 sm:w-1/2 md:w-1/3 overflow-hidden bg-gradient-to-tl from-blue-800 to-blue-500 ... bg-grad rounded-lg p-6 pb-32 space-y-6'>
            <h2 className='mt-2 sm:mt-4 text-white font-semibold text-3xl sm:text-5xl'>Topic</h2>
            <p className='text-base leading-5 sm:text-2xl text-gray-300'>The official Laravel job board connecting the best jobs with top&nbsp;talent.</p>
            <a href="#" className='text-lg sm:text-xl inline-block shadow-lg bg-gradient-to-br from-gray-200 to bg-gray-50 ... rounded px-3 py-2 text-blue-900'>View all jobs</a>
            <div className='space-y-2 right-0 left-0 bottom-4 absolute'>
            <CardLinks/> 
            <CardLinks/> 
            <CardLinks/>    
            </div>
        </div>
    </div>
);

export default Card;