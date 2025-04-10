import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { FaChevronUp } from 'react-icons/fa';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='relative'>
            {/* Scroll to Top Button */}
            <div className="w-full flex justify-center -top-7 absolute z-50 ">
                <button
                    onClick={scrollToTop}
                    className="bg-gradient-to-b from-[#0077b6] to-[#60c7fe] hover:bg-[#005f8d] text-white text-2xl p-4 rounded-full shadow-lg transition-all duration-300"
                    aria-label="Scroll to top"
                >
                    <FaChevronUp />
                </button>
            </div>

            <div className="relative">
                {/* Background with image */}
                <div
                    className="w-full h-auto min-h-[100px] sm:min-h-[100px] md:min-h-[130px] lg:min-h-[140px] relative"
                    style={{
                        backgroundImage: "url('https://www.apisolutionsltd.com/footerBg.svg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    {/* White overlay with opacity - changes in dark mode */}
                    <div className="absolute inset-0 bg-white bg-opacity-70 dark:bg-gray-900 dark:bg-opacity-80"></div>

                    {/* Content container */}
                    <div className="relative z-10 h-full py-4 flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-16 lg:px-32 gap-4 md:gap-0">
                        <div className="order-1 md:order-none">
                            <img
                                src="https://i.ibb.co.com/8ggGwHPk/logo.png"
                                className="h-16 md:h-20 lg:h-24 dark:hidden"
                                alt="Company Logo"
                                loading="lazy"
                            />
                            <img
                                src="https://i.ibb.co.com/fhLBtH4/darklogo.png"
                                className="h-16 md:h-20 lg:h-24 hidden dark:block"
                                alt="Company Logo Dark"
                                loading="lazy"
                            />
                        </div>

                        {/* Copyright - responsive text size and dark mode text */}
                        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 order-3 md:order-none text-center md:text-left">
                            Copyright © {new Date().getFullYear()} - All right reserved by TechBazar24
                        </p>

                        {/* Social Icons - centered on mobile */}
                        <div className="flex gap-2 md:gap-3 order-2 md:order-none">
                            <a href="#" className="group" aria-label="Facebook">
                                <div className="bg-[#2c2b2b] dark:bg-gray-700 rounded-full p-2 hover:bg-[#ffffff00] dark:hover:bg-[#ffffff00] transition duration-300">
                                    <FaFacebookF className="text-white group-hover:text-[#1877F2] text-base md:text-lg hover:text-xl md:hover:text-2xl transition-all duration-300 group-hover:scale-110" />
                                </div>
                            </a>
                            <a href="#" className="group" aria-label="Instagram">
                                <div className="bg-[#2c2b2b] dark:bg-gray-700 rounded-full p-2 hover:bg-[#ffffff00] dark:hover:bg-[#ffffff00] transition duration-300">
                                    <FaInstagram className="text-white group-hover:text-[#E4405F] text-base md:text-lg hover:text-xl md:hover:text-2xl transition-all duration-300 group-hover:scale-110" />
                                </div>
                            </a>
                            <a href="#" className="group" aria-label="LinkedIn">
                                <div className="bg-[#2c2b2b] dark:bg-gray-700 rounded-full p-2 hover:bg-[#ffffff00] dark:hover:bg-[#ffffff00] transition duration-300">
                                    <FaLinkedinIn className="text-white group-hover:text-[#0A66C2] text-base md:text-lg hover:text-xl md:hover:text-2xl transition-all duration-300 group-hover:scale-110" />
                                </div>
                            </a>
                            <a href="#" className="group" aria-label="Twitter">
                                <div className="bg-[#2c2b2b] dark:bg-gray-700 rounded-full p-2 hover:bg-[#ffffff00] dark:hover:bg-[#ffffff00] transition duration-300">
                                    <FaXTwitter className="text-white group-hover:text-[#000000] dark:group-hover:text-[#ffffff] text-base md:text-lg hover:text-xl md:hover:text-2xl transition-all duration-300 group-hover:scale-110" />
                                </div>
                            </a>
                            <a href="#" className="group" aria-label="YouTube">
                                <div className="bg-[#2c2b2b] dark:bg-gray-700 rounded-full p-2 hover:bg-[#ffffff00] dark:hover:bg-[#ffffff00] transition duration-300">
                                    <FaYoutube className="text-white group-hover:text-[#FF0000] hover:text-xl md:hover:text-2xl text-base md:text-lg transition-all duration-300 group-hover:scale-110" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;