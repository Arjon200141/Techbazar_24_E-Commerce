import { Link } from "react-router-dom";

const Machine = () => {
    const uniques = [
        { id: "1", name: "Data Analytics and Predictive Modeling", image: "https://www.apisolutionsltd.com/innerPaageImg/icon/DesignResearch.svg", description: "Our data analytics and predictive modeling solutions help extract actionable insights from their data. This includes predictive maintenance, demand forecasting, and anomaly detection." },

        { id: "2", name: "IoT Integration", image: "https://www.apisolutionsltd.com/innerPaageImg/icon/UserInterfaceDesign.svg", description: "Want to make your business smarter? Then, thanks for having us. We're experts at combining AI with the Internet of Things (IoT), providing solutions for remote monitoring, proactive maintenance, and making IoT devices smarter with AI." },

        { id: "3", name: "Cloud-Based Services", image: "https://www.apisolutionsltd.com/innerPaageImg/icon/RapidPrototyping.svg", description: "We use cloud platforms to offer AI and ML solutions that are scalable, efficient, and budget-friendly. These platforms simplify the process of training and deploying models." },

        { id: "4", name: "Data Security and Privacy", image: "https://www.apisolutionsltd.com/innerPaageImg/icon/PostLaunchDesignOptimization.svg", description: "We prioritize data security and privacy to safeguard sensitive information. We use advanced encryption and compliance measures to protect our client's data." },
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
                    <h2 className="text-3xl font-bold text-[#0C9DCA] dark:text-[#0C9DCA] max-md:text-2xl">Machine Learning & AI</h2>
                    <p className="text-base dark:text-gray-300 max-md:text-base">We have a dedicated team in the dynamic and ever-evolving field of Artificial Intelligence (AI) and Machine Learning (ML) services. Our commitment to innovation, coupled with our exceptional team of data scientists, engineers, and developers, allows us to offer a wide array of AI solutions framed to the unique needs of our clients.</p>
                    <h3 className="text-xl font-medium text-black dark:text-white max-md:text-lg">Our Expertise in A Nutshell</h3>
                    <p className="text-base dark:text-gray-300 max-md:text-base">We're experts in creating personalized ML models that solve challenging problems in various industries. These models are versatile and can handle tasks like recognizing images, understanding language, making predictions, and offering recommendations. Our deep learning skills, using neural networks and CNNs will handle complex tasks such as identifying objects, understanding speech, and creating autonomous systems. We have a tested team, creating AI models for sentiment analysis, chatbots, text summarization, language translation, and an array of language-related applications. Everything we create is focused on real. Our systems make decisions, predict outputs, automate processes, and uncover insights so you can work smarter. Anyway, we don’t forget to ensure they are secure, ethical, and safe!</p>

                </div>
                <div className="mt-16 max-lg:mt-0 max-lg:flex max-lg:justify-center">
                    <img src="https://www.apisolutionsltd.com/innerPaageImg/6.webp" alt="" className="rounded-full max-lg:max-w-xs" />
                </div>
            </div>

            {/* Second Part */}
            <div className="grid grid-cols-3 gap-12 max-lg:grid-cols-1 max-lg:gap-8">
                <div className="col-span-2">
                    <p className="text-xl mb-5 dark:text-gray-300 max-md:text-base">By partnering with Techbazar24, you can access a world of AI and ML solutions tailored to your needs. We're here to enhance your business, optimize your operations, and drive innovation in your industry. Contact us today to take the first step towards a more innovative, data-driven future.</p>
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
                        <img src="https://www.apisolutionsltd.com/our-services-avatar/6.svg" alt="" className="max-lg:max-w-xs" />
                        <div className="w-96 bg-gradient-to-r absolute -bottom-0 right-8 from-white via-white to-[#ffffff4f] rounded-xl shadow-xl dark:from-gray-800 dark:via-gray-800 dark:to-[#1a1a1a4f] max-lg:hidden">
                            <p className="text-xl text-[#0C9DCA] dark:text-[#0C9DCA] font-bold px-12 py-6">Software Engineer (AI,ML)</p>
                        </div>
                    </div>
                    <div className="lg:hidden bg-gradient-to-r from-white via-white to-[#ffffff4f] rounded-xl shadow-xl dark:from-gray-800 dark:via-gray-800 dark:to-[#1a1a1a4f] mt-4">
                        <p className="text-xl text-[#0C9DCA] dark:text-[#0C9DCA] font-bold px-6 py-3 text-center">Software Engineer (AI,ML)</p>
                    </div>
                </div>
            </div>

            {/* 3rd Part */}
            <div className="mt-32 max-lg:mt-16">
                <h2 className="text-[#0C9DCA] dark:text-[#0C9DCA] text-4xl font-semibold text-center max-md:text-2xl">Our Core Offerings</h2>
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

export default Machine;