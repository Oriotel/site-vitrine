/**
 * ServiceCards.jsx
 * -----------------------------------------------------------
 * Grille des 6 cartes de service avec titre SectionTitle.
 * Extrait de ServicesPage pour respecter l'architecture
 * component-based. La donnée (servicesList) et le callback
 * (onSelect) viennent du parent.
 *
 * Props :
 *   services – tableau de services { id, title, desc, image, … }
 *   onSelect  – callback(service) quand on clique "Voir les détails"
 * -----------------------------------------------------------
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '@/components/ui/SectionTitle';

// Keep images in a mapping or from the original list
const serviceImages = [
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&q=80&w=800',
];

/* ── Carte individuelle ──────────────────────────────────── */
const ServiceCard = ({ service, onSelect, ctaText }) => (
  <div
    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(20,40,201,0.08)] border border-slate-100 transition-all duration-300 flex flex-col group cursor-pointer hover:-translate-y-1"
  >
    {/* Image */}
    <div className="h-56 w-full overflow-hidden relative">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
    </div>

    {/* Contenu */}
    <div className="p-8 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-[#111827] mb-3 leading-snug">
        {service.title}
      </h3>
      <p className="text-slate-600 leading-relaxed max-w-prose flex-grow mb-8 line-clamp-3">
        {service.desc}
      </p>

      {/* CTA → ouvre le modal */}
      <div className="mt-auto border-t border-slate-100 pt-6">
        <button
          onClick={() => onSelect(service)}
          className="inline-flex items-center text-[#1428C9] font-bold text-sm uppercase tracking-widest group-hover:text-[#111827] transition-colors"
        >
          {ctaText}
          <svg
            className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

/* ── Grille complète ─────────────────────────────────────── */
const ServiceCards = ({ onSelect }) => {
  const { t } = useTranslation();
  
  const servicesData = t('services.items', { returnObjects: true });
  
  const services = Array.isArray(servicesData) 
    ? servicesData.map((item, index) => ({
        ...item,
        id: index + 1,
        image: serviceImages[index]
      }))
    : [];

  return (
    <section className="pt-4 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc) => (
            <ServiceCard 
              key={svc.id} 
              service={svc} 
              onSelect={onSelect} 
              ctaText={t('services.grid.cta')}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceCards;
