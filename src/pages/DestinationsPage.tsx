import React from 'react';
import { MapPin, Calendar, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Destination {
  id: number;
  title: string;
  location: string;
  duration: string;
  groupSize: string;
  price: string;
  image: string;
  description: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    title: "Désert de Lompoul",
    location: "Lompoul",
    duration: "1 jour",
    groupSize: "2-8 personnes",
    price: "À partir de 25 000 FCFA",
    image: "/assets/images/voyageurs/475136353_1075880224338808_8929915445578195714_n.jpg",
    description: "Découvrez le seul désert du Sénégal avec ses dunes de sable fin et ses couchers de soleil spectaculaires."
  },
  {
    id: 2,
    title: "Île aux Coquillages",
    location: "Joal-Fadiouth",
    duration: "1 jour",
    groupSize: "2-8 personnes",
    price: "À partir de 20 000 FCFA",
    image: "/assets/images/voyageurs/430334155_866133101980189_3764765549824956561_n.jpg",
    description: "Explorez l'île unique construite entièrement en coquillages et découvrez son histoire fascinante."
  },
  {
    id: 3,
    title: "Dakar & Gorée",
    location: "Dakar",
    duration: "1 jour",
    groupSize: "2-8 personnes",
    price: "À partir de 30 000 FCFA",
    image: "/assets/images/voyageurs/475136353_1075880224338808_8929915445578195714_n.jpg",
    description: "Visitez les sites emblématiques de Dakar et l'île historique de Gorée, classée au patrimoine mondial de l'UNESCO."
  },
  {
    id: 4,
    title: "Réserve de Bandia",
    location: "Bandia",
    duration: "1 jour",
    groupSize: "2-8 personnes",
    price: "À partir de 35 000 FCFA",
    image: "/assets/images/voyageurs/430334155_866133101980189_3764765549824956561_n.jpg",
    description: "Partez à la découverte de la faune africaine dans cette réserve naturelle exceptionnelle."
  },
  {
    id: 5,
    title: "Lac Rose",
    location: "Lac Rose",
    duration: "1 jour",
    groupSize: "2-8 personnes",
    price: "À partir de 25 000 FCFA",
    image: "/assets/images/voyageurs/475136353_1075880224338808_8929915445578195714_n.jpg",
    description: "Admirez les eaux roses du lac et découvrez l'extraction traditionnelle du sel."
  },
  {
    id: 6,
    title: "Lagune Somone",
    location: "Somone",
    duration: "1 jour",
    groupSize: "2-8 personnes",
    price: "À partir de 20 000 FCFA",
    image: "/assets/images/voyageurs/430334155_866133101980189_3764765549824956561_n.jpg",
    description: "Explorez la lagune en pirogue et observez les oiseaux dans leur habitat naturel."
  }
];

const DestinationsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[400px] bg-gradient-to-r from-green-800 to-green-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="absolute inset-0 bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Nos Destinations
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Découvrez les merveilles du Sénégal avec nos excursions guidées
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Destinations Grid */}
      <motion.section 
        className="py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <motion.div 
                key={destination.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <motion.img
                    src={destination.image}
                    alt={destination.title}
                    className="object-cover w-full h-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-6">
                  <motion.h3 
                    className="text-xl font-semibold mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  >
                    {destination.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  >
                    {destination.description}
                  </motion.p>
                  <motion.div 
                    className="space-y-2 mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  >
                    <motion.div 
                      className="flex items-center text-gray-600"
                      whileHover={{ x: 5 }}
                    >
                      <MapPin className="w-5 h-5 mr-2" />
                      <span>{destination.location}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center text-gray-600"
                      whileHover={{ x: 5 }}
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      <span>{destination.duration}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center text-gray-600"
                      whileHover={{ x: 5 }}
                    >
                      <Users className="w-5 h-5 mr-2" />
                      <span>{destination.groupSize}</span>
                    </motion.div>
                  </motion.div>
                  <div className="flex items-center justify-between">
                    <motion.span 
                      className="text-green-800 font-semibold"
                      whileHover={{ scale: 1.05 }}
                    >
                      {destination.price}
                    </motion.span>
                    <motion.a
                      href={`https://wa.me/221776148802?text=Je suis intéressé(e) par l'excursion ${destination.title}`}
                      className="inline-flex items-center text-green-800 hover:text-green-900"
                      whileHover={{ x: 5, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Réserver
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Besoin d'aide pour choisir ?</h2>
            <p className="text-gray-600 mb-8">
              Notre équipe est là pour vous aider à choisir la meilleure excursion selon vos envies.
            </p>
            <motion.a
              href="https://wa.me/221776148802"
              className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Contactez-nous sur WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default DestinationsPage; 