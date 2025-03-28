import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import teamData from "../data/teamData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Team = () => {
  const [bgColor, setBgColor] = useState("#000000"); // Start with black

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const transitionPoint = window.innerHeight * 0.8; // 80% of viewport height

      // Calculate dynamic fade between black and white
      const opacity = Math.min(scrollPosition / transitionPoint, 1);
      const newBgColor = `rgb(${255 * opacity}, ${255 * opacity}, ${
        255 * opacity
      })`;

      setBgColor(newBgColor);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <motion.div
      className="transition-all duration-700"
      style={{ backgroundColor: bgColor, minHeight: "100vh" }}
    >
      {/* Full Page Title Section */}
      <div className="h-screen flex justify-center items-center bg-black">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-extrabold text-white uppercase"
        >
          Meet Our Team
        </motion.h1>
      </div>

      {/* Team Section */}
      <div className="py-16 px-6 flex flex-col items-center transition-all duration-700">
        <div className="max-w-6xl w-full space-y-10">
          {teamData.map((category, index) => (
            <div key={index} className="text-center">
              <h2 className="text-2xl font-semibold text-black mb-6 uppercase border-b-2 border-gray-500 pb-2">
                {category.title}
              </h2>
              <Slider {...settings} className="px-4">
                {category.members.map((member, memIndex) => (
                  <MemberCard
                    key={memIndex}
                    member={member}
                    bgColor={bgColor}
                  />
                ))}
              </Slider>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const MemberCard = ({ member, bgColor }) => {
  const textColor =
    bgColor === "rgb(255, 255, 255)" ? "text-black" : "text-white";
  const borderColor =
    bgColor === "rgb(255, 255, 255)" ? "border-gray-300" : "border-gray-700";

  return (
    <motion.div
      className={`relative border shadow-lg rounded-2xl p-6 flex flex-col items-center justify-between transition-all w-64 h-80 mx-auto ${borderColor} ${textColor}`}
      style={{ backgroundColor: bgColor }}
    >
      {/* Profile Image (Colored) */}
      <motion.div
        className="w-24 h-24 rounded-full p-1 flex items-center justify-center overflow-hidden border-4 shadow-md transition-transform"
        whileHover={{ scale: 1.2 }}
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover rounded-full"
        />
      </motion.div>

      {/* Name */}
      <motion.h3
        className="mt-4 text-xl font-bold text-center w-full transition-transform"
        whileHover={{ scale: 1.1 }}
      >
        {member.name}
      </motion.h3>

      {/* Role */}
      <p className="text-sm font-medium text-center w-full">{member.role}</p>
    </motion.div>
  );
};

export default Team;
