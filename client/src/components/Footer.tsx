import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ChevronRight,
  Globe,
  Award,
  Shield
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const visaServices = [
    { name: 'Study Visa', path: '/study-visa' },
    { name: 'Work Visa', path: '/work-visa' },
    { name: 'Tourist Visa', path: '/tourist-visa' },
    { name: 'Family Visa', path: '/family-visa' },
    { name: 'Business Visa', path: '/business-visa' },
    { name: 'Visa Extension', path: '/visa-extension' }
  ];

  const consultingServices = [
    { name: 'Immigration Consultation', path: '/immigration-consultation' },
    { name: 'Job Placement', path: '/job-placement' },
    { name: 'Skill Assessment', path: '/skill-assessment' },
    { name: 'Document Attestation', path: '/document-attestation' }
  ];

  const company = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' }
  ];

  const support = [
    { name: 'Contact Us', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms-of-service' },
    { name: 'Sitemap', path: '/sitemap' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:bg-blue-600' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:bg-pink-600' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:bg-blue-700' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:bg-sky-500' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:bg-red-600' }
  ];

  const trustBadges = [
    { icon: Award, text: '98% Success Rate' },
    { icon: Shield, text: 'Secure & Trusted' },
    { icon: Globe, text: '50+ Countries' }
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-8">
            {/* Company Info - 2 cols */}
            <div className="lg:col-span-2">
              <Link to="/" className="inline-block mb-6">
                <img
                  src="/logo.webp"
                  alt="GREAT Visa Network"
                  className="h-12 w-auto brightness-0 invert opacity-90"
                />
              </Link>
              <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                Your trusted partner for visa consultancy and immigration services. 
                We help individuals and businesses achieve their international goals 
                with expert guidance and proven success.
              </p>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                {trustBadges.map((badge, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-slate-800/50 px-3 py-2 rounded-lg">
                    <badge.icon size={16} className="text-blue-400" />
                    <span className="text-xs font-medium text-slate-300">{badge.text}</span>
                  </div>
                ))}
              </div>

              {/* Social Links */}
                  <div>
                <p className="text-sm font-semibold text-slate-400 mb-3">Connect With Us</p>
                <div className="flex space-x-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                      className={`w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 ${social.color} hover:text-white transition-all duration-300`}
                    aria-label={social.name}
                  >
                      <social.icon size={18} />
                  </a>
                ))}
                </div>
              </div>
          </div>

            {/* Visa Services - 1 col */}
          <div className="lg:col-span-1">
              <h3 className="text-white text-lg font-bold mb-6">Visa Services</h3>
              <ul className="space-y-3">
                {visaServices.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="group inline-flex items-center text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      <ChevronRight size={14} className="mr-1 group-hover:translate-x-1 transition-transform" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Consulting Services - 1 col */}
            <div className="lg:col-span-1">
              <h3 className="text-white text-lg font-bold mb-6">Consulting Services</h3>
              <ul className="space-y-3">
                {consultingServices.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="group inline-flex items-center text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      <ChevronRight size={14} className="mr-1 group-hover:translate-x-1 transition-transform" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
                </div>
                
            {/* Company - 1 col */}
            <div className="lg:col-span-1">
              <h3 className="text-white text-lg font-bold mb-6">Company</h3>
              <ul className="space-y-3">
                {company.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="group inline-flex items-center text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      <ChevronRight size={14} className="mr-1 group-hover:translate-x-1 transition-transform" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support - 1 col */}
            <div className="lg:col-span-1">
              <h3 className="text-white text-lg font-bold mb-6">Support</h3>
              <ul className="space-y-3">
                {support.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="group inline-flex items-center text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      <ChevronRight size={14} className="mr-1 group-hover:translate-x-1 transition-transform" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              </div>
          </div>
        </div>
        </div>

      {/* Contact Bar */}
      <div className="bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="text-blue-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Call Us</p>
                <a href="tel:+919533974711" className="text-white font-semibold hover:text-blue-400 transition-colors">
                  +91 9533 974 711
                </a>
        </div>
      </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail size={20} className="text-blue-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Email Us</p>
                <a href="mailto:info@greatvisanetwork.com" className="text-white font-semibold hover:text-blue-400 transition-colors">
                  info@greatvisanetwork.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock size={20} className="text-blue-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Working Hours</p>
                <p className="text-white font-semibold text-sm">Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
            <p className="text-slate-500">
              © {currentYear} <span className="text-white font-semibold">GREAT Visa Network</span>. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link to="/privacy-policy" className="text-slate-500 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link to="/terms-of-service" className="text-slate-500 hover:text-white transition-colors">
                Terms
              </Link>
              <Link to="/sitemap" className="text-slate-500 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;