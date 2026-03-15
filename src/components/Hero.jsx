import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import ContactModal from './ContactModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="relative overflow-hidden bg-white min-h-[90vh] flex items-center pt-20">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-violet-100/50 blur-3xl" />
        <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[50%] rounded-full bg-indigo-50/50 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 max-w-max px-4 py-2 bg-violet-50 rounded-full border border-violet-100 text-violet-700 font-bold text-sm mx-auto lg:mx-0">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              India's #1 Billing POS Software
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-extrabold text-slate-900 tracking-tight leading-[1.1] text-center lg:text-left">
              Operating your business, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">simplified.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 max-w-xl leading-relaxed font-medium text-center lg:text-left mx-auto lg:mx-0">
              From billing and inventory to CRM and reporting, BillBee is the only software you need to manage and scale your business effortlessly.
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-6">
              <motion.button 
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-violet-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-[0_8px_30px_rgb(124,58,237,0.3)] hover:bg-violet-700 hover:shadow-[0_8px_30px_rgb(124,58,237,0.5)] transition-all flex items-center gap-2"
              >
                Book a Free Demo <ArrowRight size={20} />
              </motion.button>
              

            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 mt-8 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-1 text-yellow-500">
                {'★★★★★'}
              </div>
              <div className="text-sm font-bold text-slate-600">
                Rated 4.9/5 by 1,000+ happy businesses
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Abstract mockup representation */}
            <div className="relative rounded-2xl bg-gradient-to-tr from-violet-500 to-indigo-600 p-1 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="bg-slate-900 rounded-xl overflow-hidden aspect-[4/3] flex flex-col">
                {/* App Header */}
                <div className="h-10 bg-slate-800 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="ml-4 h-4 w-32 bg-slate-700 rounded"></div>
                </div>
                {/* App Content */}
                <div className="flex-1 p-6 flex gap-6">
                  {/* Sidebar */}
                  <div className="w-32 hidden md:flex flex-col gap-4 border-r border-slate-700 pr-4">
                    <div className="h-8 bg-violet-600/30 rounded flex items-center px-2 border border-violet-500/50">
                       <div className="w-16 h-3 bg-violet-400/80 rounded"></div>
                    </div>
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="h-6 bg-slate-800 rounded"></div>
                    ))}
                  </div>
                  {/* Main area */}
                  <div className="flex-1 flex flex-col gap-4">
                    <div className="h-10 w-48 bg-slate-800 rounded-lg"></div>
                    <div className="grid grid-cols-3 gap-4">
                       {[1, 2, 3].map(i => (
                         <div key={i} className="h-24 bg-slate-800 rounded-xl p-4 flex flex-col justify-end">
                            <div className="h-3 w-16 bg-slate-700 rounded mb-2"></div>
                            <div className="h-6 w-12 bg-indigo-400 rounded"></div>
                         </div>
                       ))}
                    </div>
                    <div className="flex-1 bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
                      <div className="h-12 border-b border-slate-700"></div>
                      <div className="p-4 flex flex-col gap-3">
                         {[1, 2, 3].map(i => (
                           <div key={i} className="h-8 bg-slate-700/50 rounded"></div>
                         ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-2 sm:-left-6 md:-left-12 top-10 md:top-20 bg-white p-3 md:p-4 rounded-xl shadow-xl flex items-center gap-2 md:gap-3 border border-violet-100 z-10"
              >
                <div className="bg-green-100 p-1.5 md:p-2 rounded-full text-green-600">
                   <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <div className="text-[10px] md:text-xs text-slate-500 font-medium">Invoice Paid</div>
                  <div className="text-sm md:text-base font-bold text-slate-800">₹1,240.00</div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-2 sm:-right-4 md:-right-8 bottom-10 md:bottom-20 bg-white p-3 md:p-4 rounded-xl shadow-xl flex items-center gap-2 md:gap-3 border border-violet-100 z-10"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-violet-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-base">
                   +28%
                </div>
                <div>
                  <div className="text-[10px] md:text-xs text-slate-500 font-medium">Monthly Growth</div>
                  <div className="h-1.5 md:h-2 w-12 md:w-16 bg-violet-100 rounded mt-1">
                    <div className="h-full w-2/3 bg-violet-500 rounded"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;
