import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  CheckCircle, 
  Users, 
  Award,
  ArrowRight,
  Building,
  FileText,
  Star,
  TrendingUp
} from 'lucide-react';

const WorkVisa: React.FC = () => {
  const features = [
    {
      icon: Building,
      title: 'Job Placement',
      description: 'We connect you with top employers worldwide and help you find the right job opportunity.'
    },
    {
      icon: FileText,
      title: 'Visa Processing',
      description: 'Expert guidance through the entire work visa application process with high success rates.'
    },
    {
      icon: Award,
      title: 'Skill Assessment',
      description: 'Professional evaluation of your skills and qualifications for international opportunities.'
    },
    {
      icon: Users,
      title: 'Relocation Support',
      description: 'Comprehensive support for your relocation, including housing, banking, and settlement services.'
    }
  ];

  const requirements = [
    'Valid passport with at least 6 months validity',
    'Job offer letter from a recognized employer',
    'Educational certificates and transcripts',
    'Professional experience certificates',
    'Skill assessment report (if required)',
    'Medical examination report',
    'Police clearance certificate',
    'Proof of financial stability',
    'Visa application form',
    'Passport-sized photographs'
  ];

  const industries = [
    { name: 'Information Technology', jobs: '5000+', demand: 'High', icon: '💻' },
    { name: 'Healthcare', jobs: '3000+', demand: 'Very High', icon: '🏥' },
    { name: 'Engineering', jobs: '4000+', demand: 'High', icon: '⚙️' },
    { name: 'Finance', jobs: '2500+', demand: 'Medium', icon: '💰' },
    { name: 'Education', jobs: '2000+', demand: 'Medium', icon: '📚' },
    { name: 'Construction', jobs: '3500+', demand: 'High', icon: '🏗️' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/word_visa.jpg"
            alt="Work Visa"
            className="w-full h-full object-cover"
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
                <Briefcase size={40} />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Work Visa Services</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Advance your career with international work opportunities. We help you secure work visas 
              and find employment in top companies worldwide with our comprehensive recruitment and visa services.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Work Visa Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From job placement to visa processing, we provide end-to-end support for your international career journey.
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
                To ensure a smooth work visa application process, you'll need to prepare the following documents. 
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
                  <TrendingUp size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">98% Success Rate</h3>
                <p className="text-gray-600">Our work visa applications have an outstanding success rate</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Processing Time</span>
                  <span className="font-semibold text-gray-900">3-6 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Countries Covered</span>
                  <span className="font-semibold text-gray-900">50+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Job Placements</span>
                  <span className="font-semibold text-gray-900">2000+</span>
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

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">High-Demand Industries</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help professionals find opportunities in these high-demand industries worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{industry.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{industry.name}</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Available Jobs</span>
                    <span className="font-semibold text-gray-900">{industry.jobs}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Demand Level</span>
                    <span className={`font-semibold px-3 py-1 rounded-full text-sm ${
                      industry.demand === 'Very High' ? 'bg-red-100 text-red-800' :
                      industry.demand === 'High' ? 'bg-orange-100 text-orange-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {industry.demand}
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-center text-yellow-500 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 text-center">Excellent opportunities available</p>
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
              We follow a systematic approach to ensure your work visa application is successful.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Profile Assessment', description: 'Free evaluation of your skills and career goals' },
              { step: '02', title: 'Job Matching', description: 'Connect you with suitable job opportunities' },
              { step: '03', title: 'Employer Coordination', description: 'Facilitate interviews and job offers' },
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
              Ready to Advance Your Career Abroad?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Get a free consultation with our work visa experts and take the first step towards 
              your international career.
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

export default WorkVisa;
