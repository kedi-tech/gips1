
import React from 'react';
import { IMAGES } from '../constants';

export const LocationSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 border-t border-charcoal/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-6">
          <div className="size-16 rounded-full bg-background-light shadow-inner flex items-center justify-center border-t-2 border-guinea-red">
            <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#111318]">Siège Social Conakry</h3>
            <p className="text-[#616f89]">Couverture stratégique sur tout le territoire Guinéen.</p>
          </div>
        </div>
        <div className="w-full md:w-80 h-32 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all cursor-pointer border-2 border-charcoal/5 group">
          <img 
            alt="Carte de la Guinée" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
            // Corrected: using MAP_HOME as GUINEA_MAP was missing
            src={IMAGES.MAP_HOME} 
          />
        </div>
      </div>
    </section>
  );
};
