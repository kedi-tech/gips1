
import React from 'react';
import { IMAGES } from '../constants';
import { View } from '../App';
import { useLanguage } from '../i18n/LanguageContext';

interface HeroProps {
  setView: (view: View) => void;
}

export const Hero: React.FC<HeroProps> = ({ setView }) => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[25vh] flex flex-col md:flex-row">
      {/* Left: content */}
      <div className="relative z-10 flex-1 flex items-center bg-[#101622]">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 w-full py-10 md:py-0">
          <div className="max-w-[800px] flex flex-col gap-5">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-black/40 backdrop-blur-md rounded-full border border-white/20 w-fit">
              <div className="flex gap-1">
                <span className="h-2 w-2 rounded-full bg-guinea-red"></span>
                <span className="h-2 w-2 rounded-full bg-guinea-yellow"></span>
                <span className="h-2 w-2 rounded-full bg-guinea-green"></span>
              </div>
              <span className="text-white text-xs font-bold tracking-widest uppercase">{t('hero.badge')}</span>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-white text-4xl md:text-5xl font-black leading-[1.1] tracking-tight">
                {t('hero.title1')} <br/>
                <span className="text-guinea-yellow">{t('hero.title2')}</span>
              </h1>
              <p className="text-white/90 text-base md:text-lg font-normal leading-relaxed max-w-2xl">
                {t('hero.desc')}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              <button
                onClick={() => window.location.href = 'tel:+224628751875'}
                className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-sm font-bold hover:scale-105 transition-all shadow-xl shadow-primary/30">
                {t('hero.callBtn')}
              </button>
              <button
                onClick={() => window.open('https://wa.me/224628751875', '_blank')}
                className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-[#25D366] text-white text-sm font-bold hover:scale-105 transition-all shadow-xl shadow-green-500/20">
                <span className="material-symbols-outlined mr-2">chat</span>
                WhatsApp
              </button>
              <button
                onClick={() => setView('quote')}
                className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-transparent text-white border-2 border-white/30 text-sm font-bold hover:bg-white/10 transition-all">
                {t('hero.quoteBtn')}
              </button>
            </div>
            <div className="flex flex-wrap gap-8 mt-4 pt-4 border-t border-white/20">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-guinea-yellow text-3xl">verified_user</span>
                <div className="text-white">
                  <p className="text-xl font-bold leading-none">{t('hero.cert')}</p>
                  <p className="text-sm text-white/70">{t('hero.certSub')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-guinea-green text-3xl">security</span>
                <div className="text-white">
                  <p className="text-xl font-bold leading-none">{t('hero.elite')}</p>
                  <p className="text-sm text-white/70">{t('hero.eliteSub')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Right: image with fade into left panel */}
      <div className="relative flex-1 min-h-[20vh] md:min-h-[20vh] overflow-hidden">
        <img
          alt="Sécurité GIPS - Votre sécurité, notre priorité"
          className="w-full h-full object-cover object-right"
          src={IMAGES.HERO}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #101622 0%, #101622 15%, transparent 55%)' }}
          aria-hidden
        />
      </div>
    </section>
  );
};
