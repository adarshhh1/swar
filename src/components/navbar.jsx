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
      className="bg-[#8B4513] text-[#FFF8DC] shadow-xl border-b-4 border-[#A0522D] font-serif"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 items-center">
          Swar Musical Foundation
          <div className="hidden md:flex space-x-4">
            {[
              "Home",
              "About Us",
              "Team",
              "Magazine",
              "Artist Corner",
              "Music Features",
              "Top Trends",
              "Gallery",
              "Contact Us",
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  to={`/${item.replace(/\s+/g, "").toLowerCase()}`}
                  className="hover:text-[#D2691E] transition font-medium text-sm tracking-wide px-2 py-1 rounded-md hover:bg-[#FFF8DC] hover:text-[#8B4513]"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="md:hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#F5DEB3]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="md:hidden overflow-hidden bg-[#A0522D] p-3 border-t-2 border-[#D2691E] rounded-b-lg shadow-lg"
      >
        {[
          "Home",
          "About Us",
          "Team",
          "Magazine",
          "Artist Corner",
          "Music Features",
          "Top Trends",
          "Gallery",
          "Contact Us",
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Link
              to={`/${item.replace(/\s+/g, "").toLowerCase()}`}
              className="block py-2 hover:text-[#F5DEB3] font-medium text-sm tracking-wide border-b border-[#D2691E] last:border-b-0"
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
