/**
 * ServicesPageSkeleton.jsx
 * -----------------------------------------------------------
 * Squelette de chargement de la page Services.
 * Structure mimée :
 *   1. Hero       → bloc sombre pleine largeur + blocs gris
 *   2. Grille     → 6 cartes (image + titre + desc + lien)
 *   3. Stats      → 4 blocs chiffres clés
 *
 * Utilise le composant partagé <Shimmer /> (src/components/ui/Shimmer.jsx)
 * -----------------------------------------------------------
 */

import React from 'react';
import Shimmer from '@/components/ui/Shimmer';

/* ── 1. Hero ─────────────────────────────────────────────── */
const HeroSkeleton = () => (
  <section className="relative w-full h-[55vh] md:h-[65vh] min-h-[450px] flex items-center justify-center pt-20 bg-slate-800 overflow-hidden">
    <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-slate-600/30 to-transparent" />
    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-5">
      <Shimmer className="h-8 w-48 rounded-full bg-slate-700" />
      <Shimmer className="h-14 md:h-20 w-72 md:w-96 rounded-xl bg-slate-700" />
      <Shimmer className="h-5 w-full max-w-xl bg-slate-700" />
      <Shimmer className="h-5 w-3/4 max-w-lg bg-slate-700" />
    </div>
  </section>
);

/* ── 2. Carte individuelle ───────────────────────────────── */
const ServiceCardSkeleton = () => (
  <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 flex flex-col">
    <Shimmer className="h-56 w-full rounded-none" />
    <div className="p-8 flex flex-col gap-4 flex-grow">
      <Shimmer className="h-6 w-3/4 rounded-md" />
      <div className="flex flex-col gap-2 flex-grow">
        <Shimmer className="h-4 w-full rounded-md" />
        <Shimmer className="h-4 w-full rounded-md" />
        <Shimmer className="h-4 w-2/3 rounded-md" />
      </div>
      <div className="border-t border-slate-100 pt-5 mt-auto">
        <Shimmer className="h-4 w-36 rounded-md" />
      </div>
    </div>
  </div>
);

/* ── 3. Grille 6 cartes ──────────────────────────────────── */
const GridSkeleton = () => (
  <section className="bg-[#F9FAFB] pt-24 pb-12 border-t border-slate-200/60">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-16 flex flex-col items-center lg:items-start gap-4">
        <Shimmer className="h-9 w-72 rounded-xl" />
        <Shimmer className="h-1 w-16 rounded-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <ServiceCardSkeleton key={i} />
        ))}
      </div>
    </div>
  </section>
);

/* ── 4. Stats ────────────────────────────────────────────── */
const StatsSkeleton = () => (
  <section className="py-16 bg-white border-y border-slate-100">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-3">
            <Shimmer className="h-14 md:h-20 w-28 md:w-36 rounded-xl" />
            <Shimmer className="h-4 w-24 rounded-md" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ── Squelette complet ───────────────────────────────────── */
const ServicesPageSkeleton = () => (
  <div className="min-h-screen bg-white font-sans" aria-busy="true" aria-label="Chargement de la page Services">
    <HeroSkeleton />
    <GridSkeleton />
    <StatsSkeleton />
  </div>
);

export default ServicesPageSkeleton;
