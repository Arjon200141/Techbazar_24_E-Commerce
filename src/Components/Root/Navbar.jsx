import { useState } from "react";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";

const navLinkStyle = ({ isActive }) => ({
  fontWeight: isActive ? "700" : "500",
  color: "#0C9DCA",
  fontSize: "20px",
  borderBottom: isActive ? "3px solid #0C9DCA" : "none",
  paddingBottom: "4px",
  textDecoration: "none",
  backgroundColor:"rgba(0,0,0,0)"
});

const Navbar = () => {
  const location = useLocation();
  const isServicePath = location.pathname.startsWith("/services");
  const isExpertisePath = location.pathname.startsWith("/expertise");

  const [hovered, setHovered] = useState(false);
  const [expertiseHovered, setExpertiseHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Close dropdowns when toggling mobile menu
    setHovered(false);
    setExpertiseHovered(false);
  };

  const handleLinkHover = (path) => {
    setHoveredPath(path);
  };

  const handleLinkLeave = () => {
    setHoveredPath(null);
  };

  return (
    <div className="relative z-50">
      {/* Navbar */}
      <div className="navbar bg-transparent text-[#0C9DCA] px-4 md:px-10">
        <div className="flex-1">
          {/* Light mode logo */}
          <img
            src="https://i.ibb.co.com/8ggGwHPk/logo.png"
            className="h-20 dark:hidden"
            alt="Company Logo"
          />
          {/* Dark mode logo */}
          <img
            src="https://i.ibb.co.com/fhLBtH4/darklogo.png"
            className="h-20 hidden dark:block"
            alt="Company Logo Dark"
          />
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-none">
          <ul className="menu gap-6 menu-horizontal text-[20px] px-1">
            <li
              onMouseEnter={() => handleLinkHover('home')}
              onMouseLeave={handleLinkLeave}
              className="relative"
            >
              <NavLink to="/" style={navLinkStyle}>
                Home
                {hoveredPath === 'home' && (
                  <div className="absolute top-2 -left-4">
                    <img
                      src="https://i.ibb.co.com/CsYL6ByS/hover.png"
                      className="h-7 dark:hidden"
                      alt="hover indicator"
                    />
                    <img
                      src="https://i.ibb.co.com/WwDyDQY/darkhover.png"
                      className="h-7 hidden dark:block"
                      alt="dark hover indicator"
                    />
                  </div>
                )}
              </NavLink>
            </li>

            <li
              onMouseEnter={() => handleLinkHover('about')}
              onMouseLeave={handleLinkLeave}
              className="relative"
            >
              <NavLink to="/about" style={navLinkStyle}>
                About Us
                {hoveredPath === 'about' && (
                  <div className="absolute top-2 -left-4">
                    <img
                      src="https://i.ibb.co.com/CsYL6ByS/hover.png"
                      className="h-7 dark:hidden"
                      alt="hover indicator"
                    />
                    <img
                      src="https://i.ibb.co.com/WwDyDQY/darkhover.png"
                      className="h-7 hidden dark:block"
                      alt="dark hover indicator"
                    />
                  </div>
                )}
              </NavLink>
            </li>

            <li
              onMouseEnter={() => {
                setHovered(true);
                handleLinkHover('services');
              }}
              onMouseLeave={() => {
                setHovered(false);
                handleLinkLeave();
              }}
              className="relative"
            >
              <NavLink style={navLinkStyle} to="/service"

              
                className={`text-[20px] font-semibold cursor-pointer pb-1 ${isServicePath ? "font-bold border-b-4 border-[#0C9DCA]" : ""
                  }`}
              >
                Services<span className="text-[30px]"><MdOutlineArrowDropDown /></span>
                {hoveredPath === 'services' && (
                  <div className="absolute top-2 -left-4">
                    <img
                      src="https://i.ibb.co.com/CsYL6ByS/hover.png"
                      className="h-7 dark:hidden"
                      alt="hover indicator"
                    />
                    <img
                      src="https://i.ibb.co.com/WwDyDQY/darkhover.png"
                      className="h-7 hidden dark:block"
                      alt="dark hover indicator"
                    />
                  </div>
                )}
              
              </NavLink>

              {/* Dropdown */}
              {hovered && (
                <div className="fixed left-0 top-[72px] w-screen bg-gradient-to-r from-[#e3f5ffcf] to-[#bbe6fdb1] dark:from-[#1a2e3a] dark:to-[#0e1a23] text-black dark:text-white shadow-2xl z-50">
                  <div className="max-w-7xl mx-auto flex justify-center items-start px-4 py-8">
                    {/* Left column: Routes */}
                    <div className="w-1/2 bg-transparent">
                      <ul className="grid grid-cols-2 gap-x-4 gap-y-4 text-base">
                        <li>
                          <NavLink to="/services/custom-software" className="flex items-center text-black dark:text-white font-medium hover:font-semibold hover:text-[#0C9DCA]">
                            <IoIosArrowForward className="mr-1" /> Custom Software Development
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/services/mobile-app" className="flex items-center text-black dark:text-white font-medium hover:font-semibold hover:text-[#0C9DCA]">
                            <IoIosArrowForward className="mr-1" /> Mobile App Development
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/services/ui-ux" className="flex items-center text-black dark:text-white font-medium hover:font-semibold hover:text-[#0C9DCA]">
                            <IoIosArrowForward className="mr-1" /> UI/UX Design
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/services/qa-testing" className="flex items-center text-black dark:text-white font-medium hover:font-semibold hover:text-[#0C9DCA]">
                            <IoIosArrowForward className="mr-1" /> Software QA and Testing
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/services/ai-ml" className="flex items-center text-black dark:text-white font-medium hover:font-semibold hover:text-[#0C9DCA]">
                            <IoIosArrowForward className="mr-1" /> Machine Learning and AI
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/services/digital" className="flex items-center text-black dark:text-white font-medium hover:font-semibold hover:text-[#0C9DCA]">
                            <IoIosArrowForward className="mr-1" /> Digital Marketing
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/services/creative-design" className="flex items-center text-black dark:text-white font-medium hover:font-semibold hover:text-[#0C9DCA]">
                            <IoIosArrowForward className="mr-1" /> Creative Design
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/services/it" className="flex items-center text-black dark:text-white font-medium hover:font-semibold hover:text-[#0C9DCA]">
                            <IoIosArrowForward className="mr-1" /> It Consultancy Service
                          </NavLink>
                        </li>
                      </ul>
                    </div>

                    {/* Right column: Placeholder Text */}
                    <div className="w-1/2 pl-6">
                      <h2 className="text-4xl font-semibold text-[#0C9DCA] mb-6">Our Services</h2>
                      <p className="text-lg text-black dark:text-white leading-relaxed">
                        As a software company, we are committed to excellence, innovation and customer satisfaction by providing cutting-edge solutions that drive growth, efficiency and innovation. Our mission is to empower your business with powerful software solutions that drive success and growth. Our diverse range of services is tailored to meet the unique needs of businesses and organizations across industries.
                      </p>
                      <div className="mt-6">
                        <button className="flex items-center justify-center font-bold gap-2 text-black dark:text-white hover:text-[#0C9DCA]">
                          Read More<FaArrowRight />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>

            <li
              onMouseEnter={() => {
                setExpertiseHovered(true);
                handleLinkHover('expertise');
              }}
              onMouseLeave={() => {
                setExpertiseHovered(false);
                handleLinkLeave();
              }}
              className="relative"
            >
              <NavLink to="/expertise" style={navLinkStyle}
                className={`text-[20px] font-semibold cursor-pointer pb-1 ${isExpertisePath ? "font-bold border-b-4 border-[#0C9DCA]" : ""
                  }`}
              >
                Expertise<span className="text-[30px]"><MdOutlineArrowDropDown /></span>
                {hoveredPath === 'expertise' && (
                  <div className="absolute top-2 -left-4">
                    <img
                      src="https://i.ibb.co.com/CsYL6ByS/hover.png"
                      className="h-7 dark:hidden"
                      alt="hover indicator"
                    />
                    <img
                      src="https://i.ibb.co.com/WwDyDQY/darkhover.png"
                      className="h-7 hidden dark:block"
                      alt="dark hover indicator"
                    />
                  </div>
                )}
              </NavLink>

              {/* Dropdown */}
              {expertiseHovered && (
                <div className="fixed left-0 top-[72px] w-screen bg-gradient-to-r from-[#e3f5ffcf] to-[#bbe6fdb1] dark:from-[#1a2e3a] dark:to-[#0e1a23] text-black dark:text-white shadow-xl z-50">
                  <div className="max-w-7xl mx-auto flex justify-center items-start px-4 py-8">
                    {/* Left column: Routes */}
                    <div className="w-1/2 bg-transparent">
                      <ul className="grid grid-cols-2 gap-x-4 gap-y-4 text-base">
                        <div className="space-y-3">
                          <li>
                            <NavLink to="/expertise/application-development" className="flex items-center text-black dark:text-white font-medium hover:font-semibold hover:text-[#0C9DCA]">
                              <IoIosArrowForward className="mr-1" /> Application Development
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/expertise/digital-transformation" className="flex items-center text-black dark:text-white font-medium hover:font-semibold hover:text-[#0C9DCA]">
                              <IoIosArrowForward className="mr-1" /> Digital Transformation
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/expertise/business-analysis" className="flex items-center text-black dark:text-white font-medium hover:font-semibold hover:text-[#0C9DCA]">
                              <IoIosArrowForward className="mr-1" /> Business Analysis
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/expertise/digital-product-design" className="flex items-center text-black dark:text-white font-medium hover:font-semibold hover:text-[#0C9DCA]">
                              <IoIosArrowForward className="mr-1" /> Digital Product Design
                            </NavLink>
                          </li>
                        </div>

                        <div className="space-y-3">
                          <li>
                            <NavLink to="/expertise/data-management" className="flex items-center text-black dark:text-white font-medium hover:font-semibold hover:text-[#0C9DCA]">
                              <IoIosArrowForward className="mr-1" /> Data Management
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/expertise/iot" className="flex items-center text-black dark:text-white font-medium hover:font-semibold hover:text-[#0C9DCA]">
                              <IoIosArrowForward className="mr-1" /> IoT (Internet of Things)
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/expertise/devops" className="flex items-center text-black dark:text-white font-medium hover:font-semibold hover:text-[#0C9DCA]">
                              <IoIosArrowForward className="mr-1" /> DevOps
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/expertise/it-support" className="flex items-center text-black dark:text-white font-medium hover:font-semibold hover:text-[#0C9DCA]">
                              <IoIosArrowForward className="mr-1" /> IT Support and Maintenance
                            </NavLink>
                          </li>
                        </div>
                      </ul>
                    </div>

                    {/* Right column: Placeholder Text */}
                    <div className="w-1/2 pl-6">
                      <h2 className="text-4xl font-semibold text-[#0C9DCA] mb-6">Our Expertise</h2>
                      <p className="text-lg text-black dark:text-white leading-relaxed">
                        As a software company, we are committed to excellence, innovation and customer satisfaction by providing cutting-edge solutions that drive growth, efficiency and innovation. Our mission is to empower your business with powerful software solutions that drive success and growth. Our diverse range of services is tailored to meet the unique needs of businesses and organizations across industries.
                      </p>
                      <div className="mt-6">
                        <button className="flex items-center justify-center font-bold gap-2 text-black dark:text-white hover:text-[#0C9DCA]">
                          Read More<FaArrowRight />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>

            <li
              onMouseEnter={() => handleLinkHover('products')}
              onMouseLeave={handleLinkLeave}
              className="relative"
            >
              <NavLink to="/products" style={navLinkStyle}>
                Products
                {hoveredPath === 'products' && (
                  <div className="absolute top-2 -left-4">
                    <img
                      src="https://i.ibb.co.com/CsYL6ByS/hover.png"
                      className="h-7 dark:hidden"
                      alt="hover indicator"
                    />
                    <img
                      src="https://i.ibb.co.com/WwDyDQY/darkhover.png"
                      className="h-7 hidden dark:block"
                      alt="dark hover indicator"
                    />
                  </div>
                )}
              </NavLink>
            </li>

            <li
              onMouseEnter={() => handleLinkHover('contact')}
              onMouseLeave={handleLinkLeave}
              className="relative"
            >
              <NavLink to="/contact_us" style={navLinkStyle}>
                Contact Us
                {hoveredPath === 'contact' && (
                  <div className="absolute top-2 -left-4">
                    <img
                      src="https://i.ibb.co.com/CsYL6ByS/hover.png"
                      className="h-7 dark:hidden"
                      alt="hover indicator"
                    />
                    <img
                      src="https://i.ibb.co.com/WwDyDQY/darkhover.png"
                      className="h-7 hidden dark:block"
                      alt="dark hover indicator"
                    />
                  </div>
                )}
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-[#0C9DCA] focus:outline-none"
          >
            {mobileMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-white dark:bg-gray-800 z-40 overflow-y-auto">
          <div className="px-4 py-2">
            <ul className="space-y-4">
              <li>
                <NavLink
                  to="/"
                  className="block py-2 text-[#0C9DCA] text-lg font-medium"
                  onClick={toggleMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="block py-2 text-[#0C9DCA] text-lg font-medium"
                  onClick={toggleMobileMenu}
                >
                  About Us
                </NavLink>
              </li>

              {/* Services Dropdown */}
              <li>
                <div
                  className="flex items-center justify-between py-2 text-[#0C9DCA] text-lg font-medium cursor-pointer"
                  onClick={() => setHovered(!hovered)}
                >
                  <span>Services</span>
                  <MdOutlineArrowDropDown className={`text-2xl transition-transform ${hovered ? "transform rotate-180" : ""}`} />
                </div>
                {hovered && (
                  <ul className="pl-4 space-y-3 mt-2">
                    <li>
                      <NavLink
                        to="/services/custom-software"
                        className="block py-1 text-[#0C9DCA] text-base font-medium"
                        onClick={toggleMobileMenu}
                      >
                        Custom Software Development
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/services/mobile-app"
                        className="block py-1 text-[#0C9DCA] text-base font-medium"
                        onClick={toggleMobileMenu}
                      >
                        Mobile App Development
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/services/ui-ux"
                        className="block py-1 text-[#0C9DCA] text-base font-medium"
                        onClick={toggleMobileMenu}
                      >
                        UI/UX Design
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/services/qa-testing"
                        className="block py-1 text-[#0C9DCA] text-base font-medium"
                        onClick={toggleMobileMenu}
                      >
                        Software QA and Testing
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/services/ai-ml"
                        className="block py-1 text-[#0C9DCA] text-base font-medium"
                        onClick={toggleMobileMenu}
                      >
                        Machine Learning and AI
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/services/cloud-solutions"
                        className="block py-1 text-[#0C9DCA] text-base font-medium"
                        onClick={toggleMobileMenu}
                      >
                        Cloud Solutions
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/services/creative-design"
                        className="block py-1 text-[#0C9DCA] text-base font-medium"
                        onClick={toggleMobileMenu}
                      >
                        Creative Design
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>

              {/* Expertise Dropdown */}
              <li>
                <div
                  className="flex items-center justify-between py-2 text-[#0C9DCA] text-lg font-medium cursor-pointer"
                  onClick={() => setExpertiseHovered(!expertiseHovered)}
                >
                  <span>Expertise</span>
                  <MdOutlineArrowDropDown className={`text-2xl transition-transform ${expertiseHovered ? "transform rotate-180" : ""}`} />
                </div>
                {expertiseHovered && (
                  <ul className="pl-4 space-y-3 mt-2">
                    <li>
                      <NavLink
                        to="/expertise/application-development"
                        className="block py-1 text-[#0C9DCA] text-base font-medium"
                        onClick={toggleMobileMenu}
                      >
                        Application Development
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/expertise/digital-transformation"
                        className="block py-1 text-[#0C9DCA] text-base font-medium"
                        onClick={toggleMobileMenu}
                      >
                        Digital Transformation
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/expertise/business-analysis"
                        className="block py-1 text-[#0C9DCA] text-base font-medium"
                        onClick={toggleMobileMenu}
                      >
                        Business Analysis
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/expertise/digital-product-design"
                        className="block py-1 text-[#0C9DCA] text-base font-medium"
                        onClick={toggleMobileMenu}
                      >
                        Digital Product Design
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/expertise/data-management"
                        className="block py-1 text-[#0C9DCA] text-base font-medium"
                        onClick={toggleMobileMenu}
                      >
                        Data Management
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/expertise/iot"
                        className="block py-1 text-[#0C9DCA] text-base font-medium"
                        onClick={toggleMobileMenu}
                      >
                        IoT (Internet of Things)
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/expertise/devops"
                        className="block py-1 text-[#0C9DCA] text-base font-medium"
                        onClick={toggleMobileMenu}
                      >
                        DevOps
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/expertise/it-support"
                        className="block py-1 text-[#0C9DCA] text-base font-medium"
                        onClick={toggleMobileMenu}
                      >
                        IT Support and Maintenance
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <NavLink
                  to="/products"
                  className="block py-2 text-[#0C9DCA] text-lg font-medium"
                  onClick={toggleMobileMenu}
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="block py-2 text-[#0C9DCA] text-lg font-medium"
                  onClick={toggleMobileMenu}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;