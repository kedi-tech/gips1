
import React, { useState } from 'react';
import { IMAGES, SERVICE_OPTIONS, LOCATION_OPTIONS } from '../constants';

interface QuoteViewProps {
  onBack?: () => void;
}

interface FormErrors {
  [key: string]: string;
}

export const QuoteView: React.FC<QuoteViewProps> = ({ onBack }) => {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<FormErrors>({});
  const totalSteps = 3;
  
  // Dynamic form state
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceType: '',
    location: '',
    duration: '',
    details: ''
  });

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    // Basic validation for phone: at least 8 digits
    return /^[+]?[0-9\s-]{8,}$/.test(phone);
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: FormErrors = {};

    if (currentStep === 1) {
      if (!formData.name.trim()) newErrors.name = "Le nom complet est requis.";
      if (!formData.email.trim()) {
        newErrors.email = "L'email est requis.";
      } else if (!validateEmail(formData.email)) {
        newErrors.email = "Veuillez entrer une adresse email valide.";
      }
      if (!formData.phone.trim()) {
        newErrors.phone = "Le numéro de téléphone est requis.";
      } else if (!validatePhone(formData.phone)) {
        newErrors.phone = "Format de téléphone invalide (min. 8 chiffres).";
      }
    } else if (currentStep === 2) {
      if (!formData.serviceType) newErrors.serviceType = "Veuillez sélectionner un type de service.";
      if (!formData.location) newErrors.location = "Veuillez choisir un lieu.";
      if (!formData.duration.trim()) newErrors.duration = "Veuillez préciser la durée.";
    } else if (currentStep === 3) {
      if (!formData.details.trim()) {
        newErrors.details = "Veuillez fournir quelques détails sur votre besoin.";
      } else if (formData.details.trim().length < 10) {
        newErrors.details = "Veuillez être un peu plus précis (min. 10 caractères).";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field as user types
    if (errors[name]) {
      setErrors(prev => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(step)) {
      if (step < totalSteps) setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      setErrors({}); // Clear errors when going back
    } else if (onBack) {
      onBack();
    }
  };

  const getStepTitle = () => {
    if (step === 1) return "Informations personnelles";
    if (step === 2) return "Détails de la mission";
    return "Finalisation de la demande";
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

      <main className="flex-1 flex flex-col items-center py-12 px-4 md:px-10 lg:px-40">
        <div className="max-w-[1000px] w-full flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 text-center md:text-left">
              <h1 className="text-[#181611] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">Demander un devis gratuit</h1>
              <p className="text-[#616f89] dark:text-gray-400 text-lg max-w-2xl">Obtenez une solution de sécurité sur-mesure adaptée aux réalités du terrain en Guinée. Simple, rapide et sans engagement.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 bg-white dark:bg-[#1a212e] rounded-xl shadow-2xl border border-[#e6e3db] dark:border-[#2a3447] p-8 transition-all duration-300">
              <div className="mb-6 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-primary">
                 <span>{getStepTitle()}</span>
                 <span>Étape {step} / {totalSteps}</span>
              </div>
              
              {step === 1 && (
                <form className="flex flex-col gap-8 animate-in fade-in slide-in-from-right-4 duration-500" onSubmit={handleNext}>
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3 border-b border-[#f5f3f0] dark:border-[#2a3447] pb-4">
                      <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">person</span>
                      <h3 className="text-xl font-bold dark:text-white">Vos coordonnées</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-[#181611] dark:text-gray-200">Nom Complet</label>
                        <input name="name" value={formData.name} onChange={handleInputChange} className={inputClasses('name')} placeholder="Mamadou Diallo" type="text"/>
                        {errors.name && <span className="text-xs font-medium text-guinea-red">{errors.name}</span>}
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-[#181611] dark:text-gray-200">Société / Organisation</label>
                        <input name="company" value={formData.company} onChange={handleInputChange} className={inputClasses('company')} placeholder="Nom de l'entreprise (Optionnel)" type="text"/>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-[#181611] dark:text-gray-200">Email professionnel</label>
                        <input name="email" value={formData.email} onChange={handleInputChange} className={inputClasses('email')} placeholder="contact@entreprise.gn" type="email"/>
                        {errors.email && <span className="text-xs font-medium text-guinea-red">{errors.email}</span>}
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-[#181611] dark:text-gray-200">Téléphone de contact</label>
                        <input name="phone" value={formData.phone} onChange={handleInputChange} className={inputClasses('phone')} placeholder="+224 620 00 00 00" type="tel"/>
                        {errors.phone && <span className="text-xs font-medium text-guinea-red">{errors.phone}</span>}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-end pt-4 border-t border-[#f5f3f0] dark:border-[#2a3447]">
                    <button className="flex items-center gap-2 px-10 h-14 rounded-lg font-black text-white bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all transform active:scale-95" type="submit">
                      Suivant
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                  </div>
                </form>
              )}

              {step === 2 && (
                <form className="flex flex-col gap-8 animate-in fade-in slide-in-from-right-4 duration-500" onSubmit={handleNext}>
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3 border-b border-[#f5f3f0] dark:border-[#2a3447] pb-4">
                      <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">shield</span>
                      <h3 className="text-xl font-bold dark:text-white">Détails opérationnels</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-[#181611] dark:text-gray-200">Type de service</label>
                        <select name="serviceType" value={formData.serviceType} onChange={handleInputChange} className={`${inputClasses('serviceType')} form-select-custom`}>
                          <option value="">Sélectionner un service</option>
                          {SERVICE_OPTIONS.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                        {errors.serviceType && <span className="text-xs font-medium text-guinea-red">{errors.serviceType}</span>}
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-[#181611] dark:text-gray-200">Localisation</label>
                        <select name="location" value={formData.location} onChange={handleInputChange} className={`${inputClasses('location')} form-select-custom`}>
                          <option value="">Choisir une ville</option>
                          {LOCATION_OPTIONS.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                        {errors.location && <span className="text-xs font-medium text-guinea-red">{errors.location}</span>}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-[#181611] dark:text-gray-200">Durée du contrat souhaitée</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400">schedule</span>
                        <input name="duration" value={formData.duration} onChange={handleInputChange} className={`${inputClasses('duration')} pl-12`} placeholder="Ex: 12 mois, mission ponctuelle, hebdomadaire..." type="text"/>
                      </div>
                      {errors.duration && <span className="text-xs font-medium text-guinea-red">{errors.duration}</span>}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-[#f5f3f0] dark:border-[#2a3447]">
                    <button className="flex items-center gap-2 px-6 h-14 rounded-lg font-bold text-[#111318] dark:text-white bg-[#f5f3f0] dark:bg-[#2a3447] hover:bg-gray-200 dark:hover:bg-gray-700 transition-all" type="button" onClick={handleBack}>
                      <span className="material-symbols-outlined">arrow_back</span>
                      Retour
                    </button>
                    <button className="flex items-center gap-2 px-10 h-14 rounded-lg font-black text-white bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all transform active:scale-95" type="submit">
                      Suivant
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                  </div>
                </form>
              )}

              {step === 3 && (
                <form className="flex flex-col gap-8 animate-in fade-in slide-in-from-right-4 duration-500" onSubmit={(e) => {
                  e.preventDefault();
                  if (validateStep(3)) {
                    alert("Merci ! Votre demande a été transmise à nos experts. Vous recevrez une réponse sous 24h.");
                    if (onBack) onBack();
                  }
                }}>
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3 border-b border-[#f5f3f0] dark:border-[#2a3447] pb-4">
                      <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">description</span>
                      <h3 className="text-xl font-bold dark:text-white">Précisions finales</h3>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-[#181611] dark:text-gray-200">Décrivez vos besoins spécifiques</label>
                      <textarea name="details" value={formData.details} onChange={handleInputChange} className={`${inputClasses('details')} min-h-[150px] py-4 resize-none`} placeholder="Nombre d'agents, risques particuliers, équipements souhaités..." rows={6}></textarea>
                      {errors.details && <span className="text-xs font-medium text-guinea-red">{errors.details}</span>}
                    </div>
                    
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 flex gap-4">
                      <span className="material-symbols-outlined text-primary">info</span>
                      <p className="text-xs text-[#616f89] leading-relaxed">
                        En soumettant ce formulaire, vous acceptez que vos données soient traitées par GIPS pour l'élaboration de votre devis. Nous nous engageons à la plus stricte confidentialité.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-[#f5f3f0] dark:border-[#2a3447]">
                    <button className="flex items-center gap-2 px-6 h-14 rounded-lg font-bold text-[#111318] dark:text-white bg-[#f5f3f0] dark:bg-[#2a3447] hover:bg-gray-200 dark:hover:bg-gray-700 transition-all" type="button" onClick={handleBack}>
                      <span className="material-symbols-outlined">arrow_back</span>
                      Retour
                    </button>
                    <button className="flex items-center gap-2 px-10 h-14 rounded-lg font-black text-white bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all transform active:scale-95" type="submit">
                      Finaliser la demande
                      <span className="material-symbols-outlined">verified</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-primary/10 dark:bg-primary/5 border border-primary/20 p-6 rounded-xl flex flex-col gap-4 shadow-sm">
                <h4 className="font-bold text-[#181611] dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">verified_user</span>
                  Pourquoi GIPS ?
                </h4>
                <ul className="flex flex-col gap-4 text-sm text-[#616f89] dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                    Standard de qualité international appliqué au terrain local.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                    Logistique de pointe et monitoring temps-réel.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                    Agents certifiés et régulièrement recyclés.
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-[#1a212e] border border-[#e6e3db] dark:border-[#2a3447] rounded-xl overflow-hidden shadow-xl group">
                <div 
                  className="h-40 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  style={{ backgroundImage: `url('${IMAGES.QUOTE_SIDEBAR_IMG}')` }}
                ></div>
                <div className="p-6 flex flex-col gap-4">
                  <h4 className="font-bold dark:text-white">Besoin d'aide immédiate ?</h4>
                  <p className="text-sm text-[#616f89] dark:text-gray-400">Pour toute demande urgente, contactez directement notre centre opérationnel de Conakry.</p>
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
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 opacity-60">
            <div className="size-8 text-primary">
              <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fillRule="evenodd"></path>
              </svg>
            </div>
            <span className="text-sm font-bold dark:text-white">© 2024 GIPS Guinea.</span>
          </div>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-[#616f89] dark:text-gray-400">
            <a className="hover:text-primary transition-colors" href="#">Confidentialité</a>
            <a className="hover:text-quote-primary transition-colors" href="#">Conditions</a>
            <a className="hover:text-primary transition-colors" href="#">Support 24/7</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
