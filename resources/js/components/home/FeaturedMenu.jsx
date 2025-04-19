import React from 'react';
import { motion } from 'framer-motion';
import { FaCoffee, FaLeaf } from 'react-icons/fa';

const FeaturedMenu = () => {
  const menuItems = [
    {
      id: 1,
      name: 'Signature Green Latte',
      description: 'Our specialty matcha latte with a hint of vanilla and almond milk',
      price: 'Rp 35.000',
      image: 'https://images.unsplash.com/photo-1577590835286-1cdd24c08fd5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'drink'
    },
    {
      id: 2,
      name: 'Avocado Toast',
      description: 'Freshly smashed avocado on sourdough bread with cherry tomatoes and microgreens',
      price: 'Rp 45.000',
      image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'food'
    },
    {
      id: 3,
      name: 'Green Garden Salad',
      description: 'Mixed greens with seasonal vegetables, nuts, and house dressing',
      price: 'Rp 40.000',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'food'
    },
    {
      id: 4,
      name: 'Espresso Tonic',
      description: 'Double shot espresso with tonic water and a slice of lime',
      price: 'Rp 30.000',
      image: 'https://images.unsplash.com/photo-1559525839-8f975c88688b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'drink'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
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
          <div className="flex justify-center items-center mb-3">
            <FaLeaf className="text-[#627a4c] mr-2" />
            <span className="text-sm uppercase tracking-wider text-[#627a4c] font-medium">Taste the Difference</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1b1b18] mb-4">Our Featured Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our chef's selection of signature dishes and drinks, crafted with fresh, locally-sourced ingredients for an exceptional dining experience.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {menuItems.map((item) => (
            <motion.div 
              key={item.id}
              variants={item}
              className="bg-[#f8f8f5] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-[#1b1b18]">{item.name}</h3>
                  <span className="bg-[#627a4c] text-white px-2 py-1 rounded text-sm font-medium">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-center">
                  {item.category === 'drink' ? (
                    <FaCoffee className="text-[#627a4c] mr-2" />
                  ) : (
                    <FaLeaf className="text-[#627a4c] mr-2" />
                  )}
                  <span className="text-sm text-gray-500 capitalize">{item.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a 
            href="/menu" 
            className="inline-block bg-transparent border-2 border-[#627a4c] text-[#627a4c] hover:bg-[#627a4c] hover:text-white font-medium py-3 px-8 rounded-md transition-all duration-300"
          >
            View Full Menu
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
