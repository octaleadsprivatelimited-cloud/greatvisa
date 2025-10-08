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

  const services = [
    { name: 'Study Visa', path: '/study-visa', desc: 'Top universities worldwide' },
    { name: 'Work Visa', path: '/work-visa', desc: 'Career opportunities abroad' },
    { name: 'Tourist Visa', path: '/tourist-visa', desc: 'Explore the world' },
    { name: 'Family Visa', path: '/family-visa', desc: 'Reunite with loved ones' },
    { name: 'Business Visa', path: '/business-visa', desc: 'Expand globally' },
    { name: 'Immigration Consultation', path: '/immigration-consultation', desc: 'Expert guidance' },
    { name: 'Job Placement', path: '/job-placement', desc: 'Find opportunities' },
    { name: 'Skill Assessment', path: '/skill-assessment', desc: 'Validate your skills' },
    { name: 'Document Attestation', path: '/document-attestation', desc: 'Official verification' },
    { name: 'Visa Extension', path: '/visa-extension', desc: 'Extend your stay' }
  ];

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
          <div className="flex justify-between items-center h-14">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative h-10 w-36">
                <img
                  src="/logo.png"
                  alt="GREAT Visa Network"
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
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

      {/* Full-Page Services Dropdown */}
      <AnimatePresence>
        {activeDropdown === 'services' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={() => setActiveDropdown(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-8">
                  <h3 className="text-3xl font-black text-gray-900 mb-2">Our Services</h3>
                  <p className="text-gray-600">Choose the visa service that fits your needs</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                  {services.map((service, index) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      onClick={() => setActiveDropdown(null)}
                      className="group p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 hover:from-indigo-50 hover:to-purple-50 border border-slate-200 hover:border-indigo-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-purple-600 mb-3">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                        {service.name}
                      </h4>
                      <p className="text-sm text-gray-600 mb-4">{service.desc}</p>
                      <div className="flex items-center text-indigo-600 text-sm font-semibold">
                        <span>Learn More</span>
                        <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
            <div className="max-w-7xl mx-auto px-4 py-4 max-h-[calc(100vh-180px)] overflow-y-auto">
              <nav className="space-y-2">
                {mainNavigation.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown('services')}
                          className="w-full flex items-center justify-between px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 rounded-2xl transition-all duration-300"
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
                                  className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600 rounded-2xl transition-all duration-300 font-semibold"
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
                        className={`block px-4 py-3 text-sm font-bold rounded-2xl transition-all duration-300 ${
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;