
import React from 'react';
import { IMAGES } from '../constants';

export const ServicesView: React.FC = () => {
  return (
    <div className="flex flex-1 flex-col items-center">
      <div className="w-full">
        <div className="p-4 md:px-20 lg:px-40 py-10">
          <div className="flex min-h-[450px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-2xl items-center justify-center p-8 text-center border border-primary/10 relative overflow-hidden shadow-2xl" 
               style={{ backgroundImage: `linear-gradient(rgba(17, 82, 212, 0.75) 0%, rgba(10, 14, 23, 0.9) 100%), url("${IMAGES.SERVICES_HERO_BG}")` }}>
            <div className="z-10 flex flex-col gap-4 max-w-3xl">
              <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full self-center border border-white/20">Elite Security Solutions</span>
              <h1 className="text-white text-4xl md:text-7xl font-black leading-tight tracking-tight">
                Premium Protection for a Safer Guinea
              </h1>
              <p className="text-white/80 text-base md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                Guinea International Private Security (GIPS) provides elite protection, site surveillance, and tailored professional security solutions for enterprises, events, and individuals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <button className="h-14 px-10 bg-white text-primary rounded-xl font-bold text-lg hover:bg-background-light transition-all flex items-center justify-center gap-2 shadow-lg">
                  Our Services
                  <span className="material-symbols-outlined">arrow_downward</span>
                </button>
                <button className="h-14 px-10 bg-transparent border-2 border-white/40 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full px-6 md:px-20 lg:px-40 pb-20">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-3">Professional Services</h2>
          <h3 className="text-[#111318] text-3xl md:text-5xl font-black leading-tight">GIPS Field Operations</h3>
          <div className="h-1.5 w-24 bg-primary rounded-full mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group flex flex-col gap-4 rounded-2xl border border-primary/10 bg-white p-8 hover:border-primary/40 hover:shadow-2xl transition-all duration-500">
            <div className="size-16 flex items-center justify-center bg-primary/10 text-primary rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <span className="material-symbols-outlined text-4xl">domain</span>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-[#111318] text-2xl font-extrabold leading-tight">Gardiennage de Sites</h4>
              <p className="text-slate-600 text-sm leading-relaxed">24/7 onsite surveillance and access control for residential and commercial complexes.</p>
              <ul className="flex flex-col gap-3 mt-4">
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  Reception and log management
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  Regular perimeter foot patrols
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  CCTV monitoring & reporting
                </li>
              </ul>
            </div>
          </div>

          <div className="group flex flex-col gap-4 rounded-2xl border border-primary/10 bg-white p-8 hover:border-primary/40 hover:shadow-2xl transition-all duration-500">
            <div className="size-16 flex items-center justify-center bg-primary/10 text-primary rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <span className="material-symbols-outlined text-4xl">groups</span>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-[#111318] text-2xl font-extrabold leading-tight">Sécurité d’Événements</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Crowd management and high-profile risk assessment for major public and private events.</p>
              <ul className="flex flex-col gap-3 mt-4">
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  Access and ticket verification
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  Conflict de-escalation
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  VIP zone securing
                </li>
              </ul>
            </div>
          </div>

          <div className="group relative flex flex-col gap-4 rounded-2xl border border-primary/10 bg-white overflow-hidden hover:shadow-2xl transition-all duration-500 h-full">
            <div className="h-48 w-full overflow-hidden">
              <img alt="Industrial Security Operations" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={IMAGES.INDUSTRIAL_IMG} />
              <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-t from-white to-transparent"></div>
            </div>
            <div className="p-8 pt-0 flex flex-col gap-3">
              <h4 className="text-[#111318] text-2xl font-extrabold leading-tight">Sites Industriels & Miniers</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Specialized logistics and perimeter security for Guinea's vital mining and heavy industry operations.</p>
              <ul className="flex flex-col gap-3 mt-4">
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  Asset and heavy equipment guarding
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  Supply chain escorting
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  Mining site access protocol
                </li>
              </ul>
            </div>
          </div>

          <div className="group flex flex-col gap-4 rounded-2xl border border-primary/10 bg-white p-8 hover:border-primary/40 hover:shadow-2xl transition-all duration-500">
            <div className="size-16 flex items-center justify-center bg-primary/10 text-primary rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <span className="material-symbols-outlined text-4xl">person_pin</span>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-[#111318] text-2xl font-extrabold leading-tight">Protection Rapprochée</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Elite personal bodyguards and secure executive transport for diplomats and corporate leaders.</p>
              <ul className="flex flex-col gap-3 mt-4">
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  Unobtrusive personal protection
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  Secured route planning
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  Multilingual security personnel
                </li>
              </ul>
            </div>
          </div>

          <div className="group flex flex-col gap-4 rounded-2xl border border-primary/10 bg-white p-8 hover:border-primary/40 hover:shadow-2xl transition-all duration-500">
            <div className="size-16 flex items-center justify-center bg-primary/10 text-primary rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <span className="material-symbols-outlined text-4xl">local_police</span>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-[#111318] text-2xl font-extrabold leading-tight">Patrouille Mobile</h4>
              <p className="text-slate-600 text-sm leading-relaxed">GPS-tracked rapid intervention vehicles and mobile alarm response units across major cities.</p>
              <ul className="flex flex-col gap-3 mt-4">
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  Sub-15 minute response time
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  Real-time GPS tracking
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  Coordinated tactical teams
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-6 rounded-2xl bg-primary p-8 text-white shadow-2xl justify-center relative overflow-hidden group">
            <div className="absolute -right-10 -bottom-10 size-48 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
            <div className="z-10 flex flex-col gap-4">
              <h4 className="text-3xl font-black leading-tight">Certified Operational Excellence</h4>
              <p className="text-white/80 text-base leading-relaxed">Our agents undergo rigorous international training to ensure maximum operational readiness in any environment.</p>
              <div className="grid grid-cols-2 gap-6 mt-4">
                <div>
                  <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-1">Response</p>
                  <p className="text-2xl font-black tracking-tight">&lt; 15 Min</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-1">Availability</p>
                  <p className="text-2xl font-black tracking-tight">24/7/365</p>
                </div>
              </div>
              <button className="mt-6 py-4 bg-white text-primary rounded-xl font-bold text-base hover:shadow-lg transition-all active:scale-95">
                Request Intervention Plan
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white px-6 md:px-20 lg:px-40 py-20 border-t border-primary/5">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <div>
              <h3 className="text-4xl font-black tracking-tight text-[#111318] mb-4">Securing Assets Across the Republic of Guinea</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                From the capital city of Conakry to the critical industrial mining corridors in Boké, Kamsar, and beyond, GIPS is strategically positioned to provide immediate security support nationwide.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-4 p-5 rounded-xl bg-background-light border border-primary/5">
                <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
                <div>
                  <p className="font-bold text-[#111318]">National HQ</p>
                  <p className="text-sm text-slate-500">Conakry, Republic of Guinea</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-xl bg-background-light border border-primary/5">
                <span className="material-symbols-outlined text-primary text-2xl">local_shipping</span>
                <div>
                  <p className="font-bold text-[#111318]">Regional Hubs</p>
                  <p className="text-sm text-slate-500">Boké, Kindia, Kamsar</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full h-[450px] rounded-3xl overflow-hidden bg-slate-200 shadow-2xl relative group border-8 border-white">
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply opacity-20"></div>
            <img alt="Map of Guinea" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src={IMAGES.MAP_SERVICES} />
            <div className="absolute top-1/2 left-1/3 size-6 bg-primary rounded-full animate-ping opacity-75"></div>
            <div className="absolute top-1/2 left-1/3 size-6 bg-primary rounded-full border-4 border-white shadow-xl"></div>
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-xs font-bold text-primary shadow-lg">GIPS ACTIVE DEPLOYMENT ZONE</div>
          </div>
        </div>
      </div>
    </div>
  );
};
