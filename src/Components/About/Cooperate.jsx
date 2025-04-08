const Cooperate = () => {
    return (
       <div className="mt-16">
         <div className="bg-[#f2f2f2b0] dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4 py-12">
            {/* Heading */}
            <div className='relative h-[80px] md:h-[155px] flex justify-start items-center px-6 md:ml-20 mb-8 md:mb-12'>
                <p className='font-extrabold text-[#DDDDDD] dark:text-gray-800 text-[50px] md:text-[100px] h-[50px] md:h-[100px] absolute top-0 left-0 m-0'>COOPERATION</p>
                <h2 className='font-extrabold text-[#0C9DCA] dark:text-cyan-300 text-3xl md:text-6xl absolute pl-3 md:pl-12 tracking-[-1.80px]'>Cooperation</h2>
            </div>

            {/* Top Text */}
            <p className="text-center max-w-4xl mx-auto text-base md:text-lg">
                We believe that collaboration is the cornerstone of progress and innovation. We are actively seeking like-minded partners to join us on a journey of technological excellence and mutual growth.
            </p>

            {/* 3-Section Grid */}
            <div className="grid md:grid-cols-3 gap-8 md:mt-[-80px] items-center mx-20 text-center">
                {/* Left Column */}
                <div>
                    <h3 className="font-bold text-lg md:text-xl text-[#0C9DCA] dark:text-cyan-300 mb-2">What we offer in the partnership:</h3>
                    <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                        We firmly dedicate our resources to fostering the potential of ideas, enabling them to shape profound and mutually advantageous collaborations between all parties involved.
                    </p>
                </div>

                {/* Center Icon and Text - Hidden on small screens, shown on md and above */}
                <div className="hidden md:flex flex-col items-center justify-center space-y-4">
                    <img
                        src="https://i.ibb.co.com/WW9h5rTZ/cooperation-img.png"
                        alt="Cooperation Icon"
                        className="w-16 md:w-80 h-auto pt-48"
                    />
                    <div>
                        <h3 className="font-bold text-lg md:text-xl text-[#0C9DCA] dark:text-cyan-300 mb-1">What we should share:</h3>
                        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                            Building strong, collaborative relationships that drive mutual growth and success for both parties involved.
                        </p>
                    </div>
                </div>

                {/* Right Column */}
                <div>
                    <h3 className="font-bold text-lg md:text-xl text-[#0C9DCA] dark:text-cyan-300 mb-2">What we expect:</h3>
                    <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                        Expertise and Skills, Networking Opportunities, Collaborative Product Development, Shared Risk and Accountability.
                    </p>
                </div>

                {/* Center Text Only - Shown on small screens, hidden on md and above */}
                <div className="md:hidden flex flex-col items-center justify-center space-y-4 mt-8">
                    <div>
                        <h3 className="font-bold text-lg md:text-xl text-[#0C9DCA] dark:text-cyan-300 mb-1">What we should share:</h3>
                        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                            Building strong, collaborative relationships that drive mutual growth and success for both parties involved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Cooperate;