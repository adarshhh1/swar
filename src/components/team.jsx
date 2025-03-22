import React from "react";
import { motion } from "framer-motion";
import teamData from "../data/teamData";

const Team = () => {
  return (
    <div className="bg-[#F5DEB3] min-h-screen py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-[#8B4513] mb-12 drop-shadow-lg">
        Meet Our Team
      </h1>
      {teamData.map((category, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-2xl font-semibold text-[#8B4513] mb-6 text-center">
            {category.title}
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {category.members.map((member, idx) => (
              <FloatingCircleCard key={idx} member={member} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const FloatingCircleCard = ({ member }) => {
  const sizes = ["w-24 h-24", "w-32 h-32", "w-40 h-40", "w-48 h-48"];
  const randomSize = sizes[Math.floor(Math.random() * sizes.length)];

  return (
    <div className="flex flex-col items-center relative">
      <motion.div
        className={`relative ${randomSize} rounded-full bg-[#8B4513] text-white flex items-center justify-center shadow-xl overflow-hidden cursor-pointer group`}
        whileHover={{ scale: 1.2 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-3/4 h-3/4 rounded-full bg-gray-300 overflow-hidden flex items-center justify-center">
          {/* Image can be placed here */}
        </div>
      </motion.div>
      <h3 className="mt-2 text-md font-semibold text-[#8B4513] text-center">
        {member.name}
      </h3>
      <p className="text-sm text-[#8B4513] text-center">{member.role}</p>
    </div>
  );
};

export default Team;
