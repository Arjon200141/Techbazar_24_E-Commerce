import { useContext, useState } from "react";
import { FaArrowRight, FaBars, FaTimes, FaShoppingCart, FaHistory, FaUser, FaSearch } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const navLinkStyle = ({ isActive }) => ({
  fontWeight: isActive ? "700" : "500",
  color: "#0C9DCA",
  fontSize: "20px",
  borderBottom: isActive ? "3px solid #0C9DCA" : "none",
  paddingBottom: "4px",
  textDecoration: "none",
  backgroundColor: "rgba(0,0,0,0)"
});

const cartIconStyle = {
  fontWeight: "500",
  color: "#0C9DCA",
  fontSize: "20px",
  borderBottom: "none",
  paddingBottom: "4px",
  textDecoration: "none",
  backgroundColor: "rgba(0,0,0,0)"
};

const logoutButtonStyle = {
  fontWeight: "500",
  color: "#0C9DCA",
  fontSize: "20px",
  borderBottom: "none",
  paddingBottom: "4px",
  textDecoration: "none",
  backgroundColor: "rgba(0,0,0,0)",
  cursor: "pointer"
};

const DropdownItem = ({ to, children, onClick }) => (
  <li>
    <NavLink
      to={to}
      className="flex items-center text-black dark:text-white font-medium hover:font-semibold hover:text-[#0C9DCA]"
      onClick={onClick}
    >
      <IoIosArrowForward className="mr-1" /> {children}
    </NavLink>
  </li>
);

const HoverIndicator = () => (
  <div className="absolute top-1 -left-6">
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
);

