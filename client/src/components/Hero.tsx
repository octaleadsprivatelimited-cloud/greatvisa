import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle, Users, Award, Globe, ArrowRight } from 'lucide-react';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const slides: Slide[] = [
    {
      id: 1,
      image: '/visa.png',
      title: 'Your Gateway to Global Opportunities',
      subtitle: 'Visa Consultancy',
      description: 'Expert guidance for all your visa needs. We make your international journey smooth and hassle-free.',
      buttonText: 'Get Started',
      buttonLink: '/services'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Build Your Career Abroad',
      subtitle: 'Work Visa Services',
      description: 'Advance your career with international work opportunities. Our expert team guides you through the entire work visa process.',
      buttonText: 'Explore Opportunities',
      buttonLink: '/work-visa'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Experience the World',
      subtitle: 'Travel & Tourism',
      description: 'Discover new cultures and destinations. We make travel dreams come true with hassle-free tourist visa processing.',
      buttonText: 'Plan Your Trip',
      buttonLink: '/tourist-visa'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // const goToSlide = (index: number) => {
  //   setCurrentSlide(index);
  // };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
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
    'Immigration Consultation',
    'Job Placement',
    'Skill Assessment'
  ];

  return (
    <section className="relative min-h-screen lg:h-screen overflow-hidden bg-gray-900">
      {/* Background Slides */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full p-4 transition-all duration-300 border border-white/20 hover:border-white/40"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} className="text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full p-4 transition-all duration-300 border border-white/20 hover:border-white/40"
        aria-label="Next slide"
      >
        <ChevronRight size={28} className="text-white" />
      </button>


      {/* Content */}
      <div className="relative z-10 min-h-screen lg:h-full flex items-start lg:items-center py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="inline-flex items-center bg-primary-600/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                    <span className="text-primary-300 text-sm font-medium">{slides[currentSlide].subtitle}</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    {slides[currentSlide].title}
                  </h1>
                  
                  <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                    {slides[currentSlide].description}
                  </p>

                  <div className="flex flex-row gap-4">
                    <a
                      href={slides[currentSlide].buttonLink}
                      className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                    >
                      {slides[currentSlide].buttonText}
                      <ArrowRight size={20} className="ml-2" />
                    </a>
                    
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/30"
                    >
                      Get Free Consultation
                    </a>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 mt-12">
                    <div className="text-center">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary-600/20 rounded-lg mb-2 mx-auto">
                        <Users size={24} className="text-primary-300" />
                      </div>
                      <p className="text-2xl font-bold text-white">5000+</p>
                      <p className="text-gray-300 text-sm">Happy Clients</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary-600/20 rounded-lg mb-2 mx-auto">
                        <Award size={24} className="text-primary-300" />
                      </div>
                      <p className="text-2xl font-bold text-white">98%</p>
                      <p className="text-gray-300 text-sm">Success Rate</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary-600/20 rounded-lg mb-2 mx-auto">
                        <Globe size={24} className="text-primary-300" />
                      </div>
                      <p className="text-2xl font-bold text-white">50+</p>
                      <p className="text-gray-300 text-sm">Countries</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Content - Contact Form */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl max-w-md mx-auto lg:ml-auto lg:mr-0">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Free Consultation</h2>
                <p className="text-gray-600">Let us help you achieve your immigration goals</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Full Name"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email Address"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your Phone Number"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    aria-label="Select Service"
                    required
                  >
                    <option value="">Select Service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your requirements"
                    rows={3}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Submitting...</span>
                    </div>
                  ) : (
                    'Get Free Consultation'
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="flex items-center space-x-2 text-green-600 text-sm">
                    <CheckCircle size={16} />
                    <span>Thank you! We'll contact you soon.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="text-red-600 text-sm">
                    Something went wrong. Please try again.
                  </div>
                )}
              </form>

              <p className="text-xs text-gray-500 text-center mt-4">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
