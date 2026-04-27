import React, { Suspense, useState } from 'react';
import { GlobalWowStyles, StatsSkeleton, ServiceCardsSkeleton, HeroSkeleton } from '../components/services/skeletons';
import LazySection from '@/components/ui/LazySection';
const PageHero = React.lazy(() => import('../components/ui/PageHero'));

// Lazy load sections
const ServiceCards = React.lazy(() => import('../components/services/Servicecards'));
const StatsSection = React.lazy(() => import('../components/About/StatsSection'));
const ServiceModal = React.lazy(() => import('../components/services/ServiceModal'));

// Import services data
import { servicesList } from '../components/services/Servicecards';

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
  const [selectedService, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-white font-sans animate-[fadeIn_0.5s_ease-out_both] overflow-x-hidden">
      {/* 0. GLOBAL WOW STYLES */}
      <GlobalWowStyles />

      {/* 1. HERO SECTION (Lazy but immediate) */}
      <Suspense fallback={<HeroSkeleton />}>
        <PageHero
          title="Nos Services"
          description="Propulsez votre structure vers l'excellence grâce à nos solutions architecturales et opérationnelles sur mesure. Nous transformons vos défis en avantages compétitifs."
          image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
        />
      </Suspense>

      {/* 2. GRILLE DES CARTES (Lazy Intersection) */}
      <LazySection skeleton={<ServiceCardsSkeleton />}>
        <ServiceCards services={servicesList} onSelect={setSelected} />
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
