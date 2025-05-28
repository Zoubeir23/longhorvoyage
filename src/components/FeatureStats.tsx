import React from 'react';
import { Users, Calendar, Phone } from 'lucide-react';

const FeatureStats: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-green-50 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-green-800" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Petit Comité</h3>
            <p className="text-gray-600">Excursions en groupe limité</p>
          </div>

          <div className="bg-green-50 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-green-800" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Flexible</h3>
            <p className="text-gray-600">Demi-journée ou journée complète</p>
          </div>

          <div className="bg-green-50 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-green-800" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">+221 77 614 88 02</h3>
            <p className="text-gray-600">Contactez-nous sur WhatsApp</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureStats;