import React, { Suspense } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import useInView from '@/hooks/useInView';

// Skeletons
import HeroSkeleton from '@/components/home/skeletons/HeroSkeleton';
import AboutSkeleton from '@/components/home/skeletons/AboutSkeleton';
import ExpertisesSkeleton from '@/components/home/skeletons/ExpertisesSkeleton';
import EventsSkeleton from '@/components/home/skeletons/EventsSkeleton';
import TestimonialsSkeleton from '@/components/home/skeletons/TestimonialsSkeleton';
import SponsorsSkeleton from '@/components/home/skeletons/SponsorsSkeleton';

// Lazy load components
const Hero = React.lazy(() => import('@/components/home/Hero'));
const AboutSection = React.lazy(() => import('@/components/home/AboutSection'));
const ExpertisesSection = React.lazy(() => import('@/components/home/ExpertisesSection'));
const EventsSection = React.lazy(() => import('@/components/home/EventsSection'));
const TestimonialsSection = React.lazy(() => import('@/components/home/TestimonialsSection'));
const SponsorsMarquee = React.lazy(() => import('@/components/home/SponsorsMarquee'));

// Wrapper for intersection-based lazy loading
const LazySection = ({ children, skeleton }) => {
  const [ref, isInView] = useInView({ triggerOnce: true, rootMargin: '100px 0px' });

  return (
    <div ref={ref} className="w-full">
      {isInView ? (
        <Suspense fallback={skeleton}>
          {children}
        </Suspense>
      ) : (
        skeleton
      )}
    </div>
  );
};

const HomePage = () => {
  return (
    <>
      {/* 1. SECTION FULL-WIDTH : Le Hero touche les bords (toujours visible au chargement) */}
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>

      {/* 2. LE CONTENEUR D'ÉQUILIBRE */}
      <div className="w-full max-w-7xl mx-auto px-0 sm:px-6 md:px-8 lg:px-12 flex flex-col gap-14 md:gap-16 py-8">
        
        {/* About: slide in from the left with a slight skew for editorial feel */}
        <ScrollReveal variant="fadeUp" duration={1000} distance={70} easing="cubic-bezier(0.22, 1, 0.36, 1)">
          <LazySection skeleton={<AboutSkeleton />}>
            <AboutSection />
          </LazySection>
        </ScrollReveal>

        {/* Expertises: 3D perspective rotation for depth */}
        <ScrollReveal variant="rotateIn" duration={1100} delay={80}>
          <LazySection skeleton={<ExpertisesSkeleton />}>
            <ExpertisesSection />
          </LazySection>
        </ScrollReveal>

      </div>

      {/* ── FULL-WIDTH SECTIONS ── */}
      
      {/* Events: cinematic clip reveal from bottom */}
      <ScrollReveal variant="fadeUp" duration={1200} distance={50}>
        <LazySection skeleton={<EventsSkeleton />}>
          <EventsSection />
        </LazySection>
      </ScrollReveal>

      {/* Testimonials: soft blur-in for an ethereal effect */}
      <ScrollReveal variant="blur" duration={1100} distance={50}>
        <LazySection skeleton={<TestimonialsSkeleton />}>
          <TestimonialsSection />
        </LazySection>
      </ScrollReveal>

      {/* 3. SECTION FULL-WIDTH : Les sponsors doivent toucher les bords */}
      <ScrollReveal variant="fadeUp" duration={800} distance={30}>
        <LazySection skeleton={<SponsorsSkeleton />}>
          <SponsorsMarquee />
        </LazySection>
      </ScrollReveal>
    </>
  );
};

export default HomePage;