import React, { Suspense } from 'react';
import LazySection from '@/components/ui/LazySection';

// Skeletons
import { 
  SlideEventSkeleton, 
  QuoteEventSkeleton, 
  NetworkersEventSkeleton 
} from '@/components/Events/skeletons';
import TeamSectionSkeleton from '@/components/About/skeletons/TeamSectionSkeleton';

// Lazy Components
const SlideEvent = React.lazy(() => import('@/components/Events/SlideEvent'));
const QuoteEvent = React.lazy(() => import('@/components/Events/QuoteEvent'));
const NetworkersEvent = React.lazy(() => import('@/components/Events/NetworkersEvent'));
const TeamSection = React.lazy(() => import('@/components/About/TeamSection').then(m => ({ default: m.TeamSection })));

const EventsPage = () => {
  return (
    <main className="w-full overflow-x-hidden">
      {/* 1. Hero slideshow des événements */}
      <LazySection skeleton={<SlideEventSkeleton />}>
        <SlideEvent />
      </LazySection>

      {/* 2. Citation inspirante */}
      <LazySection skeleton={<QuoteEventSkeleton />}>
        <QuoteEvent />
      </LazySection>

      {/* 3. Réseau de networkers */}
      <LazySection skeleton={<NetworkersEventSkeleton />}>
        <NetworkersEvent />
      </LazySection>

      <LazySection skeleton={<TeamSectionSkeleton />}>
        <TeamSection />
      </LazySection>
    </main>
  );
};

export default EventsPage;
