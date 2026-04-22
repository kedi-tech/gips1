
import React from 'react';
import { IMAGES } from '../constants';
import { useLanguage } from '../i18n/LanguageContext';

export const TeamView: React.FC = () => {
  const { t } = useLanguage();

  const specializedUnits = [
    {
      title: t('av.team.agent'),
      desc: t('av.team.agentDesc'),
      img: IMAGES.SECURITY_AGENT,
      icon: 'shield'
    },
    {
      title: t('av.team.dog'),
      desc: t('av.team.dogDesc'),
      img: IMAGES.SECURITY_DOG,
      icon: 'pets'
    },
    {
      title: t('av.team.video'),
      desc: t('av.team.videoDesc'),
      img: IMAGES.SURVEILLANCE_VIDEO,
      icon: 'visibility'
    }
  ];

  return (
    <div className="flex-1 bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(to bottom, rgba(16, 22, 34, 0.7), rgba(16, 22, 34, 0.9)), url('${IMAGES.ABOUT_TEAM_HOME}')` }}
        ></div>
        <div className="relative mx-auto flex h-full max-w-[1280px] flex-col items-center justify-center px-6 text-center">
            <span className="inline-block rounded-full bg-primary/20 px-6 py-2 text-xs font-bold uppercase tracking-[0.3em] text-white border border-white/20 backdrop-blur-md mb-8">
                {t('tm.hero.badge')}
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-tight mb-6">
                {t('tm.hero.title')}
            </h1>
            <p className="max-w-2xl text-xl text-white/80 font-medium leading-relaxed">
                {t('tm.hero.desc')}
            </p>
            <div className="mt-12 flex gap-4">
                <div className="h-1.5 w-16 bg-primary rounded-full"></div>
                <div className="h-1.5 w-4 bg-guinea-yellow rounded-full"></div>
                <div className="h-1.5 w-4 bg-guinea-red rounded-full"></div>
                <div className="h-1.5 w-4 bg-guinea-green rounded-full"></div>
            </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 px-6 lg:px-10 max-w-[1280px] mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">{t('tm.leadership.title')}</h2>
            <div className="h-1 w-20 bg-primary/20 rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative">
                <div className="absolute -inset-4 bg-primary/5 rounded-3xl -rotate-2"></div>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
                    <img src={IMAGES.CEO_ABOUT} alt="CEO" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-8 -end-8 bg-white p-8 rounded-2xl shadow-2xl border border-primary/10 hidden md:block">
                    <span className="text-4xl font-black text-primary block">20+</span>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Years Expertise</span>
                </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-8">
                <div>
                    <h3 className="text-4xl font-black text-[#111318] mb-2">{t('av.ceo.name')}</h3>
                    <p className="text-xl font-bold text-primary">{t('av.ceo.jobTitle')}</p>
                </div>
                <p className="text-lg leading-relaxed text-slate-600 italic border-s-4 border-primary ps-6">
                    {t('av.ceo.quote')}
                </p>
                <div className="space-y-6 text-slate-600 leading-relaxed">
                    <p>{t('av.ceo.p1')}</p>
                    <p>{t('av.ceo.p2')}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-background-light rounded-lg text-sm font-bold border border-primary/10">{t('av.ceo.tag1')}</span>
                    <span className="px-4 py-2 bg-background-light rounded-lg text-sm font-bold border border-primary/10">{t('av.ceo.tag2')}</span>
                    <span className="px-4 py-2 bg-background-light rounded-lg text-sm font-bold border border-primary/10">{t('av.ceo.tag3')}</span>
                </div>
            </div>
        </div>
      </section>

      {/* Specialized Units Grid */}
      <section className="py-24 px-6 lg:px-10 bg-background-light">
        <div className="max-w-[1280px] mx-auto">
            <div className="flex flex-col items-center mb-20 text-center">
                <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">{t('tm.specialized.title')}</h2>
                <h3 className="text-3xl md:text-5xl font-black text-[#111318]">{t('av.team.title')}</h3>
                <div className="h-1.5 w-24 bg-primary rounded-full mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {specializedUnits.map((unit, idx) => (
                    <div key={idx} className="group bg-white rounded-3xl overflow-hidden border border-primary/5 shadow-lg hover:shadow-2xl transition-all duration-500">
                        <div className="h-72 overflow-hidden relative">
                            <img src={unit.img} alt={unit.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#111318]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                <p className="text-white text-sm font-medium leading-relaxed">
                                    {unit.desc}
                                </p>
                            </div>
                            <div className="absolute top-6 end-6 size-12 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center text-primary shadow-lg">
                                <span className="material-symbols-outlined">{unit.icon}</span>
                            </div>
                        </div>
                        <div className="p-8">
                            <h4 className="text-2xl font-black text-[#111318] mb-2">{unit.title}</h4>
                            <div className="h-1 w-12 bg-primary/20 group-hover:w-full transition-all duration-500"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Recruitment CTA */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-[1280px] mx-auto">
            <div className="relative bg-[#111318] rounded-[40px] p-8 md:p-20 overflow-hidden text-center text-white">
                {/* Decorative Elements */}
                <div className="absolute top-0 end-0 size-64 bg-primary/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 start-0 size-64 bg-guinea-red/10 rounded-full blur-[100px] -ml-32 -mb-32"></div>
                
                <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                    <h3 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                        {t('tm.recruitment.title')}
                    </h3>
                    <p className="text-xl text-white/70 font-medium leading-relaxed">
                        {t('tm.recruitment.desc')}
                    </p>
                    <button className="px-10 py-5 bg-primary text-white rounded-2xl font-black text-lg hover:bg-white hover:text-primary transition-all shadow-xl hover:shadow-primary/20 active:scale-95">
                        {t('tm.recruitment.btn')}
                    </button>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};
