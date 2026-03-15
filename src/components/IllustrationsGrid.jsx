import React from 'react';
import { motion } from 'framer-motion';

// Abstract Person interacting with large UI elements
const IllustrationHero = ({ children }) => (
  <svg viewBox="0 0 200 150" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="140" rx="60" ry="10" fill="#f1f5f9" />
    {children}
  </svg>
);

const PrintingInvoices = () => (
  <IllustrationHero>
    {/* Printer setup */}
    <rect x="50" y="50" width="100" height="40" rx="4" fill="#334155" />
    <rect x="65" y="30" width="70" height="20" rx="2" fill="#cbd5e1" />
    
    {/* Large paper coming out */}
    <path d="M60 90 L140 90 L130 140 L70 140 Z" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
    <circle cx="100" cy="115" r="8" fill="#8b5cf6" />
    <path d="M100 112v6m-2-3h4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
    
    {/* Person Left */}
    <path d="M40 90 Q35 110 40 135" fill="none" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
    <path d="M48 90 Q45 110 45 135" fill="none" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
    <rect x="35" y="65" width="16" height="30" rx="4" fill="#8b5cf6" />
    <circle cx="43" cy="55" r="7" fill="#1e293b" />
    {/* Person Right */}
    <path d="M160 90 Q165 110 160 135" fill="none" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
    <path d="M152 90 Q155 110 155 135" fill="none" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
    <rect x="149" y="65" width="16" height="30" rx="4" fill="#8b5cf6" />
    <circle cx="157" cy="55" r="7" fill="#1e293b" />
  </IllustrationHero>
);

const OnlinePayments = () => (
  <IllustrationHero>
    {/* Browser/Floating elements */}
    <rect x="70" y="30" width="60" height="15" rx="4" fill="#60a5fa" fillOpacity="0.2" stroke="#60a5fa" />
    <rect x="90" y="55" width="50" height="15" rx="4" fill="#60a5fa" fillOpacity="0.2" stroke="#60a5fa" />
    
    {/* Person holding large card */}
    <rect x="60" y="80" width="15" height="40" rx="4" fill="#1e293b" />
    <rect x="80" y="80" width="15" height="40" rx="4" fill="#1e293b" />
    <rect x="55" y="50" width="30" height="35" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
    <circle cx="70" cy="40" r="8" fill="#1e293b" />
    
    {/* Large Credit Card */}
    <rect x="80" y="65" width="50" height="30" rx="4" fill="#8b5cf6" transform="rotate(-10 80 65)" />
    <rect x="85" y="70" width="15" height="8" rx="2" fill="#d8b4fe" transform="rotate(-10 80 65)" />
  </IllustrationHero>
);

const StripePayments = () => (
  <IllustrationHero>
    {/* Mobile Phone */}
    <rect x="80" y="30" width="50" height="90" rx="8" fill="#ffffff" stroke="#1e293b" strokeWidth="3" />
    <rect x="90" y="45" width="30" height="4" rx="2" fill="#8b5cf6" />
    <rect x="90" y="55" width="20" height="4" rx="2" fill="#e2e8f0" />
    <rect x="90" y="65" width="25" height="4" rx="2" fill="#e2e8f0" />
    <rect x="90" y="75" width="15" height="4" rx="2" fill="#e2e8f0" />
    
    {/* Checkmarks */}
    <circle cx="85" cy="47" r="2" fill="#8b5cf6" />
    <circle cx="85" cy="57" r="2" fill="#8b5cf6" />
    
    {/* Person beside phone */}
    <path d="M140 90 L135 135" fill="none" stroke="#1e293b" strokeWidth="5" strokeLinecap="round" />
    <path d="M148 90 L145 135" fill="none" stroke="#1e293b" strokeWidth="5" strokeLinecap="round" />
    <rect x="135" y="60" width="16" height="35" rx="6" fill="#8b5cf6" />
    <circle cx="143" cy="50" r="7" fill="#1e293b" />
    {/* Arm touching phone */}
    <path d="M135 70 Q120 75 110 70" fill="none" stroke="#8b5cf6" strokeWidth="4" strokeLinecap="round" />
  </IllustrationHero>
);

