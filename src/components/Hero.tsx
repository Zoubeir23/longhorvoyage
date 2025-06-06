import React from 'react';
import { Search, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[600px] bg-gradient-to-r from-green-800 to-green-900 overflow-hidden">
      {/* Background Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat"></div>
      </motion.div>

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <motion.h1 
            className="text-5xl font-bold mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Découvrez le{' '}
            <motion.span 
              className="text-green-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Sénégal
            </motion.span>{' '}
            avec Longhor Voyage
          </motion.h1>
          
          <motion.p 
            className="text-xl mb-8 text-green-50"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Des excursions authentiques pour découvrir les merveilles du Sénégal, 
            de la Petite Côte à Dakar, en passant par le désert de Lompoul.
          </motion.p>

          {/* Search Bar */}
          <motion.div 
            className="bg-white rounded-full p-2 flex items-center shadow-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex-1 flex items-center px-4">
              <MapPin className="w-5 h-5 text-green-500 mr-2" />
              <input
                type="text"
                placeholder="Où souhaitez-vous aller ?"
                className="w-full outline-none text-gray-700"
              />
            </div>
            <motion.button 
              className="bg-green-800 text-white px-6 py-3 rounded-full hover:bg-green-900 transition-colors flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search className="w-5 h-5 mr-2" />
              Rechercher
            </motion.button>
          </motion.div>

          {/* Popular Destinations */}
          <motion.div 
            className="mt-8 flex items-center text-green-50"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <span className="mr-4">Destinations populaires :</span>
            <div className="flex space-x-4">
              {['Dakar', 'Mbour', 'Saly', 'Somone'].map((destination, index) => (
                <motion.button
                  key={destination}
                  className="px-4 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {destination}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;