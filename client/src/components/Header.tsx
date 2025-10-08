import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  ChevronDown,
  Globe,
  User,
  Briefcase,
  GraduationCap,
  Plane,
  Home,
  FileText,
  Users,
  HelpCircle,
  Heart
} from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Framer Motion variants for mobile menu and items
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        when: 'beforeChildren',
        staggerChildren: 0.03
      }
    },
    exit: { opacity: 0, y: -8, transition: { duration: 0.15 } }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -8 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.2 } }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navigationItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About Us', path: '/about', icon: User },
    { 
      name: 'Services', 
      path: '/services', 
      icon: Briefcase,
      dropdown: [
        { name: 'Study Visa', path: '/study-visa', icon: GraduationCap },
        { name: 'Work Visa', path: '/work-visa', icon: Briefcase },
        { name: 'Tourist Visa', path: '/tourist-visa', icon: Plane },
        { name: 'Family Visa', path: '/family-visa', icon: Heart },
        { name: 'Business Visa', path: '/business-visa', icon: Globe },
        { name: 'Immigration Consultation', path: '/immigration-consultation', icon: FileText },
        { name: 'Job Placement', path: '/job-placement', icon: Users },
        { name: 'Skill Assessment', path: '/skill-assessment', icon: FileText },
        { name: 'Document Attestation', path: '/document-attestation', icon: FileText },
        { name: 'Visa Extension', path: '/visa-extension', icon: FileText }
      ]
    },
    { name: 'Portfolio', path: '/portfolio', icon: FileText },
    { name: 'Blog', path: '/blog', icon: FileText },
    { name: 'Testimonials', path: '/testimonials', icon: Users },
    { name: 'FAQ', path: '/faq', icon: HelpCircle },
    { name: 'Careers', path: '/careers', icon: Briefcase },
    { name: 'Contact', path: '/contact', icon: Phone }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-900 text-white py-1.5 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-xs">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>+91 9533974711</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle size={14} />
                <span>info@greatvisanetwork.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="https://wa.me/919533974711" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-primary-300 transition-colors"
              >
                <MessageCircle size={14} />
                <span>WhatsApp</span>
              </a>
              <a 
                href="tel:+919533974711"
                className="bg-primary-600 hover:bg-primary-700 px-3 py-0.5 rounded-full text-xs font-medium transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2.5">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="h-14 overflow-hidden flex items-center">
                <img
                  src="/logo.png"
                  alt="GREAT Visa Network"
                  className="h-16 w-auto object-cover -translate-y-0.5"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 font-medium transition-colors"
                      >
                        <span>{item.name}</span>
                        <ChevronDown size={16} />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                          >
                            <div className="grid grid-cols-2 gap-2">
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.path}
                                  className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <subItem.icon size={16} className="text-primary-600" />
                                  <span className="text-sm text-gray-700">{subItem.name}</span>
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
                      className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="lg:hidden bg-white relative overflow-hidden border-t border-gray-200 shadow-lg"
            >
              {/* Waves effect - top */}
              <motion.div
                aria-hidden
                className="absolute inset-x-0 -top-4 opacity-40"
                animate={{ x: [0, 24, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <svg viewBox="0 0 1440 64" xmlns="http://www.w3.org/2000/svg" className="w-full h-8">
                  <path d="M0 32L40 26.7C80 21 160 11 240 21.3C320 32 400 64 480 58.7C560 53 640 11 720 10.7C800 11 880 53 960 53.3C1040 53 1120 11 1200 5.3C1280 0 1360 21 1400 32L1440 42.7V64H0Z" fill="#e5f0ff" />
                </svg>
              </motion.div>
              <div className="container mx-auto px-4 py-4">
                <nav className="space-y-1.5">
                  {navigationItems.map((item) => (
                    <motion.div key={item.name} variants={mobileItemVariants}>
                      {item.dropdown ? (
                        <div>
                          <button
                            onClick={() => toggleDropdown(item.name)}
                            className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors text-sm"
                          >
                            <div className="flex items-center space-x-2.5">
                              <item.icon size={18} className="text-primary-600" />
                              <span className="font-medium">{item.name}</span>
                            </div>
                            <ChevronDown 
                              size={14} 
                              className={`transition-transform ${
                                activeDropdown === item.name ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          
                          <AnimatePresence>
                            {activeDropdown === item.name && (
                              <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={{
                                  hidden: { opacity: 0, height: 0 },
                                  visible: {
                                    opacity: 1,
                                    height: 'auto',
                                    transition: { when: 'beforeChildren', staggerChildren: 0.02 }
                                  }
                                }}
                                className="ml-8 mt-2 space-y-1"
                              >
                                {item.dropdown.map((subItem) => (
                                  <motion.div key={subItem.name} variants={mobileItemVariants}>
                                    <Link
                                      to={subItem.path}
                                      className="flex items-center space-x-2.5 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors text-sm"
                                      onClick={closeMobileMenu}
                                    >
                                      <subItem.icon size={14} className="text-primary-600" />
                                      <span className="text-sm">{subItem.name}</span>
                                    </Link>
                                  </motion.div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <motion.div variants={mobileItemVariants}>
                          <Link
                            to={item.path}
                            className="flex items-center space-x-2.5 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors text-sm"
                            onClick={closeMobileMenu}
                          >
                            <item.icon size={18} className="text-primary-600" />
                            <span className="font-medium">{item.name}</span>
                          </Link>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile Contact Info */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-gray-600">
                      <Phone size={20} className="text-primary-600" />
                      <span>+91 9533974711</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600">
                      <MessageCircle size={20} className="text-primary-600" />
                      <span>info@greatvisanetwork.com</span>
                    </div>
                    <div className="flex space-x-3 pt-3">
                      <a 
                        href="https://wa.me/919533974711" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg text-center font-medium hover:bg-green-700 transition-colors"
                      >
                        WhatsApp
                      </a>
                      <a 
                        href="tel:+919533974711"
                        className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-lg text-center font-medium hover:bg-primary-700 transition-colors"
                      >
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Waves effect - bottom */}
              <motion.div
                aria-hidden
                className="absolute inset-x-0 -bottom-4 opacity-40 rotate-180"
                animate={{ x: [0, -24, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
              >
                <svg viewBox="0 0 1440 64" xmlns="http://www.w3.org/2000/svg" className="w-full h-8">
                  <path d="M0 32L40 26.7C80 21 160 11 240 21.3C320 32 400 64 480 58.7C560 53 640 11 720 10.7C800 11 880 53 960 53.3C1040 53 1120 11 1200 5.3C1280 0 1360 21 1400 32L1440 42.7V64H0Z" fill="#e5f0ff" />
                </svg>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
