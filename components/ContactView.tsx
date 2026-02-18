
import React from 'react';
import { IMAGES } from '../constants';

export const ContactView: React.FC = () => {
  return (
    <div className="flex-grow">
      {/* Hero Section & Form */}
      <section className="mx-auto max-w-[1200px] px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left Column: Contact Form */}
          <div className="flex flex-col gap-8">
            <div>
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary mb-4">Support 24h/24 & 7j/7</span>
              <h2 className="text-4xl font-black leading-tight tracking-tight text-[#111318] lg:text-5xl">
                Contactez Guinea International Private Security
              </h2>
              <p className="mt-4 text-lg text-[#616f89]">
                Une équipe de professionnels à votre service pour assurer votre protection et celle de vos biens partout en Guinée.
              </p>
            </div>
            <div className="rounded-2xl border border-[#dbdfe6] bg-white p-8 shadow-sm">
              <form action="#" className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-bold text-[#111318]">Nom Complet</span>
                    <input className="h-12 w-full rounded-lg border border-[#dbdfe6] bg-white px-4 text-base transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" placeholder="Ex: Mamadou Diallo" type="text" />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-bold text-[#111318]">Téléphone</span>
                    <input className="h-12 w-full rounded-lg border border-[#dbdfe6] bg-white px-4 text-base transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" placeholder="+224 620 00 00 00" type="tel" />
                  </label>
                </div>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-bold text-[#111318]">Email</span>
                  <input className="h-12 w-full rounded-lg border border-[#dbdfe6] bg-white px-4 text-base transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" placeholder="votre@email.com" type="email" />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-bold text-[#111318]">Votre Message</span>
                  <textarea className="w-full resize-none rounded-lg border border-[#dbdfe6] bg-white p-4 text-base transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" placeholder="Comment pouvons-nous vous aider ?" rows={4}></textarea>
                </label>
                <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-4 text-base font-bold text-white transition-all hover:bg-blue-700 shadow-lg shadow-primary/25 active:scale-[0.98]" type="submit">
                  Envoyer le Message
                  <span className="material-symbols-outlined">send</span>
                </button>
                <p className="text-center text-xs text-[#616f89]">
                  <span className="material-symbols-outlined text-[14px] align-middle mr-1">lock</span>
                  Vos données sont sécurisées et traitées en toute confidentialité par GIPS.
                </p>
              </form>
            </div>
          </div>

          {/* Right Column: Info & Map */}
          <div className="flex flex-col gap-8">
            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-guinea-yellow/20 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <h3 className="text-sm font-bold text-[#111318]">Siège Social</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#616f89]">
                  Kamsar, Boké<br />
                  République de Guinée
                </p>
              </div>
              <div className="rounded-xl border border-guinea-yellow/20 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <h3 className="text-sm font-bold text-[#111318]">Téléphone</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#616f89]">
                  +224 620 41 42 26<br />
                  Appel direct 24h/24
                </p>
              </div>
            </div>

            {/* WhatsApp Action */}
            <a className="group flex items-center justify-between rounded-xl bg-[#25D366] p-5 text-white shadow-lg transition-all hover:bg-[#128C7E]" href="#">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/80">Message Instantané</p>
                  <p className="text-lg font-bold">Discutez avec nous sur WhatsApp</p>
                </div>
              </div>
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
            </a>

            {/* Map Section */}
            <div className="overflow-hidden rounded-2xl border border-[#dbdfe6] shadow-md">
              <div className="bg-[#f0f2f4] p-4 flex items-center justify-between border-b border-[#dbdfe6]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">explore</span>
                  <span className="text-sm font-bold text-[#111318]">Notre zone d'intervention : Kamsar</span>
                </div>
                <span className="text-xs font-medium text-[#616f89]">Boké, Guinée</span>
              </div>
              <div className="relative h-[300px] w-full bg-[#f0f2f4]">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-80" 
                  // Corrected: using MAP_CONTACT as CONTACT_MAP was missing
                  style={{ backgroundImage: `url('${IMAGES.MAP_CONTACT}')` }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <span className="material-symbols-outlined text-5xl text-primary animate-bounce">location_on</span>
                    <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-primary/20 blur-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
