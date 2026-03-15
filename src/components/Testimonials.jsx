import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Avatar1 = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 rounded-full shadow-sm border border-slate-100 shrink-0" fill="none">
    <rect width="100" height="100" fill="#f3e8ff" /> 
    <circle cx="50" cy="40" r="22" fill="#a855f7" /> 
    <path d="M15 100 C15 65, 85 65, 85 100 Z" fill="#9333ea" />
  </svg>
);

const Avatar2 = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 rounded-full shadow-sm border border-slate-100 shrink-0" fill="none">
    <rect width="100" height="100" fill="#ccfbf1" /> 
    <circle cx="50" cy="45" r="18" fill="#14b8a6" /> 
    <path d="M20 100 C20 75, 80 75, 80 100 Z" fill="#0d9488" />
    <path d="M30 45 Q50 15 70 45 Q50 20 30 45 Z" fill="#0f766e" />
  </svg>
);

const Avatar3 = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 rounded-full shadow-sm border border-slate-100 shrink-0" fill="none">
    <rect width="100" height="100" fill="#ffedd5" /> 
    <circle cx="50" cy="42" r="16" fill="#f97316" /> 
    <path d="M10 100 C10 60, 90 60, 90 100 Z" fill="#ea580c" />
    <path d="M30 40 L70 40" stroke="#c2410c" strokeWidth="6" strokeLinecap="round" />
  </svg>
);

const Avatar4 = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 rounded-full shadow-sm border border-slate-100 shrink-0" fill="none">
    <rect width="100" height="100" fill="#e0e7ff" /> 
    <circle cx="50" cy="48" r="19" fill="#6366f1" /> 
    <path d="M20 100 C20 70, 80 70, 80 100 Z" fill="#4f46e5" />
    <circle cx="35" cy="45" r="4" fill="#fff" />
    <circle cx="65" cy="45" r="4" fill="#fff" />
  </svg>
);

const testimonials = [
  {
    text: "BillBee provides incredibly detailed financial reports and sales analytics, alongside top-tier customer support for troubleshooting. The intuitive interface frees up time for brand growth. I highly recommend it.",
    name: "Viraaj Badhwar",
    role: "Co-founder @ RetailFlow",
    Avatar: Avatar1
  },
  {
    text: "BillBee simplifies our management by handling online orders, inventory drops, and menu updates. Invest in automated solutions like this for seamless operations. It has completely changed everything for us.",
    name: "Aditi Madan",
    role: "Founder @ Veda Foods",
    Avatar: Avatar2
  },
  {
    text: "To run multiple outlets, you need a solution that perfectly syncs and is all well-integrated into restaurant operations. I think they have done a phenomenal job in helping us rapidly scale.",
    name: "Kabir Advani",
    role: "Managing Partner @ BrewCafe",
    Avatar: Avatar3
  },
  {
    text: "The sheer speed of the offline billing mode is unmatched. Even during our busiest holiday rushes when the internet goes down, checkout remains lightning fast. It's an absolute lifesaver.",
    name: "Sarah Jenkins",
    role: "Owner @ Zenith Mart",
    Avatar: Avatar4
  }
];

const Testimonials = () => {
  const scrollContainerRef = useRef(null);



  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight text-center md:text-left"
            >
              Hear from our <span className="text-violet-600">clients</span>
            </motion.h2>
          </div>
          

        </div>

        {/* Carousel Area */}
        <div className="relative -mx-4 px-4 sm:mx-0 sm:px-0">
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] scroll-smooth"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                key={index}
                className="snap-start shrink-0 w-[85vw] sm:w-[400px] flex flex-col justify-between bg-white rounded-2xl p-8 sm:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-slate-100 transition-transform duration-300 hover:-translate-y-1"
              >
                <div>
                  <Quote className="w-10 h-10 text-violet-100 mb-6 rotate-180" />
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    "{testimonial.text}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4 mt-auto">
                  <testimonial.Avatar />
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500 font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Gradient fading edges for smoother look */}
          <div className="absolute top-0 right-0 bottom-8 w-16 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none hidden sm:block"></div>
          <div className="absolute top-0 left-0 bottom-8 w-16 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none hidden sm:block"></div>
        </div>
        
      </div>
    </section>
  );
};

export default Testimonials;
