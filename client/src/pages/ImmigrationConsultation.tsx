import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, CheckCircle, Clock, Shield, ArrowRight, Award } from 'lucide-react';
import { updatePageSEO } from '../utils/seo';

const ImmigrationConsultation: React.FC = () => {
  useEffect(() => {
    updatePageSEO(
      'Immigration Consultation Services Hyderabad',
      'Free immigration consultation services in Hyderabad. Expert advice on visa pathways, immigration options, and case assessment for all countries.',
      [
        'immigration consultation Hyderabad',
        'free immigration consultation',
        'immigration consultants',
        'visa consultation services',
        'immigration advice Hyderabad',
        'immigration pathway assessment',
        'immigration case evaluation',
        'immigration planning services',
        'immigration expert consultation',
        'visa advisory services',
        'immigration guidance Hyderabad',
        'best immigration consultants',
        'professional immigration advice',
        'immigration consultation services',
        'visa consultation Hyderabad'
      ]
    );
  }, []);

  const features = [
    { icon: Users, title: 'Free Consultation', description: 'Initial assessment and case evaluation at no cost' },
    { icon: Award, title: 'Case Assessment', description: 'Comprehensive evaluation of your immigration options' },
    { icon: Shield, title: 'Strategy Planning', description: 'Customized immigration strategy based on your profile' },
    { icon: Clock, title: 'Ongoing Support', description: 'Continuous guidance throughout your immigration journey' }
  ];

  const services = [
    'Immigration pathway assessment',
    'Document review and verification',
    'Application strategy planning',
    'Legal representation when needed',
    'Case status monitoring',
    'Appeal and review assistance'
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/immigration.jpg"
            alt="Immigration Consultation"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 50%' }}
          />
        </div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <Users size={40} />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Immigration Consultation</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Get expert advice on all immigration matters from our certified consultants. 
              We provide personalized guidance to help you make informed decisions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Expert Immigration Consultation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certified immigration consultants provide expert guidance to help you navigate complex immigration processes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon size={32} className="text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Consultation Services</h2>
              <p className="text-lg text-gray-600 mb-8">
                We offer comprehensive immigration consultation services to help you understand your options and make informed decisions.
              </p>
              
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8"
            >
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">100% Success Rate</h3>
                <p className="text-gray-600">Our consultation services have helped thousands of clients</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Consultation Duration</span>
                  <span className="font-semibold text-gray-900">1-2 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Follow-up Support</span>
                  <span className="font-semibold text-gray-900">Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Expert Consultants</span>
                  <span className="font-semibold text-gray-900">Certified</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Support</span>
                  <span className="font-semibold text-gray-900">24/7</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready for Expert Immigration Guidance?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Book your free consultation with our immigration experts and get personalized guidance for your case.
            </p>
            
            <div className="flex flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Book Free Consultation
                <ArrowRight size={20} className="ml-2" />
              </a>
              
              <a
                href="/services"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                View All Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ImmigrationConsultation;
