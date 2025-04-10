import { useState } from "react";
import BubbleAnimation from "../Root/BubbleAnimation";

const OurExpert = () => {
    const experts = [
        {
            id: "1",
            name: "Application Development",
            description: "Rapid advancements in technology, particularly the growth of mobile devices and the Internet, have been a driving force behind the growth in application development. From social media platforms and Ecommerce websites to productivity tools and entertainment apps, the digital landscape is teeming with applications that cater to a variety of needs and interests.",
            image: "https://www.apisolutionsltd.com/_next/image?url=%2FOurExpertise%2FApplicationDevelopment.webp&w=1080&q=75"
        },
        {
            id: "2",
            name: "Digital Transformation",
            description: "In today's rapidly evolving business landscape, staying ahead requires more than just incremental changes – it demands a complete shift in mindset and operations. At API Solutions, we empower businesses to embrace the future through our transformative Digital Transformation services.",
            image: "https://www.apisolutionsltd.com/_next/image?url=%2FOurExpertise%2FDigitalTransformation.webp&w=1080&q=75"
        },
        {
            id: "3",
            name: "Business Analysis",
            description: "We believe Business Analysis goes beyond just a service and acts as an important driver to foster innovation and lead transformational change. Our skilled team of business analysts is dedicated to dissecting complex business dynamics, identifying potential areas of progress, and formulating strategies that align technology with your overarching business objectives, through thorough data analysis and collaborative engagement with stakeholders. This ensures that your business can adapt to the competitive and changing environment.",
            image: "https://www.apisolutionsltd.com/_next/image?url=%2FOurExpertise%2FBusinessAnalysis.webp&w=1080&q=75"
        },
        {
            id: "4",
            name: "Digital Product Design",
            description: "We truly understand the game-changing impact of digital product design in shaping the boundaries of technology. Our highly committed crew of digital product designers brings a blend of creativity, technical expertise, and market knowledge to every single project. Our objective is to create high-level digital experiences that strike a chord with our clients and their specific target audiences. We work by understanding clients' holistic vision and continuously refining what they want in real value through end-to-end contributions.",
            image: "https://www.apisolutionsltd.com/_next/image?url=%2FOurExpertise%2FDigitalProductDesign.webp&w=1080&q=75"
        },
        {
            id: "5",
            name: "Data Management",
            description: "We pioneer efficient data management solutions whether organizing, storing or interpreting data, our comprehensive solutions allow you to make informed choices and unlock valuable insights. Our dedicated services cover the entire spectrum of data management from collection to analysis and with our team of experts, we streamline your data processes to ensure accuracy, security and accessibility. We recognize the importance of data in today's business landscape. API Solutions' data management services give you a competitive edge and a strong foundation for building a resilient, data-driven business strategy from the ground up.",
            image: "https://www.apisolutionsltd.com/_next/image?url=%2FOurExpertise%2FDataManagement.webp&w=1080&q=75"
        },
        {
            id: "6",
            name: "IoT(Internet of Things)",
            description: "With our deep understanding of IoT, we create innovative solutions that utilize the potential of connected devices and data-driven insights.",
            image: "https://www.apisolutionsltd.com/_next/image?url=%2FOurExpertise%2FIoT.webp&w=1080&q=75"
        },
        {
            id: "7",
            name: "DevOps",
            description: "Our proficiency in DevOps allows us to streamline the development process, enhance collaboration, and accelerate software delivery. With a deep learning of industry-leading DevOps tools and methodologies, we enable continuous integration and continuous delivery (CI/CD) pipelines, ensuring faster and more reliable software releases. Our skilled team implements automated testing, deployment, and monitoring, resulting in reduced errors and increased efficiency.",
            image: "https://www.apisolutionsltd.com/_next/image?url=%2FOurExpertise%2FDevOps.webp&w=1080&q=75"
        },
        {
            id: "8",
            name: "It Support & Maintenance",
            description: "We understand the critical role that IT infrastructure plays in the smooth functioning of businesses. That's why we offer comprehensive IT Support & Maintenance services to ensure your systems operate at their best, allowing you to focus on your core business objectives.",
            image: "https://www.apisolutionsltd.com/_next/image?url=%2FOurExpertise%2FITSupportMaintenance.webp&w=1080&q=75"
        },
    ];
    const [activeExpert, setActiveExpert] = useState(experts[0]); // Set first expert as default

    // Optional: If you want to reset to first expert when mouse leaves all items
    const handleContainerLeave = () => {
        // setActiveExpert(experts[0]);
    };

    return (
        <div className="bg-[#f6fbfeb0] dark:bg-[#1a1a1a] py-6 sm:py-8 md:py-12">
            {/* Header Section */}
            <div className='relative h-[40px] sm:h-[60px] md:h-[80px] lg:h-[120px] flex justify-start items-center ml-4 sm:ml-6 mb-4 sm:mb-6 md:mb-8'>
                <p className='font-extrabold text-[#DDDDDD] dark:text-gray-700 text-[24px] sm:text-[32px] md:text-[40px] lg:text-[50px] xl:text-[80px] h-[24px] sm:h-[32px] md:h-[40px] lg:h-[50px] xl:h-[80px] absolute top-0 left-0'>
                    OUR EXPERTISE
                </p>
                <h2 className='font-extrabold text-[#0C9DCA] dark:text-cyan-300 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl absolute pl-2 sm:pl-3 md:pl-4 lg:pl-8 tracking-[-0.5px] sm:tracking-[-1px] md:tracking-[-1.5px] lg:tracking-[-1.8px]'>
                    Our Expertise
                </h2>
            </div>

            <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24">
                {/* Desktop Layout (md and above) */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0">
                    {/* Left Column - Expertise Names */}
                    <div className="md:col-span-1 flex flex-col items-end pr-2">
                        {experts.map((expert) => (
                            <div
                                key={expert.id}
                                className="w-full py-2 md:py-3 text-right cursor-pointer"
                                onMouseEnter={() => setActiveExpert(expert)}
                                onClick={() => setActiveExpert(expert)}
                            >
                                <p className={`text-left transition-all duration-200 ${activeExpert?.id === expert.id
                                    ? 'text-lg md:text-xl font-semibold text-[#0C9DCA] dark:text-cyan-300'
                                    : 'text-base md:text-lg font-medium text-gray-700 dark:text-gray-300'
                                    }`}>
                                    {expert.id}. {expert.name}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Middle Column - Connected SVG Icons */}
                    <div className="md:col-span-1 flex flex-col items-center relative">
                        {/* Vertical connector line */}
                        <div
                            className="absolute w-0.5 bg-[#0C9DCA] dark:bg-cyan-300 -z-10"
                            style={{
                                top: '20px',
                                height: `${(experts.length - 1) * 52}px`
                            }}
                        ></div>

                        {experts.map((expert) => (
                            <div
                                key={expert.id}
                                className="py-2 md:py-3 flex flex-col items-center"
                                onMouseEnter={() => setActiveExpert(expert)}
                                onClick={() => setActiveExpert(expert)}
                            >
                                <div className={`
                            w-6 h-6 md:w-7 md:h-7 flex items-center justify-center rounded-full p-1
                            ${activeExpert?.id === expert.id
                                        ? 'ring-2 ring-[#649bac] dark:ring-cyan-400 ring-offset-2'
                                        : ''}
                        `}>
                                    <div className={`
                                w-full h-full rounded-full flex items-center justify-center
                                ${activeExpert?.id === expert.id
                                            ? 'border-2 border-[#0C9DCA] dark:border-cyan-300'
                                            : ''}
                            `}>
                                        <img
                                            src="https://www.apisolutionsltd.com/shape/cta-blue.svg"
                                            alt=""
                                            className="h-full w-full object-contain"
                                            style={{
                                                filter: "brightness(0) saturate(100%) invert(54%) sepia(93%) saturate(374%) hue-rotate(149deg) brightness(89%) contrast(91%)"
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column - Details Panel */}
                    <div className="col-span-1 md:col-span-1 pl-0 md:pl-2">
                        <div className="sticky top-4 min-h-[300px] md:min-h-[400px]">
                            {activeExpert ? (
                                <div className="rounded-lg h-full">
                                    <img
                                        src={activeExpert.image}
                                        alt={activeExpert.name}
                                        className="w-full h-40 sm:h-48 object-cover rounded-lg mb-3"
                                    />
                                    <h3 className="text-lg sm:text-xl font-bold text-[#0C9DCA] dark:text-cyan-300 mb-2">
                                        {activeExpert.name}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                                        {activeExpert.description}
                                    </p>
                                </div>
                            ) : (
                                <div className="h-full flex items-center justify-center">
                                    <p className="text-gray-400 dark:text-gray-500 text-center">
                                        Hover over an expertise to see details
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Mobile Layout (below md) */}
                <div className="md:hidden space-y-4">
                    {experts.map((expert) => (
                        <div key={expert.id} className="w-full">
                            <div
                                className="w-full py-3 px-4 bg-[#d7f0f8] dark:bg-gray-800 rounded-lg shadow-sm cursor-pointer"
                                onClick={() => setActiveExpert(activeExpert?.id === expert.id ? null : expert)}
                            >
                                <p className={`font-medium flex items-center justify-between ${activeExpert?.id === expert.id
                                    ? 'text-[#000000] font-semibold dark:text-cyan-300'
                                    : 'text-gray-700 dark:text-gray-300'
                                    }`}>
                                    {expert.id}. {expert.name} <span><img src="https://www.apisolutionsltd.com/shape/cta-blue.svg" alt="" className="h-5"/></span>
                                </p>
                            </div>

                            {activeExpert?.id === expert.id && (
                                <div className="mt-2 p-4 bg-white dark:bg-gray-800 rounded-lg">
                                    <img
                                        src={expert.image}
                                        alt={expert.name}
                                        className="w-full h-40 object-cover rounded-lg mb-3"
                                    />
                                    <h3 className="text-lg font-bold text-[#0C9DCA] dark:text-cyan-300 mb-2">
                                        {expert.name}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        {expert.description}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <BubbleAnimation></BubbleAnimation>
        </div>
    );
};

export default OurExpert;