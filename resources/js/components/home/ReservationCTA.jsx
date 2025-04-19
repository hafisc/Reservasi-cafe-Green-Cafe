import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

const ReservationCTA = () => {
  return (
    <section className="py-16 bg-[#627a4c] relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white"
      ></motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <FaCalendarAlt className="text-4xl mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Reservasi Meja Anda Sekarang</h2>
            <p className="text-gray-100 text-lg mb-8">
              Jangan lewatkan kesempatan untuk menikmati pengalaman bersantap yang luar biasa di GreenCafe. 
              Reservasi meja Anda sekarang untuk menghindari antrian dan menikmati layanan prioritas.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg text-left"
          >
            <h3 className="text-[#1b1b18] text-2xl font-semibold mb-4">Keuntungan Reservasi Online</h3>
            <ul className="space-y-3 mb-6 text-gray-700">
              <li className="flex items-start">
                <div className="bg-[#627a4c] rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Hindari antrian dan waktu tunggu yang lama</span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#627a4c] rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Pilih tempat duduk favorit Anda</span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#627a4c] rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Dapatkan layanan prioritas dari staf kami</span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#627a4c] rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Pesan menu spesial yang hanya tersedia dengan reservasi</span>
              </li>
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/reservation" 
                className="bg-[#627a4c] hover:bg-[#4e6039] text-white font-medium py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center"
              >
                <span>Reservasi Sekarang</span>
                <FaArrowRight className="ml-2" />
              </Link>
              <a 
                href="tel:+6281234567890" 
                className="bg-transparent border-2 border-[#627a4c] text-[#627a4c] hover:bg-[#627a4c] hover:text-white font-medium py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Hubungi Kami</span>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 text-gray-100"
          >
            <p>Jam Operasional: Setiap Hari, 08.00 - 22.00 WIB</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReservationCTA;
