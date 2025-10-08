import React from 'react';
import { motion } from 'framer-motion';
import { 
  Plane, 
  CheckCircle, 
  Clock, 
  Shield, 
  MapPin,
  ArrowRight,
  Globe,
  Star,
  Compass
} from 'lucide-react';

const TouristVisa: React.FC = () => {
  const features = [
    {
      icon: Clock,
      title: 'Quick Processing',
      description: 'Fast visa processing with express options available for urgent travel needs.'
    },
    {
      icon: Globe,
      title: 'Multiple Destinations',
      description: 'Visa services for popular tourist destinations around the world.'
    },
    {
      icon: Shield,
      title: 'Travel Insurance',
      description: 'Comprehensive travel insurance coverage for your peace of mind.'
    },
    {
      icon: MapPin,
      title: 'Itinerary Planning',
      description: 'Expert guidance on travel planning and destination recommendations.'
    }
  ];

  const destinations = [
    { name: 'United States', flag: '🇺🇸', duration: '10 years', processing: '1-2 weeks' },
    { name: 'United Kingdom', flag: '🇬🇧', duration: '6 months', processing: '1-2 weeks' },
    { name: 'Canada', flag: '🇨🇦', duration: '10 years', processing: '1-2 weeks' },
    { name: 'Australia', flag: '🇦🇺', duration: '1 year', processing: '2-3 weeks' },
    { name: 'France', flag: '🇫🇷', duration: '90 days', processing: '1-2 weeks' },
    { name: 'Germany', flag: '🇩🇪', duration: '90 days', processing: '1-2 weeks' }
  ];

  const requirements = [
    'Valid passport with at least 6 months validity',
    'Completed visa application form',
    'Recent passport-sized photographs',
    'Proof of accommodation (hotel bookings)',
    'Travel itinerary and flight bookings',
    'Proof of financial means (bank statements)',
    'Travel insurance certificate',
    'Employment letter or business registration',
    'Previous travel history (if any)',
    'Visa fee payment receipt'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/services/tourist_visa.jpeg"
            alt="Tourist Visa"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 40%' }}
          />
        </div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <Plane size={40} />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Tourist Visa Services</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Explore the world with our hassle-free tourist visa processing services. 
              We make travel dreams come true with quick processing and comprehensive support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Tourist Visa Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide fast, reliable, and comprehensive tourist visa services for your travel needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon size={32} className="text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Popular Tourist Destinations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help you secure tourist visas to these amazing destinations around the world.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{destination.flag}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{destination.name}</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Visa Duration</span>
                    <span className="font-semibold text-gray-900">{destination.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Processing Time</span>
                    <span className="font-semibold text-gray-900">{destination.processing}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-center text-yellow-500 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 text-center">Highly popular destination</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Required Documents</h2>
              <p className="text-lg text-gray-600 mb-8">
                To ensure a smooth tourist visa application process, you'll need to prepare the following documents.
              </p>
              
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8"
            >
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Compass size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">99% Success Rate</h3>
                <p className="text-gray-600">Our tourist visa applications have an outstanding success rate</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Processing Time</span>
                  <span className="font-semibold text-gray-900">1-2 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Destinations</span>
                  <span className="font-semibold text-gray-900">100+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Express Processing</span>
                  <span className="font-semibold text-gray-900">Available</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Support</span>
                  <span className="font-semibold text-gray-900">24/7</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Explore the World?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Get your tourist visa processed quickly and start planning your next adventure.
            </p>
            
            <div className="flex flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Apply for Tourist Visa
                <ArrowRight size={20} className="ml-2" />
              </a>
              
              <a
                href="/services"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                View All Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TouristVisa;
