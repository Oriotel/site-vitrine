/**
 * ContactPageSkeleton.jsx — Skeleton "vivant" avec useInView
 * -----------------------------------------------------------
 * Chaque section s'affiche au scroll (SkeletonSection + useInView).
 * Inclut placeholder navbar. Hero identique au hero Services.
 * -----------------------------------------------------------
 */

import React from 'react';
import Shimmer from '@/components/ui/Shimmer';
import SkeletonSection from '@/components/ui/SkeletonSection';

/* ── 1. Hero (identique Services) ────────────────────────── */
const HeroSkeleton = () => (
  <section className="relative w-full h-[55vh] md:h-[65vh] min-h-[450px] flex items-center justify-center pt-20 bg-slate-800 overflow-hidden">
    {/* Barre lumineuse de fond */}
    <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-slate-600/30 to-transparent" />

    {/* Contenu centré – miroir exact du vrai hero */}
    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-5">
      {/* Badge */}
      <Shimmer className="h-8 w-40 rounded-full bg-slate-700" />
      {/* Titre H1 */}
      <Shimmer className="h-14 md:h-20 w-72 md:w-[420px] rounded-xl bg-slate-700" />
      {/* Sous-titre ligne 1 */}
      <Shimmer className="h-5 w-full max-w-xl bg-slate-700" />
      {/* Sous-titre ligne 2 */}
      <Shimmer className="h-5 w-3/4 max-w-lg bg-slate-700" />
    </div>
  </section>
);

/* ── 2a. Carte de contact ────────────────────────────────── */
const ContactCardSkeleton = () => (
  <div className="bg-white rounded-2xl border border-slate-100 p-6 flex items-start gap-4">
    <Shimmer className="h-12 w-12 rounded-xl flex-shrink-0" />
    <div className="flex flex-col gap-2 w-full">
      <Shimmer className="h-4 w-20 rounded-md" />
      <Shimmer className="h-5 w-3/4 rounded-md" />
      <Shimmer className="h-3 w-1/2 rounded-md" />
    </div>
  </div>
);

/* ── 2b. Carte Map ───────────────────────────────────────── */
const MapSkeleton = () => (
  <div className="relative h-[300px] rounded-2xl overflow-hidden border border-slate-100">
    <Shimmer className="h-full w-full rounded-none" />
    <div className="absolute bottom-4 left-4 bg-white/90 rounded-lg px-4 py-2 flex flex-col gap-1">
      <Shimmer className="h-4 w-24 rounded-md" />
      <Shimmer className="h-3 w-32 rounded-md" />
    </div>
  </div>
);

/* ── 2c. Formulaire ──────────────────────────────────────── */
const FormSkeleton = () => (
  <div className="bg-white rounded-2xl border border-slate-100 p-8 md:p-10 flex flex-col gap-6">
    <Shimmer className="h-8 w-56 rounded-xl" />
    <Shimmer className="h-4 w-full max-w-sm rounded-md" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex flex-col gap-2"><Shimmer className="h-3 w-16 rounded-md" /><Shimmer className="h-11 w-full rounded-xl" /></div>
      <div className="flex flex-col gap-2"><Shimmer className="h-3 w-20 rounded-md" /><Shimmer className="h-11 w-full rounded-xl" /></div>
    </div>
    <div className="flex flex-col gap-2"><Shimmer className="h-3 w-12 rounded-md" /><Shimmer className="h-11 w-full rounded-xl" /></div>
    <div className="flex flex-col gap-2"><Shimmer className="h-3 w-20 rounded-md" /><Shimmer className="h-11 w-full rounded-xl" /></div>
    <div className="flex flex-col gap-2"><Shimmer className="h-3 w-14 rounded-md" /><Shimmer className="h-11 w-full rounded-xl" /></div>
    <div className="flex flex-col gap-2"><Shimmer className="h-3 w-18 rounded-md" /><Shimmer className="h-36 w-full rounded-xl" /></div>
    <Shimmer className="h-12 w-full rounded-full mt-2" />
  </div>
);

/* ── 3. Section contenu ──────────────────────────────────── */
const ContentSkeleton = () => (
  <SkeletonSection delay={80}>
    <section className="pt-16 pb-24 md:pt-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <SkeletonSection key={i} delay={i * 60}><ContactCardSkeleton /></SkeletonSection>
              ))}
            </div>
            <SkeletonSection delay={200}><MapSkeleton /></SkeletonSection>
          </div>
          <div className="lg:col-span-7">
            <SkeletonSection delay={120}><FormSkeleton /></SkeletonSection>
          </div>
        </div>
      </div>
    </section>
  </SkeletonSection>
);

/* ── Squelette complet ───────────────────────────────────── */
const ContactPageSkeleton = () => (
  <div className="bg-cloud-white min-h-screen font-sans" aria-busy="true" aria-label="Chargement de la page Contact">
    <HeroSkeleton />
    <ContentSkeleton />
  </div>
);

export default ContactPageSkeleton;
