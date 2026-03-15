import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const BillingArt = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Floating invoice */}
    <rect x="40" y="20" width="80" height="110" rx="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" transform="rotate(-10 40 20)" />
    <rect x="55" y="40" width="40" height="4" rx="2" fill="#cbd5e1" transform="rotate(-10 40 20)" />
    <rect x="55" y="55" width="20" height="4" rx="2" fill="#cbd5e1" transform="rotate(-10 40 20)" />
    <rect x="55" y="70" width="50" height="2" fill="#e2e8f0" transform="rotate(-10 40 20)" />
    <rect x="55" y="80" width="10" height="10" rx="2" fill="#8b5cf6" transform="rotate(-10 40 20)" />
    
    {/* Credit Card Front */}
    <rect x="80" y="80" width="90" height="60" rx="8" fill="#1e293b" stroke="#8b5cf6" strokeWidth="2" transform="rotate(15 80 80)" />
    <rect x="90" y="95" width="15" height="10" rx="2" fill="#cbd5e1" transform="rotate(15 80 80)" />
    <circle cx="145" cy="120" r="8" fill="#ef4444" transform="rotate(15 80 80)" opacity="0.8" />
    <circle cx="135" cy="120" r="8" fill="#f59e0b" transform="rotate(15 80 80)" opacity="0.8" />

    {/* Sparkles */}
    <path d="M30 140 L35 125 L40 140 L25 135 L45 135 Z" fill="#f59e0b" />
    <circle cx="170" cy="50" r="4" fill="#34d399" />
    <circle cx="100" cy="160" r="6" fill="#8b5cf6" />
  </svg>
);

const InventoryArt = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Warehouse shelves */}
    <rect x="30" y="140" width="140" height="6" rx="3" fill="#475569" />
    <rect x="40" y="70" width="120" height="6" rx="3" fill="#475569" />
    
    {/* Boxes Bottom Left */}
    <g transform="translate(50, 100)">
      <polygon points="20,0 40,10 20,20 0,10" fill="#34d399" />
      <polygon points="0,10 20,20 20,40 0,30" fill="#10b981" />
      <polygon points="20,20 40,10 40,30 20,40" fill="#059669" />
    </g>
    
    {/* Boxes Bottom Right */}
    <g transform="translate(100, 85)">
      <polygon points="25,0 50,12 25,24 0,12" fill="#a7f3d0" />
      <polygon points="0,12 25,24 25,50 0,38" fill="#34d399" />
      <polygon points="25,24 50,12 50,38 25,50" fill="#10b981" />
    </g>

    {/* Boxes Top Middle */}
    <g transform="translate(80, 20)">
      <polygon points="20,0 40,10 20,20 0,10" fill="#fbbf24" />
      <polygon points="0,10 20,20 20,40 0,30" fill="#f59e0b" />
      <polygon points="20,20 40,10 40,30 20,40" fill="#d97706" />
    </g>

    {/* Floating check mark */}
    <circle cx="150" cy="50" r="14" fill="#8b5cf6" />
    <path d="M143 50 L148 55 L157 44" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const AnalyticsArt = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Dashboard background panel */}
    <rect x="15" y="30" width="170" height="140" rx="10" fill="#1e293b" stroke="#334155" strokeWidth="4" />
    
    {/* Graph area fill */}
    <path d="M25 120 L60 90 L100 110 L150 50 L175 65 L175 145 L25 145 Z" fill="#f59e0b" fillOpacity="0.15" />
    
    {/* Trend Line */}
    <path d="M25 120 L60 90 L100 110 L150 50 L175 65" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Bar charts (foreground) */}
    <rect x="40" y="100" width="14" height="42" rx="3" fill="#8b5cf6" />
    <rect x="75" y="70" width="14" height="72" rx="3" fill="#34d399" />
    <rect x="110" y="110" width="14" height="32" rx="3" fill="#8b5cf6" />
    <rect x="145" y="60" width="14" height="82" rx="3" fill="#3bd399" />
    
    {/* Highlighted Data Point */}
    <circle cx="150" cy="50" r="6" fill="#fff" stroke="#f59e0b" strokeWidth="3" />

    {/* Floating Data Badge */}
    <rect x="100" y="25" width="40" height="20" rx="10" fill="#f8fafc" />
    <path d="M110 38 L115 30 L120 38 L125 32" stroke="#10b981" strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);

