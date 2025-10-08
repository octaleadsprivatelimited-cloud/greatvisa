import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  Menu, 
  X, 
  ChevronDown,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const servicesCategories = {
    visaServices: [
      { name: 'Study Visa', path: '/study-visa', desc: 'Pursue education at top universities worldwide', icon: '🎓' },
      { name: 'Work Visa', path: '/work-visa', desc: 'Advance your career with international opportunities', icon: '💼' },
      { name: 'Tourist Visa', path: '/tourist-visa', desc: 'Explore new destinations hassle-free', icon: '✈️' },
      { name: 'Family Visa', path: '/family-visa', desc: 'Reunite with your loved ones abroad', icon: '❤️' },
      { name: 'Business Visa', path: '/business-visa', desc: 'Expand your business globally', icon: '🏢' },
      { name: 'Visa Extension', path: '/visa-extension', desc: 'Extend your current visa status', icon: '🔄' }
    ],
    consultationServices: [
      { name: 'Immigration Consultation', path: '/immigration-consultation', desc: 'Expert guidance from certified consultants', icon: '📋' },
      { name: 'Job Placement', path: '/job-placement', desc: 'Connect with international employers', icon: '🎯' },
      { name: 'Skill Assessment', path: '/skill-assessment', desc: 'Validate your professional qualifications', icon: '⭐' },
      { name: 'Document Attestation', path: '/document-attestation', desc: 'Official document verification services', icon: '📄' }
    ]
  };

  const mainNavigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Top Bar with Gradient - Compact */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-1.5 text-xs">
            <div className="hidden md:flex items-center space-x-4">
              <a href="tel:+919533974711" className="flex items-center space-x-1.5 hover:text-white/80 transition-colors group">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Phone size={12} strokeWidth={2.5} />
                </div>
                <span className="font-medium">+91 9533 974 711</span>
              </a>
              <a href="mailto:info@greatvisanetwork.com" className="flex items-center space-x-1.5 hover:text-white/80 transition-colors group">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Mail size={12} strokeWidth={2.5} />
                </div>
                <span className="font-medium">info@greatvisanetwork.com</span>
              </a>
            </div>
            <div className="flex items-center">
              <a 
                href="/contact"
                className="group inline-flex items-center space-x-1.5 bg-white text-indigo-600 hover:bg-white/90 px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Sparkles size={12} className="group-hover:rotate-12 transition-transform" />
                <span>Free Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Compact */}
      <motion.header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'glass-card shadow-xl' 
            : 'bg-white/95 backdrop-blur-sm shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative h-16 w-48 flex items-center">
                <img
                  src="/logo.png"
                  alt="GREAT Visa Network"
                  className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="eager"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {mainNavigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div className="relative">
                      <button
                        onMouseEnter={() => setActiveDropdown('services')}
                        onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                        className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 flex items-center space-x-1 ${
                          location.pathname.includes('/services') || location.pathname.includes('visa') || location.pathname.includes('immigration') || location.pathname.includes('job') || location.pathname.includes('skill') || location.pathname.includes('document')
                            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                            : 'text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600'
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                        location.pathname === item.path
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                          : 'text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-2xl text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full-Page Services Dropdown - Professional Mega Menu */}
      <AnimatePresence>
        {activeDropdown === 'services' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md"
            onClick={() => setActiveDropdown(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-gradient-to-br from-white via-slate-50 to-indigo-50/30 shadow-2xl border-b border-slate-200"
              onClick={(e) => e.stopPropagation()}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
                {/* Header */}
                <div className="mb-12 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-xs font-bold mb-4"
                  >
                    <Sparkles size={14} />
                    <span>Choose Your Path</span>
                  </motion.div>
                  <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-3">
                    Our <span className="text-gradient-neon">Services</span>
                  </h3>
                  <p className="text-lg text-gray-600 font-medium">Professional visa and immigration solutions tailored to your needs</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  {/* Visa Services */}
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-2 h-8 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full mr-3"></div>
                      <h4 className="text-xl font-black text-gray-900">Visa Services</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {servicesCategories.visaServices.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          onClick={() => setActiveDropdown(null)}
                          className="group relative overflow-hidden p-6 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50 border border-slate-200 hover:border-indigo-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-100/50 to-purple-100/50 rounded-full blur-2xl -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-500"></div>
                          <div className="relative">
                            <div className="text-3xl mb-3">{service.icon}</div>
                            <h5 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                              {service.name}
                            </h5>
                            <p className="text-sm text-gray-600 leading-relaxed mb-3">{service.desc}</p>
                            <div className="flex items-center text-indigo-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                              <span>Explore</span>
                              <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Consultation Services */}
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-2 h-8 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full mr-3"></div>
                      <h4 className="text-xl font-black text-gray-900">Consultation Services</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {servicesCategories.consultationServices.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          onClick={() => setActiveDropdown(null)}
                          className="group relative overflow-hidden p-6 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 border border-slate-200 hover:border-purple-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-100/50 to-pink-100/50 rounded-full blur-2xl -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-500"></div>
                          <div className="relative">
                            <div className="text-3xl mb-3">{service.icon}</div>
                            <h5 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                              {service.name}
                            </h5>
                            <p className="text-sm text-gray-600 leading-relaxed mb-3">{service.desc}</p>
                            <div className="flex items-center text-purple-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                              <span>Explore</span>
                              <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA Banner */}
                <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-center text-white">
                  <h4 className="text-2xl font-black mb-3">Not Sure Which Service You Need?</h4>
                  <p className="text-white/90 mb-6 font-medium">Get a free consultation with our experts and find the perfect solution for you</p>
                  <Link
                    to="/contact"
                    onClick={() => setActiveDropdown(null)}
                    className="inline-flex items-center px-8 py-3 bg-white text-indigo-600 hover:bg-yellow-300 hover:text-purple-900 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <span>Get Free Consultation</span>
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu - Simple Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-[116px] left-0 right-0 bg-white border-t border-gray-200 shadow-xl z-40 max-h-[calc(100vh-116px)] overflow-y-auto"
          >
            <div className="px-4 py-4">
              <nav className="space-y-2">
                {mainNavigation.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown('services')}
                          className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-gray-900 hover:bg-slate-50 rounded-lg transition-all duration-200"
                        >
                          <span>{item.name}</span>
                          <ChevronDown 
                            size={16} 
                            strokeWidth={2.5}
                            className={`transition-transform duration-300 ${
                              activeDropdown === 'services' ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        
                        <AnimatePresence>
                          {activeDropdown === 'services' && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-2 space-y-1 bg-slate-50 rounded-xl p-2"
                            >
                              <div className="text-xs font-bold text-indigo-600 px-3 py-1.5 uppercase tracking-wider">Visa Services</div>
                              {servicesCategories.visaServices.map((service) => (
                                <Link
                                  key={service.name}
                                  to={service.path}
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setActiveDropdown(null);
                                  }}
                                  className="block px-3 py-2 text-xs text-gray-700 hover:bg-white hover:text-indigo-600 rounded-lg transition-all duration-200 font-medium"
                                >
                                  {service.name}
                                </Link>
                              ))}
                              <div className="text-xs font-bold text-purple-600 px-3 py-1.5 mt-2 uppercase tracking-wider">Consultation Services</div>
                              {servicesCategories.consultationServices.map((service) => (
                                <Link
                                  key={service.name}
                                  to={service.path}
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setActiveDropdown(null);
                                  }}
                                  className="block px-3 py-2 text-xs text-gray-700 hover:bg-white hover:text-purple-600 rounded-lg transition-all duration-200 font-medium"
                                >
                                  {service.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-4 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                          location.pathname === item.path
                            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                            : 'text-gray-900 hover:bg-slate-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;