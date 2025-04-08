const Clients = () => {
    return (
        <div className="bg-[#ecf6fcb0] py-12">
            {/* Header Section */}
            <div className='relative h-[60px] sm:h-[80px] md:h-[155px] flex justify-start items-center mb-6 md:ml-20 md:mb-12'>
                <p className='font-extrabold text-[#DDDDDD] dark:text-gray-800 text-[40px] sm:text-[50px] md:text-[100px] h-[40px] sm:h-[50px] md:h-[100px] absolute top-0 left-0 m-0'>
                    OUR CLIENTS
                </p>
                <h2 className='font-extrabold text-[#0C9DCA] dark:text-cyan-300 text-2xl sm:text-3xl md:text-6xl absolute pl-3 md:pl-12 tracking-[-1.80px]'>
                    Our Clients
                </h2>
            </div>
            <div className="grid grid-cols-2 gap-24 mx-24">
                <div className="mt-12">
                    <h2 className="text-2xl xl:text-3xl mb-4 xl:mb-6 font-semibold text-gray-800 dark:text-white">Trusted by</h2>
                    <p className="text-base xl:text-lg text-justify mb-8 xl:mb-12 text-gray-700 dark:text-gray-300 leading-relaxed">We pride ourselves on contributing to our client's success and building long-term, trusted relationships with them. Most of our enterprise clients are still with us and have worked with us for years.</p>
                </div>
                <div className="grid grid-cols-2 gap-4 ">
                    <img className="h-20 w-20" src="https://www.apisolutionsltd.com/youWillGet/15minutes.svg" alt="" />
                    <img className="h-20 w-20" src="https://www.apisolutionsltd.com/youWillGet/action.svg" alt="" />
                    <img className="h-20 w-20" src="https://www.apisolutionsltd.com/youWillGet/strict.svg" alt="" />
                    <img className="h-20 w-20" src="https://www.apisolutionsltd.com/youWillGet/suggestions.svg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Clients;