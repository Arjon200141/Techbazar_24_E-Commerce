import { NavLink } from "react-router-dom";

const navLinkStyle = ({ isActive }) => ({
  position: "relative",
  paddingBottom: "4px",
  fontSize: "20px",
  fontWeight: isActive ? "700" : "500",
  color: "#0C9DCA",
  transition: "0.3s",
  textDecoration: "none",
  ...(isActive && {
    borderBottom: "3px solid #0C9DCA",
  }),
});

const links = (
  <>
    <li><NavLink to="/" style={navLinkStyle}>Home</NavLink></li>
    <li><NavLink to="/about" style={navLinkStyle}>About Us</NavLink></li>
    <li>
      <details>
        <summary className="text-[20px] text-[#0C9DCA] font-semibold">Services</summary>
        <ul className="rounded-t-none p-2 ">
          <div className="flex">
            <div >
              <h1 className="text-xl"> Our Services</h1>
            </div>
            <div >
              <li><NavLink to="/services/1" style={navLinkStyle}>Link 1</NavLink></li>
              <li><NavLink to="/services/2" style={navLinkStyle}>Link 2</NavLink></li>
            </div>
          </div>
        </ul>
      </details>
    </li>
    <li>
      <details>
        <summary className="text-[20px] text-[#0C9DCA] font-semibold">Expertise</summary>
        <ul className="rounded-t-none p-2">
          <li><NavLink to="/expertise/1" style={navLinkStyle}>Link 1</NavLink></li>
          <li><NavLink to="/expertise/2" style={navLinkStyle}>Link 2</NavLink></li>
        </ul>
      </details>
    </li>
    <li><NavLink to="/products" style={navLinkStyle}>Products</NavLink></li>
    <li><NavLink to="/contact" style={navLinkStyle}>Contact Us</NavLink></li>
  </>
);

const Navbar = () => {
  return (
    <div className="navbar bg-transparent text-[#0C9DCA] px-10 z-50 relative">
      <div className="flex-1">
        <img
          src="https://i.ibb.co/gLbRZTVN/305971129-491192423017638-8336823414892035180-n.jpg"
          className="h-20"
          alt="Company Logo"
        />
      </div>
      <div className="flex-none">
        <ul className="menu gap-6  menu-horizontal text-[20px] px-1">
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
