import React from 'react';
import Hero from '../components/Hero';
import { 
  GraduationCap, 
  Briefcase, 
  Plane, 
  Heart, 
  Building2, 
  Users, 
  Award, 
  CheckCircle,
  ArrowRight,
  Star,
  Quote,
  Shield,
  Zap,
  Clock,
  HeadphonesIcon,
  FileCheck,
  Globe,
  TrendingUp,
  Phone
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const services = [
    {
      icon: GraduationCap,
      title: 'Study Visa',
      description: 'Pursue your academic dreams at world-class universities with our expert study visa assistance.',
      link: '/study-visa',
      gradient: 'from-blue-600 to-cyan-600',
      features: ['University Selection', 'Visa Application', 'Documentation']
    },
    {
      icon: Briefcase,
      title: 'Work Visa',
      description: 'Advance your career internationally with our comprehensive work visa solutions.',
      link: '/work-visa',
      gradient: 'from-emerald-600 to-teal-600',
      features: ['Job Matching', 'Visa Processing', 'Relocation Support']
    },
    {
      icon: Plane,
      title: 'Tourist Visa',
      description: 'Explore the world hassle-free with our streamlined tourist visa services.',
      link: '/tourist-visa',
      gradient: 'from-orange-600 to-red-600',
      features: ['Quick Processing', 'Multiple Destinations', '24/7 Support']
    },
    {
      icon: Heart,
      title: 'Family Visa',
      description: 'Reunite with your loved ones through our compassionate family visa services.',
      link: '/family-visa',
      gradient: 'from-pink-600 to-rose-600',
      features: ['Family Reunification', 'Spouse Visa', 'Parent Visa']
    },
    {
      icon: Building2,
      title: 'Business Visa',
      description: 'Expand your business globally with our professional business visa support.',
      link: '/business-visa',
      gradient: 'from-purple-600 to-indigo-600',
      features: ['Business Setup', 'Investment Visa', 'Trade Visa']
    },
    {
      icon: Users,
      title: 'Immigration Consultation',
      description: 'Get expert guidance on all immigration matters from certified consultants.',
      link: '/immigration-consultation',
      gradient: 'from-amber-600 to-yellow-600',
      features: ['Free Consultation', 'Case Assessment', 'Strategy Planning']
    }
  ];

  const stats = [
    { icon: Users, value: '5,000+', label: 'Happy Clients', color: 'text-blue-600', bg: 'bg-blue-50' },
    { icon: Award, value: '98%', label: 'Success Rate', color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { icon: Globe, value: '50+', label: 'Countries', color: 'text-purple-600', bg: 'bg-purple-50' },
    { icon: Clock, value: '24/7', label: 'Support', color: 'text-orange-600', bg: 'bg-orange-50' }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Trusted & Secure',
      description: 'Your documents and personal information are protected with bank-level security measures.',
      color: 'text-green-600',
      bg: 'bg-green-50'
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Streamlined application process ensures quick visa approvals without compromising accuracy.',
      color: 'text-yellow-600',
      bg: 'bg-yellow-50'
    },
    {
      icon: HeadphonesIcon,
      title: 'Expert Support',
      description: 'Certified consultants provide personalized guidance throughout your immigration journey.',
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      icon: FileCheck,
      title: 'High Success Rate',
      description: '98% visa approval rate backed by years of experience and industry expertise.',
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Student',
      location: 'Canada',
      text: 'GREAT Visa Network made my dream of studying in Canada a reality. Their team was professional, knowledgeable, and supportive throughout the entire process. Highly recommend!',
      rating: 5,
      flag: '🇨🇦',
      image: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=3b82f6&color=fff'
    },
    {
      name: 'Rahul Kumar',
      role: 'Software Engineer',
      location: 'Australia',
      text: 'I got my work visa to Australia within 3 months thanks to their excellent service. The entire process was smooth and stress-free. Thank you for helping me advance my career!',
      rating: 5,
      flag: '🇦🇺',
      image: 'https://ui-avatars.com/api/?name=Rahul+Kumar&background=10b981&color=fff'
    },
    {
      name: 'Sunita Patel',
      role: 'Business Owner',
      location: 'United Kingdom',
      text: 'The family visa process seemed complex, but GREAT Visa Network made it simple and stress-free. Now my family is happily reunited in the UK. Forever grateful!',
      rating: 5,
      flag: '🇬🇧',
      image: 'https://ui-avatars.com/api/?name=Sunita+Patel&background=8b5cf6&color=fff'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Free Consultation',
      description: 'Book a free consultation with our experts to discuss your immigration goals and eligibility.'
    },
    {
      step: '02',
      title: 'Document Preparation',
      description: 'We help you gather and prepare all necessary documents for your visa application.'
    },
    {
      step: '03',
      title: 'Application Submission',
      description: 'Our team submits your application and tracks its progress at every stage.'
    },
    {
      step: '04',
      title: 'Visa Approval',
      description: 'Celebrate your visa approval and get ready for your international journey!'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6">
              <Star className="w-4 h-4 mr-2" />
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Your Trusted Immigration Partner
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We combine expertise, technology, and personalized service to make your immigration journey smooth and successful.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200"
              >
                <div className={`w-16 h-16 ${feature.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6">
              <Briefcase className="w-4 h-4 mr-2" />
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Comprehensive Visa Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From study abroad dreams to career opportunities, we provide tailored visa services for all your international needs.
            </p>
          </motion.div>

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
                <div className="relative h-full bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 overflow-hidden">
                  {/* Gradient Header */}
                  <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                  
                  <div className="p-8">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <service.icon size={32} className="text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features List */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-slate-600">
                          <CheckCircle size={16} className="text-green-600 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <Link
                      to={service.link}
                      className={`inline-flex items-center justify-center w-full py-3 px-4 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105`}
                    >
                      <span>Learn More</span>
                      <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>View All Services</span>
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Our track record speaks for itself. Join thousands of satisfied clients who achieved their dreams.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`w-20 h-20 ${stat.bg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`w-10 h-10 ${stat.color}`} />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-lg text-blue-200 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              Our Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Simple, transparent, and effective. Our proven 4-step process ensures your visa success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full border border-slate-200">
                  <div className="text-6xl font-bold text-blue-100 mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="text-blue-300" size={32} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-sm font-semibold mb-6">
              <Star className="w-4 h-4 mr-2 fill-current" />
              Client Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real stories from real people who achieved their dreams with our help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 h-full flex flex-col">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="text-amber-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <div className="flex-grow mb-6">
                    <Quote size={32} className="text-blue-200 mb-4" />
                    <p className="text-slate-600 italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </div>
                  
                  {/* Client Info */}
                  <div className="flex items-center pt-6 border-t border-slate-200">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div className="flex-grow">
                      <div className="font-bold text-slate-900">{testimonial.name}</div>
                      <div className="text-sm text-slate-600">{testimonial.role}</div>
                    </div>
                    <div className="text-3xl">{testimonial.flag}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Don't let bureaucracy stand in your way. Our expert team is ready to guide you through every step.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>Get Free Consultation</span>
                <ArrowRight size={20} className="ml-2" />
              </Link>
              
              <a
                href="tel:+919533974711"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                <Phone size={20} className="mr-2" />
                <span>Call Us Now</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;