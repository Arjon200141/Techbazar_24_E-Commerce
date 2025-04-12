import { Link } from "react-router-dom";

const Digital = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }; 
    const uniques = [
        { id: "1", name: "Comprehensive SEO Solutions", image: "https://www.apisolutionsltd.com/innerPaageImg/icon/DesignResearch.svg", description: "Elevate online presence with our SEO expertise, optimizing content, and website structure. Enhance search rankings, increase organic traffic, and stay ahead in the competitive digital landscape." },

        { id: "2", name: "Premium Content Marketing Services", image: "https://www.apisolutionsltd.com/innerPaageImg/icon/UserInterfaceDesign.svg", description: "Our skilled content developers and editors write SEO-optimized articles and can draft and fine-tune them to merge with brand image and intent. Be it for a marketing company, or niche-based blogging, we provide top-notch content writing services." },

        { id: "3", name: "Engaging Social Media Management", image: "https://www.apisolutionsltd.com/innerPaageImg/icon/RapidPrototyping.svg", description: "Foster meaningful connections through expertly managed social media platforms. Our services include content creation, community engagement, and strategic campaigns, enhancing brand presence across diverse channels." },

        { id: "4", name: "Data-Driven Analytics", image: "https://www.apisolutionsltd.com/innerPaageImg/icon/PostLaunchDesignOptimization.svg", description: "We use advanced analytics tools to have valuable insights into campaign performance, audience behavior, and ROI. Make informed decisions, refine strategies, and achieve measurable success with our data-driven approach." },
    ]
    return (
        <div className="p-20 px-32 bg-[#ecf6fcb0] dark:bg-[#1a1a1a] max-lg:p-10 max-md:p-6">
            {/* 1st Part */}
            <div className="grid grid-cols-3 mb-24 max-lg:grid-cols-1 max-lg:mb-12 max-lg:gap-8">
                <div className="space-y-4 col-span-2">
                    <h2 className="text-3xl font-bold text-[#0C9DCA] dark:text-[#0C9DCA] max-md:text-2xl">Digital Marketing</h2>
                    <p className="text-base dark:text-gray-300 max-md:text-base">Our team of digital marketing gurus knows how to make your brand rock on the internet. We're like the backstage crew that makes your online show a hit.</p>
                    <h3 className="text-xl font-medium text-black dark:text-white max-md:text-lg">Our Digital Marketing Mission & Vision</h3>
                    <p className="text-base dark:text-gray-300 max-md:text-base">Our vision is to be more than just a provider of standard digital marketing services. We aim to be a true partner in your business's digital growth and success. Our holistic approach focuses on executing essential services like SEO, PPC, social media marketing, and analytics with skill and dedication. But we also keep an eye on the bigger picture of how to continually innovate, explore new opportunities, and boost your digital presence. Above all, our mission is to help our clients achieve their most important business goals through digitally-driven growth and engagement. We will ensure you’re one step ahead in identifying and capitalizing on new digital opportunities.</p>
                    
                </div>
                <div className="mt-16 max-lg:mt-0 max-lg:flex max-lg:justify-center">
                    <img src="https://www.apisolutionsltd.com/innerPaageImg/9.webp" alt="" className="rounded-full max-lg:max-w-xs" />
                </div>
            </div>

            {/* Second Part */}
            <div className="grid grid-cols-3 gap-12 max-lg:grid-cols-1 max-lg:gap-8">
                <div className="col-span-2">
                    <p className="text-xl mb-5 dark:text-gray-300 max-md:text-base">Don't hesitate to contact us for your digital needs. Take your digital marketing to the next level, optimize your online presence, or explore new opportunities by taking our services.</p>
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
                        <img src="https://www.apisolutionsltd.com/our-services-avatar/9.svg" alt="" className="max-lg:max-w-xs" />
                        <div className="w-96 bg-gradient-to-r absolute -bottom-0 right-2 from-white via-white to-[#ffffff4f] rounded-xl shadow-xl dark:from-gray-800 dark:via-gray-800 dark:to-[#1a1a1a4f] max-lg:hidden">
                            <p className="text-xl text-[#0C9DCA] dark:text-[#0C9DCA] font-bold px-12 py-6">Digital Marketing Manager</p>
                        </div>
                    </div>
                    <div className="lg:hidden bg-gradient-to-r from-white via-white to-[#ffffff4f] rounded-xl shadow-xl dark:from-gray-800 dark:via-gray-800 dark:to-[#1a1a1a4f] mt-4">
                        <p className="text-xl text-[#0C9DCA] dark:text-[#0C9DCA] font-bold px-6 py-3 text-center">Digital Marketing Manager</p>
                    </div>
                </div>
            </div>

            {/* 3rd Part */}
            <div className="mt-32 max-lg:mt-16">
                <h2 className="text-[#0C9DCA] dark:text-[#0C9DCA] text-4xl font-semibold text-center max-md:text-2xl">What Do We offer?</h2>
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

export default Digital;