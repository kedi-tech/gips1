
import React from 'react';
import { Hero } from './Hero';
import { CEOSection } from './CEOSection';
import { AboutSection } from './AboutSection';
import { LocationSection } from './LocationSection';

export const HomeView: React.FC = () => {
  return (
    <>
      <Hero />
      <CEOSection />
      <AboutSection />
      <LocationSection />
    </>
  );
};
