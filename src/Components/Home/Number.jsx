const Number = () => {
    const backgroundStyle = {
        backgroundImage: "url('https://www.apisolutionsltd.com/experiencebg.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div className="py-8 sm:py-12 md:py-16 bg-[#f6fbfeb0] dark:bg-[#0a192f]">
            {/* Header Section */}
            <div className='relative h-[60px] sm:h-[80px] md:h-[120px] flex justify-start items-center ml-4 sm:ml-6 mb-4 sm:mb-8 md:mb-20'>
                <p className='font-extrabold text-[#DDDDDD] dark:text-gray-800 text-[32px] sm:text-[40px] md:text-[50px] lg:text-[80px] h-[32px] sm:h-[40px] md:h-[50px] lg:h-[80px] absolute top-0 left-0'>
                    NUMBERS & FIGURES
                </p>
                <h2 className='font-extrabold text-[#0C9DCA] dark:text-cyan-300 text-xl sm:text-2xl md:text-3xl lg:text-5xl absolute pl-3 sm:pl-4 md:pl-8 tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-1.80px]'>
                    Numbers & Figures
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 mx-4 sm:mx-8 md:mx-12">
                {/* Image Section */}
                <div className="flex justify-center mb-8 relative">
                    <img
                        src="https://www.apisolutionsltd.com/_next/image?url=%2Fwelcome.webp&w=640&q=75"
                        alt="Welcome"
                        className="w-[280px] sm:w-[350px] md:w-[400px] h-[280px] sm:h-[350px] md:h-[400px]"
                    />

                    {/* Top-left Overlay */}
                    <div
                        className="w-[120px] h-[150px] sm:w-[150px] sm:h-[180px] rounded-xl absolute -top-6 sm:-top-8 left-4 sm:left-8"
                        style={backgroundStyle}
                    >
                        <h2 className="text-5xl sm:text-6xl md:text-8xl text-center font-bold text-white">5</h2>
                        <p className="text-white text-sm sm:text-base md:text-xl text-center">
                            Years of <br /> Experiences
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 sm:px-4 sm:mx-6 sm:my-4 gap-4 sm:gap-6">
                    <div className="bg-[#fff3] dark:bg-[#112240] text-[#0C9DCA] dark:text-cyan-300 shadow-md rounded-xl py-1 px-3 flex flex-col items-center justify-center">
                        <p className="text-5xl sm:text-6xl md:text-7xl font-bold">6+</p>
                        <p className="text-base sm:text-lg">Team Members</p>
                    </div>
                    <div className="bg-[#fff3] dark:bg-[#112240] text-[#0C9DCA] dark:text-cyan-300 shadow-md rounded-xl py-1 px-3 flex flex-col items-center justify-center">
                        <p className="text-5xl sm:text-6xl md:text-7xl font-bold">20+</p>
                        <p className="text-base sm:text-lg">Satisfied Customers</p>
                    </div>
                    <div className="bg-[#fff3] dark:bg-[#112240] text-[#0C9DCA] dark:text-cyan-300 shadow-md rounded-xl py-1 px-3 flex flex-col items-center justify-center">
                        <p className="text-5xl sm:text-6xl md:text-7xl font-bold">83%</p>
                        <p className="text-base sm:text-lg">Software Engineers</p>
                    </div>
                    <div className="bg-[#fff3] dark:bg-[#112240] text-[#0C9DCA] dark:text-cyan-300 shadow-md rounded-xl py-1 px-3 flex flex-col items-center justify-center">
                        <p className="text-5xl sm:text-6xl md:text-7xl font-bold">88%</p>
                        <p className="text-base sm:text-lg">Customer Retention Rate</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Number;