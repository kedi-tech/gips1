
import React from 'react';
import { IMAGES } from '../constants';

export const CEOSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-guinea-yellow/10 rounded-full -z-10"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-b-8 border-primary">
              <img 
                alt="PDG M. Condé Souleymane" 
                className="w-full h-auto object-cover aspect-[3/4]" 
                src={IMAGES.CEO_HOME} 
              />
            </div>
          </div>
          <div className="flex flex-col gap-8 order-1 lg:order-2">
            <div>
              <p className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-guinea-red"></span> Rencontrez notre PDG
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-[#111318] leading-tight">
                Une vision d'excellence pour la <span className="text-primary">sécurité en Guinée</span>
              </h2>
            </div>
            <div className="space-y-6 text-[#616f89] text-lg leading-relaxed italic">
              <p>
                "Chez GIPS, notre engagement va au-delà de la simple surveillance. Nous bâtissons une relation de confiance durable avec nos clients en plaçant l'intégrité et le professionnalisme au cœur de chacune de nos interventions."
              </p>
              <p className="not-italic font-medium text-charcoal">
                Sous la direction de M. Condé Souleymane, GIPS s'est imposée comme la référence incontournable du secteur, alliant une profonde connaissance du terrain à une gestion moderne et rigoureuse.
              </p>
            </div>
            <div className="flex pt-4">
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg shadow-primary/20 flex items-center gap-2">
                Notre mot du Directeur
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
