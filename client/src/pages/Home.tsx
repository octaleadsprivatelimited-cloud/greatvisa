import React from 'react';
import Hero from '../components/Hero';
import { 
  Users, 
  Award, 
  ArrowRight,
  Star,
  Sparkles,
  Zap,
  Shield,
  Phone
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const services = [
    { 
      title: 'Study Visa', 
      desc: 'Top universities worldwide', 
      link: '/study-visa', 
      gradient: 'from-blue-500 to-cyan-500', 
      size: 'large',
      image: '/services/study_visa.jpg'
    },
    { 
      title: 'Work Visa', 
      desc: 'Career opportunities', 
      link: '/work-visa', 
      gradient: 'from-emerald-500 to-teal-500', 
      size: 'small',
      image: '/services/word_visa.jpg'
    },
    { 
      title: 'Tourist Visa', 
      desc: 'Explore the world', 
      link: '/tourist-visa', 
      gradient: 'from-orange-500 to-red-500', 
      size: 'small',
      image: '/services/tourist_visa.jpeg'
    },
    { 
      title: 'Family Visa', 
      desc: 'Reunite with loved ones', 
      link: '/family-visa', 
      gradient: 'from-pink-500 to-rose-500', 
      size: 'medium',
      image: '/services/family_visa.jpg'
    },
    { 
      title: 'Business Visa', 
      desc: 'Expand globally', 
      link: '/business-visa', 
      gradient: 'from-purple-500 to-indigo-500', 
      size: 'medium',
      image: '/services/businessvisa.jpg'
    },
    { 
      title: 'Immigration', 
      desc: 'Expert consultation', 
      link: '/immigration-consultation', 
      gradient: 'from-amber-500 to-yellow-500', 
      size: 'medium',
      image: '/services/immigration.jpg'
    }
  ];

  const features = [
    { icon: Shield, title: 'Trusted', desc: 'Bank-level security', color: 'from-green-500 to-emerald-500' },
    { icon: Zap, title: 'Fast', desc: 'Quick processing', color: 'from-yellow-500 to-orange-500' },
    { icon: Award, title: '98% Success', desc: 'Proven track record', color: 'from-purple-500 to-pink-500' },
    { icon: Users, title: '5K+ Clients', desc: 'Happy customers', color: 'from-blue-500 to-cyan-500' }
  ];

  const testimonials = [
    { name: 'Priya S.', role: 'Student', country: 'Canada', text: 'Amazing service! Got my study visa in 2 months.', rating: 5 },
    { name: 'Rahul K.', role: 'Engineer', country: 'Australia', text: 'Professional team, smooth process throughout.', rating: 5 },
    { name: 'Sunita P.', role: 'Business Owner', country: 'United Kingdom', text: 'Family reunited thanks to GREAT Visa Network!', rating: 5 }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Hero />

      {/* Features Section - Creative Grid */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full font-bold mb-6">
              <Sparkles size={20} />
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Success is{' '}
              <span className="text-gradient-neon">Our Mission</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group glass-card p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Bento Box Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Services
            </h2>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-3xl ${
                  service.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
                  service.size === 'medium' ? 'md:col-span-1 md:row-span-2' : 
                  'md:col-span-1'
                }`}
              >
                <Link
                  to={service.link}
                  className={`block h-full min-h-[250px] relative overflow-hidden hover:scale-[1.02] transition-all duration-500`}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Dark Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40 group-hover:from-black/70 transition-all duration-500"></div>
                  </div>
                  
                  <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8">
                    <div>
                      <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl mb-3 border border-white/20">
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">{service.title}</h3>
                      </div>
                      <p className="text-white font-semibold text-base md:text-lg drop-shadow-xl">{service.desc}</p>
                    </div>
                    <div className="flex items-center text-white font-bold group-hover:translate-x-2 transition-transform duration-300">
                      <span>Learn More</span>
                      <ArrowRight size={20} className="ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <span>View All Services</span>
              <ArrowRight size={24} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Bold & Modern */}
      <section className="py-20 bg-aurora relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-2xl text-white/90 font-semibold">
              Join the success stories
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: '5,000+', label: 'Happy Clients' },
              { icon: Award, value: '98%', label: 'Success Rate' },
              { icon: Shield, value: '50+', label: 'Countries' },
              { icon: Zap, value: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center glass-effect p-8 rounded-3xl hover:scale-110 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={32} className="text-white" />
                </div>
                <div className="text-5xl md:text-6xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-lg text-white/90 font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Creative Timeline */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-16"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full font-bold mb-4 md:mb-6 text-sm md:text-base">
              <Zap size={16} className="md:w-5 md:h-5" />
              <span>Our Process</span>
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Simple, Fast,{' '}
              <span className="text-gradient-neon">Effective</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { step: '01', title: 'Free Consult', desc: 'Book your free consultation' },
              { step: '02', title: 'Documents', desc: 'We prepare everything' },
              { step: '03', title: 'Submit', desc: 'Application submitted' },
              { step: '04', title: 'Success!', desc: 'Visa approved!' }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="glass-card p-4 md:p-8 rounded-2xl md:rounded-3xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className="text-4xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-200 to-purple-300 mb-3 md:mb-6">
                    {process.step}
                  </div>
                  <h3 className="text-base md:text-xl font-bold text-gray-900 mb-1 md:mb-2">{process.title}</h3>
                  <p className="text-xs md:text-base text-gray-600 font-semibold">{process.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Modern Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 rounded-full font-bold mb-6">
              <Star size={20} className="fill-current" />
              <span>Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Clients Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 font-semibold text-lg mb-6 italic">
                  "{testimonial.text}"
                </p>
                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <div>
                      <div className="font-black text-gray-900 text-lg">{testimonial.name}</div>
                      <div className="text-gray-600 font-semibold">{testimonial.role}</div>
                    </div>
                    <div className="text-sm font-bold text-gray-500">{testimonial.country}</div>
                  </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Bold & Impactful */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -180, -360],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Start Your
              <br />
              <span className="text-yellow-300">Dream Journey?</span>
            </h2>
            <p className="text-2xl text-white/90 mb-12 font-semibold">
              Don't wait! Your future starts today
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center bg-white text-purple-600 hover:bg-yellow-300 hover:text-purple-900 px-12 py-6 rounded-2xl font-black text-xl transition-all duration-300 hover:scale-110 shadow-2xl"
              >
                <Sparkles size={24} className="mr-3 group-hover:rotate-12 transition-transform" />
                <span>Get Free Consultation</span>
                <ArrowRight size={24} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </Link>
              
              <a
                href="tel:+919533974711"
                className="inline-flex items-center justify-center bg-transparent border-4 border-white text-white hover:bg-white hover:text-purple-600 px-12 py-6 rounded-2xl font-black text-xl transition-all duration-300 hover:scale-110"
              >
                <Phone size={24} className="mr-3" />
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