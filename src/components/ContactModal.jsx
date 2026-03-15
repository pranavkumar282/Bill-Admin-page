import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Loader2 } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    businessName: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch("https://formsubmit.co/ajax/pranavkumars282@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            Name: formData.name,
            Email: formData.email,
            Phone: formData.phone,
            City: formData.city,
            "Business Name": formData.businessName,
            _subject: `New Lead from ${formData.name} - BillBee Landing Page`,
            _template: "table",
            _cc: "harshavardhannickle@gmail.com,moahmed.azarudeen.z@outlook.com"
        })
      });

      const data = await response.json();
      
      if (data.success) {
        setStatus('success');
        setTimeout(() => {
          onClose();
          // Reset form after closing
          setTimeout(() => {
            setFormData({ name: '', email: '', phone: '', city: '', businessName: '' });
            setStatus('idle');
          }, 500);
        }, 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-3xl w-full max-w-5xl overflow-y-auto max-h-[95vh] shadow-2xl flex flex-col md:flex-row relative"
        >
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-slate-400 hover:text-slate-600 bg-white md:bg-slate-100 hover:bg-slate-100 md:hover:bg-slate-200 p-2.5 rounded-full transition-colors z-[60] shadow-sm md:shadow-none border border-slate-100 md:border-none"
          >
            <X size={20} />
          </button>

          {/* Left Side: Copy */}
          <div className="w-full md:w-5/12 shrink-0 bg-slate-50 pt-20 pb-10 px-6 sm:px-10 md:p-10 lg:p-14 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-100 relative overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-violet-200/50 blur-3xl z-0" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-200/50 blur-3xl z-0" />
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 md:mb-6 leading-tight relative z-10 pr-6 md:pr-0">
              Ready to grow <br className="hidden md:block" />
              your business?
            </h2>
            <p className="text-base sm:text-lg text-slate-500 font-medium relative z-10">
              Fill out the form below and our experts will get in touch to help you scale your operations.
            </p>
          </div>

          {/* Right Side: Form */}
          <div className="w-full md:w-7/12 shrink-0 p-6 sm:p-10 lg:p-14 bg-white relative">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10 px-8 text-center"
              >
                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-3">Message Sent!</h3>
                <p className="text-slate-500 text-lg">Thank you for reaching out. We have received your details and will get back to you shortly.</p>
                <p className="text-slate-400 text-sm mt-4">Note: You may need to check your inbox to ACTIVATE formsubmit.co the very first time you use it.</p>
              </motion.div>
            ) : null}

            <form className={`flex flex-col gap-6 transition-opacity duration-300 ${status === 'success' ? 'opacity-0' : 'opacity-100'}`} onSubmit={handleSubmit}>
              {status === 'error' && (
                <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium">
                  We encountered an error while submitting your form. Please try again.
                </div>
              )}
              
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-slate-600">Name<span className="text-red-500">*</span></label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all outline-none" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-slate-600">Email<span className="text-red-500">*</span></label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all outline-none" />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-slate-600">Phone number<span className="text-red-500">*</span></label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all outline-none" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-slate-600">City<span className="text-red-500">*</span></label>
                  <input type="text" name="city" value={formData.city} onChange={handleChange} required className="px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all outline-none" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-slate-600">Business Name<span className="text-red-500">*</span></label>
                  <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} required className="px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all outline-none" />
                </div>
              </div>



              {/* Submit Button */}
              <div className="mt-4">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={status === 'loading'}
                  type="submit"
                  className="bg-violet-600 disabled:bg-violet-400 flex items-center justify-center min-w-[140px] text-white px-8 py-3 rounded-full font-semibold shadow-md shadow-violet-200 hover:bg-violet-700 hover:shadow-violet-300 transition-all"
                >
                  {status === 'loading' ? <Loader2 className="animate-spin" size={20} /> : 'Submit'}
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ContactModal;
