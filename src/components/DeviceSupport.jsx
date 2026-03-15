import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Tablet, Apple, Play } from 'lucide-react';

const DeviceSupport = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 font-bold text-sm mb-6 border border-emerald-100 mx-auto lg:mx-0">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
              Multi-Platform Support
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight text-center lg:text-left">
              Manage your business <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">on any device</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl text-center lg:text-left mx-auto lg:mx-0">
              Stay in control whether you're at the storefront or on the move. BillBee works seamlessly across all platforms, providing a consistent and powerful experience on every screen.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-700 border border-slate-100">
                  <Monitor size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Desktop</h4>
                  <p className="text-sm text-slate-500">Windows & Mac</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-700 border border-slate-100">
                  <Smartphone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Mobile</h4>
                  <p className="text-sm text-slate-500">iOS & Android</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-700 border border-slate-100">
                  <Tablet size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Tablet</h4>
                  <p className="text-sm text-slate-500">iPad & Android</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button className="flex items-center gap-3 bg-slate-900 text-white px-6 py-3 rounded-2xl hover:bg-slate-800 transition-all shadow-lg">
                <Apple size={28} fill="currentColor" />
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold opacity-60 leading-none">Download on the</div>
                  <div className="text-lg font-bold leading-none">App Store</div>
                </div>
              </button>
              
              <button className="flex items-center gap-3 bg-slate-900 text-white px-6 py-3 rounded-2xl hover:bg-slate-800 transition-all shadow-lg">
                <Play size={28} fill="currentColor" />
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold opacity-60 leading-none">Get it on</div>
                  <div className="text-lg font-bold leading-none">Google Play</div>
                </div>
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Styled Illustration representing devices */}
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-emerald-100/50 blur-[100px] rounded-full"></div>
              
              {/* Desktop Mockup (Main) */}
              <div className="absolute top-10 right-0 w-4/5 aspect-[4/3] bg-slate-900 rounded-2xl border-4 border-slate-800 shadow-2xl p-2 hidden sm:block">
                <div className="w-full h-full rounded-lg bg-slate-800 overflow-hidden relative">
                  <div className="absolute top-2 left-2 flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/50"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="mt-8 px-4 flex flex-col gap-2">
                    <div className="h-3 w-2/3 bg-slate-700 rounded"></div>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <div className="h-10 bg-emerald-500/10 rounded border border-emerald-500/20"></div>
                      <div className="h-10 bg-indigo-500/10 rounded border border-indigo-500/20"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tablet Mockup */}
              <div className="absolute bottom-10 left-10 w-3/5 aspect-[4/3] bg-slate-900 rounded-xl border-4 border-slate-800 shadow-2xl p-1 z-10 hidden sm:block">
                <div className="w-full h-full rounded-lg bg-slate-800"></div>
              </div>

              {/* Phone Mockup (Front) */}
              <div className="absolute bottom-0 right-1/4 w-[120px] h-[240px] bg-slate-900 rounded-[2rem] border-4 border-slate-800 shadow-2xl p-2 z-20 flex flex-col items-center">
                <div className="w-12 h-1 bg-slate-800 rounded-full mb-3"></div>
                <div className="w-full flex-1 rounded-[1.2rem] bg-gradient-to-br from-emerald-500/20 to-teal-600/20 border border-emerald-500/30 p-4">
                  <div className="h-2 w-full bg-emerald-500/40 rounded mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-8 w-full bg-slate-800/80 rounded-lg"></div>
                    <div className="h-8 w-full bg-slate-800/80 rounded-lg"></div>
                    <div className="h-8 w-full bg-slate-800/80 rounded-lg"></div>
                  </div>
                </div>
                <div className="w-6 h-1 bg-slate-800 rounded-full mt-3"></div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DeviceSupport;
