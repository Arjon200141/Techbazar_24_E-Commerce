const Mission = () => {
    const backgroundStyle = {
        backgroundImage: "url('https://i.ibb.co.com/MxyKTShh/mission.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div className="min-h-screen bg-sky-50 dark:bg-gray-900 pt-16 md:pt-20">
            {/* Title Section - Same for all devices */}
            <div className='relative h-[80px] md:h-[155px] flex justify-start items-center px-6 md:ml-20 mb-8 md:mb-12'>
                <p className='font-extrabold text-[#DDDDDD] dark:text-gray-800 text-[50px] md:text-[100px] h-[50px] md:h-[100px] top-0 left-0 absolute m-0'>MISSION VISION</p>
                <h2 className='font-extrabold text-[#0C9DCA] dark:text-cyan-300 text-3xl md:text-6xl absolute pl-3 md:pl-12 tracking-[-1.80px]'>Mission Vision</h2>
            </div>

            {/* Mobile/Tablet Layout - Text on semi-transparent background */}
            <div className="md:hidden relative w-full min-h-[500px] mx-auto" style={backgroundStyle}>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center px-6">
                    <div className="text-white">
                        <h2 className="text-2xl mb-4 font-semibold">Mission</h2>
                        <p className="text-base mb-8 leading-relaxed">Transforming Ideas through innovative digital products and providing solutions embracing tomorrow's need to become ideal partners.</p>
                        <h2 className="text-2xl mb-4 font-semibold">Vision</h2>
                        <p className="text-base leading-relaxed">To cater client's satisfaction maintaining high value and standards in creating software as a product and providing software as a service in our mission to implement our vision.</p>
                    </div>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex gap-8 lg:gap-20 justify-between lg:mr-20 xl:mr-32">
                <div className="flex-1">
                    <div className="w-full h-[500px] xl:h-screen flex items-center justify-end px-8 lg:px-20 xl:px-32 rounded-xl overflow-hidden " style={backgroundStyle}></div>
                </div>
                <div className="flex-1 mt-12 xl:mt-32 pr-4">
                    <h2 className="text-2xl xl:text-3xl mb-4 xl:mb-6 font-semibold text-gray-800 dark:text-white">Mission</h2>
                    <p className="text-base xl:text-lg text-justify mb-8 xl:mb-12 text-gray-700 dark:text-gray-300 leading-relaxed">Transforming Ideas through innovative digital products and providing solutions embracing tomorrow's need to become ideal partners.</p>
                    <h2 className="text-2xl xl:text-3xl mb-4 xl:mb-6 font-semibold text-gray-800 dark:text-white">Vision</h2>
                    <p className="text-base xl:text-lg text-justify text-gray-700 dark:text-gray-300 leading-relaxed">To cater client's satisfaction maintaining high value and standards in creating software as a product and providing software as a service in our mission to implement our vision.</p>
                </div>
            </div>
        </div>
    );
};

export default Mission;