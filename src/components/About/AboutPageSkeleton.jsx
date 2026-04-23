/**
 * AboutPageSkeleton.jsx
 * -----------------------------------------------------------
 * Squelette de chargement de la page "À propos de nous".
 * Même design pattern que Services & Contact skeletons.
 * Structure mimée (identique à AboutPage.jsx) :
 *   1. HeroSkeleton          → même style hero sombre centré
 *   2. ExploreSkeleton       → sidebar 4/12 + galerie 8/12
 *   3. TimelineSkeleton      → ligne centrale + 4 cartes alternes
 *   4. TeamSkeleton          → titre centré + carousel + citation CEO
 *
 * Composant partagé : <Shimmer /> depuis @/components/ui/Shimmer
 * -----------------------------------------------------------
 */

import React from 'react';
import Shimmer from '@/components/ui/Shimmer';

/* ── 1. Hero ─────────────────────────────────────────────── */
const HeroSkeleton = () => (
  <section className="relative pt-20 pb-12 lg:pt-24 lg:pb-16 bg-white flex flex-col items-center overflow-hidden">
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-5 w-full">
      {/* Titre H1 */}
      <Shimmer className="h-10 md:h-14 w-80 md:w-[480px] rounded-xl" />
      {/* Sous-titre 3 lignes */}
      <Shimmer className="h-5 w-full max-w-2xl rounded-md" />
      <Shimmer className="h-5 w-11/12 max-w-xl rounded-md" />
      <Shimmer className="h-5 w-3/4 max-w-lg rounded-md" />
    </div>
  </section>
);

/* ── 2. Explore Section ──────────────────────────────────── */
const ExploreSkeleton = () => (
  <section className="section-padding bg-white overflow-x-hidden">
    <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-[2rem] p-3 lg:p-4 shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

          {/* Sidebar gauche */}
          <aside className="lg:col-span-4 p-4 sm:p-5 md:p-6 bg-slate-50/50 rounded-[1.5rem] border border-white/50 flex flex-col gap-6">
            <Shimmer className="h-7 w-3/4 rounded-xl" />
            <Shimmer className="h-4 w-full rounded-md" />
            <Shimmer className="h-4 w-5/6 rounded-md" />
            {/* Tags features */}
            <div className="flex flex-wrap gap-2 mt-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <Shimmer key={i} className="h-7 w-24 rounded-md" />
              ))}
            </div>
            {/* CTA footer */}
            <div className="flex gap-3 mt-auto pt-4 border-t border-slate-200/50">
              <Shimmer className="h-10 flex-1 rounded-lg" />
              <Shimmer className="h-10 w-10 rounded-lg flex-shrink-0" />
            </div>
          </aside>

          {/* Galerie droite */}
          <main className="lg:col-span-8">
            <Shimmer className="h-72 md:h-96 w-full rounded-2xl" />
          </main>
        </div>
      </div>
    </div>
  </section>
);

/* ── 3. Timeline ─────────────────────────────────────────── */
const TimelineItemSkeleton = ({ reverse = false }) => (
  <div className={`relative flex items-center w-full ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
    {/* Dot */}
    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-200 z-20" />
    {/* Card */}
    <div className={`w-full pl-16 md:pl-0 md:w-1/2 flex ${reverse ? 'md:pl-16 md:justify-start' : 'md:pr-16 md:justify-end'}`}>
      <div className="w-full max-w-md bg-slate-800 rounded-3xl overflow-hidden">
        <div className="p-8 md:p-10 flex flex-col gap-4">
          <Shimmer className="h-8 w-20 rounded-md bg-slate-700" />
          <Shimmer className="h-6 w-3/4 rounded-xl bg-slate-700" />
          <Shimmer className="h-4 w-full rounded-md bg-slate-700" />
          <Shimmer className="h-4 w-5/6 rounded-md bg-slate-700" />
        </div>
      </div>
    </div>
  </div>
);

const TimelineSkeleton = () => (
  <section className="section-padding bg-white relative overflow-hidden">
    <div className="max-w-5xl mx-auto relative z-10">
      {/* Titre section */}
      <div className="flex flex-col items-center gap-4 mb-16">
        <Shimmer className="h-8 w-64 rounded-xl" />
        <Shimmer className="h-4 w-80 rounded-md" />
      </div>

      <div className="relative mt-20">
        {/* Ligne centrale */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-slate-200" />
        <div className="space-y-16 md:space-y-32">
          {Array.from({ length: 4 }).map((_, i) => (
            <TimelineItemSkeleton key={i} reverse={i % 2 !== 0} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ── 4. Team Marquee ─────────────────────────────────────── */
const TeamSkeleton = () => (
  <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
    <div className="mx-auto max-w-[1600px]">

      {/* Titre centré */}
      <div className="mx-auto mb-20 flex max-w-4xl flex-col items-center px-6 text-center gap-5">
        <Shimmer className="h-10 md:h-14 w-72 md:w-96 rounded-xl" />
        <Shimmer className="h-5 w-full max-w-xl rounded-md" />
        <Shimmer className="h-5 w-4/5 max-w-lg rounded-md" />
      </div>

      {/* Carousel membres (ligne de cartes) */}
      <div className="flex gap-6 px-6 overflow-hidden">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex-shrink-0 flex flex-col items-center gap-3">
            <Shimmer className="h-48 w-36 rounded-2xl" />
            <Shimmer className="h-4 w-24 rounded-md" />
            <Shimmer className="h-3 w-20 rounded-md" />
          </div>
        ))}
      </div>

      {/* Citation CEO */}
      <div className="mx-auto mt-32 max-w-4xl px-6 text-center flex flex-col items-center gap-6">
        <Shimmer className="h-7 w-full max-w-2xl rounded-xl" />
        <Shimmer className="h-7 w-3/4 max-w-xl rounded-xl" />
        {/* Avatar */}
        <Shimmer className="h-20 w-20 rounded-full mt-4" />
        <Shimmer className="h-5 w-40 rounded-md" />
        <Shimmer className="h-3 w-28 rounded-md" />
      </div>
    </div>
  </section>
);

/* ── Squelette complet ───────────────────────────────────── */
const AboutPageSkeleton = () => (
  <div
    className="w-full overflow-x-hidden relative bg-white font-sans"
    aria-busy="true"
    aria-label="Chargement de la page À propos"
  >
    <HeroSkeleton />
    <ExploreSkeleton />
    <TimelineSkeleton />
    <TeamSkeleton />
  </div>
);

export default AboutPageSkeleton;
