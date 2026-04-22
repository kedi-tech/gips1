
import React from 'react';
import { IMAGES } from '../constants';
import { useLanguage } from '../i18n/LanguageContext';

const PARTNERS = [
  { src: IMAGES.PARTNER_BSIC, name: "BSIC" },
  { src: IMAGES.PARTNER_CBG, name: "CBG" },
  { src: IMAGES.PARTNER_DYNAMIC_MINING, name: "Dynamic Mining" },
  { src: IMAGES.PARTNER_ECOBANK, name: "Ecobank" },
  { src: IMAGES.PARTNER_FYIA, name: "FYIA" },
  { src: IMAGES.PARTNER_GUITER, name: "Guiter" },
];

export const PartnersSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-16 px-6 md:px-20 border-t border-charcoal/5">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-10">
          {t('partners.label')}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="group flex flex-col items-center gap-2 rounded-xl border border-gray-100 bg-white px-6 py-4 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
            >
              <img
                src={partner.src}
                alt={`Logo ${partner.name}`}
                className="h-10 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest group-hover:text-primary transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
