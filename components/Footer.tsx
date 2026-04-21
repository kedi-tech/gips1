
import React from 'react';
import { IMAGES } from '../constants';

interface FooterProps {
  setView?: (view: 'home' | 'services' | 'about' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="bg-[#111318] text-white pt-16 pb-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div className="max-w-sm">
            <div className="flex items-center gap-4 mb-6">
              <img 
                alt="GIPS Logo" 
                className="h-16 w-auto object-contain" 
                src={IMAGES.LOGO_INVERT} 
              />
            </div>
            <p className="text-white/60 leading-relaxed mb-6">
              Guinea International Private Security (GIPS) s'engage à fournir des solutions de sécurité innovantes et fiables pour protéger vos intérêts les plus précieux.
            </p>
            <div className="flex gap-4">
              <a className="size-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-primary transition-colors" href="https://www.facebook.com/share/1AxyhvTY9p/" target="_blank" rel="noopener noreferrer">
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
              </a>
             
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="font-bold mb-4 text-guinea-yellow">Société</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><button onClick={() => setView?.('home')} className="hover:text-white transition-colors">Accueil</button></li>
                <li><button onClick={() => setView?.('about')} className="hover:text-white transition-colors">À propos</button></li>
                <li><a className="hover:text-white" href="#">Carrières</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-guinea-yellow">Services</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><button onClick={() => setView?.('services')} className="hover:text-white transition-colors">Tous les services</button></li>
                <li><a className="hover:text-white" href="#">Gardiennage</a></li>
                <li><a className="hover:text-white" href="#">Escorte VIP</a></li>
                <li><a className="hover:text-white" href="#">Télésurveillance</a></li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className="font-bold mb-4 text-guinea-yellow">Contact</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><button onClick={() => setView?.('contact')} className="hover:text-white transition-colors">Nous contacter</button></li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs">location_on</span> Sonfonia, Conakry, Guinée</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs">call</span> +224 628 75 18 75</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs">mail</span> contact@gips-guinee.com</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs">language</span> www.gips-guinee.com</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-white/40 text-xs">© 2017–2026 Guinea International Private Security (GIPS) — Sonfonia, Conakry. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a className="text-white/60 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">social_leaderboard</span></a>
            <a className="text-white/60 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
            <a className="text-white/60 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">mail</span></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
