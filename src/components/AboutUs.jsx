import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Heart, MapPin, Mail, Phone } from 'lucide-react';

const GlobalSupportIllustration = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Abstract Background Blob */}
    <path d="M50 150 C50 70, 160 30, 260 80 C350 120, 380 230, 280 260 C180 290, 50 230, 50 150 Z" fill="#8b5cf6" opacity="0.1" />
    
    {/* Large World Globe element */}
    <circle cx="200" cy="150" r="80" fill="#f8fafc" stroke="#334155" strokeWidth="3" />
    {/* Globe Lines */}
    <path d="M200 70 C160 100, 160 200, 200 230 C240 200, 240 100, 200 70 Z" fill="none" stroke="#cbd5e1" strokeWidth="2" />
    <path d="M120 150 L280 150" stroke="#cbd5e1" strokeWidth="2" />
    <path d="M135 110 L265 110" stroke="#cbd5e1" strokeWidth="2" />
    <path d="M135 190 L265 190" stroke="#cbd5e1" strokeWidth="2" />
    
    {/* Map Pins on Globe */}
    <path d="M160 120 Q165 110 170 120 L165 130 Z" fill="#ef4444" />
    <circle cx="165" cy="117" r="2" fill="#fff" />
    
    <path d="M230 140 Q235 130 240 140 L235 150 Z" fill="#ef4444" />
    <circle cx="235" cy="137" r="2" fill="#fff" />

    {/* Character (unDraw style person waving) */}
    {/* Body */}
    <path d="M300 260 C290 200, 350 200, 340 260 Z" fill="#8b5cf6" />
    {/* Head */}
    <circle cx="320" cy="180" r="16" fill="#f1f5f9" stroke="#1e293b" strokeWidth="2" />
    <path d="M308 175 C308 165, 332 165, 332 175 C332 180, 308 180, 308 175" fill="#1e293b" /> {/* Hair */}
    
    {/* Arm Waving */}
    <path d="M310 210 Q280 200 280 170" fill="none" stroke="#8b5cf6" strokeWidth="10" strokeLinecap="round" />
    {/* Hand */}
    <circle cx="280" cy="165" r="5" fill="#f1f5f9" stroke="#1e293b" strokeWidth="2" />

    {/* Secondary Character (Left standing) */}
    <path d="M80 260 C70 180, 130 180, 120 260 Z" fill="#334155" />
    {/* Head */}
    <circle cx="100" cy="160" r="14" fill="#f1f5f9" stroke="#1e293b" strokeWidth="2" />
    <path d="M92 160 Q108 150 108 165" fill="none" stroke="#1e293b" strokeWidth="3" />
    
    {/* Chat bubbles */}
    <rect x="250" y="50" width="70" height="45" rx="8" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
    <path d="M280 95 L285 110 L295 95 Z" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
    
    {/* Mail Envelope floating */}
    <rect x="60" y="60" width="50" height="35" rx="3" fill="#8b5cf6" />
    <path d="M60 60 L85 80 L110 60" fill="none" stroke="#fff" strokeWidth="2" />

  </svg>
);

const AboutUs = () => {
  const values = [
    {
      title: "Cutting-edge technology meets timeless values",
      description: "We believe that software is the ultimate product of the hands and the mind. We take pride in creating products that automatically solve your billing problems so you can focus on growth. We invest heavily in R&D and customer support to deliver unparalleled choice and value.",
      icon: <Heart className="w-8 h-8 text-violet-500" />
    },
    {
      title: "A common sense approach to privacy",
      description: "When you put customers before profits, you end up with more of both. We never show ads inside our products and we never sell user information. Every merchant should have absolute control over their data—we believe it's simply the right thing to do.",
      icon: <Shield className="w-8 h-8 text-violet-500" />
    },
    {
      title: "A private company with a public vision",
      description: "Because we've never taken outside investor money, we have always been able to focus purely on what is best for the customer rather than short-term quarterly profits. This independence empowers us to think long-term and build software you can rely on for decades.",
      icon: <Eye className="w-8 h-8 text-violet-500" />
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden scroll-mt-24">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-violet-50 blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-indigo-50 blur-3xl opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold text-sm mb-6"
          >
            Our Story
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight px-4"
          >
            For more than a decade, we've taken our own approach to building products.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 leading-relaxed"
          >
            BillBee wasn't built in a day. It is the result of years of careful engineering, designed to be the ultimate operating system for your business.
          </motion.p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {values.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col"
            >
              <div className="w-16 h-16 rounded-2xl bg-violet-100 border border-violet-200 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact & Address Section */}
        <motion.div 
          id="contact"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="scroll-mt-32 bg-slate-900 rounded-[2.5rem] p-6 sm:p-10 md:p-16 overflow-hidden relative shadow-2xl flex flex-col md:flex-row gap-12 items-center"
        >
          {/* Internal gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/40 to-indigo-900/40 mix-blend-overlay"></div>
          
          <div className="w-full md:w-1/2 relative z-10 text-white">
            <h3 className="text-3xl font-bold mb-4">Come drop by for a cup of coffee.</h3>
            <p className="text-slate-300 text-lg mb-8 max-w-md leading-relaxed">
              We operate globally, but our roots are grounded. Whether you have an enterprise inquiry or just want to say hi, our doors are always open.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white/10 shrink-0">
                  <MapPin className="w-6 h-6 text-violet-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white">Global Headquarters</h4>
                  <p className="text-slate-400 mt-1">456 Innovation Drive, Tech Park Area<br />San Francisco, CA 94105, USA</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-white/10 shrink-0">
                  <Phone className="w-6 h-6 text-violet-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white">Contact Phone</h4>
                  <p className="text-slate-400 mt-1">+1 (800) 555-0199</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-white/10 shrink-0">
                  <Mail className="w-6 h-6 text-violet-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white">Email Us</h4>
                  <p className="text-slate-400 mt-1">hello@billbee.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative z-10">
            {/* UnDraw Style Illustration */}
            <div className="aspect-square md:aspect-auto md:h-96 w-full rounded-2xl bg-white/5 border border-white/10 overflow-hidden relative flex items-center justify-center p-6">
              <GlobalSupportIllustration />
            </div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
