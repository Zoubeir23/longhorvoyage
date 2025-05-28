import React from 'react';
import { Search, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[600px] bg-gradient-to-r from-green-800 to-green-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat"></div>
      </div>

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-6">
            Découvrez le <span className="text-green-200">Sénégal</span> avec Longhor Voyage
          </h1>
          <p className="text-xl mb-8 text-green-50">
            Des excursions authentiques pour découvrir les merveilles du Sénégal, 
            de la Petite Côte à Dakar, en passant par le désert de Lompoul.
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-full p-2 flex items-center shadow-lg">
            <div className="flex-1 flex items-center px-4">
              <MapPin className="w-5 h-5 text-green-500 mr-2" />
              <input
                type="text"
                placeholder="Où souhaitez-vous aller ?"
                className="w-full outline-none text-gray-700"
              />
            </div>
            <button className="bg-green-800 text-white px-6 py-3 rounded-full hover:bg-green-900 transition-colors flex items-center">
              <Search className="w-5 h-5 mr-2" />
              Rechercher
            </button>
          </div>

          {/* Popular Destinations */}
          <div className="mt-8 flex items-center text-green-50">
            <span className="mr-4">Destinations populaires :</span>
            <div className="flex space-x-4">
              {['Dakar', 'Mbour', 'Saly', 'Somone'].map((destination) => (
                <button
                  key={destination}
                  className="px-4 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  {destination}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;