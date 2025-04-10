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
    <div className="min-h-screen bg-gray-100 p-5">
      <br />
      <br />
      <br />
      <br />

      <h1 className="text-center text-4xl font-bold mb-8 text-blue-600">
        Top Trends in Indian Classical Music (2025)
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {trends.map((trend, index) => (
          <div
            key={index}
            className="p-5 border rounded-lg shadow-lg bg-white hover:shadow-2xl transition duration-300 transform hover:scale-105 cursor-pointer"
            onClick={() => openModal(trend)}
          >
            <div className="h-60 bg-gray-300 flex items-center justify-center text-gray-600 text-lg font-semibold rounded-lg">
              🎵 {trend.name}
            </div>
            <h2 className="text-xl font-bold mt-3">{trend.name}</h2>
            <p className="text-gray-700">{trend.description}</p>
          </div>
        ))}
      </div>

      {/* Lyrics Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-5">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-2xl">
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
              {selectedSong?.name}
            </h2>
            <p className="text-gray-700 text-center whitespace-pre-line">
              {selectedSong?.lyrics}
            </p>
            <button
              className="mt-4 w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
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
