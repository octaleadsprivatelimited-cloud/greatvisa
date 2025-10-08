import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  CheckCircle, 
  Shield, 
  Users,
  ArrowRight,
  BookOpen,
  FileText,
  Star
} from 'lucide-react';

const StudyVisa: React.FC = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'University Selection',
      description: 'We help you choose the right university and program based on your academic background and career goals.'
    },
    {
      icon: FileText,
      title: 'Application Support',
      description: 'Complete assistance with university applications, including essay writing and document preparation.'
    },
    {
      icon: Shield,
      title: 'Visa Processing',
      description: 'Expert guidance through the entire visa application process with high success rates.'
    },
    {
      icon: Users,
      title: 'Interview Preparation',
      description: 'Comprehensive interview preparation sessions to boost your confidence and chances of success.'
    }
  ];

  const requirements = [
    'Valid passport with at least 6 months validity',
    'Letter of acceptance from a recognized educational institution',
    'Proof of financial support (bank statements, sponsorship letters)',
    'Academic transcripts and certificates',
    'English language proficiency test results (IELTS/TOEFL)',
    'Medical examination report',
    'Statement of purpose',
    'Passport-sized photographs',
    'Visa application form',
    'Proof of accommodation arrangements'
  ];

  const countries = [
    { name: 'Canada', flag: '🇨🇦', universities: '100+', duration: '2-4 weeks' },
    { name: 'United States', flag: '🇺🇸', universities: '500+', duration: '3-5 weeks' },
    { name: 'United Kingdom', flag: '🇬🇧', universities: '150+', duration: '2-4 weeks' },
    { name: 'Australia', flag: '🇦🇺', universities: '80+', duration: '2-4 weeks' },
    { name: 'Germany', flag: '🇩🇪', universities: '200+', duration: '3-6 weeks' },
    { name: 'France', flag: '🇫🇷', universities: '120+', duration: '3-5 weeks' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/study_visa.jpg"
            alt="Study Visa"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 25%' }}
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
                <GraduationCap size={40} />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Study Visa Services</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Unlock your potential with world-class education abroad. We help you secure study visas 
              to top universities worldwide with our expert guidance and comprehensive support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Study Visa Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From university selection to visa approval, we provide end-to-end support for your study abroad journey.
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

      {/* Requirements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Required Documents</h2>
              <p className="text-lg text-gray-600 mb-8">
                To ensure a smooth visa application process, you'll need to prepare the following documents. 
                We'll help you gather and organize everything properly.
              </p>
              
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
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
                  <Shield size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">98% Success Rate</h3>
                <p className="text-gray-600">Our study visa applications have an outstanding success rate</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Processing Time</span>
                  <span className="font-semibold text-gray-900">2-4 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Countries Covered</span>
                  <span className="font-semibold text-gray-900">50+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Universities</span>
                  <span className="font-semibold text-gray-900">1000+</span>
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

      {/* Popular Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Popular Study Destinations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help students secure study visas to top universities in these popular destinations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-center mb-6">
                  <div className="mb-6">
                    <div className="text-8xl sm:text-9xl md:text-10xl lg:text-11xl xl:text-12xl transform hover:scale-110 transition-transform duration-300 inline-block">
                      {country.flag}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{country.name}</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Universities</span>
                    <span className="font-semibold text-gray-900">{country.universities}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Processing Time</span>
                    <span className="font-semibold text-gray-900">{country.duration}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-center text-yellow-500 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 text-center">Highly recommended destination</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure your study visa application is successful.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Initial Consultation', description: 'Free assessment of your profile and study goals' },
              { step: '02', title: 'University Selection', description: 'Help you choose the right university and program' },
              { step: '03', title: 'Application Support', description: 'Complete assistance with university applications' },
              { step: '04', title: 'Visa Processing', description: 'Expert guidance through the visa application process' }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Study Abroad Journey?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Get a free consultation with our study visa experts and take the first step towards 
              your international education.
            </p>
            
            <div className="flex flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Get Free Consultation
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

export default StudyVisa;
