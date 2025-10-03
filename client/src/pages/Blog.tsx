import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const posts = [
    { title: 'How to Choose the Right Study Visa', date: 'Sep 20, 2025', excerpt: 'A step-by-step guide on selecting the best study visa route for your profile.', image: '/study-visa.jpg' },
    { title: 'Work Abroad: Documents Checklist', date: 'Sep 10, 2025', excerpt: 'Essential documentation for smooth work visa processing and onboarding.', image: '/work.jpg' },
    { title: 'Tourist Visa Tips for First-Timers', date: 'Aug 30, 2025', excerpt: 'Plan your first international trip with these visa and travel tips.', image: '/visitor-visa-application.jpg' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-4">Blog</h1>
            <p className="text-lg text-gray-600">Insights and updates on visas, immigration, and travel.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((p) => (
              <motion.article key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="h-44 bg-gray-100">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-1">{p.date}</div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{p.title}</h2>
                  <p className="text-gray-600 mb-4">{p.excerpt}</p>
                  <a href="/contact" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">Read More <ArrowRight size={16} className="ml-1" /></a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;