const ReceiptList = () => (
  <IllustrationHero>
    {/* Person standing */}
    <path d="M140 90 L135 135" fill="none" stroke="#1e293b" strokeWidth="5" strokeLinecap="round" />
    <path d="M150 90 L145 135" fill="none" stroke="#1e293b" strokeWidth="5" strokeLinecap="round" />
    <rect x="135" y="55" width="18" height="40" rx="8" fill="#8b5cf6" />
    <circle cx="144" cy="42" r="8" fill="#1e293b" />
    
    {/* Large Receipt floating */}
    <path d="M50 40 L110 30 L120 90 L60 100 Z" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
    <path d="M60 50 L100 45 M62 60 L90 55 M65 70 L95 65" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />
    <circle cx="115" cy="85" r="4" fill="#8b5cf6" />
  </IllustrationHero>
);

const MobilePayments = () => (
  <IllustrationHero>
    {/* Large mobile phone */}
    <rect x="80" y="25" width="50" height="95" rx="10" fill="#ffffff" stroke="#1e293b" strokeWidth="4" />
    <rect x="95" y="30" width="20" height="3" rx="1" fill="#cbd5e1" />
    
    {/* Floating elements from phone */}
    <rect x="50" y="45" width="40" height="16" rx="4" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
    <circle cx="60" cy="53" r="3" fill="#8b5cf6" />
    <rect x="120" y="65" width="40" height="16" rx="4" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
    <circle cx="130" cy="73" r="3" fill="#8b5cf6" />
    <rect x="55" y="85" width="40" height="16" rx="4" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
    <circle cx="65" cy="93" r="3" fill="#8b5cf6" />
  </IllustrationHero>
);

const SendMoney = () => (
  <IllustrationHero>
    {/* Person Left Large */}
    <path d="M45 100 L45 140" fill="none" stroke="#1e293b" strokeWidth="8" strokeLinecap="round" />
    <path d="M60 100 L60 140" fill="none" stroke="#1e293b" strokeWidth="8" strokeLinecap="round" />
    <rect x="40" y="60" width="26" height="45" rx="8" fill="#1e293b" />
    <rect x="46" y="60" width="14" height="45" rx="0" fill="#8b5cf6" /> {/* Inner shirt */}
    <circle cx="53" cy="45" r="10" fill="#1e293b" />
    
    {/* Arm sending phone */}
    <path d="M60 75 Q80 85 90 95" fill="none" stroke="#1e293b" strokeWidth="5" strokeLinecap="round" />
    {/* Phone */}
    <rect x="85" y="90" width="20" height="10" rx="2" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" transform="rotate(30 85 90)" />
    
    {/* Floating Target UI */}
    <rect x="100" y="30" width="50" height="20" rx="4" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
    <circle cx="110" cy="40" r="5" fill="#1e293b" />
    <rect x="120" y="38" width="20" height="4" rx="2" fill="#8b5cf6" />
    
    {/* Card */}
    <rect x="110" y="65" width="30" height="20" rx="4" fill="#8b5cf6" />
    <circle cx="125" cy="75" r="4" fill="#ffffff" />
  </IllustrationHero>
);

const FormsIllustration = () => (
  <IllustrationHero>
    {/* Form 1 */}
    <rect x="40" y="40" width="40" height="30" rx="2" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
    <rect x="55" y="45" width="10" height="10" rx="2" fill="#8b5cf6" fillOpacity="0.2" />
    
    {/* Form 2 */}
    <rect x="70" y="80" width="50" height="35" rx="2" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
    <rect x="75" y="90" width="15" height="15" rx="2" fill="#8b5cf6" fillOpacity="0.2" />
    
    {/* Tiny Person */}
    <path d="M140 110 L138 135" fill="none" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
    <path d="M146 110 L145 135" fill="none" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
    <rect x="136" y="90" width="12" height="22" rx="4" fill="#8b5cf6" />
    <circle cx="142" cy="82" r="5" fill="#1e293b" />
  </IllustrationHero>
);

const FillForms = () => (
  <IllustrationHero>
    {/* Progress Steps */}
    <circle cx="60" cy="40" r="6" fill="#8b5cf6" />
    <path d="M66 40 L84 40" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 2" />
    <circle cx="90" cy="40" r="6" fill="#1e293b" />
    <path d="M96 40 L114 40" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 2" />
    <circle cx="120" cy="40" r="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
    
    {/* Form field */}
    <rect x="80" y="70" width="50" height="15" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
    <path d="M85 75 L90 80 L95 72" stroke="#8b5cf6" strokeWidth="2" fill="none" strokeLinecap="round" />
    
    {/* Person standing right */}
    <path d="M145 95 L140 140" fill="none" stroke="#1e293b" strokeWidth="5" strokeLinecap="round" />
    <path d="M152 95 L150 140" fill="none" stroke="#1e293b" strokeWidth="5" strokeLinecap="round" />
    <rect x="140" y="60" width="16" height="35" rx="6" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="2" /> {/* White shirt */}
    <circle cx="148" cy="50" r="7" fill="#1e293b" />
    {/* Arm holding pen */}
    <path d="M140 70 Q130 80 120 75" fill="none" stroke="#f1f5f9" strokeWidth="4" strokeLinecap="round" />
  </IllustrationHero>
);

