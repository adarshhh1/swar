import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import logo from "../media/home/logo.png";
import backgroundImage from "../media/home/background.jpg";

const ScrollFadeIn = ({ children, delay = 0.3 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col text-white">
      {/* Hero Section */}
      <div
        className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${backgroundImage})`,
        }}
      >
        <div className="absolute left-10 top-1/2 transform -translate-y-1/2">
          <motion.img
            src={logo}
            alt="Swar Musical Foundation Logo"
            className="w-40 md:w-56 drop-shadow-lg"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>
        <motion.h1
          className="text-5xl md:text-7xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Swar Musical Foundation
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          "A Powerful Platform for Music, Culture, and Art."
        </motion.p>
      </div>

      {/* About Section */}
      <div className="p-8 md:p-16 text-center bg-white text-black">
        <ScrollFadeIn>
          <h2 className="text-3xl font-semibold">About Us</h2>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
            Swar Musical Foundation is a dedicated institution promoting Indian
            classical, light, and folk music. Our mission is to advance music
            and art at national and international levels, ensuring cultural
            heritage is preserved and celebrated.
          </p>
        </ScrollFadeIn>
      </div>

      {/* Core Activities Section */}
      <div className="p-8 md:p-16 text-left max-w-3xl mx-auto bg-black text-white">
        <ScrollFadeIn>
          <h2 className="text-3xl font-semibold">Our Core Activities</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 mt-4">
            <ScrollFadeIn delay={0.2}>
              <li>Promoting Indian music and dance.</li>
            </ScrollFadeIn>
            <ScrollFadeIn delay={0.4}>
              <li>Providing a platform for talented artists.</li>
            </ScrollFadeIn>
            <ScrollFadeIn delay={0.6}>
              <li>Expanding Indian music’s reach abroad.</li>
            </ScrollFadeIn>
            <ScrollFadeIn delay={0.8}>
              <li>Honoring distinguished artists.</li>
            </ScrollFadeIn>
          </ul>
        </ScrollFadeIn>
      </div>
    </div>
  );
};

export default Home;
