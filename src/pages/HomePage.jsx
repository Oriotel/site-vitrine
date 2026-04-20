import SponsorsMarquee from '@/components/home/SponsorsMarquee';
import Hero from '@/components/home/Hero';
import AboutSection from '@/components/home/AboutSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ExpertisesSection from '@/components/home/ExpertisesSection';
import EventsSection from '@/components/home/EventsSection';

const HomePage = () => {
  return (
    <>
      {/* 1. SECTION FULL-WIDTH : Le Hero touche les bords */}
      <Hero />

      {/* 2. LE CONTENEUR D'ÉQUILIBRE (Ajusté)
          - gap-10 md:gap-16 : (Avant c'était 12 et 24). Réduit l'espace entre les sections de ~30%.
          - py-12 : (Avant c'était 16). Réduit l'espace tout en haut et tout en bas.
      */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 flex flex-col gap-10 md:gap-12 py-8">
        <AboutSection />
        <ExpertisesSection />
        <EventsSection />
        <TestimonialsSection />
      </div>

      {/* 3. SECTION FULL-WIDTH : Les sponsors doivent toucher les bords */}
      <SponsorsMarquee />
    </>
  );
};

export default HomePage;