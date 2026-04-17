import React from 'react'
import SponsorsMarquee from '@/components/home/SponsorsMarquee'
import Hero from '@/components/home/Hero';
import AboutSection from '@/components/home/AboutSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ExpertisesSection from '@/components/home/ExpertisesSection';
import EventsSection from '../components/EventsSection';

const HomePage = () => {
  return (
    <>
      {/* 1. La section principale (Hero) */}
      <Hero />
      {/* 2. LA NOUVELLE SECTION "QUI SOMMES-NOUS" */}
      {/* Elle va glisser naturellement sur le Hero ! */}
      <AboutSection />
      {/* Composant ExpertisesSectorielles uniquement */}
      <ExpertisesSection />
      {/* Composant Événements avec effet Coverflow 3D */}
      <EventsSection />
      {/* Composant Témoignages en exclusivité sur la page pour les tests */}
      <TestimonialsSection />
      {/* 3. La bande défilante des sponsors en noir */}
      <SponsorsMarquee />
    </>
  )
}
