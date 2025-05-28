import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  comment: string;
  rating: number;
  image: string;
  tripName: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marie Dubois",
    location: "Paris",
    comment: "Une expérience inoubliable dans le désert marocain. L'équipe était exceptionnelle et l'organisation parfaite.",
    rating: 5,
    image: "https://images.pexels.com/photos/4577821/pexels-photo-4577821.jpeg",
    tripName: "Dunes de Merzouga"
  },
  {
    id: 2,
    name: "Pierre Martin",
    location: "Lyon",
    comment: "La rencontre avec les gorilles au Rwanda restera gravée dans ma mémoire. Un moment magique !",
    rating: 5,
    image: "https://images.pexels.com/photos/4577544/pexels-photo-4577544.jpeg",
    tripName: "Gorilles des Virunga"
  },
  {
    id: 3,
    name: "Sophie Laurent",
    location: "Bordeaux",
    comment: "Zanzibar est un paradis sur terre. Les plages, la culture, tout était parfait.",
    rating: 5,
    image: "https://images.pexels.com/photos/4577558/pexels-photo-4577558.jpeg",
    tripName: "Zanzibar"
  }
];

const TestimonialsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-orange-50">
      <div className="container mx-auto py-16 px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Voyageurs Témoignent</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez les expériences authentiques de nos voyageurs à travers l'Afrique.
            Des moments inoubliables et des souvenirs pour la vie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <Quote size={24} className="text-orange-600 mb-2" />
                <p className="text-gray-600 italic">{testimonial.comment}</p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-orange-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-orange-600 font-medium">{testimonial.tripName}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;