import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import BlogSection from '../components/home/BlogSection';
import ContactSection from '../components/home/ContactSection';
import ServicesMarquee from '../components/home/ServicesMarquee';
import TabsSection from '../components/home/TabsSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServicesMarquee/>
      <TabsSection />
      {/* <AboutSection /> */}
      {/* <ServicesSection /> */}
      {/* <WhyChooseUsSection /> */}
    </>
  );
};

export default HomePage;