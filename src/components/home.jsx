import { motion } from "framer-motion";
import { useRef } from "react";
import homeImage from "../media/home/home.png";
import logo from "../media/home/logo.png";
import musicFile from "../media/home/music.mp3";

const Home = () => {
  const audioRef = useRef(new Audio(musicFile));

  const playMusic = () => {
    audioRef.current.currentTime = 28; // Start music from 28 seconds
    audioRef.current.play();
  };

  const stopMusic = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 28; // Reset to 28 seconds
  };

  return (
    <div className="bg-[#F5DEB3] min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left p-6 md:p-12">
      <div className="flex flex-col md:flex-row items-center md:items-start w-full md:w-3/4 space-x-6">
        <motion.img
          src={logo}
          alt="Swar Logo"
          className="w-32 h-32 md:w-44 md:h-44 drop-shadow-lg"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onMouseEnter={playMusic}
          onMouseLeave={stopMusic}
        />
        <div className="flex flex-col items-center md:items-start">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-bold text-[#8B4513] drop-shadow-xl"
          >
            Welcome to Swar Musical Foundation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-lg md:text-xl text-[#A0522D] max-w-md mt-4"
          >
            Discover the world of Indian Classical Music through melodies that
            resonate with your soul.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mt-4"
          >
            <button className="px-6 py-3 bg-[#D2691E] text-[#FFF8DC] rounded-lg text-lg font-medium shadow-lg hover:bg-[#A0522D] transition-all duration-300">
              Explore More
            </button>
          </motion.div>
        </div>
      </div>
      <motion.img
        src={homeImage}
        alt="Indian Classical Music"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-full md:w-1/2 max-w-lg mt-6 md:mt-0 rounded-lg shadow-xl"
      />
    </div>
  );
};

export default Home;
