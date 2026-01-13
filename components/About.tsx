
import React from 'react';

const About: React.FC = () => {
  const team = [
    { name: "Titouan", role: "Stratégie" },
    { name: "Charlotte", role: "Opérations" },
    { name: "Soban", role: "Relation Client" },
    { name: "Baptiste", role: "Finance" },
    { name: "Alexis", role: "Marketing" },
    { name: "Tom", role: "Logistique" }
  ];

  return (
    <section id="equipe" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Une équipe jeune et engagée.</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Étudiants de l'IUT GEA Grenoble, nous avons conçu FreeBoost pour rendre la RSE accessible aux TPE/PME. 
              Notre ambition est de prouver que l'écologie peut être un puissant levier de rentabilité locale.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="font-bold mb-2">Transparence</h4>
                <p className="text-sm text-gray-500">Zéro coût caché, zéro greenwashing.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Travail collaboratif</h4>
                <p className="text-sm text-gray-500">Un partenariat main dans la main.</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
                <img 
                    src="https://media.licdn.com/dms/image/v2/D4E0BAQG0L5Y2w9k-Xw/company-logo_200_200/company-logo_200_200/0/1719255869408/emblem_grenoble_logo?e=2147483647&v=beta&t=A9v3X9S8lI8-G9m6H6K9A-B0G9H6K9A-B0G9H6K9A-B0" 
                    alt="Emblem Grenoble" 
                    className="h-12 grayscale opacity-50 hover:grayscale-0 transition-all"
                />
                <p className="text-sm text-gray-400 max-w-[200px]">
                    Partenaire stratégique : Emblem Grenoble valorise votre engagement.
                </p>
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-3 gap-4">
            {team.map((member, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden aspect-square">
                <img 
                  src={`https://picsum.photos/seed/${member.name}/400/400`} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                  <span className="font-bold text-sm">{member.name}</span>
                  <span className="text-[10px] opacity-80 uppercase tracking-widest">{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
