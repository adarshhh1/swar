import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const fetchBooks = async () => {
  try {
    const response = await fetch(
      "https://openlibrary.org/subjects/hindi.json?limit=20"
    );
    const data = await response.json();
    console.log("Fetched Data:", data);

    if (!data.works) return [];

    return data.works.filter(
      (book) =>
        book.cover_id &&
        !book.title.toLowerCase().includes("dictionary") &&
        (book.title.toLowerCase().includes("hindi") ||
          book.title.toLowerCase().includes("literature"))
    );
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

const Magazine = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks().then(setBooks);
  }, []);

  return (
    <div className="min-h-screen bg-white py-20 px-6 flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-5xl font-extrabold text-center text-purple-700 mb-12 tracking-tight uppercase"
      >
        Hindi Literature Books
      </motion.h1>

      {books.length === 0 ? (
        <p className="text-gray-400 text-lg">
          No books found. Try searching manually.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {books.map((book, index) => (
            <BookCard key={index} book={book} rank={index + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const BookCard = ({ book, rank }) => {
  const [hovered, setHovered] = useState(false);

  const handleSearch = () => {
    const searchQuery = encodeURIComponent(book.title + " book");
    const googleSearchURL = `https://www.google.com/search?q=${searchQuery}`;
    window.open(googleSearchURL, "_blank");
  };

  const coverURL = `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`;

  return (
    <motion.div
      className="relative bg-white border border-purple-100 rounded-xl shadow-lg p-6 flex flex-col items-center transition-all hover:shadow-2xl cursor-pointer"
      whileHover={{ scale: 1.05, borderColor: "#a78bfa" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleSearch}
    >
      {/* Book Cover */}
      <motion.div
        className="w-32 h-48 rounded-lg bg-purple-50 flex items-center justify-center overflow-hidden border-2 border-purple-200"
        whileHover={{ scale: 1.1 }}
      >
        <img
          src={coverURL}
          alt={book.title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Book Details */}
      <h3 className="mt-4 text-lg font-bold text-purple-700 text-center">
        #{rank} {book.title}
      </h3>
      <p className="text-sm text-gray-500 text-center">
        {book.authors?.map((a) => a.name).join(", ") || "Unknown Author"}
      </p>

      {/* Enlarged Cover on Hover */}
      {hovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{ duration: 0.3 }}
          className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-95 flex flex-col justify-center items-center rounded-xl shadow-2xl z-10"
        >
          <img
            src={coverURL}
            alt={book.title}
            className="w-48 h-64 object-cover border-4 border-purple-200 rounded-xl shadow-xl"
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default Magazine;
