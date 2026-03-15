import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  { name: "Brand 1", logo: "🍕 Pizza Hut" },
  { name: "Brand 2", logo: "🍟 McDonald's" },
  { name: "Brand 3", logo: "🍔 Burger King" },
  { name: "Brand 4", logo: "☕ Starbucks" },
  { name: "Brand 5", logo: "🍗 KFC" },
  { name: "Brand 6", logo: "🥪 Subway" },
];

const Brands = () => {
  return (
    <section className="py-10 bg-white border-b border-slate-100 flex flex-col items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <p className="text-center text-slate-500 font-medium mb-6">Trusted by 1,000+ businesses across the globe</p>
        
        {/* Simple Marquee */}
        <div className="relative flex overflow-x-hidden group">
          <div className="flex animate-marquee whitespace-nowrap gap-16 py-4 items-center">
            {[...brands, ...brands, ...brands].map((brand, idx) => (
              <span key={idx} className="text-2xl font-bold text-slate-300 filter grayscale hover:grayscale-0 hover:text-violet-600 transition-all cursor-pointer">
                {brand.logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
