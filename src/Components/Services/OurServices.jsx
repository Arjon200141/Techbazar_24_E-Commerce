import { useState } from 'react';

const OurServices = () => {
    const services = [
        { name: "Digital Transformation" },
        { name: "Business Analysis" },
        { name: "DevOps" },
        { name: "Digital Product Design" },
        { name: "Data Management" },
        { name: "IoT" },
        { name: "Application Development" },
        { name: "IT Support & Maintenance" },
    ]

    const servicedescription = [
        { responsiveImage: "https://www.apisolutionsltd.com/ourServicePhone-icon/customSoftwareDevelopment.svg", id: "1", image: "https://www.apisolutionsltd.com/our-services-avatar/1.svg", description: "Our team is made up of passionate, highly skilled professionals dedicated to distinction. We carefully select our developers based on their technical expertise and commitment to innovation, collaboration, and client satisfaction. We assemble talented teams focused on surpassing expectations.", serviceName: "Custom Software Development" },
        { responsiveImage: "https://www.apisolutionsltd.com/ourServicePhone-icon/UI-UX-Design.svg", id: "2", image: "https://www.apisolutionsltd.com/our-services-avatar/2.svg", description: "Techbazar24 provides high-quality web application development services designed to suit your business requirements. Our skilled web developers utilize the latest technologies to create web apps that are scalable, responsive, and visually appealing, enhancing your online presence.", serviceName: "UI/UX Design" },
        { responsiveImage: "https://www.apisolutionsltd.com/ourServicePhone-icon/mobileAppDevelopment.svg", id: "3", image: "https://www.apisolutionsltd.com/our-services-avatar/3.svg", description: "Empower your business to connect with customers on the go through our exceptional mobile app development services. Techbazar24 is passionate about creating user-friendly, feature-rich, and high-performance mobile applications for Android and iOS platforms.", serviceName: "Mobile App Development" },
        { responsiveImage: "https://www.apisolutionsltd.com/ourServicePhone-icon/webAppDevelopment.svg", id: "4", image: "https://www.apisolutionsltd.com/our-services-avatar/4.svg", description: "A seamless and enjoyable user experience is paramount to the success of any digital product or service. Our UI/UX design service is dedicated to creating visually captivating and intuitively functional interfaces that leave a lasting impression on your users.", serviceName: "Web App Development" },
        { responsiveImage: "https://www.apisolutionsltd.com/ourServicePhone-icon/Software-QA-and-Testing.svg", id: "5", image: "https://www.apisolutionsltd.com/our-services-avatar/5.svg", description: "In the dynamic world of software development, Software QA and Testing emerge as the cornerstones of success. Embracing a range of benefits, they revolutionize the entire software development lifecycle, empowering businesses to thrive and users to enjoy seamless experiences", serviceName: "Software QA and Testing" },
        { responsiveImage: "https://www.apisolutionsltd.com/ourServicePhone-icon/Machine-Learning-and-AI.svg", id: "6", image: "https://www.apisolutionsltd.com/our-services-avatar/9.svg", description: "We lead the way in offering Machine Learning (ML) and Artificial Intelligence (AI) services that give businesses a significant competitive advantage. Our specialized expertise in ML and AI empowers companies to explore data-driven insights, automate tasks, and boost overall efficiency across diverse industries. With our services, businesses can embrace the future of technology and unlock new opportunities for growth and success.", serviceName: "Machine Learning and AI" },
        { responsiveImage: "https://www.apisolutionsltd.com/ourServicePhone-icon/Digital_Transformation.svg", id: "7", image: "https://www.apisolutionsltd.com/our-services-avatar/6.svg", description: "Techbazar24 specializes in digital marketing and content development. We specialize in creating custom marketing strategies and compelling content to boost your online presence and impact. Our expertise includes SEO optimization, social media management, PPC advertising, and data-driven insights. Join hands with us to elevate your brand, connect with your audience, and succeed in the digital world.", serviceName: "Digital Marketing" },
        { responsiveImage: "https://www.apisolutionsltd.com/ourServicePhone-icon/UI-UX-Design.svg", id: "8", image: "https://www.apisolutionsltd.com/our-services-avatar/7.svg", description: "Our team of creative minds is dedicated to transforming your ideas into a visually stunning reality. From strategic digital marketing to attractive graphic design, we are here to enhance your brand. In terms of creative design, we specialize in graphic design, logo design, motion graphics, info-graphics design etc. Our creative capabilities know no bounds. We are always looking for new ways to keep your brand ahead of the curve.", serviceName: "Creative Design" },
        { responsiveImage: "https://www.apisolutionsltd.com/ourServicePhone-icon/IT-Consulting.svg", id: "9", image: "https://www.apisolutionsltd.com/our-services-avatar/10.svg", description: "We offer comprehensive IT consulting services to help businesses navigate the ever-changing landscape of technology. Our expert consultants are here to understand your unique challenges and provide solutions that drive growth, efficiency, and innovation.", serviceName: "It Consultancy Service" },
    ]

    // State to track the currently selected service
    const [selectedService, setSelectedService] = useState(servicedescription[0]);
    // State to track whether to show all services on mobile
    const [showAllServices, setShowAllServices] = useState(false);

    // Determine which services to display on mobile
    const displayedServices = showAllServices 
        ? servicedescription 
        : servicedescription.slice(0, 4);

    return (
        <div className="px-4 md:px-8 bg-[#ecf6fcb0] dark:bg-gray-900 py-12">
            {/* Header Section */}
            <div className='relative h-[60px] sm:h-[80px] md:h-[120px] flex justify-start items-center mb-4 md:mb-8'>
                <p className='font-extrabold text-[#DDDDDD] dark:text-gray-700 text-[40px] sm:text-[50px] md:text-[80px] h-[40px] sm:h-[50px] md:h-[80px] absolute top-0 left-0'>
                    OUR SERVICES
                </p>
                <h2 className='font-extrabold text-[#0C9DCA] dark:text-cyan-300 text-2xl sm:text-3xl md:text-5xl absolute pl-3 md:pl-8 tracking-[-1.80px]'>
                    Our Services
                </h2>
            </div>

            {/* Desktop/Tablet View - Hidden on mobile */}
            <div className="hidden md:block">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mx-0 md:mx-16">
                    <div className="md:col-span-2">
                        <div className="flex flex-wrap gap-3">
                            {services.map((service) => (
                                <div key={service.name} className="flex-1 min-w-[200px]">
                                    <div className="bg-[#78daf8] dark:bg-cyan-700 text-center text-black dark:text-white font-semibold rounded-full whitespace-nowrap px-4 py-1">
                                        {service.name}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Display only the selected service details */}
                        <div className="space-y-6 mt-12">
                            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-12">
                                <p className="text-base md:text-lg flex-1 mt-12 dark:text-gray-300">
                                    {selectedService.description}
                                </p>
                                <div className="flex gap-4 flex-shrink-0 mt-32">
                                    <img
                                        src="https://www.apisolutionsltd.com/ourServiceShap.png"
                                        alt=""
                                        className='mt-52 h-20 dark:filter dark:invert'
                                    />
                                    <img
                                        src={selectedService.image}
                                        alt={selectedService.serviceName}
                                        className="h-[200px] md:h-[300px] dark:filter dark:brightness-90"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:mt-32">
                        <div className="space-y-6 dark:bg-gray-800  p-4 rounded-lg top-8">
                            <ul className="space-y-4">
                                {servicedescription.map((details) => (
                                    <li
                                        key={details.id}
                                        className={`text-sm md:text-xl cursor-pointer hover:text-[#0C9DCA] dark:hover:text-cyan-300 transition-colors flex items-center ${selectedService.id === details.id
                                                ? 'text-[#0C9DCA] dark:text-cyan-300 font-medium border-r-2 border-t-2 border-[#0C9DCA] dark:border-cyan-300 pt-1'
                                                : 'text-gray-700 dark:text-gray-300'
                                            }`}
                                        onClick={() => setSelectedService(details)}
                                    >
                                        {selectedService.id === details.id && (
                                            <svg
                                                className="w-12 h-5 flex-shrink-0"
                                                viewBox="0 0 64 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></svg>
                                        )}
                                        {details.serviceName}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile View - Shown only on mobile */}
            <div className="md:hidden">
                <div className="grid grid-cols-1 gap-5">
                    {displayedServices.map((service) => (
                        <div
                            key={service.id}
                            className='px-4 border-2 border-gray-50 dark:border-gray-700 shadow-xl py-4 rounded-xl bg-white dark:bg-gray-800'
                        >
                            <div className='flex justify-center mb-6'>
                                <img
                                    src={service.responsiveImage}
                                    alt=""
                                    className='w-12 dark:filter dark:invert'
                                />
                            </div>
                            <p className='text-base dark:text-gray-300'>{service.description}</p>
                        </div>
                    ))}
                </div>
                
                {/* Show More/Less button */}
                {servicedescription.length > 4 && (
                    <div className="mt-6 text-center">
                        <button
                            onClick={() => setShowAllServices(!showAllServices)}
                            className="bg-[#0C9DCA] dark:bg-cyan-600 text-white px-6 py-2 rounded-full font-medium hover:bg-[#0a8cb4] dark:hover:bg-cyan-700 transition-colors"
                        >
                            {showAllServices ? 'Show Less Services' : 'Show More Services'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OurServices;