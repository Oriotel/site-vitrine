/**
 * ServiceCardsSkeleton.jsx
 * -----------------------------------------------------------
 * Skeleton avec les mêmes couleurs que ContactPageSkeleton
 * (bg-white, bg-slate-200) mais en conservant l'animation 
 * brillante wowShimmer.
 * -----------------------------------------------------------
 */

import React from 'react';
import SkeletonSection from '@/components/ui/SkeletonSection';

/* ── Bone avec couleur classique mais animation WOW ──────── */
const WowBone = ({ className = '', delay = '0s' }) => (
  <div className={`relative overflow-hidden bg-slate-200 rounded-xl ${className}`}>
    <div 
      className="absolute top-0 left-0 w-[200%] h-full"
      style={{ animation: `wowShimmer 2.2s infinite ${delay}` }}
    >
      <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-20deg]" />
    </div>
  </div>
);

/* ── Carte Squelette style classique ─────────────────────── */
const ServiceCardSkeletonWow = ({ delayAnim = 0, idx }) => (
  <SkeletonSection delay={delayAnim}>
    <div 
      className="bg-white rounded-[2rem] overflow-hidden shadow-sm flex flex-col relative group border border-slate-100"
    >
      {/* ── Image lumineuse ── */}
      <div className="h-56 w-full relative overflow-hidden bg-slate-100 border-b border-slate-50">
        <div 
          className="absolute top-0 left-0 w-[250%] h-full opacity-60"
          style={{ animation: `wowShimmer 3s infinite ${idx * 0.2}s cubic-bezier(0.4, 0, 0.2, 1)` }}
        >
          <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-[-30deg]" />
        </div>
      </div>

      {/* ── Contenu ── */}
      <div className="p-8 flex flex-col flex-grow gap-5 relative z-10 bg-transparent">
        
        {/* Titre */}
        <WowBone className="h-7 w-4/5" delay={`${idx * 0.1}s`} />

        {/* Description */}
        <div className="flex flex-col gap-3 mt-3 flex-grow">
          <WowBone className="h-4 w-full" delay={`${idx * 0.1 + 0.1}s`} />
          <WowBone className="h-4 w-[90%]" delay={`${idx * 0.1 + 0.2}s`} />
          <WowBone className="h-4 w-[60%]" delay={`${idx * 0.1 + 0.3}s`} />
        </div>

        {/* CTA "Voir les détails" */}
        <div className="border-t border-slate-100 pt-6 mt-auto flex items-center justify-between">
          <WowBone className="h-4 w-32 rounded-full" delay={`${idx * 0.1 + 0.4}s`} />
          <WowBone className="h-6 w-6 rounded-full" delay={`${idx * 0.1 + 0.5}s`} />
        </div>
      </div>
    </div>
  </SkeletonSection>
);

/* ── Grille complète ─────────────────────────────────────── */
const ServiceCardsSkeleton = () => (
  <section className="pt-24 pb-12 relative overflow-hidden bg-[#F9FAFB] border-t border-slate-200/60">
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      {/* Titre skeleton */}
      <SkeletonSection>
        <div className="mb-16 flex flex-col items-center gap-4">
          <div className="h-3 w-32 rounded-full bg-slate-200 relative overflow-hidden">
             <div className="absolute inset-0 w-[200%]" style={{ animation: 'wowShimmer 2s infinite' }}>
                <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-20deg]" />
             </div>
          </div>
          <div className="h-10 md:h-14 w-72 md:w-[450px] rounded-[1.5rem] bg-slate-200 shadow-sm relative overflow-hidden">
             <div className="absolute inset-0 w-[200%]" style={{ animation: 'wowShimmer 2.5s infinite 0.2s' }}>
                <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-20deg]" />
             </div>
          </div>
        </div>
      </SkeletonSection>

      {/* Grille 6 cartes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <ServiceCardSkeletonWow key={i} delayAnim={i * 80} idx={i} />
        ))}
      </div>

    </div>
  </section>
);

export default ServiceCardsSkeleton;
