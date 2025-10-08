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
            {/* Mobile: Phone + WhatsApp | Desktop: Phone + Email */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <a href="tel:+919533974711" className="flex items-center space-x-1 md:space-x-1.5 hover:text-white/80 transition-colors group">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Phone size={10} className="md:w-3 md:h-3" strokeWidth={2.5} />
                </div>
                <span className="font-medium text-[10px] md:text-xs">+91 9533 974 711</span>
              </a>
              <a href="mailto:info@greatvisanetwork.com" className="hidden md:flex items-center space-x-1.5 hover:text-white/80 transition-colors group">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Mail size={12} strokeWidth={2.5} />
                </div>
                <span className="font-medium">info@greatvisanetwork.com</span>
              </a>
            </div>
            {/* Mobile: WhatsApp Button | Desktop: Consultation Button */}
            <div className="flex items-center">
              <a 
                href="https://wa.me/919533974711"
                target="_blank"
                rel="noopener noreferrer"
                className="md:hidden group inline-flex items-center space-x-1 bg-white text-green-600 hover:bg-white/90 px-3 py-1 rounded-full text-[10px] font-bold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>WhatsApp</span>
              </a>
              <a 
                href="/contact"
                className="hidden md:inline-flex group items-center space-x-1.5 bg-white text-indigo-600 hover:bg-white/90 px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 hover:scale-105 shadow-lg"
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
        className={`sticky top-0 z-50 transition-all duration-300 relative ${
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
                  src="/logo.webp"
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
                      onMouseEnter={() => setActiveDropdown(null)}
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
          <>
            {/* Overlay below header only - Desktop Only */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="hidden lg:block fixed top-[96px] left-0 right-0 bottom-0 z-40 bg-black/60 backdrop-blur-md"
              onClick={() => setActiveDropdown(null)}
            />
            
            {/* Dropdown content - Desktop Only */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="hidden lg:block fixed top-[96px] left-0 right-0 z-50 bg-gradient-to-br from-white via-slate-50 to-indigo-50/30 shadow-2xl border-b border-slate-200"
              onClick={(e) => e.stopPropagation()}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
                {/* Header */}
                <div className="mb-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Our Services
                  </h3>
                  <p className="text-sm text-gray-600">Choose the service that fits your needs</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  {/* Visa Services */}
                  <div>
                    <div className="flex items-center mb-3">
                      <div className="w-1.5 h-6 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full mr-2"></div>
                      <h4 className="text-sm font-bold text-gray-900">Visa Services</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {servicesCategories.visaServices.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          onClick={() => setActiveDropdown(null)}
                          className="group relative overflow-hidden p-4 rounded-xl bg-white hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50 border border-slate-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg"
                        >
                          <div className="relative">
                            <h5 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">
                              {service.name}
                            </h5>
                            <p className="text-xs text-gray-600 leading-relaxed">{service.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Consultation Services */}
                  <div>
                    <div className="flex items-center mb-3">
                      <div className="w-1.5 h-6 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full mr-2"></div>
                      <h4 className="text-sm font-bold text-gray-900">Consultation Services</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {servicesCategories.consultationServices.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          onClick={() => setActiveDropdown(null)}
                          className="group relative overflow-hidden p-4 rounded-xl bg-white hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 border border-slate-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg"
                        >
                          <div className="relative">
                            <h5 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                              {service.name}
                            </h5>
                            <p className="text-xs text-gray-600 leading-relaxed">{service.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA Banner */}
                <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl p-5 text-center text-white">
                  <h4 className="text-lg font-bold mb-2">Not Sure Which Service You Need?</h4>
                  <p className="text-white/90 mb-4 text-sm">Get a free consultation with our experts</p>
                  <Link
                    to="/contact"
                    onClick={() => setActiveDropdown(null)}
                    className="inline-flex items-center px-6 py-2.5 bg-white text-indigo-600 hover:bg-yellow-300 hover:text-purple-900 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <span>Get Free Consultation</span>
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
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
            className="lg:hidden fixed top-[116px] left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40 max-h-[calc(100vh-116px)] overflow-y-auto"
          >
            <div className="px-3 py-2">
              <nav className="space-y-0.5">
                {mainNavigation.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown('services')}
                          className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-gray-900 hover:bg-slate-50 rounded-lg transition-all duration-200"
                        >
                          <span>{item.name}</span>
                          <ChevronDown 
                            size={14} 
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
                              className="mt-1 space-y-0.5 bg-slate-50 rounded-lg p-1.5"
                            >
                              <div className="text-[10px] font-bold text-indigo-600 px-2 py-1 uppercase tracking-wider">Visa Services</div>
                              {servicesCategories.visaServices.map((service) => (
                                <Link
                                  key={service.name}
                                  to={service.path}
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setActiveDropdown(null);
                                  }}
                                  className="block px-2 py-1.5 text-[11px] text-gray-700 hover:bg-white hover:text-indigo-600 rounded transition-all duration-200 font-medium"
                                >
                                  {service.name}
                                </Link>
                              ))}
                              <div className="text-[10px] font-bold text-purple-600 px-2 py-1 mt-1 uppercase tracking-wider">Consultation Services</div>
                              {servicesCategories.consultationServices.map((service) => (
                                <Link
                                  key={service.name}
                                  to={service.path}
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setActiveDropdown(null);
                                  }}
                                  className="block px-2 py-1.5 text-[11px] text-gray-700 hover:bg-white hover:text-purple-600 rounded transition-all duration-200 font-medium"
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
                        className={`block px-3 py-2 text-xs font-semibold rounded-lg transition-all duration-200 ${
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