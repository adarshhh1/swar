import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#8B4513] text-[#FFF8DC] py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Brand & Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">
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
                className="hover:text-[#D2691E] transition duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Details */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <p className="text-sm">
            📧 Email:{" "}
            <a
              href="mailto:internationalswarmusicalfounda@gmail.com"
              className="hover:text-[#D2691E]"
            >
              internationalswarmusicalfounda@gmail.com
            </a>
          </p>
          <p className="text-sm mt-2">
            🎵{" "}
            <a
              href="https://www.facebook.com/anshikachohann"
              className="hover:text-[#D2691E]"
            >
              Facebook
            </a>
          </p>
          <p className="text-sm mt-2">
            🎻{" "}
            <a
              href="https://www.youtube.com/@swarmusicalfoundationsmfan2633"
              className="hover:text-[#D2691E]"
            >
              YouTube
            </a>
          </p>
        </div>

        {/* Social Media Icons */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
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
                className="hover:text-[#D2691E] transition duration-300"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center text-xs border-t border-[#D2691E] pt-3">
        &copy; {new Date().getFullYear()} Swar Musical Foundation | All Rights
        Reserved
      </div>
    </footer>
  );
};

export default Footer;
