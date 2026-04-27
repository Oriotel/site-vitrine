import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

// Shared UI Components
import PageHero from '@/components/ui/PageHero';
import LazySection from '@/components/ui/LazySection';

// Skeletons
import ExploreSectionSkeleton from '@/components/About/skeletons/ExploreSectionSkeleton';
import TimelineSectionSkeleton from '@/components/About/skeletons/TimelineSectionSkeleton';
import TeamSectionSkeleton from '@/components/About/skeletons/TeamSectionSkeleton';

// Lazy load components
const ExploreSection = React.lazy(() => import('@/components/About/ExploreSection'));
const TimelineSection = React.lazy(() => import('@/components/About/TimelineSection'));
const TeamSection = React.lazy(() => import('@/components/About/TeamSection').then(m => ({ default: m.TeamSection })));

// Data Constants
import { companyInfo } from '@/constants/data';

/**
 * AboutPage Component
 * 
 * High-performance implementation of the "À propos" page.
 * Uses intersection-based lazy loading and high-fidelity skeletons
 * for optimal Core Web Vitals and user experience.
 */
const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <main
      className="w-full relative bg-white overflow-x-hidden"
      aria-label={t('nav.about') || "À propos"}
    >
      {/* Hero Section: Immediate load for LCP optimization */}
      <PageHero
        title={t('about.hero.title')}
        subtitle="À propos"
        description={t(companyInfo.longDescription)}
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000"
      />

      {/* Lazy Loaded Sections with Skeletons */}
      <div className="flex flex-col">
        <LazySection skeleton={<ExploreSectionSkeleton />}>
          <ExploreSection />
        </LazySection>

        <LazySection skeleton={<TimelineSectionSkeleton />}>
          <TimelineSection />
        </LazySection>

        <LazySection skeleton={<TeamSectionSkeleton />}>
          <TeamSection />
        </LazySection>
      </div>
    </main>
  );
};

export default AboutPage;
