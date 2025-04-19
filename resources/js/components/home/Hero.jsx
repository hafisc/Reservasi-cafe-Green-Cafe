import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-[#f8f8f5] overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#1b1b18]">
              <span className="block">Experience the</span>
              <span className="text-[#627a4c]">Green Oasis</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-8">
              Indulge in our premium coffee and delicious cuisine in a tranquil atmosphere.
              Book your table now for an unforgettable dining experience.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
            >
              <Link 
                to="/reservation" 
                className="bg-[#627a4c] hover:bg-[#4e6039] text-white font-medium py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 text-center"
              >
                Reserve Now
              </Link>
              <Link 
                to="/menu" 
                className="bg-transparent border-2 border-[#627a4c] text-[#627a4c] hover:bg-[#627a4c] hover:text-white font-medium py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 text-center"
              >
                View Menu
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/images/cafe-hero.jpg" 
                alt="Green Cafe Interior" 
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80';
                }}
              />
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
              ></motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg"
            >
              <div className="flex items-center">
                <div className="bg-[#627a4c] rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Open Daily</p>
                  <p className="font-semibold">8:00 AM - 10:00 PM</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#627a4c]"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-[#627a4c]"
      ></motion.div>
    </div>
  );
};

export default Hero;
