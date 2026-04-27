/**
 * ServicesPage.jsx
 * -----------------------------------------------------------
 * Page propre et allégée — chaque section est un composant
 * indépendant. La grille des cartes est gérée par ServiceCards.
 *
 * Composants utilisés :
 *   ServicesPageSkeleton → squelette de chargement (1.8s)
 *   PageHero             → Header standardisé
 *   ServiceCards         → grille des 6 cartes + titre
 *   StatsSection         → statistiques Oriotel
 *   ServiceModal         → popup détails par service
 * -----------------------------------------------------------
 */

import React, { useState, useEffect } from 'react';
import StatsSection from '../components/About/StatsSection';
import ServicesPageSkeleton from '../components/services/ServicesPageSkeleton';
import SectionTitle from '../components/ui/SectionTitle';
import PageHero from '../components/ui/PageHero';
import ServiceModal from '../components/services/ServiceModal';
import ServiceCards, { servicesList } from '../components/services/Servicecards';

const ServicesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedService, setSelected] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <ServicesPageSkeleton />;

  return (
    <div className="min-h-screen bg-white font-sans animate-[fadeIn_0.5s_ease-out_both]">
      {/* 1. HERO SECTION */}
      <PageHero 
        title="Nos Services"
        description="Propulsez votre structure vers l'excellence grâce à nos solutions architecturales et opérationnelles sur mesure. Nous transformons vos défis en avantages compétitifs."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
      />

      {/* 2. GRILLE DES CARTES */}
      <ServiceCards services={servicesList} onSelect={setSelected} />

      {/* 3. STATISTIQUES */}
      <StatsSection />

      {/* 4. MODAL DÉTAILS */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
};

export default ServicesPage;
