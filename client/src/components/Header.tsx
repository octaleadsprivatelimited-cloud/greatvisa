import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  Menu, 
  X, 
  ChevronDown,
  Clock
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
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Top Info Bar - Professional */}
      <div className="bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2.5 text-sm">
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors">
                <Phone size={14} strokeWidth={2} />
                <a href="tel:+919533974711" className="font-medium">+91 9533 974 711</a>
              </div>
              <div className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors">
                <Mail size={14} strokeWidth={2} />
                <a href="mailto:info@greatvisanetwork.com" className="font-medium">info@greatvisanetwork.com</a>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-slate-300">
              <div className="hidden lg:flex items-center space-x-2">
                <Clock size={14} />
                <span className="text-xs">Mon-Sat: 9:00 AM - 6:00 PM</span>
              </div>
              <a 
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-xs font-semibold transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Get Consultation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          isScrolled ? 'shadow-lg' : 'shadow-sm'
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
            <nav className="hidden lg:flex items-center space-x-1">
              {mainNavigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div className="relative group">
                      <button
                        onMouseEnter={() => setActiveDropdown('services')}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center space-x-1 ${
                          location.pathname.includes('/services') || location.pathname.includes('visa') || location.pathname.includes('immigration') || location.pathname.includes('job') || location.pathname.includes('skill') || location.pathname.includes('document')
                            ? 'text-blue-600 bg-blue-50'
                            : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === 'services' && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            onMouseLeave={() => setActiveDropdown(null)}
                            className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-slate-200 py-3 z-50"
                          >
                            <div className="px-3 pb-2 mb-2 border-b border-slate-100">
                              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Our Services</p>
                            </div>
                            <div className="max-h-96 overflow-y-auto">
                              {services.map((service) => (
                                <Link
                                  key={service.name}
                                  to={service.path}
                                  className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-medium"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {service.name}
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
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                        location.pathname === item.path
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
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
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
              className="lg:hidden border-t border-slate-200 bg-white"
            >
              <div className="max-w-7xl mx-auto px-4 py-4 max-h-[calc(100vh-180px)] overflow-y-auto">
                <nav className="space-y-1">
                  {mainNavigation.map((item) => (
                    <div key={item.name}>
                      {item.hasDropdown ? (
                        <div>
                          <button
                            onClick={() => toggleDropdown('services')}
                            className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
                          >
                            <span>{item.name}</span>
                            <ChevronDown 
                              size={16} 
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
                                className="ml-4 mt-1 space-y-1"
                              >
                                {services.map((service) => (
                                  <Link
                                    key={service.name}
                                    to={service.path}
                                    className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
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
                          className={`block px-4 py-3 text-sm font-semibold rounded-lg transition-colors ${
                            location.pathname === item.path
                              ? 'text-blue-600 bg-blue-50'
                              : 'text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile Contact Info */}
                <div className="mt-6 pt-6 border-t border-slate-200 space-y-3">
                  <a 
                    href="tel:+919533974711" 
                    className="flex items-center space-x-3 text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    <Phone size={18} />
                    <span className="font-medium">+91 9533 974 711</span>
                  </a>
                  <a 
                    href="mailto:info@greatvisanetwork.com"
                    className="flex items-center space-x-3 text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    <Mail size={18} />
                    <span className="font-medium">info@greatvisanetwork.com</span>
                  </a>
                  <div className="pt-3">
                    <a
                      href="/contact"
                      className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      Get Free Consultation
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;