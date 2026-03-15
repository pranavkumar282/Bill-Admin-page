import React from 'react';
import { motion } from 'framer-motion';

// Art components

const InnovationArt = () => (
  <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-[-10%] w-[110%] h-[120%] origin-bottom-right">
    {/* Crystal ball glow */}
    <circle cx="200" cy="150" r="50" fill="#ef4444" opacity="0.1" />
    <circle cx="200" cy="150" r="30" fill="#ef4444" opacity="0.2" />
    
    {/* Character body */}
    <path d="M220 200 L210 160 L240 120 L270 160 L260 200" fill="#1e293b" />
    {/* Accent Tie/Shirt */}
    <path d="M240 120 L235 140 L245 140 Z" fill="#ef4444" />
    
    {/* Character head */}
    <ellipse cx="245" cy="100" rx="15" ry="20" fill="#f8fafc" stroke="#1e293b" strokeWidth="2" />
    {/* Happy eyes/smile */}
    <path d="M238 98 Q242 95 244 98" fill="none" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M238 108 Q242 112 240 106" fill="none" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />
    
    {/* Hat */}
    <path d="M210 80 L280 80 C270 50 260 40 250 40 C240 40 220 50 210 80 Z" fill="#1e293b" stroke="#f8fafc" strokeWidth="1" />
    <rect x="225" y="75" width="40" height="5" fill="#1e293b" />
    {/* Hat band */}
    <rect x="235" y="65" width="20" height="6" fill="#ef4444" />
    
    {/* Hand left */}
    <path d="M150 130 Q160 140 170 135" stroke="#f8fafc" strokeWidth="6" strokeLinecap="round" />
    <path d="M165 130 Q170 135 180 130" stroke="#f8fafc" strokeWidth="4" strokeLinecap="round" /> {/* Fingers */}
    
    {/* Hand right */}
    <path d="M250 130 Q240 140 230 135" stroke="#f8fafc" strokeWidth="6" strokeLinecap="round" />
    <path d="M235 130 Q230 135 220 130" stroke="#f8fafc" strokeWidth="4" strokeLinecap="round" />
    
    {/* Crystal ball */}
    <circle cx="200" cy="150" r="25" fill="#f8fafc" stroke="#334155" strokeWidth="2" />
    {/* Shine on ball */}
    <path d="M185 140 Q195 130 205 135" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />
    
    {/* Floating Charts out of ball */}
    <g stroke="#1e293b" strokeWidth="2">
      {/* Chart 1 Panel */}
      <rect x="110" y="60" width="35" height="25" rx="3" fill="#f8fafc" transform="rotate(-15 110 60)" />
      <path d="M115 75 L120 70 L125 75 L135 65" stroke="#ef4444" strokeWidth="2" fill="none" transform="rotate(-15 110 60)" />
      
      {/* Chart 2 Pie */}
      <circle cx="150" cy="80" r="16" fill="#f8fafc" />
      <path d="M150 80 L150 64 A16 16 0 0 1 166 80 Z" fill="#ef4444" />
      
      {/* Chart 3 Web UI */}
      <rect x="130" y="100" width="40" height="20" rx="2" fill="#f8fafc" transform="rotate(10 130 100)" />
      <rect x="135" y="105" width="25" height="2" fill="#ef4444" stroke="none" transform="rotate(10 130 100)" />
      <rect x="135" y="110" width="15" height="2" fill="#cbd5e1" stroke="none" transform="rotate(10 130 100)" />
    </g>
    
    {/* Abstract particles */}
    <circle cx="90" cy="100" r="3" fill="#ef4444" />
    <circle cx="260" cy="120" r="2" fill="#ef4444" />
    <path d="M170 50 L175 45 M170 45 L175 50" stroke="#f8fafc" strokeWidth="1.5" />
  </svg>
);

