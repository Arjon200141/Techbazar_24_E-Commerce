const UI = () => {
    const uniques = [
        { id: "1", name: "Intuitive User Journeys", image: "https://www.apisolutionsltd.com/innerPaageImg/icon/DesignResearch.svg", description: "Create smooth experiences through user-centric design, ensuring easy navigation and interactions that align with your audience's expectations." },

        { id: "2", name: "Responsive and Consistent Design", image: "https://www.apisolutionsltd.com/innerPaageImg/icon/UserInterfaceDesign.svg", description: "Our designs work smoothly on any device. It will give you a consistent and good-looking interface that boosts your brand and keeps users engaged." },

        { id: "3", name: "Visual Appeal and Professionalism", image: "https://www.apisolutionsltd.com/innerPaageImg/icon/RapidPrototyping.svg", description: "Enhance your brand's look with visually refined designs. Our team pays close attention to detail, ensuring a polished and visually appealing digital presence." },

        { id: "4", name: "Efficiency through Tools and Expertise", image: "https://www.apisolutionsltd.com/innerPaageImg/icon/PostLaunchDesignOptimization.svg", description: "Harness the expertise of our designers proficient in tools like Sketch, Adobe XD, and Figma. We craft appealing graphics, optimize images, and employ CSS to not only make your product visually appealing but also ensure flawless functionality." },
    ]
    return (
        <div className="p-20 px-32 bg-[#ecf6fcb0] dark:bg-[#1a1a1a] max-lg:p-10 max-md:p-6">
            {/* 1st Part */}
            <div className="grid grid-cols-3 mb-24 max-lg:grid-cols-1 max-lg:mb-12 max-lg:gap-8">
                <div className="space-y-4 col-span-2">
                    <h2 className="text-3xl font-bold text-[#0C9DCA] dark:text-[#0C9DCA] max-md:text-2xl">UI/UX Design</h2>
                    <p className="text-base dark:text-gray-300 max-md:text-base">Our UI/UX Design Services are like the artists of the digital world. Design is an expression of art and creativity. What sets us apart is we make your apps and websites not only work well but look stunning!</p>
                    <h3 className="text-xl font-medium text-black dark:text-white max-md:text-lg">Our UI/UX Design Philosophy</h3>
                    <p className="text-base dark:text-gray-300 max-md:text-base">We're all about making technology friendly and personal. We believe that every click or tap comes from a real person with their own wants and needs. Our design philosophy is all about being kind, understanding, and putting people first. We design with the folks who use your stuff in mind, so their digital journey is super enjoyable!</p>
                    <h3 className="text-xl font-medium text-black dark:text-white max-md:text-lg">What We Offer?</h3>
                    <p className="text-base dark:text-gray-300 max-md:text-base">We offer UX/UI consulting to provide expert guidance and audits to solve design challenges. Our design strategy and workshops help clients unlock their digital potential. Our UX/UI design services transform user experiences through wireframing and prototyping. We bring concepts to life, bridging gaps from wireframes to interactive prototypes. We develop component libraries and documentation to maintain brand integrity across touchpoints. Our research and usability testing provides comprehensive user insights to identify pain points. Clients gain confidence in product direction through our data-driven findings. With an emphasis on understanding users, we help craft engaging, frictionless digital experiences merged with actual user behaviors and needs.</p>
                </div>
                <div className="mt-16 max-lg:mt-0 max-lg:flex max-lg:justify-center">
                    <img src="https://www.apisolutionsltd.com/innerPaageImg/4.webp" alt="" className="rounded-full max-lg:max-w-xs" />
                </div>
            </div>

            {/* Second Part */}
            <div className="grid grid-cols-3 gap-12 max-lg:grid-cols-1 max-lg:gap-8">
                <div className="col-span-2">
                    <p className="text-xl mb-5 dark:text-gray-300 max-md:text-base">Ready to transform your digital presence? Choose us for exceptional UI/UX Design. Our expert designers ensure smooth functionality on all devices. Skilled in tools like Sketch, Adobe XD, and Figma, they craft polished, professional, and awesome-looking digital experiences.</p>
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
                    <div className="mt-8">
                        <button className="bg-gradient-to-r from-blue-500 to-sky-400 text-lg py-3 px-6 rounded-full hover:shadow-2xl text-white font-semibold max-md:text-base max-md:py-2 max-md:px-4">SCHEDULE A DESIGN CONSULTATION</button>
                    </div>
                </div>
                <div className="col-span-1 relative max-lg:mt-8">
                    <div className="relative max-lg:flex max-lg:justify-center">
                        <img src="https://www.apisolutionsltd.com/our-services-avatar/4.svg" alt="" className="max-lg:max-w-xs" />
                        <div className="w-64 bg-gradient-to-r absolute -bottom-0 right-16 from-white via-white to-[#ffffff4f] rounded-xl shadow-xl dark:from-gray-800 dark:via-gray-800 dark:to-[#1a1a1a4f] max-lg:hidden">
                            <p className="text-xl text-[#0C9DCA] dark:text-[#0C9DCA] font-bold px-12 py-6">UI/UX Designer</p>
                        </div>
                    </div>
                    <div className="lg:hidden bg-gradient-to-r from-white via-white to-[#ffffff4f] rounded-xl shadow-xl dark:from-gray-800 dark:via-gray-800 dark:to-[#1a1a1a4f] mt-4">
                        <p className="text-xl text-[#0C9DCA] dark:text-[#0C9DCA] font-bold px-6 py-3 text-center">UI/UX Designer</p>
                    </div>
                </div>
            </div>

            {/* 3rd Part */}
            <div className="mt-32 max-lg:mt-16">
                <h2 className="text-[#0C9DCA] dark:text-[#0C9DCA] text-4xl font-semibold text-center max-md:text-2xl">Elevate Your Digital Experience with Our Tailored UX/UI Design Solutions</h2>
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

export default UI;