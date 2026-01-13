
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Restaurant Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          La RSE accessible, <br />
          <span className="text-[#FFE065]">concrète et rentable.</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light max-w-3xl mx-auto">
          FreeBoost : Économies à la carte pour votre bar ou restaurant à Grenoble.
        </p>
        <p className="text-lg md:text-xl mb-12 text-gray-200">
          Transformez vos obligations en levier de performance sans perdre de temps.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#audit" className="bg-[#57785A] text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform">
            Démarrer mon audit
          </a>
          <a href="#catalogue" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all">
            Voir le catalogue
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
