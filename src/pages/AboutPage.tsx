import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-green-800 to-green-900">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">À Propos de Longhor Voyage</h1>
            <p className="text-lg md:text-xl">Votre partenaire de confiance pour découvrir le Sénégal</p>
          </div>
        </div>
      </div>

      {/* Notre Histoire */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre Histoire</h2>
            <p className="text-gray-600">
              Fondée avec passion pour le tourisme sénégalais, Longhor Voyage s'engage à offrir des expériences authentiques
              et mémorables à tous nos voyageurs. Notre mission est de vous faire découvrir les merveilles du Sénégal
              tout en respectant son patrimoine culturel et naturel.
            </p>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Valeurs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Authenticité</h3>
              <p className="text-gray-600">
                Nous vous proposons des expériences authentiques qui reflètent la vraie culture sénégalaise.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Qualité</h3>
              <p className="text-gray-600">
                Nous nous engageons à offrir un service de qualité et des expériences inoubliables.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Service Client</h3>
              <p className="text-gray-600">
                Notre équipe est disponible 24/7 pour répondre à vos questions et vous accompagner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Notre Équipe</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une équipe passionnée de guides locaux qui partagent leur amour pour le Sénégal
              et son riche patrimoine culturel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Guide Principal */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="relative h-64">
                <img 
                  src="/assets/images/voyageurs/475136353_1075880224338808_8929915445578195714_n.jpg"
                  alt="Guide Principal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Moussa Diop</h3>
                <p className="text-green-800 font-medium mb-3">Guide Principal</p>
                <p className="text-gray-600 text-sm">
                  Plus de 10 ans d'expérience dans le tourisme au Sénégal. 
                  Passionné par l'histoire et la culture locale.
                </p>
              </div>
            </div>

            {/* Guide Culturel */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="relative h-64">
                <img 
                  src="/assets/images/voyageurs/430334155_866133101980189_3764765549824956561_n.jpg"
                  alt="Guide Culturel"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Aminata Diallo</h3>
                <p className="text-green-800 font-medium mb-3">Guide Culturel</p>
                <p className="text-gray-600 text-sm">
                  Spécialiste des traditions sénégalaises et des sites historiques.
                  Votre passeport pour découvrir l'âme du Sénégal.
                </p>
              </div>
            </div>

            {/* Guide Nature */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="relative h-64">
                <img 
                  src="/assets/images/voyageurs/475739015_1076197630973734_8872330383683474727_n.jpg"
                  alt="Guide Nature"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Ibrahima Sow</h3>
                <p className="text-green-800 font-medium mb-3">Guide Nature</p>
                <p className="text-gray-600 text-sm">
                  Expert en faune et flore locale. Vous fera découvrir les merveilles 
                  naturelles du Sénégal.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 max-w-2xl mx-auto">
              Notre équipe de guides professionnels est là pour vous offrir une expérience 
              authentique et mémorable. Chaque guide est formé pour répondre à vos besoins 
              et vous faire découvrir le meilleur du Sénégal.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Contactez-nous</h2>
            <p className="text-gray-600 mb-8">
              Vous avez des questions ? N'hésitez pas à nous contacter via WhatsApp ou par téléphone.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://wa.me/221776148802"
                className="inline-flex items-center px-6 py-3 bg-green-800 text-white rounded-lg hover:bg-green-900 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <a
                href="tel:+221776148802"
                className="inline-flex items-center px-6 py-3 bg-green-800 text-white rounded-lg hover:bg-green-900 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Appelez-nous
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 