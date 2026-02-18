
import React from 'react';
import { IMAGES } from '../constants';

export const AboutView: React.FC = () => {
  return (
    <div className="flex-1">
      {/* Hero Section: Team & Fleet */}
      <section className="relative h-[500px] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: `linear-gradient(to right, rgba(16, 22, 34, 0.8), rgba(16, 22, 34, 0.2)), url('${IMAGES.ABOUT_HERO}')` 
          }}
        ></div>
        <div className="relative mx-auto flex h-full max-w-[1280px] flex-col justify-center px-6 lg:px-10">
          <div className="max-w-2xl space-y-6 text-white">
            <span className="inline-block rounded-full bg-primary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary border border-primary/30 backdrop-blur-sm">Notre Identité</span>
            <h1 className="text-4xl font-black leading-tight lg:text-6xl">
              Excellence et Intégrité au Service de la Guinée
            </h1>
            <p className="text-lg leading-relaxed text-gray-300">
              Une force de sécurité locale dotée d'une expertise internationale, protégeant vos actifs stratégiques à travers toute la République de Guinée.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats Grid */}
      <section className="relative z-10 -mt-16 px-6 lg:px-10">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center rounded-xl border border-[#f0f2f4] bg-white p-8 text-center shadow-xl shadow-gray-200/50">
            <span className="text-4xl font-black text-primary">15+</span>
            <span className="mt-2 text-sm font-medium text-gray-500 uppercase tracking-wide">Ans d'Expertise</span>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-[#f0f2f4] bg-white p-8 text-center shadow-xl shadow-gray-200/50">
            <span className="text-4xl font-black text-primary">500+</span>
            <span className="mt-2 text-sm font-medium text-gray-500 uppercase tracking-wide">Agents Certifiés</span>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-[#f0f2f4] bg-white p-8 text-center shadow-xl shadow-gray-200/50">
            <span className="text-4xl font-black text-primary">33</span>
            <span className="mt-2 text-sm font-medium text-gray-500 uppercase tracking-wide">Préfectures Couvertes</span>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-[#f0f2f4] bg-white p-8 text-center shadow-xl shadow-gray-200/50">
            <span className="text-4xl font-black text-primary">24/7</span>
            <span className="mt-2 text-sm font-medium text-gray-500 uppercase tracking-wide">Surveillance Active</span>
          </div>
        </div>
      </section>

      {/* CEO Spotlight Section */}
      <section className="py-24 px-6 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start">
            <div className="relative w-full shrink-0 lg:w-1/3">
              <div 
                className="aspect-[4/5] overflow-hidden rounded-2xl bg-gray-200 shadow-2xl" 
                style={{ 
                  // Corrected: using CEO_ABOUT as CEO_PROFILE was missing
                  backgroundImage: `url('${IMAGES.CEO_ABOUT}')`, 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center' 
                }}
              ></div>
              <div className="absolute -bottom-6 -right-6 hidden size-32 items-center justify-center rounded-2xl bg-primary p-4 text-white lg:flex">
                <div className="text-center">
                  <span className="block text-2xl font-bold">TOP</span>
                  <span className="text-xs uppercase opacity-80">Security Leader</span>
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-8">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-primary">Rencontrez notre PDG</h2>
                <h3 className="mt-2 text-4xl font-black text-[#111318]">M. Condé Souleymane</h3>
                <p className="text-xl font-medium text-gray-500">Président Directeur Général</p>
              </div>
              <blockquote className="relative border-l-4 border-primary pl-6 text-2xl font-medium italic text-[#111318]">
                « Notre mission est de redéfinir les standards de sécurité en Guinée par la discipline, la proactivité et une expertise locale inégalée. »
              </blockquote>
              <div className="space-y-4 text-lg leading-relaxed text-gray-600">
                <p>
                  Fort de plus de 15 ans d'expérience dans le secteur de la protection rapprochée et de la sécurité industrielle, M. Condé Souleymane dirige GIPS avec une vision axée sur le développement des compétences locales et l'innovation technologique pour répondre aux défis sécuritaires contemporains.
                </p>
                <p>
                  Sous son leadership, GIPS est devenue un partenaire stratégique pour les multinationales opérant dans les secteurs minier, bancaire et diplomatique en Guinée, en mettant l'accent sur l'intégrité et la rigueur opérationnelle.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 border border-gray-100 shadow-sm">
                  <span className="material-symbols-outlined text-primary text-xl">verified</span>
                  <span className="text-sm font-bold text-gray-700">Expertise Minière</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 border border-gray-100 shadow-sm">
                  <span className="material-symbols-outlined text-primary text-xl">verified</span>
                  <span className="text-sm font-bold text-gray-700">Protection VIP</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 border border-gray-100 shadow-sm">
                  <span className="material-symbols-outlined text-primary text-xl">verified</span>
                  <span className="text-sm font-bold text-gray-700">Innovation Tech</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Impact & Map */}
      <section className="bg-white py-24 px-6 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-16 text-center">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary">Impact Régional</h2>
            <h3 className="mt-2 text-4xl font-black text-[#111318]">Zones d’Intervention</h3>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Notre maillage territorial nous permet d'intervenir rapidement dans les quatre régions naturelles de la Guinée, assurant une continuité de service sans faille.
            </p>
          </div>
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2 overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
              <div className="h-[500px] w-full bg-gray-100 relative group">
                <div 
                  className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700" 
                  // Corrected: using MAP_ABOUT as GUINEA_MAP_ABOUT was missing
                  style={{ backgroundImage: `url('${IMAGES.MAP_ABOUT}')` }}
                ></div>
                {/* Markers Overlay */}
                <div className="absolute top-1/2 left-1/4 animate-bounce">
                  <span className="material-symbols-outlined text-primary text-4xl drop-shadow-lg">location_on</span>
                  <div className="bg-white p-2 rounded-lg shadow-xl text-xs font-bold mt-1">Boké (Mines)</div>
                </div>
                <div className="absolute top-2/3 left-1/2 animate-pulse">
                  <span className="material-symbols-outlined text-primary text-4xl drop-shadow-lg">location_on</span>
                  <div className="bg-white p-2 rounded-lg shadow-xl text-xs font-bold mt-1">Conakry (HQ)</div>
                </div>
                <div className="absolute top-1/3 left-2/3">
                  <span className="material-symbols-outlined text-primary text-4xl drop-shadow-lg">location_on</span>
                  <div className="bg-white p-2 rounded-lg shadow-xl text-xs font-bold mt-1">Kankan</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-xl bg-background-light p-6 hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/20">
                <h4 className="flex items-center gap-3 text-lg font-bold text-[#111318]">
                  <span className="material-symbols-outlined text-primary">hub</span>
                  Hub Logistique Conakry
                </h4>
                <p className="mt-2 text-sm text-gray-600">Centre de commandement centralisé supervisant toutes les opérations nationales 24h/24.</p>
              </div>
              <div className="rounded-xl bg-background-light p-6 hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/20">
                <h4 className="flex items-center gap-3 text-lg font-bold text-[#111318]">
                  <span className="material-symbols-outlined text-primary">manufacturing</span>
                  Couloir de Sécurité Minier
                </h4>
                <p className="mt-2 text-sm text-gray-600">Protection spécialisée pour les sites d'extraction et les convois logistiques en Haute-Guinée.</p>
              </div>
              <div className="rounded-xl bg-background-light p-6 hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/20">
                <h4 className="flex items-center gap-3 text-lg font-bold text-[#111318]">
                  <span className="material-symbols-outlined text-primary">groups</span>
                  Unités Mobiles d'Intervention
                </h4>
                <p className="mt-2 text-sm text-gray-600">Équipes de réaction rapide prêtes à être déployées dans n'importe quelle préfecture sous 2 heures.</p>
              </div>
              <button className="w-full flex items-center justify-center gap-2 rounded-lg border-2 border-primary py-4 text-sm font-bold text-primary hover:bg-primary hover:text-white transition-all">
                Voir tous nos pôles régionaux
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Timeline */}
      <section className="py-24 px-6 lg:px-10 overflow-hidden bg-background-light relative">
        <div className="bg-grid-pattern absolute inset-0 opacity-10"></div>
        <div className="relative mx-auto max-w-[1280px]">
          <div className="mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary">Evolution</h2>
            <h3 className="mt-2 text-4xl font-black text-[#111318]">Notre Histoire</h3>
          </div>
          <div className="relative grid gap-8 md:grid-cols-4">
            <div className="absolute top-8 left-0 hidden h-0.5 w-full bg-primary/20 md:block"></div>
            <div className="relative space-y-4">
              <div className="size-6 rounded-full bg-primary ring-8 ring-primary/10"></div>
              <div className="pt-2">
                <span className="text-2xl font-black text-primary">2008</span>
                <h5 className="font-bold text-[#111318]">Fondation</h5>
                <p className="mt-1 text-sm text-gray-600">Création de GIPS à Conakry avec une équipe de 10 experts en sécurité rapprochée.</p>
              </div>
            </div>
            <div className="relative space-y-4">
              <div className="size-6 rounded-full bg-primary ring-8 ring-primary/10"></div>
              <div className="pt-2">
                <span className="text-2xl font-black text-primary">2013</span>
                <h5 className="font-bold text-[#111318]">Expansion Minière</h5>
                <p className="mt-1 text-sm text-gray-600">Signature des premiers contrats majeurs dans la région de Boké et Kamsar.</p>
              </div>
            </div>
            <div className="relative space-y-4">
              <div className="size-6 rounded-full bg-primary ring-8 ring-primary/10"></div>
              <div className="pt-2">
                <span className="text-2xl font-black text-primary">2018</span>
                <h5 className="font-bold text-[#111318]">Technologie AI</h5>
                <p className="mt-1 text-sm text-gray-600">Intégration de solutions de télésurveillance par drone et analyse prédictive.</p>
              </div>
            </div>
            <div className="relative space-y-4">
              <div className="size-6 rounded-full bg-primary ring-8 ring-primary/10"></div>
              <div className="pt-2">
                <span className="text-2xl font-black text-primary">2024</span>
                <h5 className="font-bold text-[#111318]">Leader National</h5>
                <p className="mt-1 text-sm text-gray-600">GIPS devient la référence n°1 pour la sécurité privée industrielle en Guinée.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
