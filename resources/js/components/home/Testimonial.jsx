import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Budi Santoso",
      role: "Pengunjung Setia",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      content: "GreenCafe adalah tempat favorit saya untuk bekerja dan bersantai. Suasananya tenang, kopinya enak, dan makanannya lezat. Pelayanannya juga sangat ramah dan profesional.",
      rating: 5
    },
    {
      id: 2,
      name: "Siti Rahayu",
      role: "Food Blogger",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      content: "Sebagai food blogger, saya sangat merekomendasikan GreenCafe. Menu-menu mereka tidak hanya lezat tetapi juga disajikan dengan presentasi yang cantik. Tempat yang sempurna untuk foto-foto Instagram!",
      rating: 5
    },
    {
      id: 3,
      name: "Arief Wijaya",
      role: "Pengusaha",
      image: "https://randomuser.me/api/portraits/men/62.jpg",
      content: "Saya sering mengadakan pertemuan bisnis di GreenCafe. Tempatnya nyaman, makanannya enak, dan suasananya sangat mendukung untuk diskusi. Sistem reservasi online mereka juga sangat memudahkan.",
      rating: 4
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <FaStar 
        key={index} 
        className={`${index < rating ? 'text-yellow-400' : 'text-gray-300'} text-lg`} 
      />
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1b1b18] mb-4">Apa Kata Mereka</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dengarkan pengalaman pengunjung kami yang telah merasakan kenyamanan dan kelezatan GreenCafe.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: index === activeIndex ? 1 : 0,
                  x: index === activeIndex ? 0 : 100,
                  position: index === activeIndex ? 'relative' : 'absolute'
                }}
                transition={{ duration: 0.5 }}
                className="bg-[#f8f8f5] rounded-lg p-8 shadow-md"
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#627a4c]">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <FaQuoteLeft className="text-[#627a4c] text-3xl mb-4 opacity-50" />
                    <p className="text-gray-700 mb-6 italic">{testimonial.content}</p>
                    <div className="flex items-center mb-2">
                      {renderStars(testimonial.rating)}
                    </div>
                    <h4 className="text-xl font-semibold text-[#1b1b18]">{testimonial.name}</h4>
                    <p className="text-[#627a4c]">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={prevTestimonial}
                className="bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#627a4c] hover:text-white transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === activeIndex ? 'bg-[#627a4c]' : 'bg-gray-300'
                    } transition-colors duration-300`}
                  ></button>
                ))}
              </div>
              <button 
                onClick={nextTestimonial}
                className="bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#627a4c] hover:text-white transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
