
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
            <span className="text-4xl font-black text-primary">2017</span>
            <span className="mt-2 text-sm font-medium text-gray-500 uppercase tracking-wide">Année de Fondation</span>
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
                  Fondée en 2017, G.I.P.S est le fruit d'un partenariat entre la jeunesse guinéenne en Guinée et celle de la diaspora française — animés par le désir d'améliorer la sécurité dans le pays et de contribuer à la création d'un environnement plus sûr pour les investisseurs et les citoyens.
                </p>
                <p>
                  Sous le leadership de M. Condé Souleymane, GIPS est devenue un partenaire stratégique pour les entreprises, les sociétés minières, les résidences privées et les chantiers de construction à travers toute la République de Guinée.
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

      {/* Vision & Mission */}
      <section className="py-24 px-6 lg:px-10 bg-white">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-16 text-center">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary">Qui Sommes-Nous</h2>
            <h3 className="mt-2 text-4xl font-black text-[#111318]">Vision & Mission</h3>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-primary/10 p-10 bg-background-light">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-white">
                <span className="material-symbols-outlined text-3xl">visibility</span>
              </div>
              <h4 className="text-2xl font-black text-[#111318] mb-4">Notre Vision</h4>
              <p className="text-gray-600 leading-relaxed">
                Nous nous battons pour atteindre une sécurité optimale en fournissant des services sur mesure et de haute qualité à nos clients et leur environnement. GIPS ne se contente pas seulement de satisfaire les attentes de ses clients — nous cherchons constamment à les devancer afin d'assurer leur tranquillité d'esprit.
              </p>
            </div>
            <div className="rounded-2xl border border-primary/10 p-10 bg-background-light">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-white">
                <span className="material-symbols-outlined text-3xl">flag</span>
              </div>
              <h4 className="text-2xl font-black text-[#111318] mb-4">Notre Mission</h4>
              <p className="text-gray-600 leading-relaxed">
                Nous perfectionnons continuellement nos stratégies pour exceller dans notre domaine et devenir une référence en matière de sécurité dans nos zones d'opération. Cela témoigne de notre engagement envers l'excellence et la sécurité.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-primary/5 border border-primary/10 p-8 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <span className="material-symbols-outlined text-primary text-2xl">security</span>
              </div>
              <h5 className="text-lg font-black text-[#111318]">Sécurité</h5>
              <p className="mt-2 text-sm text-gray-600">Nos équipes déploient tous les moyens nécessaires pour assurer la sécurité de vos biens et de vos personnes.</p>
            </div>
            <div className="rounded-xl bg-primary/5 border border-primary/10 p-8 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <span className="material-symbols-outlined text-primary text-2xl">shield</span>
              </div>
              <h5 className="text-lg font-black text-[#111318]">Prévention</h5>
              <p className="mt-2 text-sm text-gray-600">Nous mettons tout en œuvre pour anticiper et prévenir les risques avant qu'ils ne se produisent.</p>
            </div>
            <div className="rounded-xl bg-primary/5 border border-primary/10 p-8 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <span className="material-symbols-outlined text-primary text-2xl">verified_user</span>
              </div>
              <h5 className="text-lg font-black text-[#111318]">Protection</h5>
              <p className="mt-2 text-sm text-gray-600">Nous garantissons une protection fiable et rassurante, en toute circonstance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients & References */}
      <section className="py-20 px-6 lg:px-10 bg-white">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12 text-center">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary">Nos Références</h2>
            <h3 className="mt-2 text-4xl font-black text-[#111318]">Principaux Clients</h3>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-primary/10 p-8 text-center hover:shadow-xl transition-all">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <span className="material-symbols-outlined text-primary text-3xl">business</span>
              </div>
              <h5 className="text-xl font-black text-[#111318]">Entreprises</h5>
              <p className="mt-3 text-sm text-gray-600">Services de sécurité pour des entreprises de différents secteurs — commerce, finance et industrie.</p>
            </div>
            <div className="rounded-2xl border border-primary/10 p-8 text-center hover:shadow-xl transition-all">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <span className="material-symbols-outlined text-primary text-3xl">home</span>
              </div>
              <h5 className="text-xl font-black text-[#111318]">Résidences Privées</h5>
              <p className="mt-3 text-sm text-gray-600">Sécurité et surveillance pour résidences privées, incluant patrouilles et systèmes d'alarme.</p>
            </div>
            <div className="rounded-2xl border border-primary/10 p-8 text-center hover:shadow-xl transition-all">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <span className="material-symbols-outlined text-primary text-3xl">diamond</span>
              </div>
              <h5 className="text-xl font-black text-[#111318]">Sociétés Minières</h5>
              <p className="mt-3 text-sm text-gray-600">Services de sécurité pour de grandes sociétés minières en Guinée sur leurs sites d'exploitation.</p>
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
                <span className="text-2xl font-black text-primary">2017</span>
                <h5 className="font-bold text-[#111318]">Fondation</h5>
                <p className="mt-1 text-sm text-gray-600">GIPS fondée par des professionnels expérimentés — partenariat entre la jeunesse guinéenne en Guinée et celle de la diaspora française.</p>
              </div>
            </div>
            <div className="relative space-y-4">
              <div className="size-6 rounded-full bg-primary ring-8 ring-primary/10"></div>
              <div className="pt-2">
                <span className="text-2xl font-black text-primary">2019</span>
                <h5 className="font-bold text-[#111318]">Expansion Minière</h5>
                <p className="mt-1 text-sm text-gray-600">Signature des premiers contrats majeurs avec de grandes sociétés minières en Guinée.</p>
              </div>
            </div>
            <div className="relative space-y-4">
              <div className="size-6 rounded-full bg-primary ring-8 ring-primary/10"></div>
              <div className="pt-2">
                <span className="text-2xl font-black text-primary">2021</span>
                <h5 className="font-bold text-[#111318]">Technologie de Pointe</h5>
                <p className="mt-1 text-sm text-gray-600">Intégration du tracking GPS, surveillance vidéo avancée et sécurité canine.</p>
              </div>
            </div>
            <div className="relative space-y-4">
              <div className="size-6 rounded-full bg-primary ring-8 ring-primary/10"></div>
              <div className="pt-2">
                <span className="text-2xl font-black text-primary">2024</span>
                <h5 className="font-bold text-[#111318]">Référence Nationale</h5>
                <p className="mt-1 text-sm text-gray-600">GIPS devient une référence incontournable en matière de sécurité privée en Guinée.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 lg:px-10 bg-white">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-16 text-center">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary">Nos Experts</h2>
            <h3 className="mt-2 text-4xl font-black text-[#111318]">Notre Équipe d'Experts Qualifiés</h3>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Soigneusement sélectionnés et formés, nos experts combinent compétence humaine et technologie de pointe pour votre protection.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="group overflow-hidden rounded-2xl border border-primary/10 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="h-64 overflow-hidden">
                <img
                  src={IMAGES.SECURITY_AGENT}
                  alt="Agents de sécurité GIPS"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-black text-[#111318]">Agents de Sécurité</h4>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">Soigneusement sélectionnés et formés pour garantir qu'ils sont compétents et fiables dans toutes les situations.</p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl border border-primary/10 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="h-64 overflow-hidden">
                <img
                  src={IMAGES.SECURITY_DOG}
                  alt="Chiens de sécurité GIPS"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-black text-[#111318]">Chiens de Sécurité</h4>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">Services de sécurité canine pour renforcer la protection et la détection sur vos sites.</p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl border border-primary/10 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="h-64 overflow-hidden">
                <img
                  src={IMAGES.SURVEILLANCE_VIDEO}
                  alt="Surveillance vidéo GIPS"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-black text-[#111318]">Surveillance Vidéo</h4>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">Techniciens formés pour surveiller les systèmes de sécurité et répondre rapidement aux situations d'urgence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 px-6 lg:px-10 bg-background-light">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-16 text-center">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary">Confiance & Collaboration</h2>
            <h3 className="mt-2 text-4xl font-black text-[#111318]">Nos Partenaires</h3>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Des institutions de renom font confiance à GIPS pour la sécurité de leurs biens et de leurs équipes.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { src: IMAGES.PARTNER_BSIC, name: "BSIC" },
              { src: IMAGES.PARTNER_CBG, name: "CBG" },
              { src: IMAGES.PARTNER_DYNAMIC_MINING, name: "Dynamic Mining" },
              { src: IMAGES.PARTNER_ECOBANK, name: "Ecobank" },
              { src: IMAGES.PARTNER_FYIA, name: "FYIA" },
              { src: IMAGES.PARTNER_GUITER, name: "Guiter" },
            ].map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
              >
                <img
                  src={partner.src}
                  alt={`Logo ${partner.name}`}
                  className="h-14 w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider group-hover:text-primary transition-colors">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
