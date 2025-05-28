import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

export interface Destination {
  id: number;
  name: string;
  location: {
    city: string;
    country: string;
  };
  price: number;
  image: string;
}

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-64">
        <img 
          src={destination.image} 
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-1">{destination.name}</h3>
          <div className="flex items-center text-white/90 text-sm">
            <MapPin size={16} className="mr-1" />
            {destination.location.city}, {destination.location.country}
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-gray-500">À partir de</span>
            <div className="text-xl font-bold text-green-800">{destination.price}€</div>
          </div>
          <button className="flex items-center text-green-800 hover:text-green-900 transition-colors">
            <span className="mr-2">Découvrir</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;