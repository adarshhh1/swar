import React from "react";
import { motion } from "framer-motion";
import galleryImages from "../data/gallery";

const Gallery = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-center text-4xl font-bold text-[#8B4513] mb-8">
        Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((image) => (
          <motion.div
            key={image.id}
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover rounded-lg"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
