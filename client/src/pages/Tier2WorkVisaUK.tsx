import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle, Users, Mail, Phone, ArrowRight, MessageCircle, FileText } from 'lucide-react';

const Tier2WorkVisaUK = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi, I'm interested in UK Tier 2 Work Visa services. Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}, Message: ${formData.message}`;
    window.open(`https://wa.me/919848158627?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const handleWhatsAppClick = () => {
    const message = "Hi, I'm interested in UK Tier 2 Work Visa consultancy. Could you please provide more information?";
    window.open(`https://wa.me/919848158627?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white/20 text-6xl font-bold">
            [UK Tier 2 Work Visa Image]
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-2xl"
          >
            Tier 2 Work Visa for UK
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 drop-shadow-lg"
          >
            Your Gateway to UK Employment
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
                UK Tier 2 (General) Work Visa - Now Known as Skilled Worker Visa
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The UK Tier 2 visa (now rebranded as Skilled Worker visa) allows skilled professionals with a job offer from a UK employer to live and work in the United Kingdom. Our expert consultants provide comprehensive guidance to help you navigate the application process successfully.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We assist with employer sponsorship verification, points-based assessment, document preparation, visa application filing, and family dependent visa support.
              </p>
            </motion.div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { icon: Briefcase, title: "Employer Sponsorship", desc: "Help finding licensed sponsors" },
                { icon: FileText, title: "Points Assessment", desc: "Evaluate your eligibility points" },
                { icon: CheckCircle, title: "Application Support", desc: "Complete documentation and filing" },
                { icon: Users, title: "Dependent Visa", desc: "Bring your family members" }
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

            {/* Eligibility Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 md:p-12 mb-12 text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Tier 2 Visa Requirements</h2>
              <ul className="space-y-4">
                {[
                  "Valid job offer from a UK licensed sponsor",
                  "Certificate of Sponsorship (CoS) from employer",
                  "Job must be at required skill level (RQF Level 3 or above)",
                  "Minimum salary threshold (usually £25,600 or going rate)",
                  "Score 70 points under points-based system",
                  "English language proficiency (IELTS or equivalent)",
                  "Proof of maintenance funds (£1,270 for 28 days)",
                  "Clean criminal record certificate (if applicable)"
                ].map((requirement, index) => (
                  <li key={index} className="flex items-center text-lg">
                    <CheckCircle className="mr-3 flex-shrink-0" size={24} />
                    <span>{requirement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Points Breakdown */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Points-Based System (70 Points Required)</h2>
              <div className="space-y-4">
                {[
                  { criteria: "Job offer from approved sponsor", points: "20 points" },
                  { criteria: "Job at appropriate skill level", points: "20 points" },
                  { criteria: "English language proficiency", points: "10 points" },
                  { criteria: "Salary £20,480 - £23,039", points: "0 points" },
                  { criteria: "Salary £23,040 - £25,599", points: "10 points" },
                  { criteria: "Salary £25,600 or above", points: "20 points" }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-700 font-medium">{item.criteria}</span>
                    <span className="text-indigo-600 font-bold">{item.points}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Benefits of Tier 2 Visa */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Tier 2 Visa</h2>
              <ul className="space-y-4">
                {[
                  "Work in the UK for up to 5 years (extendable)",
                  "Bring your spouse/partner and children",
                  "Access to NHS healthcare",
                  "Path to Indefinite Leave to Remain (ILR) after 5 years",
                  "Pathway to British citizenship",
                  "Change jobs with another licensed sponsor",
                  "Travel in and out of the UK freely"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <CheckCircle className="text-indigo-600 mr-3 flex-shrink-0 mt-1" size={24} />
                    <span className="text-lg">{benefit}</span>
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
                Apply for UK Tier 2 Work Visa
              </h2>
              <p className="text-gray-600 text-center mb-8">
                Fill out the form below and we'll assess your eligibility
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
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message / Job Details</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                    placeholder="Tell us about your job offer, profession, and qualifications..."
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

export default Tier2WorkVisaUK;

