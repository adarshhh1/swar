import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-black to-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Brand & Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-5 tracking-wide">
            Swar Musical Foundation
          </h2>
          <div className="flex flex-col space-y-2">
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
                className="relative w-max text-gray-300 hover:text-white transition duration-300"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Details */}
        <div>
          <h2 className="text-xl font-semibold mb-5 tracking-wide">
            Contact Us
          </h2>
          <p className="text-sm text-gray-400">
            📧 Email:{" "}
            <a
              href="mailto:internationalswarmusicalfounda@gmail.com"
              className="hover:text-white transition duration-300"
            >
              internationalswarmusicalfounda@gmail.com
            </a>
          </p>
          <p className="text-sm mt-2 text-gray-400">
            🎵{" "}
            <a
              href="https://www.facebook.com/anshikachohann"
              className="hover:text-white transition duration-300"
            >
              Facebook
            </a>
          </p>
          <p className="text-sm mt-2 text-gray-400">
            🎻{" "}
            <a
              href="https://www.youtube.com/@swarmusicalfoundationsmfan2633"
              className="hover:text-white transition duration-300"
            >
              YouTube
            </a>
          </p>
        </div>

        {/* Social Media Icons */}
        <div>
          <h2 className="text-xl font-semibold mb-5 tracking-wide">
            Follow Us
          </h2>
          <div className="flex space-x-5">
            {[
              {
                icon: Facebook,
                link: "https://www.facebook.com/anshikachohann",
              },
              {
                icon: Youtube,
                link: "https://www.youtube.com/@swarmusicalfoundationsmfan2633",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110 hover:drop-shadow-lg"
              >
                <social.icon size={28} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center text-xs border-t border-gray-700 pt-4 text-gray-400">
        &copy; {new Date().getFullYear()} Swar Musical Foundation | All Rights
        Reserved
      </div>
    </footer>
  );
};

export default Footer;
