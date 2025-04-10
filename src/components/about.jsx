import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const timelineData = [
  { year: "June 28, 2021", event: "Foundation Established" },
  { year: "July 21, 2021", event: "Official Registration" },
  { year: "2021 - Present", event: "Cultural Events and Artist Showcases" },
  {
    year: "2022 - Present",
    event: "International Programs (Thailand & Malaysia)",
  },
  { year: "Annual", event: "Kalavant Samman Honor for Eminent Artists" },
];

const artists = [
  "Pandit Umesh Kampu Wale (Classical Vocal - Gwalior & Banaras Gharana)",
  "Su Shri Rita Dev (Thumri Vocal - Banaras Gharana)",
  "Shri Bharat Nayak (Sitar - Gwalior)",
  "Su Shri Anjana Jha (Kathak Dance - Jaipur Gharana)",
  "Shri Sunil Paoge (Hawaiian Guitar)",
  "Su Shri Meeta Pandit (Classical Vocal - Gwalior Gharana)",
  "Padma Shri Moinuddin Khan (Sarangi - Jaipur Gharana)",
  "Dr. Veena Joshi (Classical Vocal - Gwalior Gharana)",
  "Shri Anshul Pratap Singh (Tabla - Bhopal)",
  "Su Shri Ayushi Chauhan & Shri Piyush Jha (Kathak - Raigarh & Lucknow Gharana)",
  "Ustad Abdul Majid Khan (Sarangi - Gwalior)",
  "Nainika Ghosh (Kathak Dance - Kolkata)",
  "Su Shri Shiva Nayak (Kathak Dance)",
  "Lakshman Prabhakar Gohadkar (Classical Vocal - Gwalior Gharana)",
  "Shri Hemang Kolhatkar (Classical Vocal - Gwalior Gharana)",
  "Shri Ritikesh Gurudev Chari & Shri Drishal Gurudev Chari (Classical Vocal - Goa, India)",
  "Pandit Meera Vaishnav (Sugam Sangeet - Raipur, Chhattisgarh)",
];

const AboutUs = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsDark(window.scrollY > window.innerHeight / 2);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <br />
      <br />
      {/* Intro Section */}
      <motion.div
        className="text-center py-16 px-6 md:px-12 lg:px-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-extrabold tracking-wide">
          Swar Musical Foundation
        </h2>
        <p className="text-lg mt-4">
          Promoting Indian Classical Music & Art Globally
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="py-12 px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-center mb-8">
          Foundation History
        </h2>
        <div className="space-y-6">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className="text-center border-l-4 border-gray-500 pl-4 py-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold">{item.year}</h3>
              <p className="text-gray-500">{item.event}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured Artists */}
      <motion.div
        className="py-12 px-6 md:px-12 lg:px-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center mb-6">
          Featured Artists
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {artists.map((artist, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 text-white p-6 rounded-lg shadow-md text-center hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold">{artist}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
