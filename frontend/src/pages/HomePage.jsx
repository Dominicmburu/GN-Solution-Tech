import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesMarquee from '../components/home/ServicesMarquee';
import TabsSection from '../components/home/TabsSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServicesMarquee/>
      <TabsSection />      
    </>
  );
};

export default HomePage;