import React from 'react';
import SayHello from './SayHello';
import AllLocation from './AllLocation';




const SayHelloLocations = () => {
    return (
        <div>
            <SayHello></SayHello>
            <div className='bg-teal-50 dark:bg-teal-800 min-h-svh'>
                <div className='relative h-[155px] flex lg:justify-start justify-center items-center mt-5 lg:ml-10'>
                    <p className='font-extrabold uppercase text-teal-200 dark:text-teal-600 lg:text-[100px] text-[70px] h-[100px] lg:top-[-5px] top-[20px] lg:left-0 absolute m-0'>
                        Our Offices</p>
                    <h2 className='font-extrabold text-teal-700 dark:text-teal-200 lg:text-6xl text-[42px] absolute lg:pl-16 lg:tracking-normal tracking-widest'>
                        Our Offices</h2>
                </div>
                <AllLocation></AllLocation>
            </div>

        </div>
    );
};

export default SayHelloLocations;