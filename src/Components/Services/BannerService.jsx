import React from 'react';

const BannerService = () => {
    const backgroundStyle = {
        backgroundImage: "url('https://i.ibb.co.com/0pRbvBFS/pageBg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div>
            <div
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-screen flex items-center justify-center lg:justify-end px-4 sm:px-8 md:px-16 lg:px-32"
                style={backgroundStyle}
            >
                <div className="flex flex-col max-w-full sm:max-w-[500px] md:max-w-[600px] lg:max-w-[480px] dark:bg-gray-800/80 p-6 rounded-lg lg:ml-auto">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#0C9DCA] mb-4 sm:mb-6">Our Services</h2>
                    <p className="text-base sm:text-lg text-black dark:text-white leading-relaxed text-justify">
                    As a software company, we are committed to excellence, innovation and customer satisfaction by providing cutting-edge solutions that drive growth, efficiency and innovation. Our mission is to empower your business with powerful software solutions that drive success and growth. Our diverse range of services is tailored to meet the unique needs of businesses and organizations across industries.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BannerService;