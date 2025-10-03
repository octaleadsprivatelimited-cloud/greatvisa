import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ChevronDown,
  ChevronUp,
  Heart,
  Award,
  Shield,
  Users,
  GraduationCap,
  Briefcase,
  Plane,
  FileText,
  Sparkles,
  ArrowRight,
  MessageCircle
} from 'lucide-react';

const Footer: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const footerSections = [
    {
      title: 'Visa Services',
      description: 'Comprehensive visa solutions for all your travel needs',
      icon: Globe,
      gradient: 'from-blue-500 to-cyan-500',
      links: [
        { name: 'Study Visa', path: '/study-visa', icon: GraduationCap, description: 'Pursue education abroad' },
        { name: 'Work Visa', path: '/work-visa', icon: Briefcase, description: 'Career opportunities worldwide' },
        { name: 'Tourist Visa', path: '/tourist-visa', icon: Plane, description: 'Explore the world' },
        { name: 'Family Visa', path: '/family-visa', icon: Heart, description: 'Reunite with loved ones' },
        { name: 'Business Visa', path: '/business-visa', icon: Briefcase, description: 'Expand your business' },
        { name: 'Visa Extension', path: '/visa-extension', icon: FileText, description: 'Extend your stay' }
      ]
    },
    {
      title: 'Immigration Services',
      description: 'Expert guidance for permanent settlement',
      icon: Users,
      gradient: 'from-green-500 to-emerald-500',
      links: [
        { name: 'Immigration Consultation', path: '/immigration-consultation', icon: FileText, description: 'Expert advice' },
        { name: 'Skill Assessment', path: '/skill-assessment', icon: Award, description: 'Validate your skills' },
        { name: 'Document Attestation', path: '/document-attestation', icon: Shield, description: 'Official verification' },
        { name: 'Job Placement', path: '/job-placement', icon: Users, description: 'Find your dream job' },
        { name: 'Career Guidance', path: '/careers', icon: Briefcase, description: 'Professional development' }
      ]
    },
    {
      title: 'Company',
      description: 'Learn more about our services and team',
      icon: Heart,
      gradient: 'from-purple-500 to-pink-500',
      links: [
        { name: 'About Us', path: '/about', icon: Users, description: 'Our story and mission' },
        { name: 'Our Services', path: '/services', icon: Briefcase, description: 'What we offer' },
        // removed legacy links
      ]
    },
    {
      title: 'Resources',
      description: 'Helpful information and support',
      icon: FileText,
      gradient: 'from-orange-500 to-red-500',
      links: [
        // removed legacy links
        { name: 'FAQ', path: '/faq', icon: FileText, description: 'Common questions' },
        { name: 'Contact', path: '/contact', icon: Phone, description: 'Get in touch' },
        { name: 'Sitemap', path: '/sitemap', icon: Globe, description: 'Site navigation' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/greatvisanetwork', color: 'hover:text-blue-600', bgColor: 'hover:bg-blue-600/20' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/greatvisanetwork', color: 'hover:text-blue-400', bgColor: 'hover:bg-blue-400/20' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/greatvisanetwork', color: 'hover:text-pink-600', bgColor: 'hover:bg-pink-600/20' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/greatvisanetwork', color: 'hover:text-blue-700', bgColor: 'hover:bg-blue-700/20' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/greatvisanetwork', color: 'hover:text-red-600', bgColor: 'hover:bg-red-600/20' }
  ];

  const stats = [
    { number: '5000+', label: 'Happy Clients', icon: Users },
    { number: '98%', label: 'Success Rate', icon: Award },
    { number: '50+', label: 'Countries', icon: Globe },
    { number: '24/7', label: 'Support', icon: MessageCircle }
  ];

  const FooterSection: React.FC<{ section: typeof footerSections[0] }> = ({ section }) => (
    <div className="relative group">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
      >
        {/* Header */}
        <div className="mb-3">
          <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors duration-300 mb-1">
            {section.title}
          </h3>
          <p className="text-xs text-gray-400">{section.description}</p>
        </div>

        {/* Links */}
        <div className="space-y-2">
          {section.links.slice(0, 3).map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 group/link"
            >
              <div>
                <span className="text-sm font-medium">{link.name}</span>
                <p className="text-xs text-gray-500">{link.description}</p>
              </div>
            </Link>
          ))}
          
          {section.links.length > 3 && (
            <div className="pt-2 border-t border-gray-700/50">
              <Link
                to="/services"
                className="text-xs text-blue-400 hover:text-blue-300 font-medium flex items-center space-x-1 group/view-all"
              >
                <span>View All</span>
                <ArrowRight size={12} className="group-hover/view-all:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          )}
        </div>

        {/* Hover Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r ${section.gradient} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}></div>
      </motion.div>
    </div>
  );

  const MobileFooterSection: React.FC<{ section: typeof footerSections[0] }> = ({ section }) => {
    const isExpanded = expandedSections[section.title];
    
    return (
      <div className="relative">
        <button
          onClick={() => toggleSection(section.title)}
          className="flex items-center justify-between w-full text-left p-4 rounded-lg bg-gradient-to-r from-gray-800/30 to-gray-900/30 hover:from-gray-700/30 hover:to-gray-800/30 transition-all duration-300 border border-gray-700/50"
        >
          <div>
            <h3 className="text-base font-semibold text-white">{section.title}</h3>
            <p className="text-xs text-gray-400">{section.description}</p>
          </div>
          {isExpanded ? <ChevronUp size={18} className="text-gray-400" /> : <ChevronDown size={18} className="text-gray-400" />}
        </button>
        
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-gray-800/95 backdrop-blur-sm rounded-lg border border-gray-700/50 shadow-2xl z-50 overflow-hidden"
          >
            <div className="p-2">
              {section.links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block p-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 group"
                >
                  <div>
                    <span className="text-sm font-medium group-hover:text-blue-400 transition-colors duration-300">{link.name}</span>
                    <p className="text-xs text-gray-500 mt-1">{link.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    );
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black/20"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-transparent to-black/20"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Company Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Description */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm font-semibold mb-6 border border-blue-500/30">
                <Sparkles className="w-4 h-4 mr-2" />
                GREAT Visa Network
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                We are a leading visa consultancy and recruitment agency dedicated to helping individuals 
                achieve their dreams of studying, working, and living abroad.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center p-2 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-lg font-bold text-blue-400">{stat.number}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <Phone className="w-5 h-5 mr-2 text-blue-400" />
                Get In Touch
              </h3>
              
              <div className="space-y-3">
                <a href="tel:+919533974711" className="flex items-center space-x-3 p-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone size={14} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm group-hover:text-blue-400 transition-colors duration-300">+91 9533974711</p>
                    <p className="text-gray-400 text-xs">Tap to call • Mon-Fri 9AM-6PM</p>
                  </div>
                </a>
                
                <a href="tel:+917036295334" className="flex items-center space-x-3 p-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone size={14} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm group-hover:text-blue-400 transition-colors duration-300">+91 7036295334</p>
                    <p className="text-gray-400 text-xs">Tap to call • Mon-Fri 9AM-6PM</p>
                  </div>
                </a>
                
                <div className="flex items-center space-x-3 p-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={14} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">info@greatvisanetwork.com</p>
                    <p className="text-gray-400 text-xs">24/7 Support</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={14} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Hyderabad</p>
                    <p className="text-gray-400 text-xs">Telangana, India</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={14} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Office Hours</p>
                    <p className="text-gray-400 text-xs">Mon-Fri: 9AM-6PM, Sat: 10AM-4PM</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Social Media */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2 text-purple-400" />
                Follow Us
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 bg-white/5 rounded-lg border border-white/10 transition-all duration-300 ${social.bgColor} hover:scale-105 hover:shadow-lg group`}
                    aria-label={social.name}
                  >
                    <social.icon size={16} className={`text-gray-400 ${social.color} transition-colors duration-300`} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <MessageCircle className="w-5 h-5 mr-2 text-green-400" />
                Stay Updated
              </h3>
              
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-4 border border-blue-500/30">
                <p className="text-gray-300 mb-3 text-sm">
                  Subscribe for latest updates.
                </p>
                
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                  />
                  <button 
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                    title="Subscribe to newsletter"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
                
                <p className="text-xs text-gray-400 mt-2">
                  We respect your privacy.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Desktop Mega Menu Sections */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {footerSections.map((section, index) => (
            <FooterSection key={section.title} section={section} />
          ))}
        </div>

        {/* Mobile Dropdown Sections */}
        <div className="lg:hidden space-y-4">
          {footerSections.map((section) => (
            <MobileFooterSection key={section.title} section={section} />
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800/50 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} GREAT Visa Network. All rights reserved.</p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <a 
                href="https://www.octaleads.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2"
              >
                <span>Designed and developed by</span>
                <span className="font-medium text-blue-400 hover:text-blue-300">Octaleads Pvt Ltd</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;