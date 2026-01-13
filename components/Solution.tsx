
import React from 'react';
import { ICONS } from '../constants';

const Solution: React.FC = () => {
  const pillars = [
    {
      title: "Rentabilité",
      description: "Rémunération partielle sur les économies réalisées. Notre succès dépend du vôtre.",
      icon: ICONS.Rentability
    },
    {
      title: "Simplicité",
      description: "Un catalogue clair, zéro jargon. Nous écoutons, nous identifions, nous installons.",
      icon: ICONS.Simplicity
    },
    {
      title: "Proximité",
      description: "Partenaires locaux et ancrage grenoblois pour une réactivité maximale.",
      icon: ICONS.Proximity
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Votre service RSE externalisé.</h2>
        <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
          Nous écoutons, nous identifions, nous installons. <br />
          Une méthode clé en main pour votre sérénité.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="group p-8 rounded-2xl bg-[#FDFBF7] border border-gray-100 hover:border-[#57785A]/30 hover:shadow-2xl hover:shadow-green-900/5 transition-all">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-xl bg-[#57785A] text-white group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{pillar.title}</h3>
              <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
