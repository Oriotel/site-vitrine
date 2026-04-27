/**
 * ServicesPageSkeleton.jsx — Monochrome & Brilliant Edition
 * -----------------------------------------------------------
 * Skeleton premium "Blanc & Dark" : Contraste saisissant sans bleu.
 * Hero Noir Profond avec éclats blancs, Section suivante très claire.
 * -----------------------------------------------------------
 */

import React from 'react';
import SkeletonSection from '@/components/ui/SkeletonSection';
import ServiceCardsSkeleton from '@/components/services/ServiceCardsSkeleton';

/* ── Styles Globaux WOW ──────────────────────────────────── */
const GlobalWowStyles = () => (
  <style>{`
    @keyframes wowShimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    @keyframes pulseGlowDark {
      0%, 100% { opacity: 0.95; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); transform: translateY(0px); }
      50% { opacity: 1; box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4); transform: translateY(-3px); }
    }
    @keyframes pulseGlowLight {
      0%, 100% { opacity: 0.95; box-shadow: 0 4px 15px rgba(255, 255, 255, 0.1); transform: translateY(0px); }
      50% { opacity: 1; box-shadow: 0 15px 30px rgba(255, 255, 255, 0.2); transform: translateY(-3px); }
    }
    @keyframes gradientShiftDark {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    @keyframes floatLight {
      0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
      50% { transform: translate(20px, -20px) scale(1.1); opacity: 0.9; }
    }
  `}</style>
);

/* ── 1. Hero WOW (Dark absolu & Blanc brillant) ──────────── */
const HeroSkeletonWow = () => (
  <SkeletonSection>
    <section className="relative w-full h-[55vh] md:h-[65vh] min-h-[450px] flex items-center justify-center pt-20 overflow-hidden bg-black">
      
      {/* Background dynamique Dark */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(-45deg,#000000,#111827,#1f2937,#000000)] bg-[length:400%_400%]"
        style={{ animation: 'gradientShiftDark 12s ease infinite' }}
      />

      {/* Taches de lumière flottantes (Blanc pur) */}
      <div 
        className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none" 
        style={{ animation: 'floatLight 8s infinite alternate' }} 
      />
      
      {/* Texture & Vague éclair */}
      <div className="absolute inset-0 bg-black/40 mix-blend-overlay" />
      <div 
        className="absolute inset-0 w-[200%] h-full opacity-40 mix-blend-overlay"
        style={{ animation: 'wowShimmer 3.5s infinite cubic-bezier(0.4, 0, 0.2, 1)' }}
      >
        <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white to-transparent skew-x-[-30deg]" />
      </div>

      {/* Contenu Hero (Sombre avec reflet blanc métallique) */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6 w-full">
        {/* Titre H1 */}
        <div className="h-16 md:h-20 lg:h-24 2xl:h-32 w-4/5 max-w-[600px] rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[200%] h-full" style={{ animation: 'wowShimmer 2.5s infinite 0.2s' }}>
            <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-20deg]" />
          </div>
        </div>
        
        {/* Sous-titre */}
        <div className="h-5 md:h-6 2xl:h-7 w-[90%] max-w-[800px] rounded-full bg-white/5 backdrop-blur-md border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[200%] h-full" style={{ animation: 'wowShimmer 2.5s infinite 0.4s' }}>
            <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]" />
          </div>
        </div>
        <div className="h-5 md:h-6 2xl:h-7 w-[75%] max-w-[600px] rounded-full bg-white/5 backdrop-blur-md border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[200%] h-full" style={{ animation: 'wowShimmer 2.5s infinite 0.5s' }}>
            <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]" />
          </div>
        </div>
      </div>
    </section>
  </SkeletonSection>
);

/* ── 3. Stats WOW (Light absolu mais accents Dark) ───────── */
const StatsSkeletonWow = () => (
  <SkeletonSection delay={120}>
    <section className="py-16 md:py-20 bg-[#F9FAFB] border-y border-slate-200 relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonSection key={i} delay={i * 100}>
               <div className="flex flex-col items-center gap-5">
                {/* Gros chiffre stat */}
                <div 
                  className="h-16 md:h-20 w-32 md:w-40 rounded-[2rem] bg-white relative overflow-hidden shadow-sm border border-slate-100" 
                >
                   <div className="absolute top-0 left-0 w-[200%] h-full mix-blend-overlay" style={{ animation: `wowShimmer 2.5s infinite ${i * 0.1}s` }}>
                     <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-slate-400/50 to-transparent skew-x-[-20deg]" />
                   </div>
                </div>
                {/* Titre stat */}
                <div className="h-4 md:h-5 w-24 md:w-28 rounded-full bg-slate-200 relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-[200%] h-full" style={{ animation: `wowShimmer 2.5s infinite ${i * 0.1 + 0.1}s` }}>
                     <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-[-20deg]" />
                   </div>
                </div>
              </div>
            </SkeletonSection>
          ))}
        </div>
      </div>
    </section>
  </SkeletonSection>
);

/* ── Squelette complet de la page ────────────────────────── */
const ServicesPageSkeleton = () => (
  <div className="min-h-screen bg-[#F9FAFB] font-sans" aria-busy="true" aria-label="Chargement Services (Monochrome)">
    {/* Injection des styles WOW vitaux */}
    <GlobalWowStyles />
    
    <HeroSkeletonWow />
    
    <SkeletonSection delay={80}>
      <ServiceCardsSkeleton />
    </SkeletonSection>

    <StatsSkeletonWow />
  </div>
);

export default ServicesPageSkeleton;
