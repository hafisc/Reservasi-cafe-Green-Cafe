import React from 'react';
import { motion } from 'framer-motion';
import { FaUtensils, FaCoffee, FaLeaf } from 'react-icons/fa';

const MenuHeader = () => {
  return (
    <div className="bg-[#f8f8f5] py-20 md:py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#627a4c]"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-[#627a4c]"
      ></motion.div>
      
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center space-x-4 mb-6">
              <div className="bg-[#627a4c] p-3 rounded-full">
                <FaUtensils className="text-white text-2xl" />
              </div>
              <div className="bg-[#627a4c] p-3 rounded-full">
                <FaCoffee className="text-white text-2xl" />
              </div>
              <div className="bg-[#627a4c] p-3 rounded-full">
                <FaLeaf className="text-white text-2xl" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1b1b18]">Menu Kami</h1>
            <p className="text-gray-600 text-lg">
              Nikmati berbagai pilihan makanan dan minuman lezat yang dibuat dengan bahan-bahan segar dan berkualitas. 
              Semua menu kami disiapkan dengan hati dan perhatian khusus untuk memberikan pengalaman kuliner terbaik.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;
