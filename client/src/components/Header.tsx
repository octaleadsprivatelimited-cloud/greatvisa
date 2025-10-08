import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  Menu, 
  X, 
  ChevronDown,
  Sparkles
} from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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

  const services = [
    { name: 'Study Visa', path: '/study-visa' },
    { name: 'Work Visa', path: '/work-visa' },
    { name: 'Tourist Visa', path: '/tourist-visa' },
    { name: 'Family Visa', path: '/family-visa' },
    { name: 'Business Visa', path: '/business-visa' },
    { name: 'Immigration Consultation', path: '/immigration-consultation' },
    { name: 'Job Placement', path: '/job-placement' },
    { name: 'Skill Assessment', path: '/skill-assessment' },
    { name: 'Document Attestation', path: '/document-attestation' },
    { name: 'Visa Extension', path: '/visa-extension' }
  ];

  const mainNavigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Top Bar with Gradient - Compact */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-1 text-xs">
            <div className="hidden md:flex items-center space-x-3">
              <a href="tel:+919533974711" className="flex items-center space-x-1 hover:text-white/80 transition-colors group">
                <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Phone size={10} strokeWidth={2.5} />
                </div>
                <span className="font-medium text-xs">+91 9533 974 711</span>
              </a>
              <a href="mailto:info@greatvisanetwork.com" className="flex items-center space-x-1 hover:text-white/80 transition-colors group">
                <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Mail size={10} strokeWidth={2.5} />
                </div>
                <span className="font-medium text-xs">info@greatvisanetwork.com</span>
              </a>
            </div>
            <div className="flex items-center">
              <a 
                href="/contact"
                className="group inline-flex items-center space-x-1 bg-white text-indigo-600 hover:bg-white/90 px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 hover:scale-105 shadow-md"
              >
                <Sparkles size={10} className="group-hover:rotate-12 transition-transform" />
                <span>Free Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Glassmorphism */}
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
              <div className="relative h-16 w-48">
                <img
                  src="/logo.png"
                  alt="GREAT Visa Network"
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="eager"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {mainNavigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div className="relative group">
                      <button
                        onMouseEnter={() => setActiveDropdown('services')}
                        className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 flex items-center space-x-1.5 ${
                          location.pathname.includes('/services') || location.pathname.includes('visa') || location.pathname.includes('immigration') || location.pathname.includes('job') || location.pathname.includes('skill') || location.pathname.includes('document')
                            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                            : 'text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600'
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === 'services' && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            onMouseLeave={() => setActiveDropdown(null)}
                            className="absolute top-full left-0 mt-3 w-80 glass-card rounded-3xl shadow-2xl py-4 z-50 border border-purple-100"
                          >
                            <div className="px-4 pb-3 mb-3 border-b border-gray-200">
              <p className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 uppercase tracking-wider">
                Our Services
              </p>
                            </div>
                            <div className="max-h-96 overflow-y-auto px-2">
                              {services.map((service) => (
                                <Link
                                  key={service.name}
                                  to={service.path}
                                  className="group flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 rounded-2xl transition-all duration-300 font-semibold"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <span className="group-hover:text-indigo-600 transition-colors">{service.name}</span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
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
              className="lg:hidden p-3 rounded-2xl text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-200 bg-white"
            >
              <div className="max-w-7xl mx-auto px-4 py-6 max-h-[calc(100vh-180px)] overflow-y-auto">
                <nav className="space-y-2">
                  {mainNavigation.map((item) => (
                    <div key={item.name}>
                      {item.hasDropdown ? (
                        <div>
                          <button
                            onClick={() => toggleDropdown('services')}
                            className="w-full flex items-center justify-between px-5 py-3.5 text-sm font-bold text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 rounded-2xl transition-all duration-300"
                          >
                            <span>{item.name}</span>
                            <ChevronDown 
                              size={18} 
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
                                transition={{ duration: 0.2 }}
                                className="ml-4 mt-2 space-y-1"
                              >
                                {services.map((service) => (
                                  <Link
                                    key={service.name}
                                    to={service.path}
                                    className="flex items-center space-x-3 px-5 py-3 text-sm text-gray-600 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600 rounded-2xl transition-all duration-300 font-semibold"
                                  >
                                      <span>{service.name}</span>
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={item.path}
                          className={`block px-5 py-3.5 text-sm font-bold rounded-2xl transition-all duration-300 ${
                            location.pathname === item.path
                              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                              : 'text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50'
                          }`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile Contact Info */}
                <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                  <a 
                    href="tel:+919533974711" 
                    className="flex items-center space-x-3 text-gray-700 hover:text-indigo-600 transition-colors font-semibold"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center">
                      <Phone size={18} />
                    </div>
                    <span>+91 9533 974 711</span>
                  </a>
                  <a 
                    href="mailto:info@greatvisanetwork.com"
                    className="flex items-center space-x-3 text-gray-700 hover:text-indigo-600 transition-colors font-semibold"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center">
                      <Mail size={18} />
                    </div>
                    <span>info@greatvisanetwork.com</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;