import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeatureSection';
import TestimonialsAndSteps from '../components/TestimonialAndSteps';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen font-sans">
      <Header />
      <HeroSection />
      <FeaturesSection/>
      <TestimonialsAndSteps/>
      <ContactForm/>
    </div>
  );
};

export default Home;
