import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import WhyChooseUs from './components/WhyChooseUs';
import LeadCapture from './components/LeadCapture';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import DeviceSupport from './components/DeviceSupport';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-300">
      <Navbar />
      <main className="flex-grow pt-20">
        <Hero />
        <Features />
        <DeviceSupport />
        <WhyChooseUs />
        <AboutUs />
        <Testimonials />
        <LeadCapture />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
