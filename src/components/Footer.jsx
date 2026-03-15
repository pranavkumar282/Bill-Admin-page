import React from 'react';
import { Hexagon, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="lg:col-span-2">
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 mb-6 cursor-pointer"
            >
              <div className="p-2 bg-violet-600 rounded-lg text-white">
                <Hexagon size={24} />
              </div>
              <span className="text-2xl font-bold text-white">
                BillBee
              </span>
            </div>
            <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">
              "வணக்கம்!" <br />
              Empowering SMEs worldwide with next generation billing and operations software.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-violet-600 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-violet-600 hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-violet-600 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-violet-600 hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">Quick Links</h5>
            <ul className="space-y-4">
              <li><a href="#features" className="hover:text-violet-400 transition-colors">Features</a></li>
              <li><a href="#about" className="hover:text-violet-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-violet-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">Legal</h5>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-violet-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-violet-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} BillBee Inc. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span>Made with <span className="text-red-500">♥</span> for SMEs</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
