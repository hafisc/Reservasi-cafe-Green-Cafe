import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaCoffee, FaUtensils } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: <FaLeaf className="text-white text-2xl" />,
      title: "Bahan Organik",
      description: "Kami menggunakan bahan-bahan organik berkualitas tinggi untuk menjaga kesehatan dan kelestarian lingkungan."
    },
    {
      icon: <FaCoffee className="text-white text-2xl" />,
      title: "Kopi Premium",
      description: "Nikmati kopi premium kami yang disangrai dengan sempurna untuk menghasilkan cita rasa yang kaya dan mendalam."
    },
    {
      icon: <FaUtensils className="text-white text-2xl" />,
      title: "Menu Sehat",
      description: "Menu kami dirancang oleh chef berpengalaman untuk memberikan pengalaman kuliner yang lezat dan menyehatkan."
    }
  ];

  return (
    <section className="py-16 bg-[#f8f8f5]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Suasana Cafe" 
                  className="w-full h-auto"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-xs"
              >
                <p className="text-[#627a4c] font-medium mb-1">Sejak 2010</p>
                <p className="text-gray-600 text-sm">Melayani dengan sepenuh hati dan menghadirkan pengalaman kuliner terbaik untuk Anda.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.15 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-[#627a4c] z-[-1]"
              ></motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-3">
              <FaLeaf className="text-[#627a4c] mr-2" />
              <span className="text-sm uppercase tracking-wider text-[#627a4c] font-medium">Tentang Kami</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1b1b18] mb-6">Oasis Hijau di Tengah Kota</h2>
            <p className="text-gray-600 mb-6">
              GreenCafe adalah tempat di mana ketenangan bertemu dengan cita rasa. Didirikan pada tahun 2010, kami berkomitmen untuk menyajikan makanan dan minuman berkualitas dalam suasana yang nyaman dan ramah lingkungan.
            </p>
            <p className="text-gray-600 mb-8">
              Kami percaya bahwa makanan yang baik berasal dari bahan-bahan yang baik. Itulah mengapa kami hanya menggunakan bahan-bahan segar dan organik untuk setiap hidangan kami. Dari kopi yang disangrai dengan sempurna hingga makanan yang disiapkan dengan hati-hati, setiap detail diperhatikan untuk memastikan pengalaman bersantap yang tak terlupakan.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#627a4c] rounded-lg p-5 text-center"
                >
                  <div className="bg-[#4e6039] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-100 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.a
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              href="/about"
              className="inline-block bg-[#627a4c] hover:bg-[#4e6039] text-white font-medium py-3 px-8 rounded-md transition-all duration-300"
            >
              Pelajari Lebih Lanjut
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
