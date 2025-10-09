import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle, Clock, Users, Mail, Phone, MapPin, ArrowRight, MessageCircle, Award, TrendingUp } from 'lucide-react';

const UKSkilledWorkVisaConsultancy = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi, I'm interested in UK Skilled Work Visa consultancy. Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}, Message: ${formData.message}`;
    window.open(`https://wa.me/919848158627?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const handleWhatsAppClick = () => {
    const message = "Hi, I'm interested in UK Skilled Work Visa consultancy. Could you please provide more information?";
    window.open(`https://wa.me/919848158627?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white/20 text-6xl font-bold">
            [UK Skilled Work Visa Image]
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-2xl"
          >
            UK Skilled Work Visa Consultancy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 drop-shadow-lg"
          >
            Your Pathway to UK Employment
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            onClick={handleWhatsAppClick}
            className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-xl flex items-center mx-auto"
          >
            <MessageCircle className="mr-2" size={24} />
            Get Free Consultation
          </motion.button>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                UK Skilled Worker Visa Consultancy Services
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                As premier UK Skilled Worker Visa consultants, we provide expert guidance to help professionals secure employment and work visas in the United Kingdom. The Skilled Worker visa (formerly Tier 2 General) is the main immigration route for skilled workers from outside the UK.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our comprehensive services include eligibility assessment, job placement support, employer sponsorship guidance, visa documentation, application processing, and family visa assistance.
              </p>
            </motion.div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { icon: Briefcase, title: "Job Placement", desc: "Connect with licensed UK sponsors across industries" },
                { icon: Award, title: "Expert Guidance", desc: "Navigate UK immigration system successfully" },
                { icon: CheckCircle, title: "Complete Support", desc: "End-to-end visa application assistance" },
                { icon: TrendingUp, title: "Settlement Path", desc: "Guidance for permanent residence" }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <benefit.icon className="text-indigo-600 mb-4" size={40} />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Visa Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 md:p-12 mb-12 text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Skilled Worker Visa Requirements</h2>
              <ul className="space-y-4">
                {[
                  "Valid job offer from a UK licensed sponsor",
                  "Certificate of Sponsorship (CoS) from employer",
                  "Job at appropriate skill level (RQF Level 3 or above)",
                  "Minimum salary threshold (usually £25,600 or going rate)",
                  "70 points under points-based immigration system",
                  "English language proficiency (B1 CEFR level)",
                  "Financial maintenance funds (£1,270)",
                  "Valid passport and travel history",
                  "Tuberculosis test certificate (if applicable)",
                  "Criminal record certificate (for some countries)"
                ].map((requirement, index) => (
                  <li key={index} className="flex items-center text-lg">
                    <CheckCircle className="mr-3 flex-shrink-0" size={24} />
                    <span>{requirement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Eligible Occupations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Eligible Skilled Occupations</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "IT & Software Development",
                  "Healthcare & Medical",
                  "Engineering (All Disciplines)",
                  "Finance & Accounting",
                  "Marketing & Sales",
                  "Education & Teaching",
                  "Architecture & Design",
                  "Science & Research",
                  "Legal Professionals",
                  "Business Management",
                  "Hospitality Management",
                  "Creative & Media"
                ].map((occupation, index) => (
                  <div key={index} className="flex items-start text-gray-700">
                    <CheckCircle className="text-indigo-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>{occupation}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Visa Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of UK Skilled Worker Visa</h2>
              <ul className="space-y-4">
                {[
                  "Work in the UK for up to 5 years (renewable)",
                  "Bring your spouse/partner and children under 18",
                  "Apply for settlement (ILR) after 5 years",
                  "Pathway to British citizenship",
                  "Access to NHS healthcare services",
                  "Switch employers (with new sponsor license)",
                  "Travel in and out of UK freely",
                  "Take up additional employment in certain cases",
                  "Study part-time while working",
                  "Work towards permanent residence"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <CheckCircle className="text-indigo-600 mr-3 flex-shrink-0 mt-1" size={24} />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Our Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Our Consultancy Services</h2>
              <ul className="space-y-4 text-white">
                {[
                  "Free eligibility assessment",
                  "UK job search and employer matching",
                  "CV optimization for UK market",
                  "Skills assessment and qualification verification",
                  "Employer sponsorship assistance",
                  "Certificate of Sponsorship verification",
                  "Points calculation and optimization",
                  "Complete visa documentation preparation",
                  "Application form filling and submission",
                  "English language test guidance (IELTS/PTE)",
                  "Interview preparation",
                  "Dependent visa applications",
                  "Pre-departure briefing",
                  "Post-landing settlement support"
                ].map((service, index) => (
                  <li key={index} className="flex items-center text-lg">
                    <CheckCircle className="mr-3 flex-shrink-0" size={24} />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">
                Start Your UK Career Journey
              </h2>
              <p className="text-gray-600 text-center mb-8">
                Fill out the form below for a free consultation
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message / Profession</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                    placeholder="Tell us about your profession, skills, and UK work plans..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-gray-900 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight className="ml-2" size={20} />
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-600">
                  <div className="flex items-center">
                    <Phone className="mr-2 text-indigo-600" size={20} />
                    <span>+91 98481 58627</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="mr-2 text-indigo-600" size={20} />
                    <span>info@greatvisanetwork.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UKSkilledWorkVisaConsultancy;

