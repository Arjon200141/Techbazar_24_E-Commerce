import { Link } from "react-router-dom";

const It = () => {
    const uniques = [
        { id: "1", name: "IT Strategy Development", image: "https://www.apisolutionsltd.com/innerPaageImg/icon/DesignResearch.svg", description: "Our experienced consultants engage in a collaborative process with your team to create a strategic IT roadmap that is customized to your unique needs." },

        { id: "2", name: "Expert Guidance", image: "https://www.apisolutionsltd.com/innerPaageImg/icon/UserInterfaceDesign.svg", description: "Navigate complex IT landscapes with the expertise of seasoned consultants. Gain insights, innovative solutions, and a roadmap for technology integration that propels your business forward." },

        { id: "3", name: "Infrastructure Optimization", image: "https://www.apisolutionsltd.com/innerPaageImg/icon/RapidPrototyping.svg", description: "We closely examine your existing infrastructure, identifying areas for enhancement to ensure optimal system and network performance, providing efficiency and reliability." },

        { id: "4", name: "Security Assurance", image: "https://www.apisolutionsltd.com/innerPaageImg/icon/PostLaunchDesignOptimization.svg", description: "Safeguard your digital assets with robust security measures. IT consultancy provides a proactive approach, offering security audits, threat assessments, and incident response planning to protect your business from evolving cyber threats." },
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
                    <h2 className="text-3xl font-bold text-[#0C9DCA] dark:text-[#0C9DCA] max-md:text-2xl">IT Consultancy</h2>
                    <p className="text-base dark:text-gray-300 max-md:text-base">Our goal is to simplify complex IT challenges, making technology work for you. We begin by understanding your business goals and challenges. This forms the foundation of our strategic planning.</p>
                    <h3 className="text-xl font-medium text-black dark:text-white max-md:text-lg">Our Approach</h3>
                    <p className="text-base dark:text-gray-300 max-md:text-base">We get that IT can be pretty darn confusing, but we're here to make it easy. We keep things plain and simple with an easy approach to IT consulting. Our aim is to boost your software setup and create a tech-focused plan that fits your business well. Our forward-thinking security consultancy offers a range of services designed to fully assess your cyber risk exposure. We implement customized solutions to harden your digital environment. We conduct audits to find vulnerabilities, assess threats to detect risks, create data protection plans for critical info, develop customized security policies, and prepare incident responses to minimize damage from any breach. Our multilayered approach focuses on shielding your data, operations, and networks from evolving threats through robust cybersecurity strategies tailored specifically to safeguard your organization.</p>

                </div>
                <div className="mt-16 max-lg:mt-0 max-lg:flex max-lg:justify-center">
                    <img src="https://www.apisolutionsltd.com/innerPaageImg/10.webp" alt="" className="rounded-full max-lg:max-w-xs" />
                </div>
            </div>

            {/* Second Part */}
            <div className="grid grid-cols-3 gap-12 max-lg:grid-cols-1 max-lg:gap-8">
                <div className="col-span-2">
                    <p className="text-xl mb-5 dark:text-gray-300 max-md:text-base">Ready to take the next step in optimizing your IT solutions? We're here to bring your business to the next level! So, be prepared for a seamless journey toward enhanced efficiency and success.</p>
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
                        <img src="https://www.apisolutionsltd.com/our-services-avatar/10.svg" alt="" className="max-lg:max-w-xs" />
                        <div className="w-96 bg-gradient-to-r absolute -bottom-0 right-8 from-white via-white to-[#ffffff4f] rounded-xl shadow-xl dark:from-gray-800 dark:via-gray-800 dark:to-[#1a1a1a4f] max-lg:hidden">
                            <p className="text-xl text-[#0C9DCA] dark:text-[#0C9DCA] font-bold px-12 py-6">Senior Consultant</p>
                        </div>
                    </div>
                    <div className="lg:hidden bg-gradient-to-r from-white via-white to-[#ffffff4f] rounded-xl shadow-xl dark:from-gray-800 dark:via-gray-800 dark:to-[#1a1a1a4f] mt-4">
                        <p className="text-xl text-[#0C9DCA] dark:text-[#0C9DCA] font-bold px-6 py-3 text-center">Senior Consultant</p>
                    </div>
                </div>
            </div>

            {/* 3rd Part */}
            <div className="mt-32 max-lg:mt-16">
                <h2 className="text-[#0C9DCA] dark:text-[#0C9DCA] text-4xl font-semibold text-center max-md:text-2xl">Our Expertise</h2>
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

export default It;