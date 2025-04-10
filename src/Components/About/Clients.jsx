const Clients = () => {
    return (
        <div className="bg-[#ecf6fcb0] dark:bg-[#1a1a1a] py-8 sm:py-10 md:py-12">
            {/* Header Section */}
            <div className='relative h-[50px] sm:h-[70px] md:h-[100px] lg:h-[155px] flex justify-start items-center mb-4 sm:mb-6 md:mb-8 lg:mb-12 ml-4 sm:ml-6 md:ml-12 lg:ml-20'>
                <p className='font-extrabold text-[#DDDDDD] dark:text-gray-700 text-[32px] sm:text-[40px] md:text-[60px] lg:text-[80px] xl:text-[100px] h-[32px] sm:h-[40px] md:h-[60px] lg:h-[80px] xl:h-[100px] absolute top-0 left-0 m-0'>
                    OUR CLIENTS
                </p>
                <h2 className='font-extrabold text-[#0C9DCA] dark:text-cyan-300 text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl absolute pl-2 sm:pl-3 md:pl-6 lg:pl-8 xl:pl-12 tracking-[-0.5px] sm:tracking-[-1px] md:tracking-[-1.5px] lg:tracking-[-1.80px]'>
                    Our Clients
                </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
                <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-12">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4 lg:mb-6 font-semibold text-gray-800 dark:text-gray-100">
                        Trusted by
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-justify mb-6 sm:mb-8 lg:mb-12 text-gray-700 dark:text-gray-300 leading-relaxed sm:leading-relaxed">
                        We pride ourselves on contributing to our client's success and building long-term, trusted relationships with them. Most of our enterprise clients are still with us and have worked with us for years.
                    </p>
                </div>
                
                <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 place-items-center">
                    <img 
                        className="h-12 sm:h-16 md:h-20 w-auto" 
                        src="https://www.apisolutionsltd.com/youWillGet/15minutes.svg" 
                        alt="15 Minutes Logo" 
                    />
                    <img 
                        className="h-12 sm:h-16 md:h-20 w-auto" 
                        src="https://www.apisolutionsltd.com/youWillGet/action.svg" 
                        alt="Action Logo" 
                    />
                    <img 
                        className="h-12 sm:h-16 md:h-20 w-auto" 
                        src="https://www.apisolutionsltd.com/youWillGet/strict.svg" 
                        alt="Strict Logo" 
                    />
                    <img 
                        className="h-12 sm:h-16 md:h-20 w-auto" 
                        src="https://www.apisolutionsltd.com/youWillGet/suggestions.svg" 
                        alt="Suggestions Logo" 
                    />
                </div>
            </div>
        </div>
    );
};

export default Clients;