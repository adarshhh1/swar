import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import teamData from "../data/teamData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Team = () => {
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
    <div className="min-h-screen bg-white text-gray-900">
      {/* Title Section */}
      <div className="pt-32 pb-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2"
        >
          Meet Our Team
        </motion.h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
          Dedicated professionals and artists behind Swar Musical Foundation
        </p>
      </div>

      {/* Team Section */}
      <div className="py-16 px-6 flex flex-col items-center">
        <div className="max-w-6xl w-full space-y-16">
          {teamData.map((category, index) => (
            <div key={index} className="text-center">
              <h2 className="text-2xl font-bold text-purple-700 mb-6 uppercase tracking-wide">
                {category.title}
              </h2>
              <Slider {...settings} className="px-4">
                {category.members.map((member, memIndex) => (
                  <MemberCard key={memIndex} member={member} />
                ))}
              </Slider>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MemberCard = ({ member }) => {
  return (
    <motion.div
      className="relative bg-white border border-purple-100 shadow-md rounded-2xl p-6 flex flex-col items-center justify-between transition-all w-64 mx-auto hover:shadow-xl hover:-translate-y-1 duration-200"
      whileHover={{ scale: 1.05 }}
    >
      {/* Profile Image */}
      <div className="w-24 h-24 mb-4 rounded-full bg-gradient-to-tr from-purple-200 to-purple-400 p-1 flex items-center justify-center">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover rounded-full border-4 border-white shadow"
        />
      </div>
      {/* Name */}
      <h3 className="text-xl font-bold text-center text-gray-900 mb-2">
        {member.name}
      </h3>
      {/* Role as pill/badge */}
      <span className="inline-block px-4 py-1 mt-1 text-sm font-medium bg-purple-100 text-purple-700 rounded-full shadow-sm">
        {member.role}
      </span>
    </motion.div>
  );
};

export default Team;
