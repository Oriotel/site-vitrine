import React from 'react';
import AboutHeroSkeleton from './AboutHeroSkeleton';
import ExploreSectionSkeleton from './ExploreSectionSkeleton';
import TimelineSectionSkeleton from './TimelineSectionSkeleton';
import TeamSectionSkeleton from './TeamSectionSkeleton';

/**
 * AboutPageSkeleton
 * -----------------------------------------------------------
 * High-fidelity skeleton screen for the About page.
 * Orchestrates individual section skeletons.
 * -----------------------------------------------------------
 */
const AboutPageSkeleton = () => (
  <div className="w-full overflow-x-hidden relative bg-white font-sans" aria-busy="true" aria-label="Chargement de la page À propos">
    <AboutHeroSkeleton />
    <div className="flex flex-col">
      <ExploreSectionSkeleton />
      <TimelineSectionSkeleton />
      <TeamSectionSkeleton />
    </div>
  </div>
);

export default AboutPageSkeleton;
