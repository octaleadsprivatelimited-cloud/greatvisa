import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Study Visa', path: '/study-visa' },
    { name: 'Work Visa', path: '/work-visa' },
    { name: 'Tourist Visa', path: '/tourist-visa' },
    { name: 'Family Visa', path: '/family-visa' },
    { name: 'Business Visa', path: '/business-visa' },
    { name: 'Immigration', path: '/immigration-consultation' }
  ];

  const company = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', gradient: 'from-blue-600 to-blue-700' },
    { name: 'Instagram', icon: Instagram, href: '#', gradient: 'from-pink-600 to-purple-600' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', gradient: 'from-blue-700 to-blue-800' },
    { name: 'Twitter', icon: Twitter, href: '#', gradient: 'from-sky-500 to-blue-500' },
    { name: 'YouTube', icon: Youtube, href: '#', gradient: 'from-red-600 to-red-700' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img
                src="/logo.png"
                alt="GREAT Visa Network"
                className="h-16 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/80 mb-6 text-lg font-medium leading-relaxed">
              Your trusted partner for visa consultancy & immigration services. 
              Making international dreams come true!
            </p>
            
            {/* Contact Info - Modern Cards */}
            <div className="space-y-4">
              <a 
                href="tel:+919533974711" 
                className="group flex items-center space-x-3 glass-effect p-4 rounded-2xl hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone size={20} />
                </div>
                <span className="font-bold text-lg">+91 9533 974 711</span>
              </a>
              <a 
                href="mailto:info@greatvisanetwork.com"
                className="group flex items-center space-x-3 glass-effect p-4 rounded-2xl hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <span className="font-bold text-lg">info@greatvisanetwork.com</span>
              </a>
              <div className="flex items-start space-x-3 glass-effect p-4 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <span className="font-bold text-lg">Hyderabad, Telangana, India</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xl font-black mb-6 text-gradient-rainbow">Services</h3>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center text-white/70 hover:text-white transition-colors font-semibold"
                  >
                    <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-2xl font-black mb-6 text-gradient-rainbow">Company</h3>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center text-white/70 hover:text-white transition-colors font-semibold"
                  >
                    <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links - Creative Design */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div>
              <p className="text-white/60 font-semibold mb-3">Follow Us</p>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group w-12 h-12 bg-gradient-to-br ${social.gradient} rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
                    aria-label={social.name}
                  >
                    <social.icon size={20} className="group-hover:rotate-12 transition-transform" />
                  </a>
                ))}
              </div>
          </div>

            {/* Newsletter - Creative */}
            <div className="text-center md:text-right">
              <p className="text-white/60 font-semibold mb-3">Stay Updated</p>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span>Subscribe Now</span>
                <ArrowRight size={18} className="ml-2" />
              </a>
              </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-white/60 font-semibold">
            <p>
              © {currentYear} GREAT Visa Network. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;