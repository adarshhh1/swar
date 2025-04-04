import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-pastel-blue-100 text-gray-700 py-6 font-sans border-t border-gray-300">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
        {/* Brand & Quick Links */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-pink-600">
            Swar Musical Foundation
          </h2>
          <div className="flex space-x-4 mt-2">
            {["Home", "About", "Team", "Gallery", "Contact"].map(
              (name, index) => (
                <Link
                  key={index}
                  to={`/${name.toLowerCase()}`}
                  className="text-gray-600 hover:text-pink-600 transition duration-300"
                >
                  {name}
                </Link>
              )
            )}
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          {[
            { icon: Facebook, link: "https://www.facebook.com/anshikachohann" },
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
              className="text-pink-500 hover:text-pink-700 transition duration-300"
            >
              <social.icon size={24} />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-4 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Swar Musical Foundation | All Rights
        Reserved
      </div>
    </footer>
  );
};

export default Footer;
