import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gray-50 text-gray-900 shadow-lg border-b border-gray-300 font-sans fixed top-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex justify-between h-16 items-center">
        {/* Logo - Smaller and Left Aligned */}
        <Link
          to="/"
          className="text-lg font-extrabold tracking-wide text-[#2C3E50] ml-2 whitespace-nowrap"
        >
          Swar Musical
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {[
            "Home",
            "About Us",
            "Team",
            "Magazine",
            "Artist Corner",

            "Top Trends",
            "Gallery",
            "Contact Us",
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Link
                to={`/${item.replace(/\s+/g, "").toLowerCase()}`}
                className="hover:text-[#F39C12] transition text-sm font-medium tracking-wide px-3 py-2 rounded-lg hover:bg-[#2C3E50] hover:text-white"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.div
          className="md:hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#2C3E50]">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="md:hidden overflow-hidden bg-[#2C3E50] p-4 border-t border-[#F39C12] rounded-b-lg shadow-lg"
      >
        {[
          "Home",
          "About Us",
          "Team",
          "Magazine",
          "Artist Corner",

          "Top Trends",
          "Gallery",
          "Contact Us",
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Link
              to={`/${item.replace(/\s+/g, "").toLowerCase()}`}
              className="block py-2 text-white hover:text-[#F39C12] text-sm font-medium tracking-wide border-b border-[#F39C12] last:border-b-0"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
