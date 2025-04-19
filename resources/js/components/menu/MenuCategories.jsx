import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCoffee, FaUtensils, FaLeaf, FaGlassMartini, FaBirthdayCake } from 'react-icons/fa';

const MenuCategories = ({ activeCategory, setActiveCategory }) => {
  const categories = [
    { id: 'semua', name: 'Semua', icon: <FaUtensils /> },
    { id: 'minuman', name: 'Minuman', icon: <FaCoffee /> },
    { id: 'makanan-utama', name: 'Makanan Utama', icon: <FaUtensils /> },
    { id: 'makanan-ringan', name: 'Makanan Ringan', icon: <FaLeaf /> },
    { id: 'dessert', name: 'Dessert', icon: <FaBirthdayCake /> },
    { id: 'spesial', name: 'Menu Spesial', icon: <FaGlassMartini /> }
  ];

  return (
    <div className="py-10 md:py-12 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-6 py-3 md:px-8 md:py-4 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[#627a4c] text-white shadow-md'
                  : 'bg-[#f8f8f5] text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MenuCategories;