const coreModules = [
  {
    title: 'Robust Billing & Invoicing',
    subtitle: 'Process orders faster than ever.',
    description: 'Our intuitive billing interface is designed for speed and accuracy. Handle heavy footfall seamlessly, print custom receipts, manage multiple payment methods, and split bills without breaking a sweat. Perfect for retail, restaurants, and wholesale B2B.',
    points: ['Works online & offline', 'Customizable invoice templates', 'Split payments & partial payments'],
    imageGradient: 'from-violet-500 to-indigo-600',
    ArtComponent: BillingArt
  },
  {
    title: 'Intelligent Inventory Control',
    subtitle: 'Never run out of your bestsellers.',
    description: 'Keep track of every single item from the warehouse to the storefront. Set low-stock alerts, manage multi-store inventory, track raw materials, and handle purchase orders automatically with AI-driven inventory forecasting.',
    points: ['Real-time stock tracking', 'Recipe & raw material management', 'Automated vendor purchase orders'],
    imageGradient: 'from-emerald-400 to-teal-500',
    ArtComponent: InventoryArt
  },
  {
    title: 'Advanced Business Analytics',
    subtitle: 'Data that helps you grow.',
    description: 'Stop guessing and start knowing. Access 80+ comprehensive reports covering sales, staff performance, top-selling items, and profit margins. Accessible anywhere via our cloud dashboard or mobile app.',
    points: ['Live dashboard accessible 24/7', 'Detailed tax & compliance reports', 'Export formats: CSV, PDF, Tally ERP'],
    imageGradient: 'from-amber-400 to-orange-500',
    ArtComponent: AnalyticsArt
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
          >
            A complete operating system for <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">your business</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            BillBee goes beyond just billing. We give you all the integrated tools needed to manage operations, delight customers, and boost revenue.
          </motion.p>
        </div>

        <div className="flex flex-col gap-24">
          {coreModules.map((module, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`flex flex-col gap-12 lg:gap-20 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Text Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="w-full lg:w-1/2 flex flex-col gap-6"
                >
                  <div className="text-violet-600 font-bold tracking-wide uppercase text-sm border border-violet-100 bg-violet-50 px-3 py-1 rounded-full max-w-max">
                    Module {index + 1}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                    {module.title}
                  </h3>
                  <h4 className="text-xl text-slate-700 font-medium">
                    {module.subtitle}
                  </h4>
                  <p className="text-lg text-slate-600 leading-relaxed mb-4">
                    {module.description}
                  </p>
                  
                  <ul className="flex flex-col gap-4">
                    {module.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-slate-700 font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4">
                    <button className="text-violet-600 font-bold hover:text-violet-700 flex items-center gap-2 group transition-colors">
                      Learn more about {module.title.split(' ')[1]} 
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>

                {/* Image/Mockup Side */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="w-full lg:w-1/2 relative perspective-1000"
                >
                  <div className={`aspect-[4/3] rounded-3xl bg-gradient-to-br ${module.imageGradient} p-2 shadow-2xl ${isEven ? 'rotate-y-[-5deg]' : 'rotate-y-[5deg]'} transition-transform duration-700 hover:rotate-y-0`}>
                    <div className="w-full h-full bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden flex flex-col relative">
                      {/* Fake header */}
                      <div className="h-10 border-b border-slate-800 flex items-center px-4 gap-2 bg-slate-900/50">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                      </div>
                      {/* Art Content Area */}
                      <div className="flex-1 relative flex items-center justify-center p-8">
                         <module.ArtComponent />
                      </div>
                    </div>
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Features;

