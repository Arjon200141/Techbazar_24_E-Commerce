import { Link } from "react-router-dom";

const MobileApp = () => {
    const uniques = [
        { id: "1", name: "Increase brand awareness", image: "https://www.apisolutionsltd.com/innerPaageImg/icon/DesignResearch.svg", description: "A well-designed app directly engages customers with your brand whenever they use their phones. It builds familiarity and loyalty with your brand." },

        { id: "2", name: "Generate revenue streams", image: "https://www.apisolutionsltd.com/innerPaageImg/icon/UserInterfaceDesign.svg", description: "Apps allow monetization through paid downloads, in-app purchases, subscriptions, and advertising. An app can become a direct profit center." },

        { id: "3", name: "Improve customer service", image: "https://www.apisolutionsltd.com/innerPaageImg/icon/RapidPrototyping.svg", description: "An app provides a fast and convenient way for customers to get support, contact you, find information, or access services related to your business." },

        { id: "4", name: "Collect customer data", image: "https://www.apisolutionsltd.com/innerPaageImg/icon/PostLaunchDesignOptimization.svg", description: "Mobile apps can gather valuable insights about your customers, including demographics, location, behaviors, and preferences. This data helps drive strategy." },
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
                    <h2 className="text-3xl font-bold text-[#0C9DCA] dark:text-[#0C9DCA] max-md:text-2xl">Mobile App Development</h2>
                    <p className="text-base dark:text-gray-300 max-md:text-base">Embark on a Journey of Innovation and Excellence with Our Android App Services. We believe nothing can craft digital experiences better than a mobile app. We think out of the box to make our services go beyond the ordinary.</p>
                    <h3 className="text-xl font-medium text-black dark:text-white max-md:text-lg">What We Offer?</h3>
                    <p className="text-base dark:text-gray-300 max-md:text-base">Our expertise lies in crafting optimized mobile solutions around your target users and goals. We collaborate closely to understand pain points and design experiences that leverage the full capabilities of the Android platform. Our developers are highly skilled at integrating advanced functionality like facial recognition, geofencing, automation scripting, and Google Cloud Platform services into apps to boost capabilities. We ensure flawless cross-platform compatibility so your app performs smoothly across devices. Whether you need a secure enterprise solution with biometric authentication, an intelligent logistics platform with tracking, or an innovative e-commerce app with engaging features, We are here to build you a high-quality, user-friendly app that solves real-life problems.</p>
                </div>
                <div className="mt-16 max-lg:mt-0 max-lg:flex max-lg:justify-center">
                    <img src="https://www.apisolutionsltd.com/innerPaageImg/3.webp" alt="" className="rounded-full max-lg:max-w-xs" />
                </div>
            </div>

            {/* Second Part */}
            <div className="grid grid-cols-3 gap-12 max-lg:grid-cols-1 max-lg:gap-8">
                <div className="col-span-2">
                    <p className="text-xl mb-5 dark:text-gray-300 max-md:text-base">Partner with us for your Android app development, and watch your tech dreams come true. Get in touch today and discover the potential of our advanced Android app solutions.</p>
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
                        <img src="https://www.apisolutionsltd.com/our-services-avatar/3.svg" alt="" className="max-lg:max-w-xs" />
                        <div className="w-80 bg-gradient-to-r absolute -bottom-0 right-12 from-white via-white to-[#ffffff4f] rounded-xl shadow-xl dark:from-gray-800 dark:via-gray-800 dark:to-[#1a1a1a4f] max-lg:hidden">
                            <p className="text-xl text-[#0C9DCA] dark:text-[#0C9DCA] font-bold px-12 py-6">Mobile App Developer</p>
                        </div>
                    </div>
                    <div className="lg:hidden bg-gradient-to-r from-white via-white to-[#ffffff4f] rounded-xl shadow-xl dark:from-gray-800 dark:via-gray-800 dark:to-[#1a1a1a4f] mt-4">
                        <p className="text-xl text-[#0C9DCA] dark:text-[#0C9DCA] font-bold px-6 py-3 text-center">Mobile App Developer</p>
                    </div>
                </div>
            </div>

            {/* 3rd Part */}
            <div className="mt-32 max-lg:mt-16">
                <h2 className="text-[#0C9DCA] dark:text-[#0C9DCA] text-4xl font-semibold text-center max-md:text-2xl">How Mobile Application Help Extend Your Business</h2>
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

export default MobileApp;