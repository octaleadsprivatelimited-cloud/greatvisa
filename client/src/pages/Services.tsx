import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Briefcase, 
  Plane, 
  Heart, 
  Building2,
  UserCheck,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Shield,
  Award,
  Globe,
  Users
} from 'lucide-react';
import { updatePageSEO } from '../utils/seo';

const Services: React.FC = () => {
  useEffect(() => {
    updatePageSEO(
      'Visa Services - Study, Work, Tourist & Immigration',
      'Comprehensive visa services in Hyderabad including study visa, work visa, tourist visa, family visa, business visa, and immigration consultation for all countries.',
      [
        'visa services Hyderabad',
        'study visa services',
        'work visa services',
        'tourist visa services',
        'family visa services',
        'business visa services',
        'immigration consultation',
        'visa processing services',
        'all visa services',
        'comprehensive visa solutions',
        'student visa assistance',
        'work permit services',
        'PR visa services',
        'skilled migration services',
        'visa application services',
        'overseas visa services',
        'international visa services',
        'visa documentation help',
        'visa consultancy services Hyderabad'
      ]
    );
  }, []);

  const services = [
    {
      icon: GraduationCap,
      title: 'Study Visa',
      description: 'Secure your place at top universities worldwide with our expert study visa assistance.',
      features: ['University Selection', 'Visa Application', 'Documentation Support', 'Interview Preparation'],
      image: '/services/study_visa.jpg',
      link: '/study-visa',
      gradient: 'from-blue-500 to-cyan-500',
      iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-500',
      successRate: '98%'
    },
    {
      icon: Briefcase,
      title: 'Work Visa',
      description: 'Advance your career with international work opportunities and professional visa services.',
      features: ['Job Placement', 'Visa Processing', 'Skill Assessment', 'Relocation Support'],
      image: '/services/word_visa.jpg',
      link: '/work-visa',
      gradient: 'from-emerald-500 to-teal-500',
      iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-500',
      successRate: '98%'
    },
    {
      icon: Plane,
      title: 'Tourist Visa',
      description: 'Explore the world with our hassle-free tourist visa processing services.',
      features: ['Quick Processing', 'Multiple Destinations', 'Travel Insurance', '24/7 Support'],
      image: '/services/tourist_visa.jpeg',
      link: '/tourist-visa',
      gradient: 'from-orange-500 to-red-500',
      iconBg: 'bg-gradient-to-br from-orange-500 to-red-500',
      successRate: '99%'
    },
    {
      icon: Heart,
      title: 'Family Visa',
      description: 'Reunite with your loved ones through our comprehensive family visa services.',
      features: ['Family Reunification', 'Spouse Visa', 'Parent Visa', 'Child Visa'],
      image: '/services/family_visa.jpg',
      link: '/family-visa',
      gradient: 'from-pink-500 to-rose-500',
      iconBg: 'bg-gradient-to-br from-pink-500 to-rose-500',
      successRate: '98%'
    },
    {
      icon: Building2,
      title: 'Business Visa',
      description: 'Expand your business globally with our professional business visa solutions.',
      features: ['Business Setup', 'Investment Visa', 'Entrepreneur Visa', 'Trade Visa'],
      image: '/services/businessvisa.jpg',
      link: '/business-visa',
      gradient: 'from-purple-500 to-indigo-500',
      iconBg: 'bg-gradient-to-br from-purple-500 to-indigo-500',
      successRate: '98%'
    },
    {
      icon: UserCheck,
      title: 'Immigration Consultation',
      description: 'Get expert advice on all immigration matters from our certified consultants.',
      features: ['Free Consultation', 'Case Assessment', 'Strategy Planning', 'Ongoing Support'],
      image: '/services/immigration.jpg',
      link: '/immigration-consultation',
      gradient: 'from-amber-500 to-yellow-500',
      iconBg: 'bg-gradient-to-br from-amber-500 to-yellow-500',
      successRate: '100%'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Your documents and personal information are protected with bank-level security.',
      color: 'text-green-500'
    },
    {
      icon: Award,
      title: '98% Success Rate',
      description: 'Our proven track record speaks for itself with consistently high success rates.',
      color: 'text-amber-500'
    },
    {
      icon: Sparkles,
      title: 'Expert Guidance',
      description: 'Our certified consultants provide personalized guidance every step of the way.',
      color: 'text-purple-500'
    }
  ];

  const stats = [
    { number: '5000+', label: 'Successful Applications', icon: CheckCircle, color: 'text-emerald-500' },
    { number: '98%', label: 'Success Rate', icon: Award, color: 'text-amber-500' },
    { number: '50+', label: 'Countries Covered', icon: Globe, color: 'text-blue-500' },
    { number: '24/7', label: 'Customer Support', icon: Users, color: 'text-purple-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/home/slider-1.jpg"
            alt="Services Background"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-indigo-900/80 to-purple-900/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 border border-white/30">
              <Sparkles className="w-5 h-5 mr-2" />
              Our Services
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Comprehensive <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Visa Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
              From study abroad dreams to career opportunities, we provide comprehensive visa services tailored to your unique needs.
            </p>
            <div className="flex flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-gray-100 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span>Get Free Consultation</span>
                <ArrowRight size={16} className="ml-2" />
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105"
              >
                <span>Learn More About Us</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Why Choose Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6">
              Excellence in Every <span className="text-blue-600">Service</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine expertise, technology, and personalized service to make your immigration journey smooth and successful.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/50 hover:bg-white/80 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6 border border-white/30">
              <Sparkles className="w-5 h-5 mr-2" />
              Our Premium Services
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Visa Solutions That <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Professional visa and immigration services tailored to your needs with proven success rates.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border border-white/20 overflow-hidden">
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl`}></div>
                  
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      style={{ objectPosition: 'center 30%' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Icon */}
                    <div className="absolute top-4 left-4">
                      <div className={`w-12 h-12 ${service.iconBg} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon size={24} className="text-white" />
                      </div>
                    </div>

                    {/* Success Rate Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-white/30">
                        {service.successRate} Success
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-5 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features List */}
                    <div className="space-y-3 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <CheckCircle size={12} className="text-green-600" />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <a
                      href={service.link}
                      className={`inline-flex items-center justify-center w-full py-3 px-4 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 group-hover:shadow-xl`}
                    >
                      <span>Learn More</span>
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Numbers That <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Speak</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Our track record of success speaks for itself. Join thousands of satisfied clients who achieved their dreams.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/20">
                    <stat.icon className={`w-10 h-10 ${stat.color}`} />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-lg text-blue-200 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6 border border-white/30">
              <Sparkles className="w-4 h-4 mr-2" />
              Ready to Get Started?
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Start Your <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Journey Today</span>
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Don't let bureaucracy stand in your way. Our expert team is ready to guide you through every step of your immigration journey.
            </p>
            
            <div className="flex flex-row gap-6 justify-center items-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Get Free Consultation
                <ArrowRight size={16} className="ml-2" />
              </a>
              
              <a
                href="/about"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105"
              >
                <span>Learn About Us</span>
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">SSL Secured</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">98% Success Rate</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">5000+ Happy Clients</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;