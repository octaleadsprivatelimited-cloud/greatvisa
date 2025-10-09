import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Mail, Phone, ArrowRight, MessageCircle, Stethoscope, Activity } from 'lucide-react';

const UKHealthcareWorkerVisaConsultants = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi, I'm interested in UK Healthcare Worker Visa consultancy. Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}, Message: ${formData.message}`;
    window.open(`https://wa.me/919848158627?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const handleWhatsAppClick = () => {
    const message = "Hi, I'm interested in UK Healthcare Worker Visa consultancy. Could you please provide more information?";
    window.open(`https://wa.me/919848158627?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white/20 text-6xl font-bold">
            [UK Healthcare Worker Visa Image]
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-2xl"
          >
            UK Healthcare Worker Visa Consultants
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 drop-shadow-lg"
          >
            Join the UK's World-Class Healthcare System
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
                UK Health and Care Worker Visa
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The UK Health and Care Worker visa is designed for medical professionals taking up eligible jobs in the NHS, an NHS supplier, or adult social care sector. As leading healthcare visa consultants, we provide specialized support to help you secure your position in the UK's healthcare system.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We offer comprehensive services including credential verification, NHS/NMC/GMC registration support, visa application processing, and family dependent visa assistance.
              </p>
            </motion.div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { icon: Stethoscope, title: "Credential Assessment", desc: "Verify your medical qualifications for UK" },
                { icon: Activity, title: "Professional Registration", desc: "GMC, NMC, HCPC registration support" },
                { icon: CheckCircle, title: "Fast-Track Visa", desc: "Faster processing for healthcare workers" },
                { icon: Users, title: "Family Sponsorship", desc: "Bring your family to the UK" }
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

            {/* Healthcare Roles */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 md:p-12 mb-12 text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Eligible Healthcare Roles</h2>
              <ul className="space-y-4">
                {[
                  "Doctors (All Specializations)",
                  "Registered Nurses (General & Specialist)",
                  "Midwives",
                  "Nursing Associates",
                  "Paramedics",
                  "Pharmacists",
                  "Dentists & Dental Hygienists",
                  "Physiotherapists",
                  "Occupational Therapists",
                  "Radiographers (Diagnostic & Therapeutic)",
                  "Social Workers",
                  "Care Workers & Home Care Workers",
                  "Senior Care Workers"
                ].map((role, index) => (
                  <li key={index} className="flex items-center text-lg">
                    <CheckCircle className="mr-3 flex-shrink-0" size={24} />
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Visa Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Health and Care Worker Visa Benefits</h2>
              <ul className="space-y-4">
                {[
                  "Reduced visa application fee",
                  "Exempt from Immigration Health Surcharge",
                  "Faster visa processing",
                  "Lower salary threshold (£23,200)",
                  "Visa valid for up to 5 years",
                  "Bring spouse/partner and children",
                  "Pathway to settlement (ILR) after 5 years",
                  "Can switch employers within healthcare sector",
                  "Access to public services and NHS"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <CheckCircle className="text-indigo-600 mr-3 flex-shrink-0 mt-1" size={24} />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Eligibility Requirements</h2>
              <ul className="space-y-4">
                {[
                  "Valid job offer from NHS or eligible employer",
                  "Certificate of Sponsorship from licensed sponsor",
                  "Job must be on eligible occupation list",
                  "Minimum salary of £23,200 or job going rate",
                  "Professional registration (GMC, NMC, HCPC, etc.)",
                  "English language proficiency (IELTS or equivalent)",
                  "Tuberculosis test (if from listed countries)",
                  "Clean criminal record certificate",
                  "Meet points-based immigration system requirements"
                ].map((requirement, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <CheckCircle className="text-indigo-600 mr-3 flex-shrink-0 mt-1" size={24} />
                    <span className="text-lg">{requirement}</span>
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
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="order-2 md:order-1 bg-white rounded-xl shadow-lg p-6 md:p-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Start Your UK Healthcare Career
                </h2>
                <p className="text-gray-600 mb-6">
                  Fill out the form below and we'll guide you through the process
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
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
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message / Healthcare Role</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                      placeholder="Tell us about your healthcare qualifications and role..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-yellow-400 text-gray-900 py-3.5 rounded-lg font-semibold text-base hover:bg-yellow-300 transition-all duration-300 hover:scale-[1.02] shadow-md flex items-center justify-center"
                  >
                    <span>Get Free Consultation</span>
                    <ArrowRight className="ml-2" size={18} />
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200">
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

              <div className="order-1 md:order-2">
                <img
                  src={`${import.meta.env.BASE_URL}services/immigration.jpg`}
                  alt="Professional migration consultation"
                  className="w-full h-56 md:h-full rounded-xl object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UKHealthcareWorkerVisaConsultants;

