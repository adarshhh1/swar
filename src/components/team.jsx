import React from "react";
import { motion } from "framer-motion";
import teamData from "../data/teamData";

const Team = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FDEBD0] to-[#F5CBA7] py-16 px-6 flex flex-col items-center">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-semibold text-center text-[#8B4513] mb-10"
      >
        Meet Our Team
      </motion.h1>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {teamData.flatMap((category, catIndex) =>
          category.members.map((member, memIndex) => (
            <MemberCard key={`${catIndex}-${memIndex}`} member={member} />
          ))
        )}
      </div>
    </div>
  );
};

const MemberCard = ({ member }) => {
  return (
    <motion.div
      className="relative bg-white rounded-lg shadow-md p-[25px] flex flex-col items-center transition-all hover:shadow-lg"
      whileHover={{ scale: 1.05 }}
    >
      <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden border-2 border-[#D2691E]">
        <img
          src={member.image || "https://via.placeholder.com/100"}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-800">
        {member.name}
      </h3>
      <p className="text-sm text-gray-500">{member.role}</p>
    </motion.div>
  );
};

export default Team;
