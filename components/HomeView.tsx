
import React from 'react';
import { Hero } from './Hero';
import { CEOSection } from './CEOSection';
import { AboutSection } from './AboutSection';
import { LocationSection } from './LocationSection';
import { PartnersSection } from './PartnersSection';
import { View } from '../App';

interface HomeViewProps {
  setView: (view: View) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ setView }) => {
  return (
    <>
      <Hero setView={setView} />
      <CEOSection />
      <AboutSection />
      <LocationSection />
      <PartnersSection />
    </>
  );
};
