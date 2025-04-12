import React from 'react';

const WhatHappensNext = () => {
    const object = [
        {
            id: 1,
            desc: "We'll read your email, thank you"
        },
        {
            id: 2,
            desc: "We'll respond within 8 hours"
        },
        {
            id: 3,
            desc: "We'll line up a 30 min expert call with you"
        },
        {
            id: 4,
            desc: "You'll get a proposal within 5 business days"
        },
        {
            id: 5,
            desc: "All goes well we're a go !"
        },
    ]
    return (
        <div className=''>
            <div className='relative h-[155px] flex lg:justify-start justify-center items-center mt-5 lg:ml-10'>
                <p className='font-extrabold uppercase text-teal-200 dark:text-teal-600 lg:text-[100px] text-[40px] h-[100px] lg:top-0 top-[45px] lg:left-0 absolute m-0'>
                    What Happens Next</p>
                <h2 className='font-extrabold text-teal-700 dark:text-teal-200 lg:text-6xl text-2xl absolute lg:pl-8 lg:tracking-normal tracking-wider'>
                    What Happens Next</h2>
            </div>
            <div className='flex lg:flex-row flex-col justify-between relative lg:mx-32 lg:my-10 my-5 lg:gap-0 gap-5'>
                <div className='w-[85%] lg:block hidden left-28 border-t-2 border-teal-700 dark:border-teal-300 absolute top-6' ></div>
                {
                    object.map(item =>
                        <div className=' flex relative z-10 flex-col justify-start items-center gap-2'>
                            <div className='w-12 h-12 rounded-full bg-teal-500 flex justify-center items-center'>
                            <p className=' text-teal-700 dark:text-teal-50 text-xl font-bold'>{item.id}</p>
                            </div>
                            <p className='lg:w-[80%] w-[40%] text-center lg:text-xl text-pretty'>{item.desc}</p>

                        </div>)
                }
            </div>


        </div>
    );
};

export default WhatHappensNext;