const StepsIllustration = () => (
  <IllustrationHero>
    {/* Large UI Mockup Box */}
    <rect x="90" y="40" width="70" height="45" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
    <circle cx="110" cy="30" r="3" fill="#cbd5e1" />
    <circle cx="120" cy="30" r="3" fill="#cbd5e1" />
    <circle cx="130" cy="30" r="3" fill="#8b5cf6" />
    
    <rect x="95" y="45" width="25" height="25" rx="2" fill="none" stroke="#e2e8f0" strokeWidth="1" />
    <path d="M95 45 L120 70 M120 45 L95 70" stroke="#e2e8f0" strokeWidth="1" />
    
    <rect x="125" y="48" width="30" height="3" rx="1.5" fill="#cbd5e1" />
    <rect x="125" y="55" width="20" height="3" rx="1.5" fill="#e2e8f0" />
    <rect x="140" y="70" width="15" height="8" rx="2" fill="#8b5cf6" />
    
    {/* Person looking at board */}
    <path d="M75 100 L70 140" fill="none" stroke="#1e293b" strokeWidth="5" strokeLinecap="round" />
    <path d="M85 100 L85 140" fill="none" stroke="#1e293b" strokeWidth="5" strokeLinecap="round" />
    <rect x="70" y="65" width="18" height="35" rx="6" fill="#8b5cf6" />
    <circle cx="79" cy="55" r="7" fill="#1e293b" />
  </IllustrationHero>
);

const ProgressOverview = () => (
  <IllustrationHero>
    {/* Tall Dashboard */}
    <rect x="60" y="25" width="55" height="90" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
    <rect x="60" y="25" width="55" height="15" rx="4" fill="#e2e8f0" />
    
    {/* Rows */}
    <rect x="65" y="48" width="45" height="4" rx="2" fill="#e2e8f0" />
    <rect x="65" y="48" width="25" height="4" rx="2" fill="#8b5cf6" />
    
    <rect x="65" y="68" width="45" height="4" rx="2" fill="#e2e8f0" />
    <rect x="65" y="68" width="10" height="4" rx="2" fill="#8b5cf6" />
    <rect x="85" y="68" width="10" height="4" rx="2" fill="#8b5cf6" />
    
    <rect x="65" y="88" width="45" height="4" rx="2" fill="#e2e8f0" />
    <rect x="65" y="88" width="35" height="4" rx="2" fill="#8b5cf6" />
    
    {/* Person pointing */}
    <path d="M125 105 L120 140" fill="none" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
    <path d="M135 105 L140 140" fill="none" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
    <rect x="122" y="70" width="14" height="35" rx="5" fill="#1e293b" />
    <circle cx="129" cy="62" r="6" fill="#1e293b" />
    {/* Arm pointing toward dashboard */}
    <path d="M125 78 Q115 85 105 80" fill="none" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
  </IllustrationHero>
);

const illustrationsData = [
  { id: 1, title: 'Printing invoices', Component: PrintingInvoices },
  { id: 2, title: 'Online Payments', Component: OnlinePayments },
  { id: 3, title: 'Stripe payments', Component: StripePayments },
  { id: 4, title: 'Receipt', Component: ReceiptList },
  { id: 5, title: 'Mobile Payments', Component: MobilePayments },
  { id: 6, title: 'Send Money', Component: SendMoney },
  { id: 7, title: 'Forms', Component: FormsIllustration },
  { id: 8, title: 'Fill forms', Component: FillForms },
  { id: 9, title: 'Steps', Component: StepsIllustration },
  { id: 10, title: 'Progress overview', Component: ProgressOverview },
];

const IllustrationsGrid = () => {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4"
          >
            Powerful Capabilities
          </motion.h2>
          <p className="text-lg text-slate-600">
            Everything you need to run your daily operations with ease.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {illustrationsData.map((item, index) => {
            const { Component } = item;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border border-slate-100 rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer"
              >
                <div className="h-48 flex items-center justify-center p-4 bg-white">
                  <Component />
                </div>
                <div className="py-4 text-center border-t border-slate-50 bg-white">
                  <h4 className="font-semibold text-slate-800 text-sm group-hover:text-violet-600 transition-colors">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IllustrationsGrid;
