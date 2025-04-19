import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf } from 'react-icons/fa';

const MenuItems = ({ activeCategory }) => {
  // Data menu
  const menuItems = [
    // Minuman
    {
      id: 1,
      name: 'Kopi Hijau Signature',
      description: 'Kopi spesial dengan ekstrak matcha dan susu almond',
      price: 'Rp 35.000',
      image: 'https://images.unsplash.com/photo-1577590835286-1cdd24c08fd5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'minuman',
      isVegan: true,
      isRecommended: true
    },
    {
      id: 2,
      name: 'Espresso',
      description: 'Kopi hitam pekat dengan cita rasa kuat',
      price: 'Rp 25.000',
      image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'minuman',
      isVegan: true,
      isRecommended: false
    },
    {
      id: 3,
      name: 'Teh Herbal',
      description: 'Campuran teh herbal dengan madu dan lemon',
      price: 'Rp 30.000',
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'minuman',
      isVegan: true,
      isRecommended: false
    },
    {
      id: 4,
      name: 'Smoothie Buah',
      description: 'Campuran buah-buahan segar dengan yogurt',
      price: 'Rp 40.000',
      image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'minuman',
      isVegan: false,
      isRecommended: true
    },
    
    // Makanan Utama
    {
      id: 5,
      name: 'Nasi Goreng Hijau',
      description: 'Nasi goreng dengan bumbu khas dan sayuran organik',
      price: 'Rp 55.000',
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'makanan-utama',
      isVegan: false,
      isRecommended: true
    },
    {
      id: 6,
      name: 'Pasta Primavera',
      description: 'Pasta dengan saus krim dan sayuran musiman',
      price: 'Rp 65.000',
      image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'makanan-utama',
      isVegan: false,
      isRecommended: false
    },
    {
      id: 7,
      name: 'Quinoa Bowl',
      description: 'Quinoa dengan sayuran panggang, alpukat, dan saus tahini',
      price: 'Rp 60.000',
      image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'makanan-utama',
      isVegan: true,
      isRecommended: true
    },
    {
      id: 8,
      name: 'Salmon Panggang',
      description: 'Salmon panggang dengan saus lemon dan sayuran',
      price: 'Rp 85.000',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'makanan-utama',
      isVegan: false,
      isRecommended: true
    },
    
    // Makanan Ringan
    {
      id: 9,
      name: 'Avocado Toast',
      description: 'Roti sourdough dengan alpukat, tomat ceri, dan microgreens',
      price: 'Rp 45.000',
      image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'makanan-ringan',
      isVegan: true,
      isRecommended: true
    },
    {
      id: 10,
      name: 'Salad Hijau',
      description: 'Campuran sayuran segar dengan dressing rumahan',
      price: 'Rp 40.000',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'makanan-ringan',
      isVegan: true,
      isRecommended: false
    },
    {
      id: 11,
      name: 'Bruschetta',
      description: 'Roti panggang dengan tomat, bawang, dan kemangi',
      price: 'Rp 35.000',
      image: 'https://images.unsplash.com/photo-1506280754576-f6fa8a873550?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'makanan-ringan',
      isVegan: true,
      isRecommended: false
    },
    {
      id: 12,
      name: 'Kentang Panggang',
      description: 'Kentang panggang dengan saus keju dan daun bawang',
      price: 'Rp 30.000',
      image: 'https://images.unsplash.com/photo-1623238913973-21e186a7c8a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'makanan-ringan',
      isVegan: false,
      isRecommended: false
    },
    
    // Dessert
    {
      id: 13,
      name: 'Matcha Cheesecake',
      description: 'Cheesecake dengan lapisan matcha dan whipped cream',
      price: 'Rp 40.000',
      image: 'https://images.unsplash.com/photo-1611293388250-580b08c4a145?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'dessert',
      isVegan: false,
      isRecommended: true
    },
    {
      id: 14,
      name: 'Fruit Parfait',
      description: 'Yogurt dengan granola dan buah-buahan segar',
      price: 'Rp 35.000',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'dessert',
      isVegan: false,
      isRecommended: false
    },
    {
      id: 15,
      name: 'Vegan Chocolate Cake',
      description: 'Kue cokelat vegan dengan saus raspberry',
      price: 'Rp 45.000',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'dessert',
      isVegan: true,
      isRecommended: true
    },
    {
      id: 16,
      name: 'Sorbet Buah',
      description: 'Sorbet buah-buahan segar tanpa pemanis buatan',
      price: 'Rp 30.000',
      image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'dessert',
      isVegan: true,
      isRecommended: false
    },
    
    // Menu Spesial
    {
      id: 17,
      name: 'Paket Brunch',
      description: 'Kombinasi avocado toast, telur, salad, dan kopi',
      price: 'Rp 95.000',
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'spesial',
      isVegan: false,
      isRecommended: true
    },
    {
      id: 18,
      name: 'Afternoon Tea Set',
      description: 'Teh pilihan dengan assortment kue dan sandwich',
      price: 'Rp 120.000',
      image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'spesial',
      isVegan: false,
      isRecommended: true
    },
    {
      id: 19,
      name: 'Paket Keluarga',
      description: 'Makanan utama untuk 4 orang dengan minuman dan dessert',
      price: 'Rp 350.000',
      image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'spesial',
      isVegan: false,
      isRecommended: true
    },
    {
      id: 20,
      name: 'Vegan Feast',
      description: 'Set makanan vegan lengkap untuk 2 orang',
      price: 'Rp 180.000',
      image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'spesial',
      isVegan: true,
      isRecommended: true
    }
  ];

  // Filter menu berdasarkan kategori aktif
  const filteredItems = activeCategory === 'semua' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  // Animasi untuk container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Animasi untuk item
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="bg-[#f8f8f5] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {item.isRecommended && (
                  <div className="absolute top-0 right-0 bg-[#627a4c] text-white px-3 py-1 text-sm font-medium">
                    Rekomendasi
                  </div>
                )}
                {item.isVegan && (
                  <div className="absolute bottom-0 left-0 bg-[#4e6039] text-white px-3 py-1 text-sm font-medium flex items-center">
                    <FaLeaf className="mr-1" /> Vegan
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-[#1b1b18]">{item.name}</h3>
                  <span className="bg-[#627a4c] text-white px-2 py-1 rounded text-sm font-medium">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button className="w-full bg-[#627a4c] hover:bg-[#4e6039] text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Pesan Sekarang
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <h3 className="text-xl text-gray-600">Tidak ada menu yang tersedia dalam kategori ini.</h3>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default MenuItems;
