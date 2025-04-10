import React from 'react';
import { Link } from 'react-router-dom';

const Work = () => {
    return (
        <div className='bg-[#f6fbfeb0] dark:bg-[#1a1a1a] py-8 sm:py-10 md:py-12'>
            {/* Header Section */}
            <div className='relative h-[50px] sm:h-[70px] md:h-[100px] lg:h-[120px] flex justify-start items-center ml-4 sm:ml-6 md:ml-8 mb-4 sm:mb-6 md:mb-8'>
                <p className='font-extrabold text-[#DDDDDD] dark:text-gray-700 text-[28px] sm:text-[36px] md:text-[45px] lg:text-[70px] xl:text-[80px] h-[28px] sm:h-[36px] md:h-[45px] lg:h-[70px] xl:h-[80px] absolute top-0 left-0'>
                    LET'S WORK TOGETHER
                </p>
                <h2 className='font-extrabold text-[#0C9DCA] dark:text-cyan-300 text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl absolute pl-2 sm:pl-3 md:pl-6 lg:pl-8 tracking-[-0.5px] sm:tracking-[-1px] md:tracking-[-1.5px]'>
                    Let's Work Together
                </h2>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 px-4 sm:px-6 md:px-8 lg:px-12 pb-8 md:pb-12 lg:pb-16'>
                <div className='md:col-span-3 relative'>
                    <img 
                        src="https://www.apisolutionsltd.com/_next/image?url=%2Fplan.png&w=2048&q=75" 
                        alt="Let's work together" 
                        className='w-full rounded-lg'
                    />
                    <div className='absolute inset-0 md:inset-20 lg:inset-28 xl:inset-40 flex items-center justify-center'>
                        <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-black dark:text-gray-200'>
                            Let's Work <br /> Together
                        </p>
                    </div>
                </div>
                
                <div className='flex justify-center md:justify-start md:items-start'>
                    <Link to="/contact_us" className='block w-full max-w-[240px] md:w-48 lg:w-60 h-48 lg:h-60 mx-auto md:mx-0 md:mt-4 lg:mt-7'>
                        <div className='w-full h-full flex items-center justify-center font-bold text-[#0C9DCA] hover:text-white dark:text-cyan-300 dark:hover:text-white bg-white dark:bg-[#1a1a1a] hover:bg-[#0C9DCA] dark:hover:bg-cyan-700 text-xl sm:text-2xl md:text-3xl rounded-full border-4 border-dashed border-[#0C9DCA] dark:border-cyan-300 transition-colors duration-300 cursor-pointer'>
                            Get In Touch
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Work;