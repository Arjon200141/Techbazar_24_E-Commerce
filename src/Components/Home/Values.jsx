import React from "react";

const Values = () => {
    return (
        <div className="bg-[#eaf2ff]">
            {/* Header Section */}
            <div className='relative h-[60px] sm:h-[80px] md:h-[120px] flex justify-start items-center ml-4 sm:ml-6 mb-4 sm:mb-8 md:mb-8'>
                <p className='font-extrabold text-[#DDDDDD] dark:text-gray-800 text-[32px] sm:text-[40px] md:text-[50px] lg:text-[80px] h-[32px] sm:h-[40px] md:h-[50px] lg:h-[80px] absolute top-0 left-0'>
                OUR CORE VALUES
                </p>
                <h2 className='font-extrabold text-[#0C9DCA] dark:text-cyan-300 text-xl sm:text-2xl md:text-3xl lg:text-5xl absolute pl-3 sm:pl-4 md:pl-8 tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-1.80px]'>
                Our Core Values
                </h2>
            </div>
            
            <div className="relative bg-[#d4e5fe] py-20 px-4 overflow-hidden">
                {/* Top curve background */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-[#eaf2ff] z-0" />

                <div className="relative z-10 max-w-7xl mx-auto pb-12">
                    <div className="grid grid-cols-4 gap-4 text-center text-white">
                        {/* Item 1 */}
                        <div className="relative">
                            <div className="absolute -top-14 left-1/2 -translate-x-1/2 text-5xl font-bold text-gray-300 z-0">
                                01
                            </div>
                            <div className="relative  bg-gradient-to-r from-[#005481] to-[#51B8E0] rounded-full w-48 h-48 mx-auto shadow-2xl flex items-center justify-center text-center text-lg font-bold">
                                <span>Accepting Challenge</span>
                            </div>
                            <div className="relative mt-6 font-semibold text-black">
                                <div className="absolute left-1/2 -translate-x-1/2 -top-6 h-6 w-0.5 bg-white mx-auto"></div>
                                Result:
                                <p className="font-normal mx-12 text-gray-800">positive outcomes.</p>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="relative">
                            <div className="relative mb-6 font-semibold text-black pb-6">
                                Result:
                                <p className="font-normal mx-12 text-gray-800">
                                    a virtuous cycle of trust, credibility, and positive relationships.
                                </p>
                                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 h-6 w-0.5 bg-white mx-auto"></div>
                            </div>
                            <div className="relative bg-gradient-to-r from-[#005481] to-[#51B8E0] rounded-full w-48 h-48 mx-auto shadow-2xl flex items-center justify-center text-center text-lg font-bold">
                                <span>Act with Integrity</span>
                            </div>
                            <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 text-5xl font-bold text-gray-300 z-0">
                                02
                            </div>
                        </div>

                        {/* Item 3 */}
                        <div className="relative">
                            <div className="absolute -top-14 left-1/2 -translate-x-1/2 text-5xl font-bold text-gray-300 z-0">
                                03
                            </div>
                            <div className="relative bg-gradient-to-r from-[#005481] to-[#51B8E0] rounded-full w-48 h-48 mx-auto shadow-2xl flex items-center justify-center text-center text-lg font-bold">
                                <span>Valuing Relationship</span>
                            </div>
                            <div className="relative mt-6 font-semibold text-black pt-8">
                                <div className="absolute left-1/2 -translate-x-1/2 -top-2 h-8 w-0.5 bg-white mx-auto"></div>
                                Result:
                                <p className="font-normal mx-12 text-gray-800">
                                    strengthens teamwork and customer satisfaction.
                                </p>
                            </div>
                        </div>

                        {/* Item 4 */}
                        <div className="relative">
                            <div className="relative mb-6 font-semibold text-black pb-8">
                                Results:
                                <p className="font-normal mx-12 text-gray-800">
                                    mutual understanding and shared success.
                                </p>
                                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 h-8 w-0.5 bg-white mx-auto"></div>
                            </div>
                            <div className="relative bg-gradient-to-r from-[#005481] to-[#51B8E0] rounded-full w-48 h-48 mx-auto shadow-2xl flex items-center justify-center text-center text-lg font-bold">
                                <span>Winning Together</span>
                            </div>
                            <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 text-5xl font-bold text-gray-300 z-0">
                                04
                            </div>
                        </div>
                    </div>

                    {/* Snake Curve SVG Path - Adjusted to connect the circles */}
                    <svg
                        className="absolute top-[50%] left-0 w-full h-[200px] z-0"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M 50 100 
                               Q 200 30, 350 100 
                               Q 500 170, 650 100 
                               Q 800 30, 950 100
                               Q 1100 170, 1250 100"
                            stroke="#005481"
                            strokeWidth="4"
                            fill="transparent"
                            strokeDasharray="10"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Values;