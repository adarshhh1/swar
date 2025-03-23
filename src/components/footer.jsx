import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#8B4513] text-[#FFF8DC] py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm">
        {/* Brand Name */}
        <div className="text-lg font-semibold mb-3 md:mb-0">
          Swar Musical Foundation
        </div>

        {/* Quick Links */}
        <div className="flex space-x-6 mb-3 md:mb-0">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/aboutus" },
            { name: "Team", path: "/team" },
            { name: "Gallery", path: "/gallery" },
            { name: "Contact", path: "/contactus" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="hover:text-[#D2691E] transition duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          {[
            { icon: Facebook, link: "https://facebook.com" },
            { icon: Instagram, link: "https://instagram.com" },
            { icon: Twitter, link: "https://twitter.com" },
            { icon: Youtube, link: "https://youtube.com" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D2691E] transition duration-300"
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-4 text-center text-xs border-t border-[#D2691E] pt-3">
        &copy; {new Date().getFullYear()} Swar Musical Foundation | All Rights
        Reserved
      </div>
    </footer>
  );
};

export default Footer;