const PricingArt = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 left-0 w-full h-[110%] object-contain object-bottom origin-bottom">
    {/* Background faint circle spreading */}
    <circle cx="100" cy="130" r="70" fill="#1e293b" opacity="0.4" />
    <path d="M100 130 Q50 90 20 120 M100 130 Q150 90 180 120" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
    
    {/* Character body */}
    <path d="M130 200 L120 160 Q120 140 140 140 T160 160 L170 200" fill="#f8fafc" stroke="#1e293b" strokeWidth="2" />
    {/* Suit Lapels */}
    <path d="M145 200 L145 155 M135 150 L145 165 L155 150" stroke="#1e293b" strokeWidth="2" />
    {/* Character head */}
    <ellipse cx="145" cy="115" rx="12" ry="16" fill="#f8fafc" stroke="#1e293b" strokeWidth="2" />
    <path d="M137 112 Q140 110 141 112" fill="none" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M140 122 Q142 125 145 120" fill="none" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />
    {/* Hair */}
    <path d="M132 115 C132 90 152 90 155 110 C155 120 150 120 150 120 C145 120 140 100 132 115" fill="#1e293b" />
    
    {/* Arms holding items magically */}
    <path d="M125 155 Q110 160 100 150" fill="none" stroke="#f8fafc" strokeWidth="5" strokeLinecap="round" />
    <path d="M165 155 Q175 150 170 140" fill="none" stroke="#f8fafc" strokeWidth="5" strokeLinecap="round" />
    
    {/* Floating Items Array */}
    {/* Item 1: Document */}
    <g transform="rotate(-15 90 80)">
      <rect x="80" y="70" width="18" height="24" rx="2" fill="#1e293b" stroke="#f8fafc" strokeWidth="1.5" />
      <circle cx="89" cy="78" r="4" fill="#ef4444" />
      <rect x="85" y="86" width="8" height="2" fill="#f8fafc" />
    </g>

    {/* Item 2: Coin 1 */}
    <circle cx="50" cy="120" r="10" fill="#1e293b" stroke="#f8fafc" strokeWidth="1.5" />
    <path d="M47 117 L53 123 M53 117 L47 123" stroke="#ef4444" strokeWidth="1.5" />
    
    {/* Item 3: Piggybank mini */}
    <circle cx="120" cy="65" r="12" fill="#1e293b" stroke="#f8fafc" strokeWidth="1.5" />
    <rect x="115" y="60" width="10" height="2" fill="#ef4444" />
    
    {/* Dash accents */}
    <path d="M70 70 L75 75" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
    <path d="M160 75 L155 80" stroke="#f8fafc" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const SimplicityArt = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[120%] object-contain object-bottom origin-bottom">
    {/* Circle aura */}
    <circle cx="100" cy="140" r="60" fill="#1e293b" opacity="0.4" />
    <circle cx="100" cy="140" r="40" fill="#1e293b" opacity="0.6" />
    
    {/* Character Meditating */}
    {/* Legs folded */}
    <path d="M60 170 C60 180 140 180 140 170 C140 160 120 165 100 165 C80 165 60 160 60 170 Z" fill="#1e293b" />
    {/* Body */}
    <path d="M80 165 Q100 120 120 165" fill="#f8fafc" stroke="#1e293b" strokeWidth="2" />
    {/* Collar accent */}
    <path d="M95 140 L100 152 L105 140" fill="#ef4444" />
    {/* Red armbands */}
    <rect x="73" y="152" width="6" height="3" fill="#ef4444" transform="rotate(-30 73 152)" />
    <rect x="121" y="148" width="6" height="3" fill="#ef4444" transform="rotate(30 121 148)" />
    
    {/* Arms */}
    <path d="M85 140 L75 160" stroke="#f8fafc" strokeWidth="5" strokeLinecap="round" />
    <path d="M115 140 L125 160" stroke="#f8fafc" strokeWidth="5" strokeLinecap="round" />
    
    {/* Head */}
    <ellipse cx="100" cy="115" rx="11" ry="15" fill="#f8fafc" stroke="#1e293b" strokeWidth="2" />
    <path d="M96 113 Q98 115 100 113" fill="none" stroke="#1e293b" strokeWidth="1" />
    {/* Hair */}
    <path d="M88 115 Q90 95 100 95 Q112 95 112 115 Q100 100 88 115" fill="#1e293b" />
    
    {/* Floating Icons */}
    {/* Search */}
    <circle cx="45" cy="110" r="7" fill="#1e293b" stroke="#f8fafc" strokeWidth="1.5" />
    <path d="M50 115 L56 121" stroke="#f8fafc" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M42 110 L48 110 M45 107 L45 113" stroke="#ef4444" strokeWidth="1" />
    
    {/* Chart slice */}
    <circle cx="150" cy="130" r="9" fill="#1e293b" stroke="#f8fafc" strokeWidth="1.5" />
    <path d="M150 130 L150 121 A9 9 0 0 1 159 130 Z" fill="#ef4444" />
    
    {/* Mail */}
    <g transform="rotate(15 145 90)">
      <rect x="135" y="85" width="20" height="12" fill="#f8fafc" stroke="#1e293b" strokeWidth="1.5" />
      <path d="M135 85 L145 92 L155 85" stroke="#1e293b" strokeWidth="1.5" />
      <circle cx="130" cy="85" r="3" fill="#ef4444" />
    </g>
    
    {/* Accents */}
    <circle cx="60" cy="80" r="1.5" fill="#f8fafc" />
    <circle cx="110" cy="70" r="2" fill="#ef4444" />
  </svg>
);

