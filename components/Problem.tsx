
import React from 'react';
import { ICONS } from '../constants';

const Problem: React.FC = () => {
  return (
    <section id="mission" className="py-24 bg-[#F5F5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-6">{ICONS.Clock}</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Vous voulez agir, <br />
              <span className="text-[#57785A]">mais par où commencer ?</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                "Trop de labels, trop d'informations, des solutions techniques incomparables... 
                En tant que dirigeant, vous manquez de temps."
              </p>
              <p className="font-medium text-[#1A1A1A]">
                Résultat : vous repoussez et passez à côté d'économies importantes.
              </p>
            </div>
          </div>
          <div className="bg-white p-12 rounded-3xl shadow-xl shadow-gray-200/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFE065] opacity-20 rounded-bl-full"></div>
            <h3 className="text-2xl font-bold mb-8">Le constat actuel</h3>
            <ul className="space-y-6">
              {[
                "Législations de plus en plus strictes",
                "Hausse constante des coûts de l'énergie",
                "Attente croissante des clients pour l'éco-responsabilité",
                "Manque de ressources internes dédiées"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-[#57785A] mr-3 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
