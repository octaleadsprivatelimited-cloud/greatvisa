import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle, ArrowRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Canada',
      text: 'GREAT Visa Network helped me secure my study visa to Canada. Their team was professional, knowledgeable, and supportive throughout the entire process.',
      rating: 5,
      country: '🇨🇦',
      service: 'Study Visa'
    },
    {
      name: 'Rahul Kumar',
      location: 'Australia',
      text: 'I got my work visa to Australia within 3 months thanks to their excellent service. Highly recommended for anyone looking to work abroad.',
      rating: 5,
      country: '🇦🇺',
      service: 'Work Visa'
    },
    {
      name: 'Sunita Patel',
      location: 'UK',
      text: 'The family visa process seemed complex, but GREAT Visa Network made it simple and stress-free. Now my family is reunited in the UK.',
      rating: 5,
      country: '🇬🇧',
      service: 'Family Visa'
    },
    {
      name: 'Amit Singh',
      location: 'USA',
      text: 'Their business visa assistance was outstanding. They guided me through every step and I got my visa approved in record time.',
      rating: 5,
      country: '🇺🇸',
      service: 'Business Visa'
    },
    {
      name: 'Deepika Reddy',
      location: 'Germany',
      text: 'The immigration consultation service was incredibly helpful. They provided clear guidance and helped me choose the right path.',
      rating: 5,
      country: '🇩🇪',
      service: 'Immigration Consultation'
    },
    {
      name: 'Vikram Joshi',
      location: 'New Zealand',
      text: 'Job placement service exceeded my expectations. They not only helped with the visa but also found me a great job opportunity.',
      rating: 5,
      country: '🇳🇿',
      service: 'Job Placement'
    }
  ];

  const stats = [
    { number: '5000+', label: 'Happy Clients', icon: CheckCircle },
    { number: '98%', label: 'Success Rate', icon: Star },
    { number: '50+', label: 'Countries', icon: CheckCircle },
    { number: '24/7', label: 'Support', icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/home/slider-1.jpg"
            alt="Success Stories Background"
            className="w-full h-full object-cover object-[center_40%]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-indigo-900/80 to-purple-900/80"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6 border border-white/30">
              <Star className="w-4 h-4 mr-2 fill-current" />
              Client Testimonials
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Stories</span>
            </h1>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Real stories from real people who achieved their dreams with our help. Your success story could be next.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
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
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-lg text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  {/* Quote Icon */}
                  <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <Quote size={16} className="text-white" />
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-amber-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  
                  {/* Service Badge */}
                  <div className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    {testimonial.service}
                  </div>
                  
                  {/* Client Info */}
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <div className="text-2xl mr-3">{testimonial.country}</div>
                      <div>
                        <div className="font-bold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.location}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 bg-pattern-grid"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Write Your <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Success Story?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Join thousands of satisfied clients who achieved their immigration dreams with our expert guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>Get Free Consultation</span>
                <ArrowRight size={18} className="ml-2" />
              </a>
              
              <a
                href="/services"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                <span>Explore Services</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;