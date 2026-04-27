import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Components
import PageHero from '@/components/ui/PageHero';
import ExploreSection from '@/components/About/ExploreSection';
import TimelineSection from '@/components/About/TimelineSection';
import { TeamSection } from '@/components/About/TeamSection';
import AboutPageSkeleton from '@/components/About/AboutPageSkeleton';

// Hooks & Context
import { useLoading } from '@/context/LoadingContext';

// Data Constants
import { companyInfo } from '@/constants/data';

/**
 * AboutPage Component
 * 
 * Senior-level implementation of the "À propos" (About Us) page.
 * Manages synchronized loading states between local UI and global layout context.
 * 
 * Features:
 * - High-fidelity skeleton screen during initial load.
 * - Predictable state management with proper side-effect cleanup.
 * - Clean separation of concerns through modular section components.
 */
const AboutPage = () => {
  const { t } = useTranslation();
  const { setIsLayoutLoading } = useLoading();
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Effect: Orchestrates the page's loading sequence.
   * Ensures the global Layout Loader and local Skeleton are synchronized.
   */
  useEffect(() => {
    // Notify global Layout that a page-level transition is starting
    setIsLayoutLoading(true);

    const PAGE_LOAD_SIMULATION_MS = 1500;

    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      setIsLayoutLoading(false);
    }, PAGE_LOAD_SIMULATION_MS);

    // Cleanup to prevent memory leaks and inconsistent loading states on fast navigation
    return () => {
      clearTimeout(loadingTimer);
      setIsLayoutLoading(false);
    };
  }, [setIsLayoutLoading]);

  /**
   * Loading State
   * Displays the high-fidelity skeleton screen while components resolve.
   */
  if (isLoading) {
    return <AboutPageSkeleton />;
  }

  return (
    <main
      className="w-full relative bg-white overflow-x-hidden"
      aria-label={t('nav.about') || "À propos"}
    >
      {/* Hero Section: Brand Story & Mission */}
      <PageHero
        title={t('about.hero.title')}
        subtitle="À propos"
        description={t(companyInfo.longDescription)}
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000"
      />

      {/* Main Content Flow */}
      <div className="flex flex-col">
        <ExploreSection />
        <TimelineSection />
        <TeamSection />
      </div>
    </main>
  );
};

export default AboutPage;
