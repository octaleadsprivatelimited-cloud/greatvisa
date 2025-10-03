import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    { name: 'Priya Sharma', location: 'Canada', rating: 5, text: 'GREAT Visa Network made my study visa process seamless. Highly recommended!' },
    { name: 'Rahul Kumar', location: 'Australia', rating: 5, text: 'Professional team helped me secure my work visa quickly.' },
    { name: 'Sunita Patel', location: 'UK', rating: 5, text: 'Family visa process was easy and stress-free with their guidance.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-4">Testimonials</h1>
            <p className="text-lg text-gray-600">Real stories from our clients who achieved their goals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                  <Quote size={16} className="text-white" />
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(t.rating)].map((_, i) => (<Star key={i} size={18} className="text-amber-400 fill-current" />))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{t.text}"</p>
                <div className="font-semibold text-gray-900">{t.name}</div>
                <div className="text-sm text-gray-600">{t.location}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;


