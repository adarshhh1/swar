import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const topIndianClassicalMusic = [
  {
    title: "Raga Yaman",
    artist: "Pandit Ravi Shankar",
    description:
      "A serene and soothing raga often played in the evening, known for its uplifting melody.",
  },
  {
    title: "Raga Bhairav",
    artist: "Ustad Vilayat Khan",
    description:
      "A morning raga that conveys a sense of devotion and spirituality.",
  },
  {
    title: "Raga Malkauns",
    artist: "Bismillah Khan",
    description:
      "A deeply meditative and serious raga, often associated with midnight.",
  },
  {
    title: "Raga Darbari Kanada",
    artist: "Ustad Amir Khan",
    description:
      "A late-night raga known for its serious and introspective nature.",
  },
  {
    title: "Raga Bageshree",
    artist: "Pandit Bhimsen Joshi",
    description:
      "A romantic and expressive raga often performed in the late evening.",
  },
  {
    title: "Raga Mian Ki Malhar",
    artist: "Tansen",
    description:
      "A powerful raga associated with rain and monsoon, believed to bring showers.",
  },
  {
    title: "Raga Hamsadhwani",
    artist: "L. Subramaniam",
    description:
      "A bright and auspicious raga often used for invocatory compositions.",
  },
  {
    title: "Raga Pahadi",
    artist: "Shivkumar Sharma",
    description:
      "A light and folk-based raga reminiscent of the beauty of the hills.",
  },
  {
    title: "Raga Desh",
    artist: "Hariprasad Chaurasia",
    description:
      "A joyful and expressive raga, often associated with monsoon and patriotism.",
  },
  {
    title: "Raga Todi",
    artist: "Ustad Bade Ghulam Ali Khan",
    description:
      "A morning raga that evokes deep emotions of longing and devotion.",
  },
];

const ArtistCorner = () => {
  const [artData, setArtData] = useState([]);

  useEffect(() => {
    fetch("https://api.artic.edu/api/v1/artworks?page=1&limit=3")
      .then((response) => response.json())
      .then((data) => {
        setArtData(
          data.data.map((art) => ({
            title: art.title,
            artist: art.artist_display || "Unknown",
            image: art.image_id
              ? `https://www.artic.edu/iiif/2/${art.image_id}/full/200,/0/default.jpg`
              : null,
            description: art.thumbnail
              ? art.thumbnail.alt_text
              : "No description available",
          }))
        );
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FDEBD0] to-[#F5CBA7] py-16 px-6 flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-semibold text-center text-[#8B4513] mb-10"
      >
        Top 10 Indian Classical Music
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {topIndianClassicalMusic.map((track, index) => (
          <MusicCard key={index} track={track} />
        ))}
      </div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-semibold text-center text-[#8B4513] mt-16 mb-10"
      >
        Art of the Day
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {artData.map((art, index) => (
          <ArtCard key={index} art={art} />
        ))}
      </div>
    </div>
  );
};

const MusicCard = ({ track }) => {
  const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
    track.title
  )}`;
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center transition-all hover:shadow-lg cursor-pointer w-72"
      whileHover={{ scale: 1.05 }}
      onClick={() => window.open(searchUrl, "_blank")}
    >
      <h3 className="text-lg font-semibold text-gray-800 text-center">
        {track.title}
      </h3>
      <p className="text-sm text-gray-500 text-center">{track.artist}</p>
      <p className="text-xs text-gray-600 text-center mt-2">
        {track.description}
      </p>
    </motion.div>
  );
};

const ArtCard = ({ art }) => {
  const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
    art.title
  )}`;
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center transition-all hover:shadow-lg cursor-pointer w-72"
      whileHover={{ scale: 1.05 }}
      onClick={() => window.open(searchUrl, "_blank")}
    >
      {art.image && (
        <img
          src={art.image}
          alt={art.title}
          className="w-full h-40 object-cover mb-4 rounded-lg"
        />
      )}
      <h3 className="text-lg font-semibold text-gray-800 text-center">
        {art.title}
      </h3>
      <p className="text-sm text-gray-500 text-center">{art.artist}</p>
      <p className="text-xs text-gray-600 text-center mt-2">
        {art.description}
      </p>
    </motion.div>
  );
};

export default ArtistCorner;
