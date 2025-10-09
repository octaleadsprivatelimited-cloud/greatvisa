import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, CheckCircle, Users, Mail, Phone, ArrowRight, MessageCircle, Stethoscope, Award } from 'lucide-react';

const IrelandHealthcareWorkVisaConsultancy = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi, I'm interested in Ireland Healthcare Work Visa consultancy. Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}, Message: ${formData.message}`;
    window.open(`https://wa.me/919848158627?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const handleWhatsAppClick = () => {
    const message = "Hi, I'm interested in Ireland Healthcare Work Visa consultancy. Could you please provide more information?";
    window.open(`https://wa.me/919848158627?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-emerald-900">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white/20 text-6xl font-bold">
            [Ireland Healthcare Work Visa Image]
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-2xl"
          >
            Best Ireland Healthcare Work Visa Consultancy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 drop-shadow-lg"
          >
            Build Your Medical Career in Ireland
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
                Ireland Healthcare Worker Work Visa
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Ireland's healthcare system is actively recruiting qualified medical professionals from around the world. Our specialized consultancy helps doctors, nurses, and other healthcare workers secure work permits and build rewarding careers in Ireland's excellent healthcare environment.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We provide end-to-end support including qualification assessment, professional registration with CORU/IMC/NMBI, visa application, and relocation assistance.
              </p>
            </motion.div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { icon: Stethoscope, title: "Credential Assessment", desc: "Expert evaluation of your medical qualifications" },
                { icon: Award, title: "Registration Support", desc: "Complete guidance for CORU/IMC/NMBI registration" },
                { icon: Users, title: "Job Placement Assistance", desc: "Connect with Irish healthcare providers" },
                { icon: Heart, title: "Family Visa Support", desc: "Bring your family to Ireland" }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <benefit.icon className="text-green-600 mb-4" size={40} />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Healthcare Roles */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl shadow-xl p-8 md:p-12 mb-12 text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Healthcare Roles We Support</h2>
              <ul className="space-y-4">
                {[
                  "Doctors (All Specializations)",
                  "Registered Nurses (General & Specialist)",
                  "Mental Health Nurses",
                  "Midwives",
                  "Pharmacists",
                  "Dentists",
                  "Physiotherapists",
                  "Occupational Therapists",
                  "Radiographers",
                  "Medical Laboratory Scientists",
                  "Speech & Language Therapists",
                  "Healthcare Assistants"
                ].map((role, index) => (
                  <li key={index} className="flex items-center text-lg">
                    <CheckCircle className="mr-3 flex-shrink-0" size={24} />
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Why Ireland Healthcare */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Ireland for Healthcare?</h2>
              <ul className="space-y-4">
                {[
                  "High demand for healthcare professionals",
                  "Competitive salaries (€30,000 - €100,000+)",
                  "English-speaking country with excellent healthcare system",
                  "Fast-track visa processing for healthcare workers",
                  "Path to permanent residence in 5 years",
                  "EU access and opportunities",
                  "High quality of life and work-life balance"
                ].map((reason, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <CheckCircle className="text-green-600 mr-3 flex-shrink-0 mt-1" size={24} />
                    <span className="text-lg">{reason}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">
                Start Your Ireland Healthcare Career
              </h2>
              <p className="text-gray-600 text-center mb-8">
                Fill out the form below and we'll guide you through the process
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message / Specialization</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                    placeholder="Tell us about your medical qualifications and specialization..."
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
                    <Phone className="mr-2 text-green-600" size={20} />
                    <span>+91 98481 58627</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="mr-2 text-green-600" size={20} />
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

export default IrelandHealthcareWorkVisaConsultancy;

