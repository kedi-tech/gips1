
import React from 'react';
import { IMAGES } from '../constants';
import { useLanguage } from '../i18n/LanguageContext';

export const AboutView: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(to inline-end, rgba(16, 22, 34, 0.8), rgba(16, 22, 34, 0.2)), url('${IMAGES.ABOUT_HERO}')` }}
        ></div>
        <div className="relative mx-auto flex h-full max-w-[1280px] flex-col justify-center px-6 lg:px-10">
          <div className="max-w-2xl space-y-6 text-white">
            <span className="inline-block rounded-full bg-primary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary border border-primary/30 backdrop-blur-sm">{t('av.hero.badge')}</span>
            <h1 className="text-4xl font-black leading-tight lg:text-6xl">{t('av.hero.title')}</h1>
            <p className="text-lg leading-relaxed text-gray-300">{t('av.hero.desc')}</p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="relative z-10 -mt-16 px-6 lg:px-10">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center rounded-xl border border-[#f0f2f4] bg-white p-8 text-center shadow-xl shadow-gray-200/50">
            <span className="text-4xl font-black text-primary">2017</span>
            <span className="mt-2 text-sm font-medium text-gray-500 uppercase tracking-wide">{t('av.stats.foundedLabel')}</span>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-[#f0f2f4] bg-white p-8 text-center shadow-xl shadow-gray-200/50">
            <span className="text-4xl font-black text-primary">500+</span>
            <span className="mt-2 text-sm font-medium text-gray-500 uppercase tracking-wide">{t('av.stats.agentsLabel')}</span>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-[#f0f2f4] bg-white p-8 text-center shadow-xl shadow-gray-200/50">
            <span className="text-4xl font-black text-primary">33</span>
            <span className="mt-2 text-sm font-medium text-gray-500 uppercase tracking-wide">{t('av.stats.prefLabel')}</span>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-[#f0f2f4] bg-white p-8 text-center shadow-xl shadow-gray-200/50">
            <span className="text-4xl font-black text-primary">24/7</span>
            <span className="mt-2 text-sm font-medium text-gray-500 uppercase tracking-wide">{t('av.stats.survLabel')}</span>
          </div>
        </div>
      </section>

      {/* CEO Spotlight */}
      <section className="py-24 px-6 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start">
            <div className="relative w-full shrink-0 lg:w-1/3">
              <div
                className="aspect-[4/5] overflow-hidden rounded-2xl bg-gray-200 shadow-2xl"
                style={{ backgroundImage: `url('${IMAGES.CEO_ABOUT}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              ></div>
              <div className="absolute -bottom-6 -end-6 hidden size-32 items-center justify-center rounded-2xl bg-primary p-4 text-white lg:flex">
                <div className="text-center">
                  <span className="block text-2xl font-bold">TOP</span>
                  <span className="text-xs uppercase opacity-80">{t('av.ceo.topLabel')}</span>
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-8">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-primary">{t('av.ceo.label')}</h2>
                <h3 className="mt-2 text-4xl font-black text-[#111318]">{t('av.ceo.name')}</h3>
                <p className="text-xl font-medium text-gray-500">{t('av.ceo.jobTitle')}</p>
              </div>
              <blockquote className="relative border-s-4 border-primary ps-6 text-2xl font-medium italic text-[#111318]">
                {t('av.ceo.quote')}
              </blockquote>
              <div className="space-y-4 text-lg leading-relaxed text-gray-600">
                <p>{t('av.ceo.p1')}</p>
                <p>{t('av.ceo.p2')}</p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 border border-gray-100 shadow-sm">
                  <span className="material-symbols-outlined text-primary text-xl">verified</span>
                  <span className="text-sm font-bold text-gray-700">{t('av.ceo.tag1')}</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 border border-gray-100 shadow-sm">
                  <span className="material-symbols-outlined text-primary text-xl">verified</span>
                  <span className="text-sm font-bold text-gray-700">{t('av.ceo.tag2')}</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 border border-gray-100 shadow-sm">
                  <span className="material-symbols-outlined text-primary text-xl">verified</span>
                  <span className="text-sm font-bold text-gray-700">{t('av.ceo.tag3')}</span>
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
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary">{t('av.region.label')}</h2>
            <h3 className="mt-2 text-4xl font-black text-[#111318]">{t('av.region.title')}</h3>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">{t('av.region.desc')}</p>
          </div>
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2 overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
              <div className="h-[500px] w-full bg-gray-100 relative group">
                <div
                  className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"
                  style={{ backgroundImage: `url('${IMAGES.MAP_ABOUT}')` }}
                ></div>
                <div className="absolute top-1/2 start-1/4 animate-bounce">
                  <span className="material-symbols-outlined text-primary text-4xl drop-shadow-lg">location_on</span>
                  <div className="bg-white p-2 rounded-lg shadow-xl text-xs font-bold mt-1">Boké (Mines)</div>
                </div>
                <div className="absolute top-2/3 start-1/2 animate-pulse">
                  <span className="material-symbols-outlined text-primary text-4xl drop-shadow-lg">location_on</span>
                  <div className="bg-white p-2 rounded-lg shadow-xl text-xs font-bold mt-1">Conakry (HQ)</div>
                </div>
                <div className="absolute top-1/3 start-2/3">
                  <span className="material-symbols-outlined text-primary text-4xl drop-shadow-lg">location_on</span>
                  <div className="bg-white p-2 rounded-lg shadow-xl text-xs font-bold mt-1">Kankan</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-xl bg-background-light p-6 hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/20">
                <h4 className="flex items-center gap-3 text-lg font-bold text-[#111318]">
                  <span className="material-symbols-outlined text-primary">hub</span>
                  {t('av.region.hub1Title')}
                </h4>
                <p className="mt-2 text-sm text-gray-600">{t('av.region.hub1Desc')}</p>
              </div>
              <div className="rounded-xl bg-background-light p-6 hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/20">
                <h4 className="flex items-center gap-3 text-lg font-bold text-[#111318]">
                  <span className="material-symbols-outlined text-primary">manufacturing</span>
                  {t('av.region.hub2Title')}
                </h4>
                <p className="mt-2 text-sm text-gray-600">{t('av.region.hub2Desc')}</p>
              </div>
              <div className="rounded-xl bg-background-light p-6 hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/20">
                <h4 className="flex items-center gap-3 text-lg font-bold text-[#111318]">
                  <span className="material-symbols-outlined text-primary">groups</span>
                  {t('av.region.hub3Title')}
                </h4>
                <p className="mt-2 text-sm text-gray-600">{t('av.region.hub3Desc')}</p>
              </div>
              <button className="w-full flex items-center justify-center gap-2 rounded-lg border-2 border-primary py-4 text-sm font-bold text-primary hover:bg-primary hover:text-white transition-all">
                {t('av.region.seeAll')}
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
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary">{t('av.vm.label')}</h2>
            <h3 className="mt-2 text-4xl font-black text-[#111318]">{t('av.vm.title')}</h3>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-primary/10 p-10 bg-background-light">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-white">
                <span className="material-symbols-outlined text-3xl">visibility</span>
              </div>
              <h4 className="text-2xl font-black text-[#111318] mb-4">{t('av.vm.visionTitle')}</h4>
              <p className="text-gray-600 leading-relaxed">{t('av.vm.visionDesc')}</p>
            </div>
            <div className="rounded-2xl border border-primary/10 p-10 bg-background-light">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-white">
                <span className="material-symbols-outlined text-3xl">flag</span>
              </div>
              <h4 className="text-2xl font-black text-[#111318] mb-4">{t('av.vm.missionTitle')}</h4>
              <p className="text-gray-600 leading-relaxed">{t('av.vm.missionDesc')}</p>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-primary/5 border border-primary/10 p-8 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <span className="material-symbols-outlined text-primary text-2xl">security</span>
              </div>
              <h5 className="text-lg font-black text-[#111318]">{t('av.vm.secTitle')}</h5>
              <p className="mt-2 text-sm text-gray-600">{t('av.vm.secDesc')}</p>
            </div>
            <div className="rounded-xl bg-primary/5 border border-primary/10 p-8 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <span className="material-symbols-outlined text-primary text-2xl">shield</span>
              </div>
              <h5 className="text-lg font-black text-[#111318]">{t('av.vm.prevTitle')}</h5>
              <p className="mt-2 text-sm text-gray-600">{t('av.vm.prevDesc')}</p>
            </div>
            <div className="rounded-xl bg-primary/5 border border-primary/10 p-8 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <span className="material-symbols-outlined text-primary text-2xl">verified_user</span>
              </div>
              <h5 className="text-lg font-black text-[#111318]">{t('av.vm.protTitle')}</h5>
              <p className="mt-2 text-sm text-gray-600">{t('av.vm.protDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients & References */}
      <section className="py-20 px-6 lg:px-10 bg-white">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12 text-center">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary">{t('av.clients.label')}</h2>
            <h3 className="mt-2 text-4xl font-black text-[#111318]">{t('av.clients.title')}</h3>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-primary/10 p-8 text-center hover:shadow-xl transition-all">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <span className="material-symbols-outlined text-primary text-3xl">business</span>
              </div>
              <h5 className="text-xl font-black text-[#111318]">{t('av.clients.ent')}</h5>
              <p className="mt-3 text-sm text-gray-600">{t('av.clients.entDesc')}</p>
            </div>
            <div className="rounded-2xl border border-primary/10 p-8 text-center hover:shadow-xl transition-all">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <span className="material-symbols-outlined text-primary text-3xl">home</span>
              </div>
              <h5 className="text-xl font-black text-[#111318]">{t('av.clients.res')}</h5>
              <p className="mt-3 text-sm text-gray-600">{t('av.clients.resDesc')}</p>
            </div>
            <div className="rounded-2xl border border-primary/10 p-8 text-center hover:shadow-xl transition-all">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <span className="material-symbols-outlined text-primary text-3xl">diamond</span>
              </div>
              <h5 className="text-xl font-black text-[#111318]">{t('av.clients.min')}</h5>
              <p className="mt-3 text-sm text-gray-600">{t('av.clients.minDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Timeline */}
      <section className="py-24 px-6 lg:px-10 overflow-hidden bg-background-light relative">
        <div className="bg-grid-pattern absolute inset-0 opacity-10"></div>
        <div className="relative mx-auto max-w-[1280px]">
          <div className="mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary">{t('av.timeline.label')}</h2>
            <h3 className="mt-2 text-4xl font-black text-[#111318]">{t('av.timeline.title')}</h3>
          </div>
          <div className="relative grid gap-8 md:grid-cols-4">
            <div className="absolute top-8 start-0 hidden h-0.5 w-full bg-primary/20 md:block"></div>
            <div className="relative space-y-4">
              <div className="size-6 rounded-full bg-primary ring-8 ring-primary/10"></div>
              <div className="pt-2">
                <span className="text-2xl font-black text-primary">2017</span>
                <h5 className="font-bold text-[#111318]">{t('av.timeline.y2017')}</h5>
                <p className="mt-1 text-sm text-gray-600">{t('av.timeline.y2017Desc')}</p>
              </div>
            </div>
            <div className="relative space-y-4">
              <div className="size-6 rounded-full bg-primary ring-8 ring-primary/10"></div>
              <div className="pt-2">
                <span className="text-2xl font-black text-primary">2019</span>
                <h5 className="font-bold text-[#111318]">{t('av.timeline.y2019')}</h5>
                <p className="mt-1 text-sm text-gray-600">{t('av.timeline.y2019Desc')}</p>
              </div>
            </div>
            <div className="relative space-y-4">
              <div className="size-6 rounded-full bg-primary ring-8 ring-primary/10"></div>
              <div className="pt-2">
                <span className="text-2xl font-black text-primary">2021</span>
                <h5 className="font-bold text-[#111318]">{t('av.timeline.y2021')}</h5>
                <p className="mt-1 text-sm text-gray-600">{t('av.timeline.y2021Desc')}</p>
              </div>
            </div>
            <div className="relative space-y-4">
              <div className="size-6 rounded-full bg-primary ring-8 ring-primary/10"></div>
              <div className="pt-2">
                <span className="text-2xl font-black text-primary">2024</span>
                <h5 className="font-bold text-[#111318]">{t('av.timeline.y2024')}</h5>
                <p className="mt-1 text-sm text-gray-600">{t('av.timeline.y2024Desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 lg:px-10 bg-white">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-16 text-center">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary">{t('av.team.label')}</h2>
            <h3 className="mt-2 text-4xl font-black text-[#111318]">{t('av.team.title')}</h3>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">{t('av.team.desc')}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="group overflow-hidden rounded-2xl border border-primary/10 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="h-64 overflow-hidden">
                <img src={IMAGES.SECURITY_AGENT} alt={t('av.team.agent')} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-black text-[#111318]">{t('av.team.agent')}</h4>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{t('av.team.agentDesc')}</p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl border border-primary/10 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="h-64 overflow-hidden">
                <img src={IMAGES.SECURITY_DOG} alt={t('av.team.dog')} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-black text-[#111318]">{t('av.team.dog')}</h4>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{t('av.team.dogDesc')}</p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl border border-primary/10 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="h-64 overflow-hidden">
                <img src={IMAGES.SURVEILLANCE_VIDEO} alt={t('av.team.video')} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-black text-[#111318]">{t('av.team.video')}</h4>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{t('av.team.videoDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 px-6 lg:px-10 bg-background-light">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-16 text-center">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary">{t('av.partners.label')}</h2>
            <h3 className="mt-2 text-4xl font-black text-[#111318]">{t('av.partners.title')}</h3>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">{t('av.partners.desc')}</p>
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
              <div key={partner.name} className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 group">
                <img src={partner.src} alt={`Logo ${partner.name}`} className="h-14 w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider group-hover:text-primary transition-colors">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