const SupportArt = () => (
  <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 w-[95%] h-[120%] object-contain object-bottom origin-bottom-right">
    {/* Background blob */}
    <path d="M140 200 C120 150 160 100 220 110 C270 120 290 170 280 200 Z" fill="#1e293b" opacity="0.6" />
    
    {/* Support Agent (Right) */}
    {/* Computer */}
    <rect x="140" y="140" width="50" height="35" rx="3" fill="#1e293b" stroke="#f8fafc" strokeWidth="2" transform="rotate(-5 140 140)" />
    <path d="M165 175 L160 190 L180 190" stroke="#f8fafc" strokeWidth="2" />
    <path d="M155 155 Q165 160 160 170" fill="none" stroke="#f8fafc" strokeWidth="2" strokeLinecap="round" transform="rotate(-5 140 140)" /> {/* Wavy graph */}
    
    {/* Agent Body */}
    <path d="M220 200 L200 150 C200 130 240 130 250 150 L260 200" fill="#f8fafc" stroke="#1e293b" strokeWidth="2" />
    {/* Arm typing */}
    <path d="M215 160 L190 185" stroke="#f8fafc" strokeWidth="6" strokeLinecap="round" />
    <path d="M190 185 L180 190" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" /> {/* Hand */}
    
    {/* Head */}
    <ellipse cx="230" cy="115" rx="13" ry="17" fill="#f8fafc" stroke="#1e293b" strokeWidth="2" />
    <path d="M225 112 Q227 110 228 112" fill="none" stroke="#1e293b" strokeWidth="1" />
    {/* Hair */}
    <path d="M217 115 C217 90 240 90 250 105 C250 115 240 120 235 120 C230 110 220 100 217 115" fill="#1e293b" />
    {/* Headset Arc */}
    <path d="M230 100 A15 15 0 0 0 215 115" fill="none" stroke="#1e293b" strokeWidth="2" />
    {/* Headset Earpiece (red) large */}
    <circle cx="215" cy="117" r="7" fill="#ef4444" />
    <circle cx="215" cy="117" r="3" fill="#1e293b" opacity="0.3" />
    {/* Mic */}
    <path d="M215 117 L205 125" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
    
    {/* Communication line */}
    <path d="M170 105 Q150 120 180 130" fill="none" stroke="#f8fafc" strokeWidth="2" strokeDasharray="3 3" />
    
    {/* Customer (Left Bubble) */}
    <circle cx="150" cy="80" r="28" fill="#1e293b" stroke="#f8fafc" strokeWidth="2" />
    <path d="M130 105 C130 85 170 85 170 105" fill="#f8fafc" stroke="#1e293b" strokeWidth="2" />
    {/* Head */}
    <ellipse cx="150" cy="72" rx="10" ry="14" fill="#f8fafc" stroke="#1e293b" strokeWidth="1.5" />
    {/* Hair female */}
    <path d="M138 75 C138 50 162 50 162 75 L162 90 Q150 90 148 85 C146 75 140 70 138 75 Z" fill="#1f2937" />
    {/* Customer Phone */}
    <rect x="157" y="65" width="5" height="15" rx="2" fill="#ef4444" transform="rotate(15 157 65)" />
    
    {/* Top Right Floating Elements */}
    <g transform="rotate(-15 240 60)">
      <rect x="235" y="55" width="20" height="14" fill="#f8fafc" stroke="#1e293b" strokeWidth="1.5" />
      <polygon points="235,55 255,55 245,64" fill="#ef4444" />
    </g>
    
    <g transform="rotate(15 260 85)">
      <rect x="260" y="80" width="16" height="16" rx="2" fill="#1e293b" stroke="#f8fafc" strokeWidth="1.5" />
      <rect x="260" y="80" width="16" height="5" fill="#f8fafc" />
      <rect x="262" y="87" width="3" height="3" fill="#f8fafc" />
      <rect x="266" y="87" width="3" height="3" fill="#f8fafc" />
      <rect x="270" y="87" width="3" height="3" fill="#f8fafc" />
    </g>
    
  </svg>
);

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-[#0d1623] relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <div className="border border-slate-600 rounded-full px-5 py-1.5 mb-8">
            <span className="text-xs font-bold text-slate-300 tracking-[0.2em] uppercase">
              Built for modern businesses
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.15] max-w-4xl tracking-tight">
            Everything you need <br className="hidden md:block"/>
            to scale effortlessly
          </h2>
          
          <p className="text-slate-400 max-w-3xl text-lg leading-relaxed">
            Supercharge your store. Extremely fast, deeply intuitive, and flawlessly reliable.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[340px]">
          
          {/* Card 1: Continuous Innovation (Spans 2 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#172230] border border-[#2d3a4b] rounded-[2rem] md:col-span-2 relative overflow-hidden flex flex-col md:flex-row group hover:border-[#384961] transition-colors"
          >
            <div className="p-10 md:p-12 z-10 w-full md:w-3/5 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-4">Predictive Analytics</h3>
              <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                Turn data into decisions. Anticipate sales trends and restock before you run out.
              </p>
            </div>
            <div className="absolute right-0 bottom-0 top-0 w-full md:w-1/2 pointer-events-none transform group-hover:scale-105 transition-transform duration-700">
              <InnovationArt />
            </div>
          </motion.div>

          {/* Card 2: Pricing (Spans 1 col) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#172230] border border-[#2d3a4b] rounded-[2rem] relative overflow-hidden flex flex-col group hover:border-[#384961] transition-colors"
          >
            <div className="p-10 z-10">
              <h3 className="text-3xl font-bold text-white mb-4">Financial Clarity</h3>
              <p className="text-slate-400 text-base leading-relaxed">
                Easily track expenses, reconcile accounts, and manage taxes instantly.
              </p>
            </div>
            <div className="absolute left-0 right-0 bottom-0 h-2/3 pointer-events-none transform group-hover:scale-105 transition-transform duration-700">
              <PricingArt />
            </div>
          </motion.div>

          {/* Card 3: Simplicity (Spans 1 col) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#172230] border border-[#2d3a4b] rounded-[2rem] relative overflow-hidden flex flex-col group hover:border-[#384961] transition-colors"
          >
            <div className="p-10 z-10">
              <h3 className="text-3xl font-bold text-white mb-4">Effortless Operations</h3>
              <p className="text-slate-400 text-base leading-relaxed">
                A simple, zero-training interface so your staff can focus on customers, not software.
              </p>
            </div>
            <div className="absolute left-0 right-0 bottom-0 h-[60%] pointer-events-none flex justify-center transform group-hover:scale-105 transition-transform duration-700">
              <SimplicityArt />
            </div>
          </motion.div>

          {/* Card 4: 24x7 Support (Spans 2 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-[#172230] border border-[#2d3a4b] rounded-[2rem] md:col-span-2 relative overflow-hidden flex flex-col md:flex-row group hover:border-[#384961] transition-colors"
          >
             <div className="p-10 md:p-12 z-10 w-full md:w-1/2 flex flex-col justify-end">
              <h3 className="text-3xl font-bold text-white mb-4">24/7 Support</h3>
              <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                Get round-the-clock expert support and onboarding assistance. We're here to help you succeed.
              </p>
            </div>
            <div className="absolute right-0 bottom-0 top-0 w-full md:w-3/4 pointer-events-none transform group-hover:scale-105 transition-transform duration-700">
              <SupportArt />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
