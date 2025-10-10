import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight, HelpCircle } from 'lucide-react';
import { updatePageSEO } from '../utils/seo';

const FAQ: React.FC = () => {
  useEffect(() => {
    updatePageSEO(
      'Visa FAQs - Frequently Asked Questions',
      'Find answers to frequently asked questions about visa applications, immigration services, study abroad, work permits, and visa processing at GREAT Visa Network.',
      [
        'visa FAQs',
        'visa questions and answers',
        'immigration FAQs',
        'visa application questions',
        'study visa FAQs',
        'work visa questions',
        'visa processing FAQs',
        'visa consultants FAQs',
        'immigration questions',
        'visa help',
        'visa information',
        'visa guidance',
        'common visa questions',
        'visa requirements FAQs',
        'visa application help'
      ]
    );
  }, []);

  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const faqCategories = [
    {
      title: 'General Questions',
      items: [
        {
          id: 'general-1',
          question: 'What services does GREAT Visa Network provide?',
          answer: 'We provide comprehensive visa and immigration services including study visas, work visas, family visas, business visas, tourist visas, and immigration consultation. We also offer document attestation, skill assessment, and job placement services.'
        },
        {
          id: 'general-2',
          question: 'How long has GREAT Visa Network been in business?',
          answer: 'GREAT Visa Network has been providing immigration services for over 15 years. We have helped thousands of clients achieve their dreams of studying, working, and living abroad.'
        },
        {
          id: 'general-3',
          question: 'What is your success rate?',
          answer: 'We maintain a 98% success rate across all visa types. Our experienced team ensures your application meets all requirements for approval.'
        },
        {
          id: 'general-4',
          question: 'Do you offer free consultations?',
          answer: 'Yes! We offer free initial consultations to assess your case and provide guidance on the best immigration pathway for your situation.'
        }
      ]
    },
    {
      title: 'Study Visa',
      items: [
        {
          id: 'study-1',
          question: 'How long does study visa processing take?',
          answer: 'Study visa processing typically takes 2-4 weeks, depending on the destination country and the completeness of your application. Some countries may take longer during peak seasons.'
        },
        {
          id: 'study-2',
          question: 'What documents do I need for a study visa?',
          answer: 'You will need a valid passport, letter of acceptance from a recognized educational institution, proof of financial support, academic transcripts, English language proficiency test results, medical examination report, and other supporting documents.'
        },
        {
          id: 'study-3',
          question: 'Can I work while studying abroad?',
          answer: 'Yes, most countries allow international students to work part-time while studying. The number of hours and restrictions vary by country. We can provide specific information based on your destination.'
        },
        {
          id: 'study-4',
          question: 'Do you help with university selection?',
          answer: 'Yes, we provide comprehensive university selection assistance based on your academic background, career goals, and preferences. We help you choose the right program and institution.'
        }
      ]
    },
    {
      title: 'Work Visa',
      items: [
        {
          id: 'work-1',
          question: 'How long does work visa processing take?',
          answer: 'Work visa processing typically takes 3-6 weeks, depending on the destination country and the type of work visa. Some specialized visas may take longer.'
        },
        {
          id: 'work-2',
          question: 'Do you provide job placement services?',
          answer: 'Yes, we offer comprehensive job placement services. We connect you with top employers worldwide and help you find suitable job opportunities based on your skills and experience.'
        },
        {
          id: 'work-3',
          question: 'What is the difference between a work visa and work permit?',
          answer: 'A work visa allows you to enter a country for work purposes, while a work permit allows you to work legally within that country. The requirements and processes vary by country.'
        },
        {
          id: 'work-4',
          question: 'Can I bring my family with a work visa?',
          answer: 'Yes, most countries allow work visa holders to bring their immediate family members (spouse and dependent children) through family visa applications.'
        }
      ]
    },
    {
      title: 'Family Visa',
      items: [
        {
          id: 'family-1',
          question: 'How long does family visa processing take?',
          answer: 'Family visa processing typically takes 4-8 weeks, depending on the destination country and the type of family relationship. Some countries may take longer for certain categories.'
        },
        {
          id: 'family-2',
          question: 'Who can I sponsor for a family visa?',
          answer: 'You can typically sponsor your spouse, dependent children, and in some cases, parents and siblings. The eligibility criteria vary by country and your immigration status.'
        },
        {
          id: 'family-3',
          question: 'What documents are required for family visa applications?',
          answer: 'You will need relationship proof (marriage certificates, birth certificates), sponsor\'s financial documents, accommodation proof, medical examination reports, and other supporting documents.'
        },
        {
          id: 'family-4',
          question: 'Do I need to be a citizen to sponsor family members?',
          answer: 'Not necessarily. Most countries allow permanent residents and sometimes even temporary residents to sponsor certain family members. The requirements vary by country.'
        }
      ]
    },
    {
      title: 'Business Visa',
      items: [
        {
          id: 'business-1',
          question: 'How long does business visa processing take?',
          answer: 'Business visa processing typically takes 3-5 weeks, depending on the destination country and the type of business activities you plan to engage in.'
        },
        {
          id: 'business-2',
          question: 'What types of business visas are available?',
          answer: 'Business visas include investor visas, entrepreneur visas, trade visas, and business visitor visas. The specific types and requirements vary by country.'
        },
        {
          id: 'business-3',
          question: 'Do I need to invest a minimum amount?',
          answer: 'Investment requirements vary by country and visa type. Some countries have minimum investment thresholds, while others focus on business plans and job creation.'
        },
        {
          id: 'business-4',
          question: 'Can I work for my own company with a business visa?',
          answer: 'Yes, business visas typically allow you to work for your own company or engage in business activities. The specific permissions vary by country and visa type.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/home/slider-1.jpg"
            alt="FAQ Background"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-indigo-900/80 to-purple-900/80"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <HelpCircle size={40} />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Find answers to common questions about our visa and immigration services. 
              If you don't see your question here, feel free to contact us.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Common Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through our frequently asked questions to find answers to your queries. 
              We've organized them by category for easy navigation.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="bg-primary-600 text-white p-6">
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    {category.items.map((item) => (
                      <div key={item.id} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
                        <button
                          onClick={() => toggleItem(item.id)}
                          className="w-full text-left flex items-center justify-between py-4 hover:text-primary-600 transition-colors"
                        >
                          <h4 className="text-lg font-semibold pr-4">{item.question}</h4>
                          {openItems[item.id] ? (
                            <Minus size={24} className="text-primary-600 flex-shrink-0" />
                          ) : (
                            <Plus size={24} className="text-gray-400 flex-shrink-0" />
                          )}
                        </button>
                        
                        <AnimatePresence>
                          {openItems[item.id] && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <p className="text-gray-600 pb-4">{item.answer}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Still Have Questions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              If you couldn't find the answer to your question, don't hesitate to contact us. 
              Our expert team is here to help you with all your immigration needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <HelpCircle size={32} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Free Consultation</h3>
              <p className="text-gray-600 mb-6">
                Get a free consultation with our immigration experts to discuss your specific case.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
              >
                Schedule Consultation
                <ArrowRight size={16} className="ml-1" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <HelpCircle size={32} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Live Chat Support</h3>
              <p className="text-gray-600 mb-6">
                Chat with our support team in real-time for immediate assistance with your questions.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
              >
                Start Chat
                <ArrowRight size={16} className="ml-1" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <HelpCircle size={32} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email Support</h3>
              <p className="text-gray-600 mb-6">
                Send us your questions via email and we'll get back to you within 24 hours.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
              >
                Send Email
                <ArrowRight size={16} className="ml-1" />
              </a>
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
              Ready to Start Your Immigration Journey?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Get in touch with our expert team and take the first step towards achieving your immigration goals.
            </p>
            
            <div className="flex flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-primary-600 hover:bg-gray-100 px-5 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105"
              >
                Contact Us
                <ArrowRight size={20} className="ml-2" />
              </a>
              
              <a
                href="/services"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 px-5 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105"
              >
                View Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
