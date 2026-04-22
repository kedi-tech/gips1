
import React from 'react';
import { IMAGES } from '../constants';
import { useLanguage } from '../i18n/LanguageContext';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 md:px-20 bg-background-light">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-guinea-green font-bold tracking-[0.2em] uppercase text-sm mb-4 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-guinea-green"></span> {t('aboutSection.label')}
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-[#111318] leading-tight">
                {t('aboutSection.title')}
              </h2>
            </div>
            <p className="text-[#616f89] text-lg leading-relaxed">{t('aboutSection.desc')}</p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl border border-charcoal/10 bg-white flex items-start gap-4 shadow-sm">
                <div className="p-2 rounded-lg bg-guinea-red/10 text-guinea-red">
                  <span className="material-symbols-outlined">visibility</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#111318]">{t('aboutSection.feat1Title')}</h4>
                  <p className="text-sm text-[#616f89]">{t('aboutSection.feat1Desc')}</p>
                </div>
              </div>
              <div className="p-5 rounded-xl border border-charcoal/10 bg-white flex items-start gap-4 shadow-sm">
                <div className="p-2 rounded-lg bg-guinea-green/10 text-guinea-green">
                  <span className="material-symbols-outlined">badge</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#111318]">{t('aboutSection.feat2Title')}</h4>
                  <p className="text-sm text-[#616f89]">{t('aboutSection.feat2Desc')}</p>
                </div>
              </div>
            </div>
            <div className="flex pt-4">
              <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                {t('aboutSection.learnMore')}
                <span className="material-symbols-outlined">arrow_right_alt</span>
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -bottom-6 -end-6 w-24 h-24 bg-guinea-red/10 rounded-lg -z-10"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                alt="Équipe GIPS devant des camions"
                className="w-full aspect-[4/3] object-cover"
                src={IMAGES.ABOUT_TEAM_HOME}
              />
              <div className="absolute bottom-6 start-6 end-6 p-6 bg-white/95 backdrop-blur rounded-xl shadow-lg border-s-4 border-guinea-yellow">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-primary font-black text-3xl leading-none">2017</p>
                    <p className="text-charcoal/60 text-[10px] font-bold uppercase tracking-wider">{t('aboutSection.foundedLabel')}</p>
                  </div>
                  <div className="w-px h-10 bg-charcoal/10"></div>
                  <div>
                    <p className="text-primary font-black text-3xl leading-none">500+</p>
                    <p className="text-charcoal/60 text-[10px] font-bold uppercase tracking-wider">{t('aboutSection.agentsLabel')}</p>
                  </div>
                  <div className="w-px h-10 bg-charcoal/10"></div>
                  <div>
                    <p className="text-primary font-black text-3xl leading-none">200+</p>
                    <p className="text-charcoal/60 text-[10px] font-bold uppercase tracking-wider">{t('aboutSection.clientsLabel')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
