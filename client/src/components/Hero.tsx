import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles,
  Globe,
  Users,
  Award
} from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sliderImages = [
    '/home/slider-1.jpg',
    '/home/Silder-2.jpg',
    '/home/slider-3.jpg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [sliderImages.length]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, message: `Inquiry for ${formData.service}` }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'Study Visa',
    'Work Visa',
    'Tourist Visa',
    'Family Visa',
    'Business Visa',
    'Immigration Consultation'
  ];

  const stats = [
    { icon: Users, value: '5K+', label: 'Clients', color: 'from-blue-500 to-cyan-500' },
    { icon: Award, value: '98%', label: 'Success', color: 'from-purple-500 to-pink-500' },
    { icon: Globe, value: '50+', label: 'Countries', color: 'from-orange-500 to-red-500' }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden pt-24 pb-12 md:pb-16 lg:pb-20">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={sliderImages[currentSlide]}
              alt={`Hero slide ${currentSlide + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight"
            >
              <span className="text-white drop-shadow-2xl">Your</span>{' '}
              <span className="text-yellow-400 inline-block drop-shadow-2xl">
                Dream
              </span>
              <br />
              <span className="text-white drop-shadow-2xl">Destination</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-white/95 mb-6 md:mb-8 lg:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium drop-shadow-lg"
            >
              Transform your international dreams into reality with{' '}
              <span className="font-bold text-yellow-300">
                expert visa guidance
              </span>{' '}
              & immigration services
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start mb-8 md:mb-10 lg:mb-12"
            >
              <a
                href="#quick-form"
                className="group inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-xl font-semibold text-sm md:text-base hover:shadow-2xl transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <span>Get Started</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white text-gray-900 rounded-xl font-semibold text-sm md:text-base hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-indigo-200"
              >
                <span>Explore Services</span>
              </a>
            </motion.div>

            {/* Stats - Horizontal Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-3 md:gap-4 lg:gap-6"
            >
              {stats.map((stat, index) => (
                <div key={index} className="glass-effect backdrop-blur-md p-4 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20">
                  <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-3 mx-auto lg:mx-0`}>
                    <stat.icon size={20} className="text-white md:w-6 md:h-6" />
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-white mb-1 drop-shadow-lg">{stat.value}</div>
                  <div className="text-xs md:text-sm text-white/90 font-medium drop-shadow-md">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Quick Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            id="quick-form"
            className="relative"
          >
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-3xl blur-2xl opacity-60"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-3xl blur-2xl opacity-60"
            />

            <div className="relative glass-card rounded-2xl shadow-xl p-5 lg:p-6 border-2 border-white/50">
              {/* Form Header */}
              <div className="text-center mb-5">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Start Your Journey
                </h3>
                <p className="text-gray-600 text-sm">
                  Get expert consultation within 24 hours
                </p>
              </div>

              {submitStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Success!</h4>
                  <p className="text-gray-600 text-sm">
                    We'll contact you within 24 hours
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all duration-200 text-sm"
                      placeholder="Your Full Name"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all duration-200 text-sm"
                      placeholder="Email"
                    />

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all duration-200 text-sm"
                      placeholder="Phone"
                    />
                  </div>

                  <div>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all duration-200 text-sm"
                    >
                      <option value="">Select Service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-sm group"
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <Sparkles size={16} className="group-hover:rotate-12 transition-transform" />
                        <span>Get Free Consultation</span>
                        <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                      </>
                    )}
                  </button>

                  {submitStatus === 'error' && (
                    <p className="text-red-600 text-center text-xs">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <p className="text-center text-[10px] text-gray-500 pt-2">
                    Your information is secure & confidential
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;