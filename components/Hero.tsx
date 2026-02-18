
import React from 'react';
import { IMAGES } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[65vh] flex flex-col md:flex-row">
      {/* Left: content */}
      <div className="relative z-10 flex-1 flex items-center bg-[#101622]">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 w-full py-16 md:py-0">
          <div className="max-w-[800px] flex flex-col gap-8">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-black/40 backdrop-blur-md rounded-full border border-white/20 w-fit">
            <div className="flex gap-1">
              <span className="h-2 w-2 rounded-full bg-guinea-red"></span>
              <span className="h-2 w-2 rounded-full bg-guinea-yellow"></span>
              <span className="h-2 w-2 rounded-full bg-guinea-green"></span>
            </div>
            <span className="text-white text-xs font-bold tracking-widest uppercase">Expertise Guinéenne Authentique</span>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-white text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
              Votre sécurité, <br/>
              <span className="text-guinea-yellow">notre priorité absolue</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
              Leader de la sécurité privée en Guinée. Nous protégeons vos biens, vos proches et vos infrastructures avec une authenticité et une rigueur sans faille sur tout le territoire.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 items-center mt-4">
            <button className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-primary text-white text-base font-bold hover:scale-105 transition-all shadow-xl shadow-primary/30">
              Appelez-nous maintenant
            </button>
            <button className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-[#25D366] text-white text-base font-bold hover:scale-105 transition-all shadow-xl shadow-green-500/20">
              <span className="material-symbols-outlined mr-2">chat</span>
              WhatsApp
            </button>
            <button className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-transparent text-white border-2 border-white/30 text-base font-bold hover:bg-white/10 transition-all">
              Demander un devis
            </button>
          </div>
          <div className="flex flex-wrap gap-12 mt-12 pt-12 border-t border-white/20">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-guinea-yellow text-3xl">verified_user</span>
              <div className="text-white">
                <p className="text-xl font-bold leading-none">Certifié</p>
                <p className="text-sm text-white/70">Standards GIPS</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-guinea-green text-3xl">security</span>
              <div className="text-white">
                <p className="text-xl font-bold leading-none">Élite</p>
                <p className="text-sm text-white/70">Personnel Formé</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      {/* Right: image with fade into left panel */}
      <div className="relative flex-1 min-h-[40vh] md:min-h-[65vh] overflow-hidden">
        <img 
          alt="Sécurité GIPS - Votre sécurité, notre priorité" 
          className="w-full h-full object-cover object-right" 
          src={IMAGES.HERO} 
        />
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, #101622 0%, #101622 15%, transparent 55%)',
          }}
          aria-hidden
        />
      </div>
    </section>
  );
};
