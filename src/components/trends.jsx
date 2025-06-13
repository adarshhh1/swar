import React, { useState } from "react";

const Trends = () => {
  const trends = [
    {
      name: "Raag Darbari - Pt. Ravi Shankar",
      description:
        "A mesmerizing sitar composition by the maestro Ravi Shankar, showcasing the depth of Raag Darbari.",
      lyrics: `शब्दों से परे सुर बोलें,\nरात की शांति में गूँजे,\nदरबारी की गहरी छाया,\nमन को छूकर आगे बढ़े।`,
    },
    {
      name: "Tihai Innovations - Zakir Hussain",
      description:
        "A rhythmic masterpiece by tabla virtuoso Zakir Hussain, featuring intricate tihai patterns.",
      lyrics: `धा धिन धिन धा, बाजे ताल,\nलय का जादू, छेड़े सुराल,\nतिहाई की झंकार बजे,\nमन में नई तरंग जगे।`,
    },
    {
      name: "Bhimpalasi - Kaushiki Chakraborty",
      description:
        "An evocative vocal rendition of Raag Bhimpalasi by the acclaimed singer Kaushiki Chakraborty.",
      lyrics: `संध्या बेला गाए राग,\nभीमपलासी मधुर सुर लाए,\nहवा संग बहता संगीत,\nमन में प्रेम दीप जलाए।`,
    },
    {
      name: "Fusion of Traditions - Shankar Mahadevan",
      description:
        "A blend of Carnatic and Hindustani classical styles, bringing out the richness of both traditions.",
      lyrics: `वीणा बजे, सितार संग,\nरागों की अनोखी तरंग,\nउत्तर-दक्षिण का मिलन,\nसंगीत बने आत्मा का संग।`,
    },
    {
      name: "Miyan Ki Malhar - Rashid Khan",
      description:
        "A soulful performance of Raag Miyan Ki Malhar, capturing the essence of monsoon melodies.",
      lyrics: `बादल गरजे, घटा छाए,\nसुरों की बूँदें बरसाए,\nमल्हार में छुपा है प्यार,\nसंगीत में गूँजे झंकार।`,
    },
  ];

  const [selectedSong, setSelectedSong] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (song) => {
    setSelectedSong(song);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6">
      <h1 className="text-center text-4xl sm:text-5xl font-extrabold text-purple-700 mb-12 tracking-tight uppercase">
        Top Trends in Indian Classical Music (2025)
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {trends.map((trend, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-br from-white via-purple-50 to-white border-l-8 border-purple-400 rounded-2xl shadow-lg p-0 flex flex-col items-stretch transition-all hover:shadow-2xl hover:-translate-y-2 cursor-pointer group"
            onClick={() => openModal(trend)}
          >
            {/* Circular Icon */}
            <div className="flex justify-center -mt-8 mb-2">
              <div className="w-16 h-16 bg-purple-100 border-4 border-white rounded-full flex items-center justify-center shadow text-3xl">
                🎵
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-between p-6 pt-2">
              <h2 className="text-lg font-bold text-purple-700 mb-1 group-hover:text-purple-900 transition-colors truncate">{trend.name}</h2>
              <p className="text-gray-500 mb-3 text-sm line-clamp-3">{trend.description}</p>
              <span className="inline-block mt-auto text-xs font-semibold text-purple-600 bg-purple-50 rounded-full px-3 py-1 shadow-sm self-start">Click for lyrics</span>
            </div>
          </div>
        ))}
      </div>
      {/* Lyrics Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-5 z-50">
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-2xl border-t-4 border-purple-500">
            <h2 className="text-2xl font-bold mb-4 text-center text-purple-700">
              {selectedSong?.name}
            </h2>
            <p className="text-gray-700 text-center whitespace-pre-line text-lg">
              {selectedSong?.lyrics}
            </p>
            <button
              className="mt-8 w-full bg-purple-600 text-white p-3 rounded-lg font-semibold hover:bg-purple-700 transition"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Trends;
