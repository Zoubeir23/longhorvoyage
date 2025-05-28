import React from 'react';
import DestinationCard, { Destination } from './DestinationCard';

const destinations: Destination[] = [
  {
    id: 1,
    name: 'Dunes de Merzouga',
    location: {
      city: 'Sahara',
      country: 'Maroc'
    },
    price: 450,
    image: 'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg'
  },
  {
    id: 2,
    name: 'Parc Kruger',
    location: {
      city: 'Mpumalanga',
      country: 'Afrique du Sud'
    },
    price: 600,
    image: 'https://images.pexels.com/photos/4577537/pexels-photo-4577537.jpeg'
  },
  {
    id: 3,
    name: 'Gorilles des Virunga',
    location: {
      city: 'Volcanoes',
      country: 'Rwanda'
    },
    price: 800,
    image: 'https://images.pexels.com/photos/4577544/pexels-photo-4577544.jpeg'
  },
  {
    id: 4,
    name: 'Delta de l\'Okavango',
    location: {
      city: 'Maun',
      country: 'Botswana'
    },
    price: 700,
    image: 'https://images.pexels.com/photos/4577552/pexels-photo-4577552.jpeg'
  },
  {
    id: 5,
    name: 'Zanzibar',
    location: {
      city: 'Stone Town',
      country: 'Tanzanie'
    },
    price: 550,
    image: 'https://images.pexels.com/photos/4577558/pexels-photo-4577558.jpeg'
  },
  {
    id: 6,
    name: 'Chutes Victoria',
    location: {
      city: 'Livingstone',
      country: 'Zambie'
    },
    price: 480,
    image: 'https://images.pexels.com/photos/4577566/pexels-photo-4577566.jpeg'
  }
];

const DestinationSection: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nos Destinations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez nos circuits exceptionnels à travers l'Afrique. Des expériences authentiques 
            et des moments inoubliables vous attendent.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Notre Engagement
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nous nous engageons à vous offrir des voyages responsables qui respectent 
            les communautés locales et préservent la beauté naturelle de l'Afrique.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DestinationSection;