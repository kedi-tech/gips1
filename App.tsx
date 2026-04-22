
import React, { useState } from 'react';
import { Header } from './components/Header';
import { HomeView } from './components/HomeView';
import { ServicesView } from './components/ServicesView';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';
import { QuoteView } from './components/QuoteView';
import { TrainingView } from './components/TrainingView';
import { TeamView } from './components/TeamView';
import { Footer } from './components/Footer';
import { LanguageProvider } from './i18n/LanguageContext';

export type View = 'home' | 'services' | 'about' | 'contact' | 'quote' | 'training' | 'team';

export default function App() {
  const [view, setView] = useState<View>('home');

  return (
    <LanguageProvider>
      <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <Header currentView={view} setView={setView} />
        <main className="flex-grow">
          {view === 'home' && <HomeView setView={setView} />}
          {view === 'services' && <ServicesView />}
          {view === 'about' && <AboutView />}
          {view === 'training' && <TrainingView />}
          {view === 'team' && <TeamView />}
          {view === 'contact' && <ContactView />}
          {view === 'quote' && <QuoteView onBack={() => setView('home')} />}
        </main>
        <Footer setView={setView} />
      </div>
    </LanguageProvider>
  );
}
