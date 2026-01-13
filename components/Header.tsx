
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#57785A] rounded-lg flex items-center justify-center text-white font-bold text-xl">
              FB
            </div>
            <span className="text-xl font-bold tracking-tight">FreeBoost</span>
          </div>
          
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#" className="hover:text-[#57785A] transition-colors">Accueil</a>
            <a href="#mission" className="hover:text-[#57785A] transition-colors">Notre Mission</a>
            <a href="#catalogue" className="hover:text-[#57785A] transition-colors">Le Catalogue</a>
            <a href="#equipe" className="hover:text-[#57785A] transition-colors">L'Équipe</a>
          </nav>

          <a 
            href="#audit" 
            className="bg-[#57785A] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#4a664c] transition-all shadow-lg shadow-green-900/10"
          >
            Audit gratuit
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
