
import React from 'react';
import { IMAGES } from '../constants';
import { View } from '../App';

interface HeaderProps {
  currentView: View;
  setView: (view: View) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, setView }) => {
  // Unified header design using the primary brand color (Blue) across all views.
  // This satisfies the request to have the "devis" page header match the other pages.
  
  const isQuote = currentView === 'quote';
  
  // Brand colors using the primary blue theme
  const activeLinkColor = 'text-primary';

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b-4 border-solid border-transparent accent-border px-6 md:px-20 py-3 transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => setView('home')}>
          <img
            src={IMAGES.LOGO_PRIMARY}
            alt="GIPS - Guinea International Private Security"
            className="h-10 w-10 object-contain rounded-lg shadow-lg shadow-primary/20"
          />
          <div className="hidden sm:block">
            <h2 className="text-[#111318] text-xl font-black leading-none tracking-tight uppercase">GIPS</h2>
            <p className="text-[9px] font-bold text-primary tracking-[0.2em] leading-none uppercase mt-1">International Security</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-10">
          <button 
            onClick={() => setView('home')} 
            className={`text-sm font-semibold transition-colors ${currentView === 'home' ? activeLinkColor : 'text-[#111318] hover:text-primary'}`}
          >
            Accueil
          </button>
          <button 
            onClick={() => setView('services')} 
            className={`text-sm font-semibold transition-colors ${currentView === 'services' ? activeLinkColor : 'text-[#111318] hover:text-primary'}`}
          >
            Services
          </button>
          <button 
            onClick={() => setView('about')} 
            className={`text-sm font-semibold transition-colors ${currentView === 'about' ? activeLinkColor : 'text-[#111318] hover:text-primary'}`}
          >
            À Propos
          </button>
          <button 
            onClick={() => setView('contact')} 
            className={`text-sm font-semibold transition-colors ${currentView === 'contact' ? activeLinkColor : 'text-[#111318] hover:text-primary'}`}
          >
            Contact
          </button>
        </nav>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setView('quote')}
            className={`hidden lg:flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-11 px-5 bg-primary text-white text-sm font-bold tracking-wide hover:bg-primary/90 transition-all shadow-lg shadow-primary/20`}
          >
            {isQuote ? 'Devis en cours' : 'Demander un Devis'}
          </button>
          <button className="md:hidden text-charcoal">
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};
