import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../media/home/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/aboutus" },
    { label: "Magazine", to: "/magazine" },
    { label: "Team", to: "/team" },
    { label: "Artist Corner", to: "/artistcorner" },
    { label: "Top Trends", to: "/toptrends" },
    { label: "Gallery", to: "/gallery" },
    { label: "Contact Us", to: "/contactus" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-90 text-gray-900 shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
        {/* Logo */}
        <Link to="/" className="flex items-center h-14">
          <img src={logo} alt="Swar Musical Foundation Logo" className="h-12 w-auto object-contain" />
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-center space-x-8">
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`uppercase tracking-wide font-medium px-2 pb-1 transition border-b-2 ${location.pathname === to ? "border-blue-600 text-blue-700" : "border-transparent hover:border-blue-400 hover:text-blue-600"}`}
            >
              {label}
            </Link>
          ))}
        </div>
        {/* Socials & Menu */}
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-blue-500"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="#" className="hover:text-blue-500"><i className="fa-brands fa-twitter"></i></a>
          <a href="#" className="hover:text-blue-500"><i className="fa-brands fa-instagram"></i></a>
          <a href="#" className="hover:text-blue-500"><i className="fa-brands fa-dribbble"></i></a>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden ml-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white bg-opacity-95 px-6 pb-4 pt-2 flex flex-col space-y-2 shadow">
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`uppercase tracking-wide font-medium py-2 border-b border-gray-200 ${location.pathname === to ? "text-blue-700" : "text-gray-700 hover:text-blue-600"}`}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
