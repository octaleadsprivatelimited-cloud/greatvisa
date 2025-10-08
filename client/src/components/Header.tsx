import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown
} from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
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
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Apple-inspired Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-2xl shadow-sm' 
            : 'bg-white/70 backdrop-blur-2xl'
        }`}
      >
        <div className="max-w-[980px] mx-auto px-6">
          <div className="flex justify-between items-center h-11">
            {/* Logo */}
            <Link to="/" className="flex items-center group -ml-2">
              <div className="relative h-8 w-32">
                <img
                  src="/logo.png"
                  alt="GREAT Visa Network"
                  className="h-full w-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-200"
                  loading="eager"
                />
              </div>
            </Link>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden md:flex items-center space-x-8">
              {mainNavigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div className="relative group">
                      <button
                        onMouseEnter={() => setActiveDropdown('services')}
                        className="text-xs font-normal text-gray-800 hover:text-gray-900 transition-colors duration-200 py-1"
                      >
                        {item.name}
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === 'services' && (
                          <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            transition={{ duration: 0.15 }}
                            onMouseLeave={() => setActiveDropdown(null)}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white/95 backdrop-blur-2xl rounded-xl shadow-2xl py-2 z-50 border border-gray-200/50"
                          >
                            {services.map((service) => (
                              <Link
                                key={service.name}
                                to={service.path}
                                className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50/80 hover:text-gray-900 transition-colors duration-150"
                                onClick={() => setActiveDropdown(null)}
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
                      className="text-xs font-normal text-gray-800 hover:text-gray-900 transition-colors duration-200"
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
              className="md:hidden p-1 text-gray-800 hover:text-gray-900 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
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
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-2xl"
            >
              <div className="max-w-[980px] mx-auto px-6 py-4">
                <nav className="space-y-1">
                  {mainNavigation.map((item) => (
                    <div key={item.name}>
                      {item.hasDropdown ? (
                        <div>
                          <button
                            onClick={() => toggleDropdown('services')}
                            className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-gray-800 hover:bg-gray-50/80 rounded-lg transition-colors"
                          >
                            <span>{item.name}</span>
                            <ChevronDown 
                              size={16} 
                              className={`transition-transform duration-200 ${
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
                                transition={{ duration: 0.15 }}
                                className="ml-4 mt-1 space-y-1"
                              >
                                {services.map((service) => (
                                  <Link
                                    key={service.name}
                                    to={service.path}
                                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50/80 hover:text-gray-900 rounded-lg transition-colors"
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
                          className="block px-4 py-2.5 text-sm text-gray-800 hover:bg-gray-50/80 rounded-lg transition-colors"
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
      </header>

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-11"></div>
    </>
  );
};

export default Header;