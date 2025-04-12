import React from 'react';
import SingleMap from './SingleMap';



const AllLocation = () => {
  return (
    <div className='flex lg:flex-row flex-col-reverse justify-around items-center  py-10 lg:px-32 px-5'>
      <div className='lg:w-[50%] px-5 lg:my-0 my-5 space-grotesk text-teal-700 dark:text-teal-200 space-y-5'>
        <h2 className='text-4xl font-bold  '>Contact Details</h2>
        <div>
          <p className='lg:text-xl  text-base  font-medium '>Phone:</p>
          <p className='lg:text-2xl text-xl  font-semibold text-teal-500'>+880 1819-078353</p>
        </div>
        <div>
          <p className='lg:text-xl  text-base  font-medium '>Email:</p>
          <p className='lg:text-2xl text-xl  font-semibold text-teal-500'>techbazar247@gmail.com</p>
        </div>
        <div>
          <p className='lg:text-xl  text-base  font-medium '>Address:</p>
          <p className='lg:text-2xl text-xl  font-semibold text-teal-500'>152/2 Panthapath, Dhaka, Dhaka, Bangladesh</p>
        </div>
        <div>
        <p className='lg:text-xl  text-base font-medium text-teal-500'><span className='text-red-700 dark:text-red-500 space-grotesk'>Closed</span> (Friday-Saturday)</p>
        <p className='lg:text-xl  text-xl font-medium text-teal-500'><span className='text-teal-700 dark:text-teal-200 space-grotesk'>9AM-6PM</span> (Sunday-Thursday)</p>
        </div>
      </div>
      <SingleMap></SingleMap>


    </div>
  );
};

export default AllLocation;