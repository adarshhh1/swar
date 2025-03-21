import { motion } from "framer-motion";
import homeImage from "../media/home/home.png";
import logo from "../media/home/logo.png";

const Home = () => {
  return (
    <div className="bg-[#FFF8DC] min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left p-6 md:p-12">
      <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
        <img
          src={logo}
          alt="Swar Logo"
          className="w-20 h-20 md:w-28 md:h-28 mb-4"
        />
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold text-[#8B4513] mb-4 drop-shadow-lg"
        >
          Welcome to Swar Musical Foundation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-md md:text-lg text-[#A0522D] max-w-md"
        >
          Discover the world of Indian Classical Music through melodies that
          resonate with your soul.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mt-6"
        >
          <button className="px-6 py-3 bg-[#D2691E] text-[#FFF8DC] rounded-lg text-lg font-medium shadow-md hover:bg-[#A0522D] transition-all duration-300">
            Explore More
          </button>
        </motion.div>
      </div>
      <motion.img
        src={homeImage}
        alt="Indian Classical Music"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-full md:w-1/2 max-w-lg mt-6 md:mt-0 rounded-lg shadow-lg"
      />
    </div>
  );
};

export default Home;
