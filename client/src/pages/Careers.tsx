import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, ArrowRight } from 'lucide-react';

const Careers: React.FC = () => {
  const openings = [
    { title: 'Visa Consultant', location: 'Hyderabad (Hybrid)', type: 'Full-time', link: '/contact' },
    { title: 'Frontend Developer (React)', location: 'Remote', type: 'Contract', link: '/contact' },
    { title: 'Business Development Executive', location: 'Hyderabad (On-site)', type: 'Full-time', link: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-4">Careers</h1>
            <p className="text-lg text-gray-600">Join our mission to simplify global mobility for thousands of clients.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {openings.map((job) => (
              <motion.div key={job.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mr-3">
                    <Briefcase size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
                    <div className="text-sm text-gray-500 flex items-center"><MapPin size={14} className="mr-1" /> {job.location} • {job.type}</div>
                  </div>
                </div>
                <a href={job.link} className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">Apply / Refer <ArrowRight size={16} className="ml-1" /></a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;


