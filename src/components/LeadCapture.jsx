import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

const LeadCapture = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    businessName: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    
    // Basic formatting regex for email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid business email address.';
    }

    // Regex for phone numbers (max 16 chars)
    const phoneRegex = /^\+?[\d\s\-()]{10,16}$/;
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required.';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    // LeadCapture currently uses id, but for consistency with ContactModal, we can check id or name. 
    // We'll use name going forward in inputs.
    const fieldName = e.target.name || e.target.id;
    setFormData({ ...formData, [fieldName]: e.target.value });
    // Clear error for field when user starts typing again
    if (errors[fieldName]) {
      setErrors({ ...errors, [fieldName]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      // Here you would typically send data to an API
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50 border-t border-slate-200">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-violet-100 blur-[100px] opacity-60"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-100 blur-[100px] opacity-60"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
          <div className="flex flex-col md:flex-row">
            
            {/* Left side: Information */}
            <div className="md:w-5/12 bg-slate-900 p-8 sm:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden text-white">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-indigo-900/40 mix-blend-overlay"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-center md:text-left">Ready to upgrade your store?</h3>
                <p className="text-slate-300 leading-relaxed mb-8 text-center md:text-left">
                  Get in touch with our experts. We'll show you exactly how BillBee can cut your costs and double your operational speed.
                </p>
                
                <ul className="space-y-4 max-w-max mx-auto md:mx-0">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-violet-400" />
                    <span className="text-slate-200 text-sm font-medium">Free 30-day trial setup</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-violet-400" />
                    <span className="text-slate-200 text-sm font-medium">Personalized product demo</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-violet-400" />
                    <span className="text-slate-200 text-sm font-medium">Custom migration plan</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right side: Form */}
            <div className="md:w-7/12 p-6 sm:p-10 lg:p-12 flex items-center bg-white">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full flex flex-col items-center justify-center text-center py-10"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h4>
                  <p className="text-slate-600 mb-8 max-w-sm">
                    Thank you for your interest. One of our experts will contact you within the next 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-violet-600 font-medium hover:text-violet-700 underline"
                  >
                    Submit another request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="w-full space-y-6">
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
                      <input 
                        type="text" 
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition-all text-slate-800"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700">Business Email</label>
                      <input 
                        type="email" 
                        name="email"
                        id="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 bg-slate-50 border ${errors.email ? 'border-red-400 focus:ring-red-500' : 'border-slate-200 focus:ring-violet-500'} rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all text-slate-800`}
                        placeholder="john@yourcompany.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone</label>
                      <input 
                        type="tel" 
                        name="phone"
                        id="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength={16}
                        required
                        className={`w-full px-4 py-3 bg-slate-50 border ${errors.phone ? 'border-red-400 focus:ring-red-500' : 'border-slate-200 focus:ring-violet-500'} rounded-lg focus:ring-2 focus:border-transparent outline-none transition-all text-slate-800`}
                        placeholder="+1 (555) 000-0000"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="city" className="block text-sm font-medium text-slate-700">City</label>
                      <input 
                        type="text" 
                        name="city"
                        id="city" 
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition-all text-slate-800"
                        placeholder="New York"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="businessName" className="block text-sm font-medium text-slate-700">Business Name</label>
                      <input 
                        type="text" 
                        name="businessName"
                        id="businessName" 
                        value={formData.businessName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition-all text-slate-800"
                        placeholder="Acme Corp"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 px-6 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg shadow-md shadow-violet-200 transition-all flex items-center justify-center gap-2 group"
                  >
                    Get Your Free Demo
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <p className="text-xs text-slate-500 text-center mt-4">
                    By submitting this form, you agree to our Terms of Service.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCapture;
