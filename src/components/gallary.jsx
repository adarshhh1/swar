import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Grid3X3,
  Grid2X2,
  List,
} from "lucide-react";
import galleryImages from "../data/gallery";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [visibleImages, setVisibleImages] = useState(20);
  const [viewMode, setViewMode] = useState("grid"); // 'grid', 'masonry', 'list'
  const [filterCategory, setFilterCategory] = useState("all");

  // Categories for filtering
  const categories = ["all", "events", "performances", "workshops", "concerts"];

  // Close modal on pressing Esc key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
        setSelectedIndex(null);
      }
      if (event.key === "ArrowLeft" && selectedIndex > 0) {
        navigateImage(-1);
      }
      if (
        event.key === "ArrowRight" &&
        selectedIndex < galleryImages.length - 1
      ) {
        navigateImage(1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const openLightbox = (imageSrc, index) => {
    setSelectedImage(imageSrc);
    setSelectedIndex(index);
  };

  const navigateImage = (direction) => {
    const newIndex = selectedIndex + direction;
    if (newIndex >= 0 && newIndex < galleryImages.length) {
      setSelectedIndex(newIndex);
      setSelectedImage(galleryImages[newIndex].src);
    }
  };

  const loadMoreImages = () => {
    if (visibleImages >= galleryImages.length) {
      setVisibleImages(20); // Loop back to start
    } else {
      setVisibleImages((prev) => prev + 20);
    }
  };

  const getGridClass = () => {
    switch (viewMode) {
      case "masonry":
        return "columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6";
      case "list":
        return "grid grid-cols-1 sm:grid-cols-2 gap-8";
      default:
        return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6";
    }
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-4"
          >
            Photo Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Explore our collection of memorable moments from events,
            performances, and musical journey
          </motion.p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilterCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filterCategory === category
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-all duration-200 ${
                viewMode === "grid"
                  ? "bg-purple-600 text-white"
                  : "text-gray-600 hover:text-purple-600"
              }`}
            >
              <Grid3X3 size={20} />
            </button>
            <button
              onClick={() => setViewMode("masonry")}
              className={`p-2 rounded-lg transition-all duration-200 ${
                viewMode === "masonry"
                  ? "bg-purple-600 text-white"
                  : "text-gray-600 hover:text-purple-600"
              }`}
            >
              <Grid2X2 size={20} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-all duration-200 ${
                viewMode === "list"
                  ? "bg-purple-600 text-white"
                  : "text-gray-600 hover:text-purple-600"
              }`}
            >
              <List size={20} />
            </button>
          </div>
        </div>

        {/* Image Grid */}
        <div className={getGridClass()}>
          {galleryImages.slice(0, visibleImages).map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group cursor-pointer ${
                viewMode === "masonry" ? "mb-6 break-inside-avoid" : ""
              }`}
              onClick={() => openLightbox(image.src, index)}
            >
              <div className="relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full object-cover transition-transform duration-300 group-hover:scale-110 ${
                    viewMode === "list"
                      ? "h-48"
                      : viewMode === "masonry"
                      ? "h-auto"
                      : "h-64"
                  }`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {galleryImages.length > visibleImages && (
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={loadMoreImages}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Load More Images
            </motion.button>
          </div>
        )}

        {/* Image Counter */}
        <div className="text-center mt-8">
          <p className="text-gray-500">
            Showing {Math.min(visibleImages, galleryImages.length)} of{" "}
            {galleryImages.length} images
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setSelectedImage(null);
              setSelectedIndex(null);
            }}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-10 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-all duration-200"
              onClick={() => {
                setSelectedImage(null);
                setSelectedIndex(null);
              }}
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            {selectedIndex > 0 && (
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-all duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage(-1);
                }}
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {selectedIndex < galleryImages.length - 1 && (
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-all duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage(1);
                }}
              >
                <ChevronRight size={24} />
              </button>
            )}

            {/* Image */}
            <motion.img
              src={selectedImage}
              alt="Enlarged"
              className="max-w-full max-h-full object-contain rounded-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image Info */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
              <p className="text-sm">
                {selectedIndex + 1} of {galleryImages.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
