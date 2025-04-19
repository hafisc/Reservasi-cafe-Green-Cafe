import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCoffee, FaUtensils, FaCalendarAlt, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 md:px-8 py-5">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center">
              <FaCoffee className="text-[#627a4c] text-3xl mr-2" />
              <span className="text-2xl font-bold text-[#627a4c]">GreenCafe</span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex space-x-8"
          >
            <Link to="/" className="text-gray-700 hover:text-[#627a4c] transition-colors duration-300">Home</Link>
            <Link to="/menu" className="text-gray-700 hover:text-[#627a4c] transition-colors duration-300">Menu</Link>
            <Link to="/reservation" className="text-gray-700 hover:text-[#627a4c] transition-colors duration-300">Reservation</Link>
            <Link to="/about" className="text-gray-700 hover:text-[#627a4c] transition-colors duration-300">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#627a4c] transition-colors duration-300">Contact</Link>
          </motion.nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        >
          <div className="flex flex-col space-y-4 mt-4 pb-4">
            <Link to="/" className="text-gray-700 hover:text-[#627a4c] transition-colors duration-300">Home</Link>
            <Link to="/menu" className="text-gray-700 hover:text-[#627a4c] transition-colors duration-300">Menu</Link>
            <Link to="/reservation" className="text-gray-700 hover:text-[#627a4c] transition-colors duration-300">Reservation</Link>
            <Link to="/about" className="text-gray-700 hover:text-[#627a4c] transition-colors duration-300">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#627a4c] transition-colors duration-300">Contact</Link>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
