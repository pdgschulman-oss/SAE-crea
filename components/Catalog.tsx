
import React from 'react';
import { ICONS } from '../constants';

const Catalog: React.FC = () => {
  const actions = [
    {
      title: "Éclairage LED",
      desc: "Passage aux LED basse consommation pour une facture allégée.",
      icon: ICONS.Led
    },
    {
      title: "Gestion des déchets",
      desc: "Mise en place du tri sélectif et réduction du gaspillage.",
      icon: ICONS.Waste
    },
    {
      title: "Thermostats Connectés",
      desc: "Régulation intelligente du chauffage et de la clim.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Achats Responsables",
      desc: "Favoriser les circuits courts et fournisseurs éthiques.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    }
  ];

  return (
    <section id="catalogue" className="py-24 bg-[#F5F5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Économies à la carte</h2>
          <p className="text-xl text-gray-600">Des actions simples, rapides et immédiatement rentables.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col items-center text-center">
              <div className="mb-6 text-[#57785A]">{item.icon}</div>
              <h3 className="text-lg font-bold mb-3">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-[#FFE065]/10 p-8 rounded-3xl border border-[#FFE065]/30 text-center">
          <p className="text-lg font-medium text-[#1A1A1A]">
            "L'éco-responsabilité n'est plus une option, c'est votre futur avantage concurrentiel."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
