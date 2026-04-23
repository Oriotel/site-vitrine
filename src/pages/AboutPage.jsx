import React, { useState, useEffect } from 'react';
import AboutHero from '@/components/About/AboutHero';
import ExploreSection from '@/components/About/ExploreSection';
import TimelineSection from '@/components/About/TimelineSection';
import { TeamMarqueeSection } from '@/components/About/TeamMarqueeSection';
import AboutPageSkeleton from '@/components/About/AboutPageSkeleton';

const AboutPage = () => {
  // Affiche le squelette pendant 1.8s, puis révèle le vrai contenu
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <AboutPageSkeleton />;

  return (
    <main className="w-full overflow-x-hidden relative animate-[fadeIn_0.5s_ease-out_both]">
      <AboutHero />
      <ExploreSection />
      <TimelineSection />
      <TeamMarqueeSection />
    </main>
  );
};

export default AboutPage;
