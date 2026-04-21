
import React, { useState } from 'react';

export const ContactView: React.FC = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const WEBHOOK_URL = 'https://n8n.kedi-tech.com/webhook/9731aef9-1d3d-4945-9118-74f219f423ef';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError('');
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({
          nom: form.name,
          telephone: form.phone,
          email: form.email,
          message: form.message,
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitError("Une erreur s'est produite. Veuillez réessayer.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex-grow">
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
              {submitted ? (
                <div className="flex flex-col items-center gap-4 py-8 text-center">
                  <span className="material-symbols-outlined text-5xl text-green-500">check_circle</span>
                  <p className="text-lg font-bold text-[#111318]">Message envoyé !</p>
                  <p className="text-sm text-[#616f89]">Votre client de messagerie s'est ouvert. Nous vous répondrons dans les plus brefs délais.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 rounded-lg border border-[#dbdfe6] px-6 py-2 text-sm font-bold text-[#111318] hover:bg-[#f0f2f4] transition-all"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <label className="flex flex-col gap-2">
                      <span className="text-sm font-bold text-[#111318]">Nom Complet</span>
                      <input
                        className="h-12 w-full rounded-lg border border-[#dbdfe6] bg-white px-4 text-base transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                        placeholder="Ex: Mamadou Diallo"
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-sm font-bold text-[#111318]">Téléphone</span>
                      <input
                        className="h-12 w-full rounded-lg border border-[#dbdfe6] bg-white px-4 text-base transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                        placeholder="+224 620 00 00 00"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </label>
                  </div>
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-bold text-[#111318]">Email</span>
                    <input
                      className="h-12 w-full rounded-lg border border-[#dbdfe6] bg-white px-4 text-base transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                      placeholder="votre@email.com"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-bold text-[#111318]">Votre Message</span>
                    <textarea
                      className="w-full resize-none rounded-lg border border-[#dbdfe6] bg-white p-4 text-base transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                      placeholder="Comment pouvons-nous vous aider ?"
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </label>
                  <button
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-4 text-base font-bold text-white transition-all hover:bg-blue-700 shadow-lg shadow-primary/25 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                    type="submit"
                    disabled={submitting}
                  >
                    {submitting ? 'Envoi en cours...' : 'Envoyer le Message'}
                    <span className="material-symbols-outlined">{submitting ? 'hourglass_empty' : 'send'}</span>
                  </button>
                  {submitError && (
                    <p className="text-center text-xs font-medium text-red-500">{submitError}</p>
                  )}
                  <p className="text-center text-xs text-[#616f89]">
                    <span className="material-symbols-outlined text-[14px] align-middle mr-1">lock</span>
                    Vos données sont sécurisées et traitées en toute confidentialité par GIPS.
                  </p>
                </form>
              )}
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
                  Sonfonia, Conakry<br />
                  (En face du Centre de Santé de Sonfonia)
                </p>
              </div>
              <div className="rounded-xl border border-guinea-yellow/20 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <h3 className="text-sm font-bold text-[#111318]">Téléphone</h3>
                <div className="mt-2 flex flex-col gap-1 text-sm text-[#616f89]">
                  <a href="tel:+22462875187" className="hover:text-primary transition-colors">+224 628 75 18 75</a>
                  <a href="tel:+22462193990" className="hover:text-primary transition-colors">+224 621 93 99 06</a>
                  <a href="tel:+22462041422" className="hover:text-primary transition-colors">+224 620 41 42 26</a>
                </div>
              </div>
            </div>

            {/* WhatsApp Action */}
            <a
              className="group flex items-center justify-between rounded-xl bg-[#25D366] p-5 text-white shadow-lg transition-all hover:bg-[#128C7E]"
              href="https://wa.me/224628751875"
              target="_blank"
              rel="noopener noreferrer"
            >
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
                  <span className="text-sm font-bold text-[#111318]">Notre siège : Sonfonia, Conakry</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Sonfonia,Conakry,Guinea"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-primary hover:underline"
                >
                  Ouvrir dans Maps
                </a>
              </div>
              <iframe
                title="Siège GIPS - Sonfonia, Conakry"
                src="https://maps.google.com/maps?q=Sonfonia,Conakry,Guinea&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[300px] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
