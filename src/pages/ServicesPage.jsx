/**
 * ServicesPage.jsx
 * -----------------------------------------------------------
 * Page propre et allégée — chaque section est un composant
 * indépendant. La grille des cartes est gérée par ServiceCards.
 *
 * Composants utilisés :
 *   ServicesPageSkeleton → squelette de chargement (1.8s)
 *   ServiceCards         → grille des 6 cartes + titre
 *   StatsSection         → statistiques Oriotel
 *   ServiceModal         → popup détails par service
 * -----------------------------------------------------------
 */

import React, { useState, useEffect } from 'react';
import StatsSection from '../components/About/StatsSection';
import ServicesPageSkeleton from '../components/services/ServicesPageSkeleton';
import ServiceModal from '../components/services/ServiceModal';
import ServiceCards, { servicesList } from '../components/services/Servicecards';

const ServicesPage = () => {
  const [isLoading, setIsLoading]      = useState(true);
  const [selectedService, setSelected] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <ServicesPageSkeleton />;

  return (
    <div className="min-h-screen bg-white font-sans animate-[fadeIn_0.5s_ease-out_both]">

      {/* ── 1. HERO ────────────────────────────────────────── */}
      <section className="relative w-full h-[55vh] md:h-[65vh] min-h-[450px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
            alt="Bureau Oriotel Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl font-extrabold text-white tracking-tight drop-shadow-xl">
            Nos Services
          </h1>
          <p className="text-lg md:text-xl 2xl:text-2xl text-white/90 leading-relaxed font-light drop-shadow-md max-w-3xl">
            Propulsez votre structure vers l'excellence grâce à nos solutions
            architecturales et opérationnelles sur mesure. Nous transformons
            vos défis en avantages compétitifs.
          </p>
        </div>
      </section>

      {/* ── 2. GRILLE DES CARTES ───────────────────────────── */}
      <ServiceCards services={servicesList} onSelect={setSelected} />

      {/* ── 3. STATISTIQUES ───────────────────────────────── */}
      <StatsSection />

      {/* ── 4. MODAL DÉTAILS ──────────────────────────────── */}
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
