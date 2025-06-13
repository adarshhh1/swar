import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import backgroundImage from "../media/home/background.jpg";
import logo from "../media/home/logo.png";
import artist1 from "../media/home/artist1.png";
import artist2 from "../media/home/artist2.png";
import artist3 from "../media/home/artist3.png";
import homeImg from "../media/home/home.png";

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
    <div className="min-h-screen flex flex-col font-serif">
      {/* Hero Section */}
      <div
        className="relative min-h-screen flex flex-col justify-center items-center text-center bg-cover bg-center px-6"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-3xl mx-auto pt-24 pb-16">
          <img
            src={logo}
            alt="Swar Musical Foundation Logo"
            className="h-55 w-auto  drop-shadow-xl bg-black/30 rounded-full mb-6 shadow-lg"
            style={{ filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))" }}
            loading="lazy"
            decoding="async"
            fetchpriority="high"
            width="200"
            height="200"
          />

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
            style={{ fontFamily: "Pacifico, cursive" }}
          >
            Swar Musical Foundation
          </h1>
          <p className="text-white text-base md:text-lg max-w-xl mx-auto mb-8 opacity-90">
            A powerful platform for the preservation and promotion of Indian
            music, culture, and art.
          </p>
          <div className="relative mb-4 flex items-center justify-center">
            {/* Animated Glowing Ring */}
            <span className="absolute inline-flex h-24 w-24 rounded-full bg-gradient-to-tr from-purple-400 via-purple-200 to-transparent opacity-60 animate-pulse z-0" />
            <button
              className="relative w-20 h-20 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-md border-2 border-purple-200 shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-purple-300 group overflow-hidden"
              aria-label="Play New Single"
            >
              {/* Glassy Layer */}
              <span className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-sm z-0" />
              <svg
                className="w-10 h-10 text-purple-700 group-hover:text-purple-900 transition z-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="11"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <polygon points="10,8 17,12 10,16" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <section className="bg-white py-16 px-6 sm:px-8 md:px-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10 tracking-wide uppercase">
          Upcoming Events
        </h2>
        <div className="flex justify-center mb-8">
          <span className="inline-block animate-bounce text-purple-600 text-3xl">
            &#8595;
          </span>
        </div>
        {(() => {
          // Shuffle images for randomness
          const images = [
            artist1,
            artist2,
            artist3,
            homeImg,
            backgroundImage,
            logo,
          ];
          const shuffled = images.sort(() => 0.5 - Math.random());
          const events = [
            {
              image: shuffled[0],
              date: "Dec 15, 2024",
              title: "Swar Sangeet Mahotsav",
              location: "Bhopal, Madhya Pradesh, India",
            },
            {
              image: shuffled[1],
              date: "Jan 10, 2025",
              title: "Classical Night",
              location: "Lucknow, Uttar Pradesh, India",
            },
            {
              image: shuffled[2],
              date: "Feb 20, 2025",
              title: "Folk Fusion Fest",
              location: "Pune, Maharashtra, India",
            },
          ];
          return (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {events.map((event, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-0 overflow-hidden flex flex-col"
                >
                  <div className="relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-64 object-cover"
                    />
                    <span className="absolute top-4 left-4 bg-purple-700 text-white text-xs font-semibold px-4 py-1 rounded-full shadow">
                      {event.date}
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <div className="flex items-center text-gray-500 text-sm">
                      <svg
                        className="w-4 h-4 mr-1 text-purple-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 2C6.13 2 3 5.13 3 9c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 10 6a2.5 2.5 0 0 1 0 5.5z" />
                      </svg>
                      {event.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          );
        })()}
      </section>

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
            desc: "Expanding Indian music's presence worldwide.",
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
