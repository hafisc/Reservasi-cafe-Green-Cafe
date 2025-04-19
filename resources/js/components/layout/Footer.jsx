import React from 'react';
import { motion } from 'framer-motion';
import { FaCoffee, FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1b1b18] text-white">
      <div className="container mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Logo and About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <FaCoffee className="text-[#627a4c] text-3xl mr-2" />
              <span className="text-2xl font-bold text-[#627a4c]">GreenCafe</span>
            </div>
            <p className="text-gray-300 mb-4">
              Experience the perfect blend of comfort and taste at GreenCafe. 
              We serve quality coffee and delicious food in a relaxing atmosphere.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#627a4c] transition-colors duration-300">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#627a4c] transition-colors duration-300">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#627a4c] transition-colors duration-300">
                <FaTwitter className="text-xl" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-[#627a4c]">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-[#627a4c] transition-colors duration-300">Home</a></li>
              <li><a href="/menu" className="text-gray-300 hover:text-[#627a4c] transition-colors duration-300">Menu</a></li>
              <li><a href="/reservation" className="text-gray-300 hover:text-[#627a4c] transition-colors duration-300">Reservation</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-[#627a4c] transition-colors duration-300">About Us</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-[#627a4c] transition-colors duration-300">Contact</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4 text-[#627a4c]">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-[#627a4c] mt-1 mr-3" />
                <span className="text-gray-300">123 Coffee Street, Brew City, BC 12345</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-[#627a4c] mr-3" />
                <span className="text-gray-300">+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-[#627a4c] mr-3" />
                <span className="text-gray-300">info@greencafe.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-8 pt-6 text-center"
        >
          <p className="text-gray-400">© {new Date().getFullYear()} GreenCafe. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
