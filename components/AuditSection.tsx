
import React, { useState } from 'react';
import { getAiAudit } from '../services/geminiService';

const AuditSection: React.FC = () => {
  const [restaurantInfo, setRestaurantInfo] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');

  const handleAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!restaurantInfo.trim()) return;

    setLoading(true);
    setError('');
    try {
      const data = await getAiAudit(restaurantInfo);
      setResult(data);
    } catch (err) {
      console.error(err);
      setError("Impossible de générer l'audit pour le moment. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="audit" className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#57785A] rounded-[3rem] p-8 md:p-16 text-white shadow-2xl relative">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L1 21h22L12 2zm0 3.45L20.15 19H3.85L12 5.45zM11 16h2v2h-2v-2zm0-7h2v5h-2V9z"/>
            </svg>
          </div>

          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Demander mon audit gratuit</h2>
            <p className="text-xl mb-12 text-green-50 opacity-90">
              Décrivez brièvement votre établissement (type de cuisine, surface, nombre de couverts) pour recevoir des premières recommandations personnalisées.
            </p>

            <form onSubmit={handleAudit} className="space-y-6">
              <textarea
                className="w-full bg-white/10 border border-white/20 rounded-2xl p-6 text-white placeholder-green-100 focus:outline-none focus:ring-2 focus:ring-[#FFE065] transition-all"
                rows={4}
                placeholder="Ex: Bar à tapas au centre-ville de Grenoble, 40 places, terrasse, ouvert uniquement le soir..."
                value={restaurantInfo}
                onChange={(e) => setRestaurantInfo(e.target.value)}
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-[#FFE065] text-[#1A1A1A] px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform disabled:opacity-50 flex items-center gap-3"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Analyse en cours...
                  </>
                ) : (
                  "Générer mes recommandations"
                )}
              </button>
            </form>

            {error && <p className="mt-6 text-red-200">{error}</p>}

            {result && (
              <div className="mt-16 bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 animate-fade-in">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-[#FFE065]">✦</span> Vos recommandations
                </h3>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {result.recommendations.map((rec: any, i: number) => (
                    <div key={i} className="bg-white/5 p-6 rounded-2xl">
                      <h4 className="font-bold text-[#FFE065] mb-2">{rec.title}</h4>
                      <p className="text-sm text-green-50 mb-4">{rec.description}</p>
                      <div className="text-xs font-semibold bg-[#FFE065]/20 text-[#FFE065] py-1 px-3 rounded-full inline-block">
                        Économies: {rec.estimatedSavings}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-l-2 border-[#FFE065] bg-white/5 rounded-r-xl">
                  <p className="text-sm italic text-green-50">{result.summary}</p>
                </div>
                <div className="mt-8 flex justify-end">
                    <button className="text-white underline text-sm hover:text-[#FFE065] transition-colors">
                        Télécharger l'audit complet (PDF)
                    </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditSection;
