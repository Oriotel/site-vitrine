import React, { Suspense, useState } from 'react';
import { GlobalWowStyles, StatsSkeleton, ServiceCardsSkeleton, HeroSkeleton } from '@/components/services/skeletons';
import LazySection from '@/components/ui/LazySection';
const PageHero = React.lazy(() => import('@/components/ui/PageHero'));

// Lazy load sections
import ServiceCards from '@/components/services/ServiceCards';
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

  return (
    <div className="min-h-screen bg-white font-sans animate-[fadeIn_0.5s_ease-out_both] overflow-x-hidden">
      {/* 0. GLOBAL WOW STYLES */}
      <GlobalWowStyles />

      {/* 1. HERO SECTION (Lazy but immediate) */}
      <Suspense fallback={<HeroSkeleton />}>
        <PageHero
          title={t('services.hero.title')}
          description={t('services.hero.description')}
          image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000"
        />
      </Suspense>
        <div className="mb-16 flex justify-center">
          <SectionTitle
            title={t('services.grid.title')}
            align="center"
          />
        </div>

      {/* 2. GRILLE DES CARTES (Lazy Intersection) */}
      <LazySection skeleton={<ServiceCardsSkeleton />}>
        <ServiceCards onSelect={setSelected} />
      </LazySection>

      {/* 3. STATISTIQUES (Lazy Intersection) */}
      <LazySection skeleton={<StatsSkeleton />}>
        <StatsSection />
      </LazySection>

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
