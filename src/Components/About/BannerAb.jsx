const BannerAb = () => {
    const backgroundStyle = {
        backgroundImage: "url('https://i.ibb.co.com/0pRbvBFS/pageBg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
    
    return (
        <div>
            <div 
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-screen flex items-center justify-center lg:justify-end px-4 sm:px-8 md:px-16 lg:px-32" 
                style={backgroundStyle}
            >
                <div className="flex flex-col max-w-full sm:max-w-[500px] md:max-w-[600px] lg:max-w-[380px] dark:bg-gray-800/80 p-6 rounded-lg lg:ml-auto">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#0C9DCA] mb-4 sm:mb-6">About Us</h2>
                    <p className="text-base sm:text-lg text-black dark:text-white leading-relaxed text-justify">
                        TechBazar24 specializes in tailored software prototyping,
                        development, testing, and maintenance. We offer
                        cost-effective solutions customized to your needs.
                        Be it a rapid prototype, AI system, or support for
                        existing apps, let's build software that works.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BannerAb;