
import React, { useState, useRef, useEffect } from 'react';
import { IMAGES } from '../constants';
import { View } from '../App';
import { useLanguage } from '../i18n/LanguageContext';
import { Lang } from '../i18n/translations';

interface HeaderProps {
  currentView: View;
  setView: (view: View) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, setView }) => {
  const { t, lang, setLang } = useLanguage();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const isQuote = currentView === 'quote';
  const activeLinkColor = 'text-primary';

  const languages: { code: Lang; name: string; flag: string }[] = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  ];

  const currentLang = languages.find(l => l.code === lang) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 md:px-20 py-3 transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4 cursor-pointer group" onClick={() => setView('home')}>
          <div className="relative group-hover:scale-110 transition-transform duration-300">
            <img
              src={IMAGES.LOGO_PRIMARY}
              alt="GIPS - Guinea International Private Security"
              className="h-12 w-12 object-contain rounded-xl shadow-lg shadow-primary/10"
            />
            <div className="absolute inset-0 rounded-xl border border-primary/20 group-hover:border-primary/50 transition-colors"></div>
          </div>
          <div className="hidden sm:block">
            <h2 className="text-[#111318] text-base font-black leading-none tracking-tight uppercase">G.I.P.S</h2>
            <p className="text-[10px] font-bold text-primary tracking-[0.2em] leading-none uppercase mt-1">Guinee International Private Security</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          <button
            onClick={() => setView('home')}
            className={`text-sm font-bold transition-all hover:scale-105 ${currentView === 'home' ? activeLinkColor : 'text-slate-600 hover:text-primary'}`}
          >
            {t('nav.home')}
          </button>
          <button
            onClick={() => setView('services')}
            className={`text-sm font-bold transition-all hover:scale-105 ${currentView === 'services' ? activeLinkColor : 'text-slate-600 hover:text-primary'}`}
          >
            {t('nav.services')}
          </button>
          <button
            onClick={() => setView('training')}
            className={`text-sm font-bold transition-all hover:scale-105 ${currentView === 'training' ? activeLinkColor : 'text-slate-600 hover:text-primary'}`}
          >
            {t('nav.formation')}
          </button>
          <button
            onClick={() => setView('team')}
            className={`text-sm font-bold transition-all hover:scale-105 ${currentView === 'team' ? activeLinkColor : 'text-slate-600 hover:text-primary'}`}
          >
            {t('nav.team')}
          </button>
          <button
            onClick={() => setView('about')}
            className={`text-sm font-bold transition-all hover:scale-105 ${currentView === 'about' ? activeLinkColor : 'text-slate-600 hover:text-primary'}`}
          >
            {t('nav.about')}
          </button>
          <button
            onClick={() => setView('contact')}
            className={`text-sm font-bold transition-all hover:scale-105 ${currentView === 'contact' ? activeLinkColor : 'text-slate-600 hover:text-primary'}`}
          >
            {t('nav.contact')}
          </button>
        </nav>

        <div className="flex items-center gap-4">
          {/* Premium Language Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 px-3 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-all shadow-sm group"
            >
              <span className="text-xl leading-none">{currentLang.flag}</span>
              <span className="text-xs font-black uppercase text-slate-800 tracking-wider hidden lg:block">{currentLang.code}</span>
              <span className={`material-symbols-outlined text-sm transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`}>expand_more</span>
            </button>

            {isLangOpen && (
              <div className="absolute end-0 mt-3 w-48 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-[100]">
                <div className="p-2 flex flex-col gap-1">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setIsLangOpen(false);
                      }}
                      className={`flex items-center justify-between w-full px-4 py-3 rounded-xl transition-all ${
                        lang === l.code 
                          ? 'bg-primary/5 border-primary/10 text-primary' 
                          : 'hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl leading-none">{l.flag}</span>
                        <span className="text-sm font-bold">{l.name}</span>
                      </div>
                      {lang === l.code && (
                        <span className="material-symbols-outlined text-sm font-bold">check</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => setView('quote')}
            className="hidden lg:flex min-w-[140px] cursor-pointer items-center justify-center rounded-xl h-11 px-6 bg-primary text-white text-sm font-black tracking-wide hover:bg-primary/90 hover:shadow-xl transition-all shadow-lg shadow-primary/20 active:scale-95 border-b-2 border-primary-dark"
          >
            {isQuote ? t('nav.quoteInProgress') : t('nav.quoteBtn')}
          </button>
          
          <button className="md:hidden size-12 flex items-center justify-center bg-slate-50 rounded-xl border border-slate-200 text-slate-900 shadow-sm active:scale-95 transition-all">
            <span className="material-symbols-outlined text-2xl font-bold">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};
