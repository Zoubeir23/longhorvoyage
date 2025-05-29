import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-100 pt-12 pb-6 mt-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="flex items-center mb-4">
            <span className="text-2xl font-extrabold text-green-800">Longhor</span>
            <span className="text-2xl font-extrabold text-stone-100 ml-1">Voyage</span>
          </div>
          <p className="text-stone-300 text-sm max-w-xs">
            Excursions authentiques au Sénégal, en petit comité, pour des souvenirs inoubliables.
          </p>
        </div>
        {/* Liens rapides */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <h4 className="font-bold mb-3 text-lg">Liens rapides</h4>
          <ul className="space-y-2 text-stone-300 text-sm">
            <li><Link to="/" className="hover:text-green-800 transition">Accueil</Link></li>
            <li><Link to="/destinations" className="hover:text-green-800 transition">Destinations</Link></li>
            <li><Link to="/a-propos" className="hover:text-green-800 transition">À propos</Link></li>
            <li><Link to="/contact" className="hover:text-green-800 transition">Contact</Link></li>
          </ul>
        </div>
        {/* Contact & Réseaux */}
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <h4 className="font-bold mb-3 text-lg">Contact</h4>
          <ul className="space-y-2 text-stone-300 text-sm">
            <li className="flex items-center"><Phone className="w-4 h-4 mr-2" /> +221 77 614 88 02</li>
            <li className="flex items-center"><Mail className="w-4 h-4 mr-2" /> longhorvoyage@gmail.com</li>
            <li className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> Dakar, Sénégal</li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com/longhorvoyage" target="_blank" rel="noopener noreferrer" className="hover:text-green-800"><Facebook className="w-5 h-5" /></a>
            <a href="https://instagram.com/longhorvoyage" target="_blank" rel="noopener noreferrer" className="hover:text-green-800"><Instagram className="w-5 h-5" /></a>
            <a href="https://youtube.com/@longhorvoyage" target="_blank" rel="noopener noreferrer" className="hover:text-green-800"><Youtube className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
      <div 
        className="text-center text-xs text-stone-400 mt-8"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="600"
      >
        © {new Date().getFullYear()} Longhor Voyage. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer; 