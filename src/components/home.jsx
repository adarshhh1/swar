import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import backgroundImage from "../media/home/background.jpg";
import logo from "../media/home/logo.png";

const ScrollFadeIn = ({ children, delay = 0.3 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col text-white font-serif">
      {/* Hero Section */}
      <div
        className="min-h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left bg-cover bg-center px-6"
        style={{
          backgroundImage: `linear-gradient(rgba(20, 20, 20, 0.6), rgba(20, 20, 20, 0.6)), url(${backgroundImage})`,
        }}
      >
        <div className="flex flex-col md:flex-row items-center md:items-center w-full max-w-5xl">
          {/* Logo (Left) */}
          <motion.img
            src={logo}
            alt="Swar Musical Foundation Logo"
            className="w-32 sm:w-40 md:w-48 lg:w-52 drop-shadow-lg rounded-xl transition-all duration-500 mr-0 md:mr-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.1, rotate: 2 }}
          />

          {/* Title & Tagline (Right) */}
          <div className="flex flex-col items-center md:items-start">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-xl tracking-wide"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              Swar Musical Foundation
            </motion.h1>

            <motion.p
              className="mt-4 text-lg sm:text-xl md:text-2xl text-white max-w-2xl italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              “A powerful platform for the preservation and promotion of Indian
              music, culture, and art.”
            </motion.p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="px-6 sm:px-8 md:px-16 py-16 bg-white text-gray-800 text-center">
        <ScrollFadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Swar Musical Foundation is dedicated to nurturing the rich tradition
            of Indian classical, light, and folk music. Our mission is to create
            an inclusive space for talented artists and expand the cultural
            landscape on a global stage.
          </p>
        </ScrollFadeIn>
      </section>

      {/* Our Core Activities Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {[
          {
            title: "🎵 Musical Heritage",
            desc: "Preserving and promoting Indian music traditions.",
            delay: 0.2,
          },
          {
            title: "🎤 Artist Platform",
            desc: "Providing a stage for emerging and seasoned artists.",
            delay: 0.4,
          },
          {
            title: "🌍 Global Outreach",
            desc: "Expanding Indian music’s presence worldwide.",
            delay: 0.6,
          },
          {
            title: "🏆 Honoring Excellence",
            desc: "Recognizing and celebrating distinguished artists.",
            delay: 0.8,
          },
        ].map((card, idx) => (
          <ScrollFadeIn key={idx} delay={card.delay}>
            <div className="flex flex-col h-full bg-white py-6 px-4 rounded-xl shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="text-gray-600 mt-2">{card.desc}</p>
            </div>
          </ScrollFadeIn>
        ))}
      </div>
      <br />
    </div>
  );
};

export default Home;
