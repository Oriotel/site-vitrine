import React from 'react';
import ExpertisesSection from '../components/ExpertisesSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Composant ExpertisesSectorielles uniquement */}
      <ExpertisesSection />
    </div>
  );
};

export default HomePage;
