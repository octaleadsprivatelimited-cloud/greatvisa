import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle, Users, Mail, Phone, ArrowRight, MessageCircle, Award } from 'lucide-react';

const NetherlandsSkilledWorkerVisa = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi, I'm interested in Netherlands Skilled Worker Visa services. Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}, Message: ${formData.message}`;
    window.open(`https://wa.me/919848158627?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const handleWhatsAppClick = () => {
    const message = "Hi, I'm interested in Netherlands Skilled Worker Visa consultancy. Could you please provide more information?";
    window.open(`https://wa.me/919848158627?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900 to-red-900">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white/20 text-6xl font-bold">
            [Netherlands Skilled Worker Visa Image]
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-2xl"
          >
            Netherlands Skilled Worker Visa
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 drop-shadow-lg"
          >
            Build Your Career in the Netherlands
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
                Netherlands Highly Skilled Migrant Visa
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The Netherlands offers excellent opportunities for skilled professionals through its Highly Skilled Migrant (HSM) program. Our expert consultants help you navigate the Dutch work permit system and secure employment with recognized sponsors in the Netherlands.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We provide comprehensive support including employer verification, salary requirement assessment, documentation preparation, MVV/residence permit application, and relocation assistance.
              </p>
            </motion.div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { icon: Briefcase, title: "Job Placement Support", desc: "Connect with recognized Dutch sponsors" },
                { icon: Award, title: "Eligibility Assessment", desc: "Verify salary and qualification requirements" },
                { icon: CheckCircle, title: "Permit Processing", desc: "Complete MVV and residence permit support" },
                { icon: Users, title: "Family Reunification", desc: "Bring your family to the Netherlands" }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <benefit.icon className="text-orange-600 mb-4" size={40} />
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
              className="bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl shadow-xl p-8 md:p-12 mb-12 text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Eligibility Requirements</h2>
              <ul className="space-y-4">
                {[
                  "Job offer from IND-recognized sponsor in Netherlands",
                  "Minimum monthly salary (€5,008 for 30+ years, €3,672 for under 30)",
                  "Relevant educational qualifications or work experience",
                  "Valid passport and clean criminal record",
                  "Employer must have sponsorship license",
                  "Employment contract meeting Dutch labor conditions",
                  "Health insurance coverage in Netherlands",
                  "Proof of accommodation in Netherlands"
                ].map((requirement, index) => (
                  <li key={index} className="flex items-center text-lg">
                    <CheckCircle className="mr-3 flex-shrink-0" size={24} />
                    <span>{requirement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* In-Demand Professions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">In-Demand Professions in Netherlands</h2>
              <ul className="space-y-4">
                {[
                  "IT Professionals & Software Engineers",
                  "Data Scientists & Analysts",
                  "Engineers (Mechanical, Electrical, Civil)",
                  "Healthcare Professionals",
                  "Financial Analysts & Accountants",
                  "Marketing & Sales Managers",
                  "Logistics & Supply Chain Specialists",
                  "Architects & Urban Planners",
                  "Scientists & Researchers",
                  "Teachers & Lecturers"
                ].map((profession, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={24} />
                    <span className="text-lg">{profession}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Why Netherlands */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Work in the Netherlands?</h2>
              <ul className="space-y-4">
                {[
                  "High quality of life and work-life balance",
                  "Competitive salaries and 30% tax ruling for expats",
                  "English widely spoken in business environment",
                  "Access to entire EU for travel and work",
                  "Excellent healthcare and education system",
                  "Progressive and multicultural society",
                  "Path to permanent residence in 5 years",
                  "Strong economy with global companies"
                ].map((reason, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <CheckCircle className="text-orange-600 mr-3 flex-shrink-0 mt-1" size={24} />
                    <span className="text-lg">{reason}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-orange-900 to-red-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="order-2 md:order-1 bg-white rounded-xl shadow-lg p-6 md:p-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Start Your Netherlands Career</h2>
                <p className="text-gray-600 mb-6">Fill out the form below for a free eligibility assessment</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition" placeholder="Enter your full name" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition" placeholder="your.email@example.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition" placeholder="+91 98765 43210" />
                  </div>

                    <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message / Profession</label>
                    <textarea required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition" placeholder="Tell us about your profession, qualifications, and work experience..."></textarea>
                  </div>

                  <button type="submit" className="w-full bg-yellow-400 text-gray-900 py-3.5 rounded-lg font-semibold text-base hover:bg-yellow-300 transition-all duration-300 hover:scale-[1.02] shadow-md flex items-center justify-center">
                    <span>Get Free Consultation</span>
                    <ArrowRight className="ml-2" size={18} />
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-600">
                    <div className="flex items-center">
                      <Phone className="mr-2 text-orange-600" size={20} />
                      <span>+91 98481 58627</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="mr-2 text-orange-600" size={20} />
                      <span>info@greatvisanetwork.com</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="order-1 md:order-2">
                <img src={`${import.meta.env.BASE_URL}services/businessvisa.jpg`} alt="Netherlands Skilled Worker" className="w-full h-56 md:h-full rounded-xl object-cover shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NetherlandsSkilledWorkerVisa;

