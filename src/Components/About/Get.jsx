import React from 'react';

const Get = () => {
    const detDetails = [
        { description: "15 minutes of consultation", image: "https://www.apisolutionsltd.com/youWillGet/15minutes.svg" },
        { description: "Strict non-disclosure policy", image: "https://www.apisolutionsltd.com/youWillGet/action.svg" },
        { description: "Timeline and cost evaluation", image: "https://www.apisolutionsltd.com/youWillGet/strict.svg" },
        { description: "Suggestions in terms of the tech stack", image: "https://www.apisolutionsltd.com/youWillGet/suggestions.svg" },
        { description: "Action plan to kick start your project", image: "https://www.apisolutionsltd.com/youWillGet/timeline.svg" }
    ];

    return (
        <div className='py-8 md:py-16 bg-[#ecf6fcb0] dark:bg-[#1a2a3a] transition-colors duration-300'>
            <div className='container mx-auto px-4'>
                {/* Header Section */}
                <div className='relative h-[60px] sm:h-[80px] md:h-[155px] flex justify-start items-center mb-6 md:ml-20 md:mb-12'>
                    <p className='font-extrabold text-[#DDDDDD] dark:text-gray-800 text-[40px] sm:text-[50px] md:text-[100px] h-[40px] sm:h-[50px] md:h-[100px] absolute top-0 left-0 m-0'>
                        YOU WILL GET
                    </p>
                    <h2 className='font-extrabold text-[#0C9DCA] dark:text-cyan-300 text-2xl sm:text-3xl md:text-6xl absolute pl-3 md:pl-12 tracking-[-1.80px]'>
                        You Will Get
                    </h2>
                </div>

                {/* Grid Items */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8'>
                    {detDetails.map((getDetail, index) => (
                        <div 
                            key={index}
                            className='flex flex-col sm:flex-row items-center gap-3 p-4 rounded-lg transition-all duration-300'
                        >
                            <img 
                                src={getDetail.image} 
                                alt="" 
                                className='h-10 md:h-12 w-10 md:w-12 object-contain filter dark:invert-[80%]' 
                            />
                            <p className='text-sm md:text-lg text-[#0C9DCA] dark:text-cyan-300 text-center sm:text-left'>
                                {getDetail.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Get;