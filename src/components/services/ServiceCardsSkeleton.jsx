/**
 * ServiceCardsSkeleton.jsx
 * -----------------------------------------------------------
 * Skeleton ultra brillant et premium pour la grille de cartes.
 * Design WOW : Hérité du Header — full dark mode, glassmorphism,
 * glow dynamique, fond étoilé/dégradé profond et reflets bleutés.
 * -----------------------------------------------------------
 */

import React from 'react';
import SkeletonSection from '@/components/ui/SkeletonSection';

/* ── Bone Glassmorphic (Dark Mode) ───────────────────────── */
const WowBoneGlass = ({ className = '', delay = '0s', isBlue = false }) => (
  <div className={`relative overflow-hidden ${isBlue ? 'bg-[#1428C9]/40' : 'bg-white/10'} rounded-xl backdrop-blur-md ${className}`}>
    <div 
      className="absolute top-0 left-0 w-[200%] h-full"
      style={{ animation: `wowShimmer 2.5s infinite ${delay}` }}
    >
      <div className={`w-1/2 h-full bg-gradient-to-r from-transparent ${isBlue ? 'via-white/50' : 'via-white/20'} to-transparent skew-x-[-20deg]`} />
    </div>
  </div>
);

/* ── Skeleton d'une carte (Style Header/Glassmorphism) ───── */
const ServiceCardSkeletonWow = ({ delayAnim = 0, idx }) => (
  <SkeletonSection delay={delayAnim}>
    <div 
      className="bg-white/5 backdrop-blur-2xl rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.03)] flex flex-col relative group"
      style={{ animation: `pulseGlowDark 4s infinite ${idx * 0.3}s` }}
    >
      {/* ── Image lumineuse (Effet vitre teintée) ── */}
      <div className="h-56 w-full relative overflow-hidden bg-white/5 border-b border-white/5">
        <div 
          className="absolute top-0 left-0 w-[250%] h-full mix-blend-overlay opacity-30"
          style={{ animation: `wowShimmer 3s infinite ${idx * 0.2}s cubic-bezier(0.4, 0, 0.2, 1)` }}
        >
          <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white to-transparent skew-x-[-30deg]" />
        </div>
        
        {/* Taches de réflexion ("Floating Light") */}
        <div 
          className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#1428C9]/50 blur-[50px] rounded-full pointer-events-none" 
          style={{ animation: 'floatLight 4s infinite alternate' }} 
        />
        <div 
          className="absolute top-2 left-2 w-20 h-20 bg-white/10 blur-[30px] rounded-full pointer-events-none" 
          style={{ animation: 'floatLight 6s infinite alternate-reverse' }} 
        />
      </div>

      {/* ── Contenu ── */}
      <div className="p-8 flex flex-col flex-grow gap-5 relative z-10 bg-transparent">
        
        {/* Titre */}
        <WowBoneGlass className="h-7 w-4/5 shadow-[0_4px_10px_rgba(0,0,0,0.2)]" delay={`${idx * 0.1}s`} />

        {/* Description */}
        <div className="flex flex-col gap-3 mt-2 flex-grow">
          <WowBoneGlass className="h-4 w-full" delay={`${idx * 0.1 + 0.1}s`} />
          <WowBoneGlass className="h-4 w-[90%]" delay={`${idx * 0.1 + 0.2}s`} />
          <WowBoneGlass className="h-4 w-[60%]" delay={`${idx * 0.1 + 0.3}s`} />
        </div>

        {/* CTA "Voir les détails" */}
        <div className="border-t border-white/10 pt-6 mt-auto flex items-center justify-between">
          <WowBoneGlass className="h-4 w-32 rounded-full" isBlue delay={`${idx * 0.1 + 0.4}s`} />
          <WowBoneGlass className="h-6 w-6 rounded-full" delay={`${idx * 0.1 + 0.5}s`} />
        </div>
      </div>
    </div>
  </SkeletonSection>
);

/* ── Grille complète avec le fond Univers du Header ──────── */
const ServiceCardsSkeletonWow = () => (
  <section className="pt-24 pb-12 relative overflow-hidden bg-slate-900 border-t border-white/5">
    
    {/* Fond identique au Hero : Dégradé profond + Overlay */}
    <div 
      className="absolute inset-0 bg-[linear-gradient(-45deg,#040829,#111827,#1428C9,#081051)] bg-[length:400%_400%] opacity-90"
      style={{ animation: 'gradientShiftHero 12s ease infinite' }}
    />
    <div className="absolute inset-0 bg-black/30 mix-blend-overlay" />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      {/* Titre skeleton aligné */}
      <SkeletonSection>
        <div className="mb-16 flex flex-col items-center gap-4">
          <WowBoneGlass className="h-3 w-32 rounded-full" isBlue />
          <WowBoneGlass className="h-10 md:h-14 w-72 md:w-[450px] rounded-[1.5rem] shadow-[0_0_20px_rgba(255,255,255,0.05)]" />
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

export default ServiceCardsSkeletonWow;
