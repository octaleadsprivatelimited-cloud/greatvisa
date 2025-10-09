import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle, Users, Mail, Phone, MapPin, ArrowRight, MessageCircle, FileText } from 'lucide-react';

const UKTier2VisaConsultantsHyderabad = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi, I'm interested in UK Tier 2 Visa consultancy in Hyderabad. Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}, Message: ${formData.message}`;
    window.open(`https://wa.me/919848158627?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const handleWhatsAppClick = () => {
    const message = "Hi, I'm from Hyderabad and interested in UK Tier 2 Visa consultancy. Could you please provide more information?";
    window.open(`https://wa.me/919848158627?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white/20 text-6xl font-bold">
            [UK Tier 2 Visa Hyderabad Image]
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-2xl"
          >
            UK Tier 2 Visa Consultants in Hyderabad
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 drop-shadow-lg"
          >
            Expert UK Work Visa Services in Hyderabad
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
                Leading UK Tier 2 Visa Consultants in Hyderabad
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Located in Hyderabad, we are the trusted UK Tier 2 visa consultants serving professionals from Telangana and Andhra Pradesh. With extensive experience in UK immigration, we help you navigate the Tier 2 (now Skilled Worker) visa process from start to finish.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our Hyderabad office provides personalized consultations, eligibility assessment, job placement support, documentation assistance, and visa application processing.
              </p>
            </motion.div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { icon: Briefcase, title: "Job Placement Assistance", desc: "Connect with licensed UK sponsors" },
                { icon: FileText, title: "Eligibility Assessment", desc: "Free evaluation of your profile" },
                { icon: CheckCircle, title: "Documentation Support", desc: "Complete visa application assistance" },
                { icon: Users, title: "Family Visa Help", desc: "Support for dependent visas" }
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

            {/* Services We Offer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 md:p-12 mb-12 text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Services in Hyderabad</h2>
              <ul className="space-y-4">
                {[
                  "Free eligibility assessment and consultation",
                  "UK job search and employer sponsorship assistance",
                  "CV optimization for UK job market",
                  "Points-based system evaluation",
                  "Certificate of Sponsorship (CoS) verification",
                  "Complete visa documentation preparation",
                  "Visa application form filling and submission",
                  "Interview preparation and coaching",
                  "Family dependent visa support",
                  "Pre-departure guidance and orientation",
                  "Post-landing support in UK"
                ].map((service, index) => (
                  <li key={index} className="flex items-center text-lg">
                    <CheckCircle className="mr-3 flex-shrink-0" size={24} />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us in Hyderabad?</h2>
              <ul className="space-y-4">
                {[
                  "10+ years of experience in UK visa consultancy",
                  "Hundreds of successful Tier 2 visa approvals",
                  "Personalized one-on-one consultations",
                  "Expert knowledge of UK immigration laws",
                  "Strong network with UK employers and sponsors",
                  "Transparent pricing with no hidden costs",
                  "Dedicated support throughout the process",
                  "High success rate in visa approvals"
                ].map((reason, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <CheckCircle className="text-indigo-600 mr-3 flex-shrink-0 mt-1" size={24} />
                    <span className="text-lg">{reason}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Office Location */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Our Hyderabad Office</h2>
              <div className="flex items-start">
                <MapPin className="text-indigo-600 mr-4 flex-shrink-0" size={32} />
                <div>
                  <p className="text-lg text-gray-700 mb-2">
                    <strong>GREAT Visa Network - Hyderabad Office</strong>
                  </p>
                  <p className="text-gray-600">
                    Banjara Hills, Hyderabad, Telangana 500034
                  </p>
                  <p className="text-gray-600 mt-2">
                    Office Hours: Mon-Sat, 10:00 AM - 6:00 PM
                  </p>
                  <p className="text-gray-600 mt-4">
                    Walk-ins welcome. Appointments recommended for detailed consultations.
                  </p>
                </div>
              </div>
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
                Book Your Consultation
              </h2>
              <p className="text-gray-600 text-center mb-8">
                Fill out the form below and we'll get back to you shortly
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
                    placeholder="Tell us about your profession and UK work plans..."
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

export default UKTier2VisaConsultantsHyderabad;

