import { Link } from "react-router-dom";

const Creative = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }; 
    const uniques = [
        { id: "1", name: "Branding and Identity", image: "https://www.apisolutionsltd.com/innerPaageImg/icon/DesignResearch.svg", description: "We assist in giving your brand its own special identity. Developing an attractive logo and using shades that complement it are two essential steps in this process." },

        { id: "2", name: "Graphic Design", image: "https://www.apisolutionsltd.com/innerPaageImg/icon/UserInterfaceDesign.svg", description: "We guarantee that your graphics, images, and visual elements are of the highest quality, making your content stand out." },

        { id: "3", name: "Prototyping", image: "https://www.apisolutionsltd.com/innerPaageImg/icon/RapidPrototyping.svg", description: "Before diving into the deep end, we create prototypes to give you a feel for what the final product will be like. It's like a sneak peek to make sure we're on the right track." },

        { id: "4", name: "Responsive Design", image: "https://www.apisolutionsltd.com/innerPaageImg/icon/PostLaunchDesignOptimization.svg", description: "In today's digital age, your design needs to look fantastic on all devices, from desktop computers to mobile phones. We ensure that your design adapts to different screen sizes flawlessly." },
    ]
    return (
        <div className="p-20 px-32 bg-[#ecf6fcb0] dark:bg-[#1a1a1a] max-lg:p-10 max-md:p-6">
            {/* 1st Part */}
            <div className="grid grid-cols-3 mb-24 max-lg:grid-cols-1 max-lg:mb-12 max-lg:gap-8">
                <div className="space-y-4 col-span-2">
                    <h2 className="text-3xl font-bold text-[#0C9DCA] dark:text-[#0C9DCA] max-md:text-2xl">Creative Design</h2>
                    <p className="text-base dark:text-gray-300 max-md:text-base">We know first impressions matter, and our Creative Design service is about nailing that first impression. We'll ensure your digital presence is visually stunning and highly functional, meeting industry standards and your unique brand identity. We, as a team, excel to combine functionality with aesthetics. We help you closely understand the brand and audience.</p>
                    <h3 className="text-xl font-medium text-black dark:text-white max-md:text-lg">What Sets Us Apart?</h3>
                    <p className="text-base dark:text-gray-300 max-md:text-base">Our creative design team specializes in crafting visually stunning materials that effectively communicate your brand story. We collaborate closely to understand your target audience, competitive landscape, and core messaging. Our services span logo creation, illustration, packaging, print publications, digital ads, and complete integrated campaigns. Our designers artfully blend aesthetics and functionality so your collateral not only looks stunning but also effectively informs, engages, and converts.</p>
                    <h3 className="text-xl font-medium text-black dark:text-white max-md:text-lg">How Do We Perceive Creative Design?</h3>
                    <p className="text-base dark:text-gray-300 max-md:text-base">We look at creative design like giving brands a face, a personality, and visual language customers instantly recognize. We try to create designs that connect on an emotional level. We believe your audience becomes immersed in your brand narrative as a result of emotional attachment. Just share your business concept and we'll make the best possible presence for your business on the Internet. We hope you won't mind having a bunch of talented artists to draw your business digitally!</p>
                    
                </div>
                <div className="mt-16 max-lg:mt-0 max-lg:flex max-lg:justify-center">
                    <img src="https://www.apisolutionsltd.com/innerPaageImg/8.webp" alt="" className="rounded-full max-lg:max-w-xs" />
                </div>
            </div>

            {/* Second Part */}
            <div className="grid grid-cols-3 gap-12 max-lg:grid-cols-1 max-lg:gap-8">
                <div className="col-span-2">
                    <p className="text-xl mb-5 dark:text-gray-300 max-md:text-base">You're in the right spot if you want to see your digital creations fulfilled. We're here to help you make your ideas a reality in a way that will surprise others. Let's get started!</p>
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
                        <div className="w-72 bg-gradient-to-r absolute -bottom-0 right-12 from-white via-white to-[#ffffff4f] rounded-xl shadow-xl dark:from-gray-800 dark:via-gray-800 dark:to-[#1a1a1a4f] max-lg:hidden">
                            <p className="text-xl text-[#0C9DCA] dark:text-[#0C9DCA] font-bold px-12 py-6">Visualizer</p>
                        </div>
                    </div>
                    <div className="lg:hidden bg-gradient-to-r from-white via-white to-[#ffffff4f] rounded-xl shadow-xl dark:from-gray-800 dark:via-gray-800 dark:to-[#1a1a1a4f] mt-4">
                        <p className="text-xl text-[#0C9DCA] dark:text-[#0C9DCA] font-bold px-6 py-3 text-center">Visualizer</p>
                    </div>
                </div>
            </div>

            {/* 3rd Part */}
            <div className="mt-32 max-lg:mt-16">
                <h2 className="text-[#0C9DCA] dark:text-[#0C9DCA] text-4xl font-semibold text-center max-md:text-2xl">How Creative Design Enhances Business Success (The Titles Need to Be Changed)</h2>
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

export default Creative;