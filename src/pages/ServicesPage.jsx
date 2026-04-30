import React, { Suspense, useState } from 'react';
import { GlobalWowStyles, StatsSkeleton, ServiceCardsSkeleton, HeroSkeleton } from '@/components/services/skeletons';
import PageHero from '@/components/ui/PageHero';
import useInView from '@/hooks/useInView';

// Lazy load sections
const ServiceCards = React.lazy(() => import('@/components/services/ServiceCards'));
const StatsSection = React.lazy(() => import('@/components/About/StatsSection'));
const ServiceModal = React.lazy(() => import('@/components/services/ServiceModal'));

// Import translation
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '@/components/ui/SectionTitle';

/**
 * ServicesPage Component
 * -----------------------------------------------------------
 * Refactored to follow the HomePage pattern:
 * - Direct load for Hero.
 * - Intersection-based lazy loading for heavy sections.
 * - Individual skeletons as fallbacks.
 * -----------------------------------------------------------
 */
const ServicesPage = () => {
  const { t } = useTranslation();
  const [selectedService, setSelected] = useState(null);

  // useInView for the main title reveal
  const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white font-sans animate-[fadeIn_0.5s_ease-out_both] overflow-x-hidden">
      {/* 0. GLOBAL WOW STYLES */}
      <GlobalWowStyles />

      {/* 1. HERO SECTION (Direct load for immediate LCP) */}
      <PageHero
        title={t('services.hero.title')}
        description={t('services.hero.description')}
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000"
      />
      {/* 2. CONTENEUR D'ÉQUILIBRE (Sections below hero) */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col gap-8 md:gap-10 pt-8 pb-0">
        
        {/* Titre de la grille (Immediate but with reveal) */}
        <div 
          ref={titleRef}
          className={`flex justify-center transition-all duration-1000 ${
            titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <SectionTitle
            title={t('services.grid.title')}
            align="center"
          />
        </div>

        {/* GRILLE DES CARTES (Loaded immediately with Suspense) */}
        <Suspense fallback={<ServiceCardsSkeleton />}>
          <ServiceCards onSelect={setSelected} />
        </Suspense>

        {/* STATISTIQUES (Loaded immediately with Suspense) */}
        <Suspense fallback={<StatsSkeleton />}>
          <StatsSection />
        </Suspense>

      </div>

      {/* 4. MODAL DÉTAILS (Suspense required) */}
      <Suspense fallback={null}>
        {selectedService && (
          <ServiceModal
            service={selectedService}
            onClose={() => setSelected(null)}
          />
        )}
      </Suspense>
    </div>
  );
};

export default ServicesPage;
