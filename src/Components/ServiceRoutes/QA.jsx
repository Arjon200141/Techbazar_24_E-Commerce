import { Link } from "react-router-dom";

const QA = () => {
    const uniques = [
        { id: "1", name: "Contact Us If You Want", image: "https://www.apisolutionsltd.com/innerPaageImg/icon/DesignResearch.svg", description: "Your Software to Rock the Floor The key to awesome software QA and testing is making sure your software is top-notch. By really putting your software through its paces, we guarantee it will blow your users away." },

        { id: "2", name: "Find and Fix Issues", image: "https://www.apisolutionsltd.com/innerPaageImg/icon/UserInterfaceDesign.svg", description: "Our rock-solid testing finds any bugs or problems hiding in your software. This allows us to tackle them before your users ever see them." },

        { id: "3", name: "Great User Experience", image: "https://www.apisolutionsltd.com/innerPaageImg/icon/RapidPrototyping.svg", description: "Your users' happiness is our #1 priority. Careful testing fuels our passion for creating software that's intuitive and easy to use. Our efforts result in an experience your users will love." },

        { id: "4", name: "Reliability", image: "https://www.apisolutionsltd.com/innerPaageImg/icon/PostLaunchDesignOptimization.svg", description: "Reliable software is built on a solid foundation of rigorous testing. By minimizing crashes, downtime, or data loss, we reinforce your software's dependability and stability so it thrives under pressure." },
    ]
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div className="p-20 px-32 bg-[#ecf6fcb0] dark:bg-[#1a1a1a] max-lg:p-10 max-md:p-6">
            {/* 1st Part */}
            <div className="grid grid-cols-3 mb-24 max-lg:grid-cols-1 max-lg:mb-12 max-lg:gap-8">
                <div className="space-y-4 col-span-2">
                    <h2 className="text-3xl font-bold text-[#0C9DCA] dark:text-[#0C9DCA] max-md:text-2xl">Software QA and Testing</h2>
                    <p className="text-base dark:text-gray-300 max-md:text-base">Our QA and testing services aim to surpass industry standards by going above and beyond for your software.</p>
                    <h3 className="text-xl font-medium text-black dark:text-white max-md:text-lg">Types of Software We Test</h3>
                    <p className="text-base dark:text-gray-300 max-md:text-base">We test web applications across browsers and platforms for flawless functionality. Mobile app testing covers Android, iOS, and a variety of devices. For desktops, we verify the software on Windows, Mac, and Linux. Testing also spans IoT, e-commerce, enterprise software like ERP and CRM, and health applications such as EHR systems. We validate education/e-learning platforms and content management systems like WordPress and Drupal.</p>
                    <h3 className="text-xl font-medium text-black dark:text-white max-md:text-lg">What We Offer?</h3>
                    <p className="text-base dark:text-gray-300 max-md:text-base">Our manual testing services ensure your software works as it should. We start with a test plan outlining the scope and approach. We thoroughly evaluate non-functional aspects like speed and usability and do all Black box testing assessments as well. We accelerate testing cycles and provide consistent, comprehensive coverage - including complex scenarios. We integrate automation seamlessly into CI/CD pipelines, fostering a culture of continuous improvement. All we care for is that your software works, performs well, and satisfies users. You get smooth, reliable software that excels across the board.</p>
                </div>
                <div className="mt-16 max-lg:mt-0 max-lg:flex max-lg:justify-center">
                    <img src="https://www.apisolutionsltd.com/innerPaageImg/5.webp" alt="" className="rounded-full max-lg:max-w-xs" />
                </div>
            </div>

            {/* Second Part */}
            <div className="grid grid-cols-3 gap-12 max-lg:grid-cols-1 max-lg:gap-8">
                <div className="col-span-2">
                    <p className="text-xl mb-5 dark:text-gray-300 max-md:text-base">With experts at your side, say goodbye to worries and hello to success! Partner with API Solutions for excellent QA and testing that establishes top-notch software quality and reliability.</p>
                    <div className="w-1/2 mt-8 max-lg:w-full">
                        <div>
                            <div className="grid grid-cols-3 gap-8 max-sm:grid-cols-2 max-sm:gap-4">
                                <img className="h-12 max-sm:h-10" src="https://www.apisolutionsltd.com/innerPaageImg/icon/Figma.svg" alt="" />

                                <img className="h-12 max-sm:h-10" src="https://www.apisolutionsltd.com/innerPaageImg/icon/Miro.svg" alt="" />

                                <img className="h-12 max-sm:h-10" src="https://www.apisolutionsltd.com/innerPaageImg/icon/Hotjar.svg" alt="" />

                                <img className="h-12 max-sm:h-10" src="https://www.apisolutionsltd.com/innerPaageImg/icon/C.svg" alt="" />

                                <img className="h-12 max-sm:h-10" src="https://www.apisolutionsltd.com/innerPaageImg/icon/Mi.svg" alt="" />

                                <img className="h-12 max-sm:h-10" src="https://www.apisolutionsltd.com/innerPaageImg/icon/tailwind.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <Link onClick={scrollToTop} to="/contact_us">
                        <div className="mt-8">
                            <button className="bg-gradient-to-r from-blue-500 to-sky-400 text-lg py-3 px-6 rounded-full hover:shadow-2xl text-white font-semibold max-md:text-base max-md:py-2 max-md:px-4">SCHEDULE A DESIGN CONSULTATION</button>
                        </div>
                    </Link>
                </div>
                <div className="col-span-1 relative max-lg:mt-8">
                    <div className="relative max-lg:flex max-lg:justify-center">
                        <img src="https://www.apisolutionsltd.com/our-services-avatar/4.svg" alt="" className="max-lg:max-w-xs" />
                        <div className="w-80 bg-gradient-to-r absolute -bottom-0 right-16 from-white via-white to-[#ffffff4f] rounded-xl shadow-xl dark:from-gray-800 dark:via-gray-800 dark:to-[#1a1a1a4f] max-lg:hidden">
                            <p className="text-xl text-[#0C9DCA] dark:text-[#0C9DCA] font-bold px-12 py-6">Software QA Engineer</p>
                        </div>
                    </div>
                    <div className="lg:hidden bg-gradient-to-r from-white via-white to-[#ffffff4f] rounded-xl shadow-xl dark:from-gray-800 dark:via-gray-800 dark:to-[#1a1a1a4f] mt-4">
                        <p className="text-xl text-[#0C9DCA] dark:text-[#0C9DCA] font-bold px-6 py-3 text-center">Software QA Engineer</p>
                    </div>
                </div>
            </div>

            {/* 3rd Part */}
            <div className="mt-32 max-lg:mt-16">
                <h2 className="text-[#0C9DCA] dark:text-[#0C9DCA] text-4xl font-semibold text-center max-md:text-2xl">Unlocking Excellence: Comprehensive Software QA and Testing Services</h2>
                <div className="mt-20 grid grid-cols-2 gap-8 gap-y-12 max-md:grid-cols-1 max-md:gap-6 max-md:mt-10">
                    {
                        uniques.map((unique) =>
                            <div key={unique.id} className="flex flex-col">
                                <div className="flex gap-4 items-start mb-3">
                                    <img src={unique.image} alt="" className="h-20 w-24 object-cover max-md:h-16 max-md:w-16" />
                                    <div>
                                        <h2 className="text-black dark:text-white text-2xl font-semibold max-md:text-xl">{unique.name}</h2>
                                        <p className="text-lg text-black dark:text-gray-300 max-md:text-base">{unique.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default QA;