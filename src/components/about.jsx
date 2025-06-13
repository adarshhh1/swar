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

function AboutUs() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Intro Section */}
      <motion.div
        className="text-center pt-32 pb-16 px-6 md:px-12 lg:px-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
          Swar Musical Foundation
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
          Promoting Indian Classical Music & Art Globally
        </p>
      </motion.div>

      {/* Timeline */}
      <section className="py-12 px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 tracking-wide uppercase text-gray-900">
          Foundation History
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="border-l-4 border-purple-600 pl-6 space-y-8">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className="relative bg-white rounded-lg shadow p-6 mb-2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="absolute -left-8 top-6 w-6 h-6 bg-purple-600 rounded-full border-4 border-white shadow" />
                <h3 className="text-lg font-bold text-purple-700 mb-1">{item.year}</h3>
                <p className="text-gray-700">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="py-12 px-6 md:px-12 lg:px-20 bg-gray-50">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-8 tracking-wide uppercase text-gray-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Featured Artists
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {artists.map((artist, index) => (
            <motion.div
              key={index}
              className="bg-white border border-purple-100 p-6 rounded-xl shadow hover:shadow-lg text-center transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <h3 className="text-lg font-semibold text-purple-700 mb-2">{artist}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
