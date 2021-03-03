import React from 'react';

import './Navbar.style.css';

function Toggle1(a,b){
    console.log('Working');
    a.style.display = 'block';
    b[0].style.transform = 'rotate(-45deg) translate(-5px,6px)';
    b[0].style.transition = 'transform 0.4s ease-in';
    b[1].style.opacity = '0';
    b[1].style.transition = 'opacity 0.2s ease-in';
    b[2].style.transform = 'rotate(45deg) translate(-5px,-6px)';
    b[2].style.transition = 'transform 0.4s ease-in';
    isOpen = true;
}
function Toggle2(a,b){
    console.log('Working');
    a.style.display = 'none';
    b[0].style.transform = 'none';
    b[1].style.opacity = '100';
    b[2].style.transform = 'none';
    isOpen = false;
}

var isOpen = false;
var x = document.getElementById('drop-down');
var y = document.getElementById('div').children;

const Navbar = () => (
    <div className='block'>
        <div className='h-16 bg-gray-900 text-gray-300 flex justify-between justify-items-center font-mono'>
            <div className='text-2xl py-3 px-8 uppercase select-none tracking-widest'>Navbar</div>
            <div className='hidden sm:flex text-lg py-3'>
                <a className='px-4 md:px-8 lg:px-10 hover:text-red-500' href="#">Home</a>
                <a className='px-4 md:px-8 lg:px-10 hover:text-red-500' href="#">Features</a>
                <a className='px-4 md:px-8 lg:px-10 hover:text-red-500' href="#">About</a>
                <a className='px-4 md:px-8 lg:px-10 hover:text-red-500' href="#">Contact</a>
            </div>
            <div className='sm:hidden py-4 px-8 cursor-pointer' id='div' onClick={
                isOpen? Toggle2(x, y) 
                : Toggle1(x, y)
            }>
                <div className='h-1 w-6 m-1 bg-gray-300'></div>
                <div className='h-1 w-6 m-1 bg-gray-300'></div>
                <div className='h-1 w-6 m-1 bg-gray-300'></div>
            </div>
        </div>
        <div className='hidden sm:hidden bg-gray-900 text-gray-300 text-lg py-3' id='drop-down'>
            <a className='px-4 md:px-8 lg:px-10 hover:text-red-500 block' href="#">Home</a>
            <a className='px-4 md:px-8 lg:px-10 hover:text-red-500 block' href="#">Feature</a>
            <a className='px-4 md:px-8 lg:px-10 hover:text-red-500 block' href="#">About</a>
            <a className='px-4 md:px-8 lg:px-10 hover:text-red-500 block' href="#">Contact</a>
        </div>
    </div>
);

export default Navbar;