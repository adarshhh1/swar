import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import galleryImages from "../data/gallery";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleImages, setVisibleImages] = useState(20);

  // Close modal on pressing Esc key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const loadMoreImages = () => {
    if (visibleImages >= galleryImages.length) {
      setVisibleImages(20); // Loop back to start
    } else {
      setVisibleImages((prev) => prev + 20);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10 flex flex-col items-center ">
      <br />
      <br />
      <br />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-center text-4xl font-bold text-white mb-8 border-b-2 border-gray-600 pb-2"
      >
        Gallery
      </motion.h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl">
        {galleryImages.slice(0, visibleImages).map((image) => (
          <motion.div
            key={image.id}
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="overflow-hidden rounded-xl shadow-lg cursor-pointer border border-gray-700"
            onClick={() => setSelectedImage(image.src)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-60 object-cover rounded-xl"
            />
          </motion.div>
        ))}
      </div>

      {/* Load More Button */}
      {galleryImages.length > visibleImages && (
        <button
          onClick={loadMoreImages}
          className="mt-6 px-6 py-2 text-lg font-semibold bg-white text-black rounded-lg shadow hover:bg-gray-300 transition"
        >
          Load More
        </button>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Enlarged"
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
