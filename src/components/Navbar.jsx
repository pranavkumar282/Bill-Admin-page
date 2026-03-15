import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Hexagon, Menu, X } from 'lucide-react';
import ContactModal from './ContactModal';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <nav className="fixed w-full z-40 transition-all duration-300 bg-white/80 backdrop-blur-md shadow-sm border-b border-violet-100">
        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 bg-violet-600 origin-left z-50"
          style={{ scaleX }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 cursor-pointer"
            >
              <motion.div 
                whileHover={{ rotate: 180 }} 
                transition={{ duration: 0.3 }}
                className="p-2 bg-violet-600 rounded-lg text-white"
              >
                <Hexagon size={24} />
              </motion.div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600">
                BillBee
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-violet-600 font-medium transition-colors">Features</a>
              <a href="#about" className="text-gray-600 hover:text-violet-600 font-medium transition-colors">About Us</a>
              <a href="#contact" className="text-gray-600 hover:text-violet-600 font-medium transition-colors">Contact</a>
              
              <motion.button 
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-violet-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-violet-200 hover:bg-violet-700 hover:shadow-violet-300 transition-all"
              >
                Get Started
              </motion.button>
            </div>

            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-violet-600 p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 pt-20 bg-white/95 backdrop-blur-lg md:hidden shadow-xl border-b border-violet-100"
          >
            <div className="flex flex-col items-center gap-6 p-8">
              <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-xl text-gray-800 font-medium hover:text-violet-600 transition-colors">Features</a>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-xl text-gray-800 font-medium hover:text-violet-600 transition-colors">About Us</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-xl text-gray-800 font-medium hover:text-violet-600 transition-colors">Contact</a>
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="w-full max-w-xs mt-4 bg-violet-600 text-white px-6 py-3.5 rounded-full font-semibold shadow-lg hover:bg-violet-700 transition-all text-lg"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;
