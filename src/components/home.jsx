import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import backgroundImage from "../media/home/background.jpg";
import logo from "../media/home/logo.png";
import dm1 from "../media/home/dm1.jpg";
import dm2 from "../media/home/dm2.jpg";
import dm3 from "../media/home/dm3.jpg";
import dm4 from "../media/home/dm4.jpg";

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
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const openModal = () => setShowModal(true);

  return (
    <div className="min-h-screen flex flex-col font-serif">
      {/* Hero Section */}
      <div
        className="relative min-h-screen flex flex-col justify-center items-center text-center bg-cover bg-center px-6"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-3xl mx-auto pt-24 pb-16">
          <img
            src={logo}
            alt="Swar Musical Foundation Logo"
            className="h-55 w-auto drop-shadow-xl bg-black/30 rounded-full mb-6 shadow-lg"
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
        </div>
      </div>

      {/* Upcoming Events Section */}
      <section className="bg-white py-20 px-6 sm:px-8 md:px-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-purple-800 mb-12 tracking-wide uppercase relative">
          <span className="inline-block border-b-4 border-purple-500 pb-2">
            🌟 Upcoming Events 🌟
          </span>
        </h2>
        <div className="flex justify-center mb-8">
          <span className="inline-block animate-bounce text-purple-600 text-4xl">
            ↓
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          <div
            className="relative group rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-400 transition-transform duration-300 transform hover:-translate-y-2 bg-purple-50 cursor-pointer"
            onClick={openModal}
          >
            <img
              src={dm1}
              alt="Darbar-e-Mehfil 2025"
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
            <span className="absolute top-4 left-4 z-20 bg-white text-purple-700 text-xs font-bold px-4 py-1 rounded-full shadow-md uppercase tracking-wider">
              April 12, 2025
            </span>
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
              <h3 className="text-3xl font-bold mb-2 drop-shadow-xl text-white">
                Darbar-e-Mehfil 2025
              </h3>
              <p className="text-sm text-purple-100 mb-4 flex items-center italic">
                <svg
                  className="w-4 h-4 mr-2 text-purple-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2C6.13 2 3 5.13 3 9c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 10 6a2.5 2.5 0 0 1 0 5.5z" />
                </svg>
                T.N. Memorial Hall, Bhopal
              </p>
              <button className="inline-block px-6 py-2 rounded-full bg-white text-purple-700 hover:bg-purple-100 font-bold text-sm shadow-lg transition duration-300">
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white max-w-3xl w-full p-6 rounded-lg shadow-xl overflow-y-auto max-h-[80vh] relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-700 hover:text-black text-2xl"
              >
                &times;
              </button>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-purple-700">
                  Darbar-e-Mehfil 2025
                </h2>
                <div className="text-gray-700 space-y-2">
                  <p>
                    <strong className="text-purple-600">📅 Date & Time:</strong>{" "}
                    April 12, 2025 | 6:00 PM onwards
                  </p>
                  <p>
                    <strong className="text-purple-600">📍 Venue:</strong> T.N.
                    Memorial Hall, Bhopal
                  </p>
                  <p>
                    <strong className="text-purple-600">🎶 Overview:</strong> A
                    celebration of Indian classical music, bringing together
                    talented vocalists, instrumentalists, and cultural
                    performers in an unforgettable evening of art and tradition.
                  </p>
                  <div>
                    <strong className="text-purple-600">✨ Highlights:</strong>
                    <ul className="list-disc list-inside ml-4 mt-1">
                      <li>Classical vocal and instrumental performances</li>
                      <li>Folk fusion acts and traditional dance showcases</li>
                      <li>Felicitation of iconic musical contributors</li>
                    </ul>
                  </div>
                  <p>
                    <strong className="text-purple-600">🎫 Entry:</strong>{" "}
                    Invitation only (passes required)
                  </p>
                  <p>
                    <strong className="text-purple-600">📞 Contact:</strong>{" "}
                    swarfoundation@email.com | +91-XXXXXXXXXX
                  </p>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2 text-purple-700">
                    📷 Gallery
                  </h3>
                  <div className="flex space-x-4 overflow-x-auto pb-2">
                    {[dm2, dm3, dm4].map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`Gallery ${i + 1}`}
                        onClick={() => setSelectedImage(img)}
                        className="h-40 w-64 object-cover rounded-lg shadow-md flex-shrink-0 cursor-pointer hover:scale-105 transition"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Fullscreen Image Viewer */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Full View"
              className="max-w-full max-h-full rounded-lg shadow-xl"
            />
          </div>
        )}
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
