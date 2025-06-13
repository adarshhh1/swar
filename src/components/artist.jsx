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

function ArtistCorner() {
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
    <div className="min-h-screen bg-white text-gray-900 pt-32 pb-20 px-6 flex flex-col items-center">
      {/* Music Section */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-5xl font-extrabold text-center text-purple-700 mb-12 tracking-tight uppercase"
      >
        Top 10 Indian Classical Music
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {topIndianClassicalMusic.map((track, index) => (
          <MusicCard key={index} track={track} />
        ))}
      </div>
      {/* Art Section */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-5xl font-extrabold text-center text-purple-700 mt-20 mb-12 tracking-tight uppercase"
      >
        Art of the Day
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {artData.map((art, index) => (
          <ArtCard key={index} art={art} />
        ))}
      </div>
    </div>
  );
}

function MusicCard({ track }) {
  const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(track.title)}`
  return (
    <motion.div
      className="relative bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-2xl shadow-lg p-0 flex flex-col items-stretch transition-all hover:shadow-2xl hover:-translate-y-1 cursor-pointer group"
      whileHover={{ scale: 1.04, borderColor: '#a78bfa' }}
      onClick={() => window.open(searchUrl, "_blank")}
    >
      {/* Accent Bar */}
      <div className="h-2 w-full bg-purple-400 rounded-t-2xl" />
      <div className="flex-1 flex flex-col justify-between p-6">
        <h3 className="text-lg font-bold text-purple-700 mb-1 group-hover:text-purple-900 transition-colors">{track.title}</h3>
        <p className="text-sm text-gray-500 mb-2">{track.artist}</p>
        <p className="text-xs text-gray-400">{track.description}</p>
      </div>
    </motion.div>
  )
}

function ArtCard({ art }) {
  const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(art.title)}`
  return (
    <motion.div
      className="relative bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-2xl shadow-lg p-0 flex flex-col items-stretch transition-all hover:shadow-2xl hover:-translate-y-1 cursor-pointer group"
      whileHover={{ scale: 1.04, borderColor: '#a78bfa' }}
      onClick={() => window.open(searchUrl, "_blank")}
    >
      {/* Accent Bar */}
      <div className="h-2 w-full bg-purple-400 rounded-t-2xl" />
      {art.image && (
        <img
          src={art.image}
          alt={art.title}
          className="w-full h-40 object-cover rounded-b-none rounded-t-none rounded-2xl"
        />
      )}
      <div className="flex-1 flex flex-col justify-between p-6">
        <h3 className="text-lg font-bold text-purple-700 mb-1 group-hover:text-purple-900 transition-colors">{art.title}</h3>
        <p className="text-sm text-gray-500 mb-2">{art.artist}</p>
        <p className="text-xs text-gray-400">{art.description}</p>
      </div>
    </motion.div>
  )
}

export default ArtistCorner;
