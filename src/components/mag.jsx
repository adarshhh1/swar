import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const fetchBooks = async () => {
  const response = await fetch(
    "https://openlibrary.org/subjects/indian_classical.json?limit=10"
  );
  const data = await response.json();
  return data.works;
};

const Magazine = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks().then(setBooks);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FDEBD0] to-[#F5CBA7] py-16 px-6 flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-semibold text-center text-[#8B4513] mb-10"
      >
        Indian Classical Books
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

const BookCard = ({ book }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative bg-white rounded-lg shadow-md p-6 flex flex-col items-center transition-all hover:shadow-lg cursor-pointer"
      whileHover={{ scale: 1.05 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-32 h-48 rounded-lg bg-gray-300 flex items-center justify-center overflow-hidden border-2 border-[#D2691E]">
        <img
          src={
            book.cover_id
              ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
              : "https://via.placeholder.com/150"
          }
          alt={book.title}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-800 text-center">
        {book.title}
      </h3>
      <p className="text-sm text-gray-500">
        {book.authors?.map((a) => a.name).join(", ") || "Unknown Author"}
      </p>
      {hovered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 text-white p-4 flex flex-col justify-center items-center rounded-lg"
        >
          <p className="text-sm text-center">
            {book.subjects?.join(", ") || "No description available"}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Magazine;
