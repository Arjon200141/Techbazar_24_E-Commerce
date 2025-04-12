import { Link } from "react-router-dom";

const CustomSoftware = () => {
    const uniques = [
        { id: "1", name: "Project Overview", image: "https://www.apisolutionsltd.com/innerPaageImg/icon/DesignResearch.svg", description: "We commence with an in-depth exploration of your project's objectives and constraints. We weave a thorough project plan that maps out timelines, milestones, and deliverables, creating a clear track forward." },
        { id: "2", name: "Segmenting Duties", image: "https://www.apisolutionsltd.com/innerPaageImg/icon/UserInterfaceDesign.svg", description: "We break the project into iterative stages to bring your vision to life. We ensure you stay updated on development status so we can deliver value incrementally. Our process ensures seamless refinement from idea to finished product." },
        { id: "3", name: "Quality Fortification", image: "https://www.apisolutionsltd.com/innerPaageImg/icon/RapidPrototyping.svg", description: "We thoroughly test your software using comprehensive assessments including functionality testing and rigorous security scanning. We promptly address the limitations and ensure the best end of the product." },
        { id: "4", name: "We Provide Maintenance", image: "https://www.apisolutionsltd.com/innerPaageImg/icon/PostLaunchDesignOptimization.svg", description: "It isn't the end here. We are here to launch your product as well. Our software launch process involves careful planning, cloud migration if needed, testing for quality, data migration, user training, and ongoing support. It ensures a smooth transition to your new software solution, backed by our commitment to your success." },
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
                    <h2 className="text-3xl font-bold text-[#0C9DCA] dark:text-[#0C9DCA] max-md:text-2xl">Custom Software Development</h2>
                    <p className="text-base dark:text-gray-300 max-md:text-base">We provide fully customized solutions that meet each client's specific business needs. With over a decade of experience, our team of experts specializes in building robust, scalable applications using modern architectures and agile methodologies.</p>
                    <h3 className="text-xl font-medium text-black dark:text-white max-md:text-lg">What We Offer?</h3>
                    <p className="text-base dark:text-gray-300 max-md:text-base">Our goal is to create software that evolves with your business needs now and in the future. That's why we design solutions from scratch based on your unique requirements and our autonomous teams work closely together to transform your ideas into reality. Our software development approach is rooted in microservices architecture. We ensure that your solutions are agile, maintainable, and adaptable to your evolving business needs. Plus, we understand that today's software needs to work flawlessly with various endpoints, including API integrations, webhooks, and third-party services. Our team configures custom software solutions to connect efficiently and communicate with multiple endpoints, ensuring a smooth and integrated user experience.</p>
                </div>
                <div className="mt-16 max-lg:mt-0 max-lg:flex max-lg:justify-center">
                    <img src="https://www.apisolutionsltd.com/innerPaageImg/1.webp" alt="" className="rounded-full max-lg:max-w-xs" />
                </div>
            </div>

            {/* Second Part */}
            <div className="grid grid-cols-3 gap-12 max-lg:grid-cols-1 max-lg:gap-8">
                <div className="col-span-2">
                    <p className="text-xl mb-5 dark:text-gray-300 max-md:text-base">Choose Techbazar24 for technical excellence with seasoned developers crafting tailored software. Our customized precision ensures software beyond expectations, enhancing efficiency for enduring value. Built to grow, our solutions adapt to your changing needs</p>
                    <div className="w-1/2 mt-8 max-lg:w-full">
                        <div>
                            <div className="grid grid-cols-3 gap-8 max-sm:grid-cols-2 max-sm:gap-4">
                                <img className="h-12 max-sm:h-10" src="https://www.apisolutionsltd.com/services-technology-icons/CustomSoftwareDevelopment1.svg" alt="" />
                                <img className="h-12 max-sm:h-10" src="https://www.apisolutionsltd.com/services-technology-icons/CustomSoftwareDevelopment2.svg" alt="" />
                                <img className="h-12 max-sm:h-10" src="https://www.apisolutionsltd.com/services-technology-icons/CustomSoftwareDevelopment3.svg" alt="" />
                                <img className="h-12 max-sm:h-10" src="https://www.apisolutionsltd.com/services-technology-icons/CustomSoftwareDevelopment4.svg" alt="" />
                                <img className="h-12 max-sm:h-10" src="https://www.apisolutionsltd.com/services-technology-icons/CustomSoftwareDevelopment5.svg" alt="" />
                                <img className="h-12 max-sm:h-10" src="https://www.apisolutionsltd.com/services-technology-icons/CustomSoftwareDevelopment6.svg" alt="" />
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
                        <img src="https://www.apisolutionsltd.com/our-services-avatar/1.svg" alt="" className="max-lg:max-w-xs" />
                        <div className="w-72 bg-gradient-to-r absolute -bottom-0 right-12 from-white via-white to-[#ffffff4f] rounded-xl shadow-xl dark:from-gray-800 dark:via-gray-800 dark:to-[#1a1a1a4f] max-lg:hidden">
                            <p className="text-xl text-[#0C9DCA] dark:text-[#0C9DCA] font-bold px-12 py-6">Software Developer</p>
                        </div>
                    </div>
                    <div className="lg:hidden bg-gradient-to-r from-white via-white to-[#ffffff4f] rounded-xl shadow-xl dark:from-gray-800 dark:via-gray-800 dark:to-[#1a1a1a4f] mt-4">
                        <p className="text-xl text-[#0C9DCA] dark:text-[#0C9DCA] font-bold px-6 py-3 text-center">Software Developer</p>
                    </div>
                </div>
            </div>

            {/* 3rd Part */}
            <div className="mt-32 max-lg:mt-16">
                <h2 className="text-[#0C9DCA] dark:text-[#0C9DCA] text-4xl font-semibold text-center max-md:text-2xl">Know Our Unique Work Model for Clients</h2>
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

export default CustomSoftware;