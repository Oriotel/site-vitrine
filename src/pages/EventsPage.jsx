import React from 'react';
import SlideEvent from '@/components/Events/SlideEvent';
import QuoteEvent from '@/components/Events/QuoteEvent';
import NetworkersEvent from '@/components/Events/NetworkersEvent';
import { TeamMarqueeSection } from '@/components/About/TeamMarqueeSection';

const EventsPage = () => {
  return (
    <main className="w-full overflow-x-hidden">
      {/* 1. Hero slideshow des événements */}
      <SlideEvent />

      {/* 2. Citation inspirante */}
      <QuoteEvent />

      {/* 3. Réseau de networkers */}
      <NetworkersEvent />
      <TeamMarqueeSection />
    </main>
  );
};

export default EventsPage;
