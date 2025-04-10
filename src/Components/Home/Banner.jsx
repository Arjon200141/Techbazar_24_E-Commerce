import React from 'react';

const Banner = () => {
    return (
        <div className="w-full">
            <div className="carousel w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-screen">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/CLPcwy4/473161452-1099511868852354-2875339407424202466-n.jpg"
                        className="w-full object-cover"
                        alt="Banner image"
                    />
                    {/* Dark mode overlay - optional if you want to adjust brightness in dark mode */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 dark:bg-opacity-20"></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;