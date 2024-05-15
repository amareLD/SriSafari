import React from 'react';
import Hero from './../Components/Hero';
import ScrollToTop from './../Components/ScrollToTop';
import Recommend from '../Components/Recommend';
import Testimonials from './../Components/Testimonials';

function HomeScreen() {
  return (
    <div className="bg-white pt-8 ">
      <Hero />
      <ScrollToTop />
      <Recommend />
      <Testimonials />
    </div>
  );
}

export default HomeScreen;
