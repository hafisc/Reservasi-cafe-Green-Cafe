import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import MenuHeader from '../components/menu/MenuHeader';
import MenuCategories from '../components/menu/MenuCategories';
import MenuItems from '../components/menu/MenuItems';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('semua');

  return (
    <Layout>
      <MenuHeader />
      <MenuCategories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <MenuItems activeCategory={activeCategory} />
    </Layout>
  );
};

export default Menu;
