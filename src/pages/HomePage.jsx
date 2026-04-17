import React from 'react';
import EventsSection from '../components/EventsSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white pt-10">
      {/* Composant Événements avec effet Coverflow 3D */}
      <EventsSection />
    </div>
  );
};

export default HomePage;
