
import React, { useState } from 'react';
import { IMAGES } from '../constants';
import { useLanguage } from '../i18n/LanguageContext';

interface QuoteViewProps {
  onBack?: () => void;
}

interface FormErrors {
  [key: string]: string;
}

export const QuoteView: React.FC<QuoteViewProps> = ({ onBack }) => {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [success, setSuccess] = useState(false);
  const totalSteps = 3;

  const WEBHOOK_URL = 'https://n8n.kedi-tech.com/webhook/9f2e9e50-1971-400d-9dce-1a5334503888';

  const [formData, setFormData] = useState({
    name: '', company: '', email: '', phone: '',
    serviceType: '', location: '', duration: '', details: ''
  });

  const serviceOptions = [
    { value: 'gardiennage', key: 'serviceOpt.gardiennage' },
    { value: 'evenementiel', key: 'serviceOpt.evenementiel' },
    { value: 'industriel', key: 'serviceOpt.industriel' },
    { value: 'vip', key: 'serviceOpt.vip' },
    { value: 'patrouille', key: 'serviceOpt.patrouille' },
  ];

  const locationOptions = [
    { value: 'conakry', key: 'locationOpt.conakry' },
    { value: 'kamsar', key: 'locationOpt.kamsar' },
    { value: 'boke', key: 'locationOpt.boke' },
    { value: 'kankan', key: 'locationOpt.kankan' },
    { value: 'autre', key: 'locationOpt.autre' },
  ];

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) => /^[+]?[0-9\s-]{8,}$/.test(phone);

  const validateStep = (currentStep: number): boolean => {
    const newErrors: FormErrors = {};
    if (currentStep === 1) {
      if (!formData.name.trim()) newErrors.name = t('quote.err.nameRequired');
      if (!formData.email.trim()) {
        newErrors.email = t('quote.err.emailRequired');
      } else if (!validateEmail(formData.email)) {
        newErrors.email = t('quote.err.emailInvalid');
      }
      if (!formData.phone.trim()) {
        newErrors.phone = t('quote.err.phoneRequired');
      } else if (!validatePhone(formData.phone)) {
        newErrors.phone = t('quote.err.phoneInvalid');
      }
    } else if (currentStep === 2) {
      if (!formData.serviceType) newErrors.serviceType = t('quote.err.serviceRequired');
      if (!formData.location) newErrors.location = t('quote.err.locationRequired');
      if (!formData.duration.trim()) newErrors.duration = t('quote.err.durationRequired');
    } else if (currentStep === 3) {
      if (!formData.details.trim()) {
        newErrors.details = t('quote.err.detailsRequired');
      } else if (formData.details.trim().length < 10) {
        newErrors.details = t('quote.err.detailsMinLength');
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => { const u = { ...prev }; delete u[name]; return u; });
    }
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(step) && step < totalSteps) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) { setStep(step - 1); setErrors({}); }
    else if (onBack) onBack();
  };

  const getStepTitle = () => {
    if (step === 1) return t('quote.step1Title');
    if (step === 2) return t('quote.step2Title');
    return t('quote.step3Title');
  };

  const inputClasses = (fieldName: string) => `
    h-14 w-full rounded-lg border bg-white dark:bg-[#1a212e] px-4 text-[#181611] dark:text-white
    outline-none transition-all focus:ring-2 focus:ring-primary/20
    ${errors[fieldName]
      ? 'border-guinea-red focus:border-guinea-red ring-guinea-red/10'
      : 'border-[#e6e3db] dark:border-[#2a3447] focus:border-primary'}
  `;

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-[#181611] font-display relative overflow-hidden transition-colors duration-500">
      <div className="watermark">
        <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <path d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"></path>
        </svg>
      </div>

      {success ? (
        <div className="flex-1 flex flex-col items-center justify-center py-24 px-6 text-center gap-6">
          <span className="material-symbols-outlined text-7xl text-green-500">check_circle</span>
          <h2 className="text-3xl font-black text-[#181611] dark:text-white">{t('quote.successTitle')}</h2>
          <p className="text-lg text-[#616f89] max-w-md">{t('quote.successDesc', { name: formData.name })}</p>
          <button onClick={onBack} className="mt-4 flex items-center gap-2 px-8 h-12 rounded-lg font-bold text-white bg-primary hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined">home</span>
            {t('quote.backHome')}
          </button>
        </div>
      ) : (
        <>
          <main className="flex-1 flex flex-col items-center py-12 px-4 md:px-10 lg:px-40">
            <div className="max-w-[1000px] w-full flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2 text-center md:text-start">
                  <h1 className="text-[#181611] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">{t('quote.title')}</h1>
                  <p className="text-[#616f89] dark:text-gray-400 text-lg max-w-2xl">{t('quote.desc')}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2 bg-white dark:bg-[#1a212e] rounded-xl shadow-2xl border border-[#e6e3db] dark:border-[#2a3447] p-8 transition-all duration-300">
                  <div className="mb-6 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-primary">
                    <span>{getStepTitle()}</span>
                    <span>{t('quote.stepOf', { step, total: totalSteps })}</span>
                  </div>

                  {step === 1 && (
                    <form className="flex flex-col gap-8 animate-in fade-in slide-in-from-end-4 duration-500" onSubmit={handleNext}>
                      <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3 border-b border-[#f5f3f0] dark:border-[#2a3447] pb-4">
                          <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">person</span>
                          <h3 className="text-xl font-bold dark:text-white">{t('quote.coordsTitle')}</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-[#181611] dark:text-gray-200">{t('quote.nameLabel')}</label>
                            <input name="name" value={formData.name} onChange={handleInputChange} className={inputClasses('name')} placeholder={t('quote.namePlaceholder')} type="text" />
                            {errors.name && <span className="text-xs font-medium text-guinea-red">{errors.name}</span>}
                          </div>
                          <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-[#181611] dark:text-gray-200">{t('quote.companyLabel')}</label>
                            <input name="company" value={formData.company} onChange={handleInputChange} className={inputClasses('company')} placeholder={t('quote.companyPlaceholder')} type="text" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-[#181611] dark:text-gray-200">{t('quote.emailLabel')}</label>
                            <input name="email" value={formData.email} onChange={handleInputChange} className={inputClasses('email')} placeholder={t('quote.emailPlaceholder')} type="email" />
                            {errors.email && <span className="text-xs font-medium text-guinea-red">{errors.email}</span>}
                          </div>
                          <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-[#181611] dark:text-gray-200">{t('quote.phoneLabel')}</label>
                            <input name="phone" value={formData.phone} onChange={handleInputChange} className={inputClasses('phone')} placeholder={t('quote.phonePlaceholder')} type="tel" />
                            {errors.phone && <span className="text-xs font-medium text-guinea-red">{errors.phone}</span>}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-end pt-4 border-t border-[#f5f3f0] dark:border-[#2a3447]">
                        <button className="flex items-center gap-2 px-10 h-14 rounded-lg font-black text-white bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all transform active:scale-95" type="submit">
                          {t('quote.nextBtn')}
                          <span className="material-symbols-outlined rtl:-rotate-180 transition-transform">arrow_forward</span>
                        </button>
                      </div>
                    </form>
                  )}

                  {step === 2 && (
                    <form className="flex flex-col gap-8 animate-in fade-in slide-in-from-end-4 duration-500" onSubmit={handleNext}>
                      <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3 border-b border-[#f5f3f0] dark:border-[#2a3447] pb-4">
                          <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">shield</span>
                          <h3 className="text-xl font-bold dark:text-white">{t('quote.step2OpTitle')}</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-[#181611] dark:text-gray-200">{t('quote.serviceLabel')}</label>
                            <select name="serviceType" value={formData.serviceType} onChange={handleInputChange} className={`${inputClasses('serviceType')} form-select-custom`}>
                              <option value="">{t('quote.serviceDefault')}</option>
                              {serviceOptions.map(opt => (
                                <option key={opt.value} value={opt.value}>{t(opt.key)}</option>
                              ))}
                            </select>
                            {errors.serviceType && <span className="text-xs font-medium text-guinea-red">{errors.serviceType}</span>}
                          </div>
                          <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-[#181611] dark:text-gray-200">{t('quote.locationLabel')}</label>
                            <select name="location" value={formData.location} onChange={handleInputChange} className={`${inputClasses('location')} form-select-custom`}>
                              <option value="">{t('quote.locationDefault')}</option>
                              {locationOptions.map(opt => (
                                <option key={opt.value} value={opt.value}>{t(opt.key)}</option>
                              ))}
                            </select>
                            {errors.location && <span className="text-xs font-medium text-guinea-red">{errors.location}</span>}
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-sm font-bold text-[#181611] dark:text-gray-200">{t('quote.durationLabel')}</label>
                          <div className="relative">
                            <span className="absolute start-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400">schedule</span>
                            <input name="duration" value={formData.duration} onChange={handleInputChange} className={`${inputClasses('duration')} ps-12`} placeholder={t('quote.durationPlaceholder')} type="text" />
                          </div>
                          {errors.duration && <span className="text-xs font-medium text-guinea-red">{errors.duration}</span>}
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-[#f5f3f0] dark:border-[#2a3447]">
                        <button className="flex items-center gap-2 px-6 h-14 rounded-lg font-bold text-[#111318] dark:text-white bg-[#f5f3f0] dark:bg-[#2a3447] hover:bg-gray-200 dark:hover:bg-gray-700 transition-all" type="button" onClick={handleBack}>
                          <span className="material-symbols-outlined rtl:rotate-180 transition-transform">arrow_back</span>
                          {t('quote.backBtn')}
                        </button>
                        <button className="flex items-center gap-2 px-10 h-14 rounded-lg font-black text-white bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all transform active:scale-95" type="submit">
                          {t('quote.nextBtn')}
                          <span className="material-symbols-outlined rtl:-rotate-180 transition-transform">arrow_forward</span>
                        </button>
                      </div>
                    </form>
                  )}

                  {step === 3 && (
                    <form className="flex flex-col gap-8 animate-in fade-in slide-in-from-end-4 duration-500" onSubmit={async (e) => {
                      e.preventDefault();
                      if (!validateStep(3)) return;
                      setSubmitting(true);
                      setSubmitError('');
                      try {
                        await fetch(WEBHOOK_URL, {
                          method: 'POST',
                          mode: 'no-cors',
                          headers: { 'Content-Type': 'text/plain' },
                          body: JSON.stringify({
                            nom: formData.name, societe: formData.company,
                            email: formData.email, telephone: formData.phone,
                            service: formData.serviceType, localisation: formData.location,
                            duree: formData.duration, details: formData.details,
                          }),
                        });
                        setSuccess(true);
                      } catch {
                        setSubmitError(t('quote.err.submit'));
                      } finally {
                        setSubmitting(false);
                      }
                    }}>
                      <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3 border-b border-[#f5f3f0] dark:border-[#2a3447] pb-4">
                          <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">description</span>
                          <h3 className="text-xl font-bold dark:text-white">{t('quote.step3FinalTitle')}</h3>
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-sm font-bold text-[#181611] dark:text-gray-200">{t('quote.detailsLabel')}</label>
                          <textarea name="details" value={formData.details} onChange={handleInputChange} className={`${inputClasses('details')} min-h-[150px] py-4 resize-none`} placeholder={t('quote.detailsPlaceholder')} rows={6}></textarea>
                          {errors.details && <span className="text-xs font-medium text-guinea-red">{errors.details}</span>}
                        </div>
                        <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 flex gap-4">
                          <span className="material-symbols-outlined text-primary">info</span>
                          <p className="text-xs text-[#616f89] leading-relaxed">{t('quote.consent')}</p>
                        </div>
                      </div>
                      {submitError && <p className="text-xs font-medium text-guinea-red text-center">{submitError}</p>}
                      <div className="flex items-center justify-between pt-4 border-t border-[#f5f3f0] dark:border-[#2a3447]">
                        <button className="flex items-center gap-2 px-6 h-14 rounded-lg font-bold text-[#111318] dark:text-white bg-[#f5f3f0] dark:bg-[#2a3447] hover:bg-gray-200 dark:hover:bg-gray-700 transition-all" type="button" onClick={handleBack} disabled={submitting}>
                          <span className="material-symbols-outlined rtl:rotate-180 transition-transform">arrow_back</span>
                          {t('quote.backBtn')}
                        </button>
                        <button className="flex items-center gap-2 px-10 h-14 rounded-lg font-black text-white bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all transform active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed" type="submit" disabled={submitting}>
                          {submitting ? t('quote.sending') : t('quote.finalBtn')}
                          <span className="material-symbols-outlined">{submitting ? 'hourglass_empty' : 'verified'}</span>
                        </button>
                      </div>
                    </form>
                  )}
                </div>

                <div className="flex flex-col gap-6">
                  <div className="bg-primary/10 dark:bg-primary/5 border border-primary/20 p-6 rounded-xl flex flex-col gap-4 shadow-sm">
                    <h4 className="font-bold text-[#181611] dark:text-white flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">verified_user</span>
                      {t('quote.whyGips')}
                    </h4>
                    <ul className="flex flex-col gap-4 text-sm text-[#616f89] dark:text-gray-300">
                      <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>{t('quote.gipsPoint1')}</li>
                      <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>{t('quote.gipsPoint2')}</li>
                      <li className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>{t('quote.gipsPoint3')}</li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-[#1a212e] border border-[#e6e3db] dark:border-[#2a3447] rounded-xl overflow-hidden shadow-xl group">
                    <div className="h-40 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${IMAGES.QUOTE_SIDEBAR_IMG}')` }}></div>
                    <div className="p-6 flex flex-col gap-4">
                      <h4 className="font-bold dark:text-white">{t('quote.urgentTitle')}</h4>
                      <p className="text-sm text-[#616f89] dark:text-gray-400">{t('quote.urgentDesc')}</p>
                      <a className="flex items-center justify-center gap-2 w-full py-4 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all shadow-lg shadow-primary/5" href="tel:+224620000000">
                        <span className="material-symbols-outlined">call</span>
                        +224 620 41 42 26
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <footer className="bg-white/50 dark:bg-[#101622]/50 border-t border-[#e6e3db] dark:border-[#2a3447] py-10 px-6 md:px-20 mt-12 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-start">
              <div className="flex items-center gap-3 opacity-60">
                <div className="size-8 text-primary">
                  <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fillRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-sm font-bold dark:text-white">{t('quote.footerCopyright')}</span>
              </div>
              <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-[#616f89] dark:text-gray-400">
                <a className="hover:text-primary transition-colors" href="#">{t('quote.footerPrivacy')}</a>
                <a className="hover:text-quote-primary transition-colors" href="#">{t('quote.footerTerms')}</a>
                <a className="hover:text-primary transition-colors" href="#">{t('quote.footerSupport')}</a>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};
