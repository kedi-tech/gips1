
import React from 'react';
import { IMAGES } from '../constants';
import { useLanguage } from '../i18n/LanguageContext';

export const TrainingView: React.FC = () => {
  const { t } = useLanguage();

  const courses = [
    {
      id: 1,
      title: t('tv.course1.title'),
      desc: t('tv.course1.desc'),
      icon: 'shield',
    },
    {
      id: 2,
      title: t('tv.course2.title'),
      desc: t('tv.course2.desc'),
      icon: 'bolt',
    },
    {
      id: 3,
      title: t('tv.course3.title'),
      desc: t('tv.course3.desc'),
      icon: 'pets',
    },
    {
      id: 4,
      title: t('tv.course4.title'),
      desc: t('tv.course4.desc'),
      icon: 'visibility',
    },
    {
      id: 5,
      title: t('tv.course5.title'),
      desc: t('tv.course5.desc'),
      icon: 'star',
    }
  ];

  return (
    <div className="flex flex-1 flex-col items-center">
      {/* Hero Section */}
      <div className="w-full">
        <div className="p-4 md:px-20 lg:px-40 py-10">
          <div 
            className="flex min-h-[450px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-3xl items-center justify-center p-8 text-center border border-primary/10 relative overflow-hidden shadow-2xl transition-all duration-1000"
            style={{ backgroundImage: `linear-gradient(rgba(17, 82, 212, 0.8) 0%, rgba(10, 14, 23, 0.95) 100%), url("${IMAGES.HERO}")` }}
          >
            <div className="z-10 flex flex-col gap-4 max-w-3xl">
              <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full self-center border border-white/20">
                {t('tv.hero.badge')}
              </span>
              <h1 className="text-white text-4xl md:text-7xl font-black leading-tight tracking-tight animate-fade-in-up">
                {t('tv.hero.title')}
              </h1>
              <p className="text-white/80 text-base md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                {t('tv.hero.desc')}
              </p>
            </div>
            
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -mr-32 -mt-32 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-guinea-yellow/10 rounded-full blur-[100px] -ml-32 -mb-32 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="w-full px-6 md:px-20 lg:px-40 pb-20">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-3">{t('tv.courses.label')}</h2>
          <h3 className="text-[#111318] text-3xl md:text-5xl font-black leading-tight">{t('tv.courses.title')}</h3>
          <div className="h-1.5 w-24 bg-primary rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group flex flex-col gap-5 rounded-2xl border border-primary/10 bg-white p-8 hover:border-primary/40 hover:shadow-2xl transition-all duration-500 relative overflow-hidden hover:-translate-y-2"
            >
              <div className="size-16 flex items-center justify-center bg-primary/10 text-primary rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-inner">
                <span className="material-symbols-outlined text-4xl">{course.icon}</span>
              </div>
              <div className="flex flex-col gap-3 relative z-10">
                <h4 className="text-[#111318] text-2xl font-extrabold leading-tight">{course.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{course.desc}</p>
              </div>
              
              {/* Highlight line */}
              <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}

          {/* CTA Card */}
          <div className="flex flex-col gap-6 rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-8 text-white shadow-2xl justify-center relative overflow-hidden group border border-white/10">
            <div className="absolute -right-10 -bottom-10 size-48 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
            <div className="z-10 flex flex-col gap-4">
              <h4 className="text-3xl font-black leading-tight tracking-tight">{t('tv.cta.title')}</h4>
              <p className="text-white/80 text-base leading-relaxed">
                {t('tv.cta.desc')}
              </p>
              <button className="mt-6 py-4 bg-white text-primary rounded-xl font-black text-base hover:shadow-xl hover:scale-[1.02] transition-all active:scale-95">
                {t('tv.cta.btn')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="w-full bg-background-light px-6 md:px-20 lg:px-40 py-24 mb-20 border-y border-primary/5">
        <div className="max-w-4xl mx-auto text-center space-y-8">
            <h3 className="text-3xl md:text-4xl font-black text-[#111318] italic leading-tight">
              "We don't just train security guards; we forge professional defenders of life and property."
            </h3>
            <div className="flex justify-center gap-2">
                {[1, 2, 3].map(i => (
                    <div key={i} className="size-2 bg-primary rounded-full"></div>
                ))}
            </div>
            <p className="text-slate-600 text-lg font-medium leading-relaxed">
              At GIPS Academy, our philosophy is rooted in discipline, tactical precision, and deep ethical commitment. Every graduate carries the mark of excellence that defines our institution.
            </p>
        </div>
      </div>
    </div>
  );
};
