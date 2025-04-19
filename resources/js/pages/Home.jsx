import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import FeaturedMenu from '../components/home/FeaturedMenu';
import About from '../components/home/About';
import Testimonial from '../components/home/Testimonial';
import ReservationCTA from '../components/home/ReservationCTA';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedMenu />
      <About />
      <Testimonial />
      <ReservationCTA />
    </Layout>
  );
};

export default Home;