const Navbar = () => {
  const { user, logOut, isAdmin } = useContext(AuthContext);
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredPath, setHoveredPath] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate("/", { replace: true });
        console.log("Sign Out!!!");
        window.location.reload();
      })
      .catch(console.error);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveDropdown(null);
  };

  const handleLinkHover = (path) => setHoveredPath(path);
  const handleLinkLeave = () => setHoveredPath(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setMobileMenuOpen(false);
    }
  };

  const commonLinks = [
    { to: "/", text: "Home", path: "home" },
    { to: "/products", text: "Products", path: "products" }
  ];

  const guestLinks = [
    // { to: "/about", text: "About Us", path: "about" },
    // { to: "/contact_us", text: "Contact Us", path: "contact" }
  ];

  const adminLinks = [
    { to: "/manages", text: "Managements", path: "manages" },
    { to: "/estimates", text: "Estimates", path: "estimates" },
    { to: "/requests", text: "Requests", path: "requests" },
    { to: "/settings", text: "Settings", path: "settings" }
  ];

  const userLinks = [
    { to: "/orders", text: "Order History", path: "orders", icon: null },
    { to: "/profile", text: "Profile", path: "profile", icon: null }
  ];

  const loginLink = { to: "/login-techbazar-rifat", text: "Login", path: "login" };

  const renderDesktopNavItem = (item) => (
    <li
      key={item.to}
      onMouseEnter={() => handleLinkHover(item.path)}
      onMouseLeave={handleLinkLeave}
      className="relative"
    >
      <NavLink to={item.to} style={navLinkStyle}>
        {item.icon && <span className="mr-1">{item.icon}</span>}
        {item.text}
        {hoveredPath === item.path && <HoverIndicator />}
      </NavLink>
    </li>
  );

  return (
    <div className="relative z-50">
      {/* Navbar */}
      <div className="navbar bg-transparent text-[#0C9DCA] px-4 md:px-10">
        {/* Left Section - Logo */}
        <div className="flex-none">
          <img
            src="https://i.ibb.co.com/8ggGwHPk/logo.png"
            className="h-16 sm:h-20 dark:hidden"
            alt="Company Logo"
          />
          <img
            src="https://i.ibb.co.com/fhLBtH4/darklogo.png"
            className="h-16 sm:h-20 hidden dark:block"
            alt="Company Logo Dark"
          />
        </div>

        {/* Center Section - Search Box (Desktop only) */}
        <div className="hidden lg:flex flex-1 justify-center px-4">
          <form onSubmit={handleSearch} className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0C9DCA] focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#0C9DCA]"
            >
              <FaSearch />
            </button>
          </form>
        </div>

        {/* Right Section - Navigation Links */}
        <div className="flex-none hidden lg:flex">
          <ul className="flex gap-8 items-center">
            {commonLinks.map(renderDesktopNavItem)}
            
            {!user ? (
              <>
                {guestLinks.map(renderDesktopNavItem)}
                <li className="flex items-center gap-4">
                  <NavLink to="/cart" style={cartIconStyle}>
                    <FaShoppingCart size={20} />
                  </NavLink>
                  {renderDesktopNavItem(loginLink)}
                </li>
              </>
            ) : user && !isAdmin ? (
              <>
                {userLinks.map(renderDesktopNavItem)}
                <li>
                  <NavLink to="/cart" style={cartIconStyle}>
                    <FaShoppingCart size={32} />
                  </NavLink>
                </li>
                <li>
                  <button onClick={handleSignOut} style={logoutButtonStyle}>
                    <img
                      src="https://i.ibb.co.com/QvKkDNNH/logout-10976188.png"
                      alt="Logout"
                      className="rounded-full h-8 w-8"
                    />
                  </button>
                </li>
              </>
            ) : (
              <>
                {adminLinks.map(renderDesktopNavItem)}
                <li>
                  <button onClick={handleSignOut} style={logoutButtonStyle}>
                    <img
                      src="https://i.ibb.co.com/QvKkDNNH/logout-10976188.png"
                      alt="Logout"
                      className="rounded-full h-8 w-8"
                    />
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Mobile Menu Button and Cart Icon */}
        <div className="lg:hidden flex items-center gap-4">
          <NavLink to="/cart" className="text-[#0C9DCA]">
            <FaShoppingCart size={20} />
          </NavLink>
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
        <div className="lg:hidden fixed inset-0 top-[72px] bg-white dark:bg-gray-800 z-40 overflow-y-auto">
          <div className="px-4 py-2">
            <ul className="space-y-4">
              {commonLinks.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className="block py-2 text-[#0C9DCA] text-lg font-medium"
                    onClick={toggleMobileMenu}
                  >
                    {item.text}
                  </NavLink>
                </li>
              ))}

              {!user ? (
                <>
                  {guestLinks.map((item) => (
                    <li key={item.to}>
                      <NavLink
                        to={item.to}
                        className="block py-2 text-[#0C9DCA] text-lg font-medium"
                        onClick={toggleMobileMenu}
                      >
                        {item.text}
                      </NavLink>
                    </li>
                  ))}
                  <li>
                    <NavLink
                      to={loginLink.to}
                      className="block py-2 text-[#0C9DCA] text-lg font-medium"
                      onClick={toggleMobileMenu}
                    >
                      {loginLink.text}
                    </NavLink>
                  </li>
                </>
              ) : user && !isAdmin ? (
                <>
                  {userLinks.map((item) => (
                    <li key={item.to}>
                      <NavLink
                        to={item.to}
                        className="flex items-center py-2 text-[#0C9DCA] text-lg font-medium"
                        onClick={toggleMobileMenu}
                      >
                        {item.icon && <span className="mr-2">{item.icon}</span>}
                        {item.text}
                      </NavLink>
                    </li>
                  ))}
                  <li>
                    <button
                      onClick={() => {
                        handleSignOut();
                        toggleMobileMenu();
                      }}
                      className="flex items-center gap-2 py-2 text-[#0C9DCA] text-lg font-medium"
                    >
                      <img
                        src="https://i.ibb.co.com/QvKkDNNH/logout-10976188.png"
                        alt="Logout"
                        className="w-6 h-6"
                      />
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  {adminLinks.map((item) => (
                    <li key={item.to}>
                      <NavLink
                        to={item.to}
                        className="block py-2 text-[#0C9DCA] text-lg font-medium"
                        onClick={toggleMobileMenu}
                      >
                        {item.text}
                      </NavLink>
                    </li>
                  ))}
                  <li>
                    <button
                      onClick={() => {
                        handleSignOut();
                        toggleMobileMenu();
                      }}
                      className="flex items-center gap-2 py-2 text-[#0C9DCA] text-lg font-medium"
                    >
                      <img
                        src="https://i.ibb.co.com/QvKkDNNH/logout-10976188.png"
                        alt="Logout"
                        className="w-6 h-6"
                      />
                      Logout
                    </button>
                  </li>
                </>
              )}

              {/* Mobile Search Box - At the end of menu */}
              <li className="mt-8">
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0C9DCA] focus:border-transparent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#0C9DCA]"
                  >
                    <FaSearch />
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;