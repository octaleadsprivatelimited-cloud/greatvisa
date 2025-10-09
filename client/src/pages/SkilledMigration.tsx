import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, CheckCircle, Clock, Users, Mail, Phone, MapPin, ArrowRight, MessageCircle, Award, TrendingUp, Plane } from 'lucide-react';

const SkilledMigration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi, I'm interested in Skilled Migration services. Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}, Message: ${formData.message}`;
    window.open(`https://wa.me/919848158627?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const handleWhatsAppClick = () => {
    const message = "Hi, I'm interested in Skilled Migration consultancy. Could you please provide more information?";
    window.open(`https://wa.me/919848158627?text=${encodeURIComponent(message)}`, '_blank');
  };

  const countries = [
    {
      name: "Australia",
      programs: ["Skilled Independent (189)", "Skilled Nominated (190)", "Skilled Work Regional (491)", "Employer Nomination (186)"],
      gradient: "from-yellow-600 to-orange-600"
    },
    {
      name: "Canada",
      programs: ["Express Entry", "Provincial Nominee Program", "Federal Skilled Worker", "Canadian Experience Class"],
      gradient: "from-red-600 to-red-800"
    },
    {
      name: "United Kingdom",
      programs: ["Skilled Worker Visa", "Health & Care Worker", "Global Talent Visa", "High Potential Individual"],
      gradient: "from-blue-600 to-indigo-800"
    },
    {
      name: "Germany",
      programs: ["EU Blue Card", "Skilled Workers Immigration", "Job Seeker Visa", "ICT Permit"],
      gradient: "from-gray-700 to-gray-900"
    },
    {
      name: "New Zealand",
      programs: ["Skilled Migrant Category", "Skilled Migrant (Residence)", "Work to Residence", "Essential Skills Work"],
      gradient: "from-slate-600 to-blue-900"
    },
    {
      name: "Ireland",
      programs: ["Critical Skills Permit", "General Employment Permit", "ICT Permit", "Intra-Company Transfer"],
      gradient: "from-green-600 to-emerald-800"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white/20 text-6xl font-bold">
            [Skilled Migration Image]
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-2xl"
          >
            Skilled Migration Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 drop-shadow-lg"
          >
            Migrate to Your Dream Country with Expert Guidance
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            onClick={handleWhatsAppClick}
            className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-xl flex items-center mx-auto"
          >
            <MessageCircle className="mr-2" size={24} />
            Get Free Assessment
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
                Global Skilled Migration Consultancy
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                As leading skilled migration consultants, we help professionals migrate to top countries through various skilled migration programs. Our expert team provides end-to-end support for permanent residence applications, ensuring you make informed decisions about your international migration journey.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We offer comprehensive services including eligibility assessment, skill assessment, documentation support, points calculation, EOI submission, visa lodgment, and post-migration settlement assistance.
              </p>
            </motion.div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { icon: Globe, title: "Multiple Countries", desc: "Access skilled migration programs worldwide" },
                { icon: Award, title: "Skills Assessment", desc: "Professional evaluation and guidance" },
                { icon: TrendingUp, title: "Points Optimization", desc: "Maximize your migration points" },
                { icon: Plane, title: "End-to-End Support", desc: "Complete migration assistance" }
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

            {/* Countries and Programs */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Skilled Migration Programs by Country
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {countries.map((country, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-gradient-to-br ${country.gradient} rounded-2xl shadow-xl p-8 text-white`}
                >
                  <h3 className="text-2xl font-bold mb-4">{country.name}</h3>
                  <ul className="space-y-3">
                    {country.programs.map((program, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="mr-2 flex-shrink-0" size={20} />
                        <span>{program}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Our Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 md:p-12 mb-12 text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Skilled Migration Services</h2>
              <ul className="space-y-4">
                {[
                  "Free eligibility assessment for multiple countries",
                  "Skills assessment and qualification evaluation",
                  "Points calculation and optimization strategies",
                  "Document verification and preparation",
                  "Expression of Interest (EOI) preparation",
                  "Profile enhancement and improvement guidance",
                  "Visa application lodgment and tracking",
                  "English language test preparation (IELTS/PTE)",
                  "Medical and police clearance assistance",
                  "State nomination and sponsorship support",
                  "Job search assistance in destination country",
                  "Pre-departure orientation and guidance",
                  "Post-landing settlement support",
                  "Family migration applications"
                ].map((service, index) => (
                  <li key={index} className="flex items-center text-lg">
                    <CheckCircle className="mr-3 flex-shrink-0" size={24} />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Eligible Professions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">High-Demand Professions</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  "IT & Software Engineers",
                  "Healthcare Professionals",
                  "Engineers (All Disciplines)",
                  "Accountants",
                  "Teachers",
                  "Nurses & Midwives",
                  "Project Managers",
                  "Architects",
                  "Scientists & Researchers",
                  "Tradespeople",
                  "Business Analysts",
                  "Marketing Professionals",
                  "Chefs & Hospitality",
                  "Construction Managers",
                  "Legal Professionals"
                ].map((profession, index) => (
                  <div key={index} className="flex items-start text-gray-700">
                    <CheckCircle className="text-indigo-600 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span>{profession}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Migration Services?</h2>
              <ul className="space-y-4">
                {[
                  "15+ years of experience in skilled migration",
                  "Thousands of successful migration cases",
                  "Registered migration agents and consultants",
                  "Expert knowledge of global immigration laws",
                  "Personalized migration strategy for each client",
                  "Transparent pricing with no hidden costs",
                  "Regular updates throughout the process",
                  "High success rate in visa approvals",
                  "Post-migration support and guidance",
                  "Multi-country expertise"
                ].map((reason, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <CheckCircle className="text-indigo-600 mr-3 flex-shrink-0 mt-1" size={24} />
                    <span className="text-lg">{reason}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">
                Start Your Migration Journey
              </h2>
              <p className="text-gray-600 text-center mb-8">
                Fill out the form below for a free migration assessment
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
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message / Preferred Country</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                    placeholder="Tell us about your profession, qualifications, and preferred migration destination..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-gray-900 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  <span>Get Free Assessment</span>
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

export default SkilledMigration;

