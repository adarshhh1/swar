import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-purple-50 via-white to-purple-100 text-gray-700 pt-0 pb-0 font-sans border-t border-purple-200 mt-16 relative overflow-hidden">
      {/* Wave SVG Divider */}
      <div className="w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16"
        >
          <path
            fill="url(#footerwave)"
            d="M0,32L60,37.3C120,43,240,53,360,58.7C480,64,600,64,720,53.3C840,43,960,21,1080,16C1200,11,1320,21,1380,26.7L1440,32L1440,80L1380,80C1320,80,1200,80,1080,80C960,80,840,80,720,80C600,80,480,80,360,80C240,80,120,80,60,80L0,80Z"
          />
          <defs>
            <linearGradient id="footerwave" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="#a78bfa" />
              <stop offset="1" stopColor="#f3e8ff" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center text-sm space-y-10 md:space-y-0 py-10">
        {/* Brand & Quick Links */}
        <div className="flex-1 mb-8 md:mb-0">
          <h2 className="text-2xl font-extrabold text-purple-700 mb-3 tracking-tight">
            Swar Musical Foundation
          </h2>
          <div className="flex flex-wrap gap-4 mb-4">
            {[
              "Home",
              "About Us",
              "Team",
              "Magazine",
              "Artist Corner",
              "Top Trends",
              "Gallery",
              "Contact Us",
            ].map((name, index) => (
              <Link
                key={index}
                to={`/${name.replace(/\s+/g, "").toLowerCase()}`}
                className="text-gray-600 hover:text-purple-700 font-medium transition"
              >
                {name}
              </Link>
            ))}
          </div>
          {/* Newsletter */}
          <form className="flex items-center max-w-xs mt-4">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 p-2 rounded-l-lg border border-purple-200 focus:ring-2 focus:ring-purple-400 text-gray-900 bg-white"
            />
            <button
              type="submit"
              className="bg-purple-600 text-white px-4 py-2 rounded-r-lg font-semibold hover:bg-purple-700 transition"
            >
              Send
            </button>
          </form>
        </div>
        {/* Contact & Social */}
        <div className="flex-1 flex flex-col items-center md:items-end">
          <div className="flex space-x-4 mb-4">
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
                className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 border-2 border-purple-200 text-purple-700 hover:bg-purple-200 hover:text-purple-900 transition shadow"
              >
                <social.icon size={22} />
              </a>
            ))}
          </div>
          <div className="text-gray-600 text-sm mb-1">
            Email:{" "}
            <a
              href="mailto:internationalswarmusicalfounda@gmail.com"
              className="underline hover:text-purple-700"
            >
              internationalswarmusicalfounda@gmail.com
            </a>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="bg-purple-100 py-4 mt-6 text-center text-xs text-purple-700 font-semibold border-t border-purple-200">
        &copy; {new Date().getFullYear()} Swar Musical Foundation &mdash; All
        Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
