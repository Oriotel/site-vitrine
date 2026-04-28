import React from 'react';
import { useTranslation } from 'react-i18next';

// Shared UI Components
import PageHero from '@/components/ui/PageHero';
import LazySection from '@/components/ui/LazySection';

// Skeletons
import ExploreSectionSkeleton from '@/components/About/skeletons/ExploreSectionSkeleton';
import StatsSectionSkeleton from '@/components/About/skeletons/StatsSectionSkeleton';
import TimelineSectionSkeleton from '@/components/About/skeletons/TimelineSectionSkeleton';
import TeamSectionSkeleton from '@/components/About/skeletons/TeamSectionSkeleton';

// Lazy load components
const ExploreSection = React.lazy(() => import('@/components/About/ExploreSection'));
const StatsSection = React.lazy(() => import('@/components/About/StatsSection'));

const TimelineSection = React.lazy(() => import('@/components/About/TimelineSection'));
const TeamSection = React.lazy(() => import('@/components/About/TeamSection').then(m => ({ default: m.TeamSection })));


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
        subtitle={t('about.hero.subtitle')}
        description={t('about.hero.description')}
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
