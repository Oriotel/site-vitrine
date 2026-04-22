import SponsorsMarquee from '@/components/home/SponsorsMarquee';
import Hero from '@/components/home/Hero';
import AboutSection from '@/components/home/AboutSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ExpertisesSection from '@/components/home/ExpertisesSection';
import EventsSection from '@/components/home/EventsSection';
import ScrollReveal from '@/components/ui/ScrollReveal';

const HomePage = () => {
  return (
    <>
      {/* 1. SECTION FULL-WIDTH : Le Hero touche les bords */}
      <Hero />

      {/* 2. LE CONTENEUR D'ÉQUILIBRE */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 flex flex-col gap-14 md:gap-16 py-8">
        
        {/* About: slide in from the left with a slight skew for editorial feel */}
        <ScrollReveal variant="fadeUp" duration={1000} distance={70} easing="cubic-bezier(0.22, 1, 0.36, 1)">
          <AboutSection />
        </ScrollReveal>

        {/* Expertises: 3D perspective rotation for depth */}
        <ScrollReveal variant="rotateIn" duration={1100} delay={80}>
          <ExpertisesSection />
        </ScrollReveal>

        {/* Events: cinematic clip reveal from bottom */}
        <ScrollReveal variant="fadeUp" duration={1200} distance={50}>
          <EventsSection />
        </ScrollReveal>

        {/* Testimonials: soft blur-in for an ethereal effect */}
        <ScrollReveal variant="blur" duration={1100} distance={50}>
          <TestimonialsSection />
        </ScrollReveal>

      </div>

      {/* 3. SECTION FULL-WIDTH : Les sponsors doivent toucher les bords */}
      <ScrollReveal variant="fadeUp" duration={800} distance={30}>
        <SponsorsMarquee />
      </ScrollReveal>
    </>
  );
};

export default HomePage;