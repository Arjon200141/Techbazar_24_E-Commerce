const Pricing = () => {
    const prices = [
        {
            id: "1",
            title: "Large-scale projects",
            model: "Dedicated team",
            terms: "9+ Months",
            team_size: "More than 8 specialists",
            image: "https://www.apisolutionsltd.com/OurService/1.png"
        },
        {
            id: "2",
            title: "Mid-scale projects",
            model: "Time-and-Material",
            terms: "4-6 Months",
            team_size: "3-7 specialists",
            image: "https://www.apisolutionsltd.com/OurService/2.png"
        },
        {
            id: "3",
            title: "Small-scale projects",
            model: "Fixed Price",
            terms: "1-3 Months",
            team_size: "1-2 specialists",
            image: "https://www.apisolutionsltd.com/OurService/3.png"
        }
    ]
    return (
        <div className="py-16 bg-[#ecf6fcb0] dark:bg-gray-800">
            <div className='ml-4 sm:ml-8 md:ml-12 relative h-[60px] sm:h-[80px] md:h-[120px] flex justify-start items-center mb-4 md:mb-8'>
                <p className='font-extrabold text-[#DDDDDD] dark:text-gray-700 text-[40px] sm:text-[50px] md:text-[80px] h-[40px] sm:h-[50px] md:h-[80px] absolute top-0 left-0'>
                    PRICING
                </p>
                <h2 className='font-extrabold text-[#0C9DCA] dark:text-cyan-300 text-2xl sm:text-3xl md:text-5xl absolute pl-3 md:pl-8 tracking-[-1.80px]'>
                    Pricing
                </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 mx-4 sm:mx-8 md:mx-20 gap-6 sm:gap-8">
                {
                    prices.map((price) =>
                        <div key={price.id} className="card px-1 py-5 shadow-2xl hover:bg-[#c0dff1] dark:hover:bg-gray-700 bg-[#c6c5c5c1] dark:bg-gray-600">
                            <div className="card-body">
                                <div className="flex justify-between mb-4 pr-4">
                                    <img src={price.image} alt={price.title} className="w-12 h-12 sm:w-16 sm:h-16" />
                                    <h2 className="card-title text-xl sm:text-2xl dark:text-white">{price.title}</h2>
                                </div>
                                <div className="space-y-3 dark:text-gray-200">
                                    <div className="text-base sm:text-lg">
                                        <p className="font-bold dark:text-white">Pricing Model : </p>
                                        <p>{price.model}</p>
                                    </div>
                                    <hr className="border-gray-200 dark:border-gray-500" />
                                    <div className="text-base sm:text-lg">
                                        <p className="font-bold dark:text-white">Terms :</p>
                                        <p>{price.terms}</p>
                                    </div>
                                    <hr className="border-gray-200 dark:border-gray-500" />
                                    <div className="text-base sm:text-lg">
                                        <p className="font-bold dark:text-white">Team Size</p>
                                        <p>{price.team_size}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Pricing;