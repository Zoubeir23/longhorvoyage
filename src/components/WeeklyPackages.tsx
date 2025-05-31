import React from 'react';
import { MapPin, Calendar, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Package {
  id: number;
  title: string;
  location: string;
  duration: string;
  groupSize: string;
  price: string;
  image: string;
}

const packages: Package[] = [
  {
    id: 1,
    title: "Désert de Lompoul",
    location: "Lompoul, Sénégal",
    duration: "1 jour",
    groupSize: "Max 8 personnes",
    price: "25 000 FCFA",
    image: "/assets/images/voyageurs/475136353_1075880224338808_8929915445578195714_n.jpg"
  },
  {
    id: 2,
    title: "Île aux Coquillages",
    location: "Joal-Fadiouth, Sénégal",
    duration: "1 jour",
    groupSize: "Max 8 personnes",
    price: "20 000 FCFA",
    image: "/assets/images/voyageurs/430334155_866133101980189_3764765549824956561_n.jpg"
  },
  {
    id: 3,
    title: "Dakar & Gorée",
    location: "Dakar, Sénégal",
    duration: "1 jour",
    groupSize: "Max 8 personnes",
    price: "30 000 FCFA",
    image: "/assets/images/voyageurs/475136353_1075880224338808_8929915445578195714_n.jpg"
  },
  {
    id: 4,
    title: "Réserve de Bandia",
    location: "Bandia, Sénégal",
    duration: "1 jour",
    groupSize: "Max 8 personnes",
    price: "35 000 FCFA",
    image: "/assets/images/voyageurs/430334155_866133101980189_3764765549824956561_n.jpg"
  },
  {
    id: 5,
    title: "Lac Rose",
    location: "Lac Rose, Sénégal",
    duration: "1 jour",
    groupSize: "Max 8 personnes",
    price: "25 000 FCFA",
    image: "/assets/images/voyageurs/475136353_1075880224338808_8929915445578195714_n.jpg"
  },
  {
    id: 6,
    title: "Lagune Somone",
    location: "Somone, Sénégal",
    duration: "1 jour",
    groupSize: "Max 8 personnes",
    price: "20 000 FCFA",
    image: "/assets/images/voyageurs/430334155_866133101980189_3764765549824956561_n.jpg"
  }
];

const WeeklyPackages: React.FC = () => {
  return (
    <section className="py-16 bg-stone-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">Nos Excursions au Sénégal</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez le Sénégal authentique avec nos excursions sur mesure. 
            Que vous soyez en famille, entre amis ou en groupe, nous vous proposons 
            des visites en petit comité loin du tourisme de masse.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div 
              key={pkg.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48">
                <motion.img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{pkg.title}</h3>
                  <div className="flex items-center text-white/90 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {pkg.location}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <motion.div 
                    className="flex items-center text-gray-600"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="text-sm">{pkg.duration}</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center text-gray-600"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Users className="w-4 h-4 mr-1" />
                    <span className="text-sm">{pkg.groupSize}</span>
                  </motion.div>
                </div>

                <div className="flex items-center justify-between">
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <span className="text-sm text-gray-500">À partir de</span>
                    <div className="text-2xl font-bold text-green-800">{pkg.price}</div>
                  </motion.div>
                  <motion.a
                    href={`https://wa.me/221776148802?text=Je suis intéressé(e) par l'excursion ${pkg.title}`}
                    className="flex items-center text-green-800 hover:text-green-900 transition-colors"
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="mr-2">Réserver</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeeklyPackages; 