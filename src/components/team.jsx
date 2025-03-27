import React from "react";
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
    <div className="min-h-screen bg-gradient-to-br from-[#FDEBD0] to-[#F5CBA7] py-16 px-6 flex flex-col items-center relative">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-semibold text-center text-[#8B4513] mb-10"
      >
        Meet Our Team
      </motion.h1>

      <div className="max-w-6xl w-full space-y-10">
        {teamData.map((category, index) => (
          <div key={index} className="text-center">
            <h2 className="text-2xl font-semibold text-[#D2691E] mb-6 uppercase border-b-2 border-[#D2691E] pb-2">
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
  );
};

const MemberCard = ({ member }) => {
  return (
    <motion.div className="relative bg-white bg-opacity-90 backdrop-blur-md border border-[#D2691E] shadow-lg rounded-2xl p-6 flex flex-col items-center justify-between transition-all w-64 h-80 mx-auto">
      {/* Profile Image */}
      <motion.div
        className="w-24 h-24 rounded-full bg-gradient-to-r from-[#D2691E] to-[#8B4513] p-1 flex items-center justify-center overflow-hidden border-4 border-[#FDEBD0] shadow-md transition-transform"
        whileHover={{ scale: 1.2 }}
      >
        <img
          src={member.image} // Directly use the image path from teamData.js
          alt={member.name}
          className="w-full h-full object-cover rounded-full"
        />
      </motion.div>

      {/* Name */}
      <motion.h3
        className="mt-4 text-xl font-bold text-[#8B4513] text-center w-full transition-transform"
        whileHover={{ scale: 1.1, color: "#D2691E" }}
      >
        {member.name}
      </motion.h3>

      {/* Role */}
      <p className="text-sm text-[#D2691E] font-medium text-center w-full">
        {member.role}
      </p>
    </motion.div>
  );
};

export default Team;
