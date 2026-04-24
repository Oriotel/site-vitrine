/**
 * ServicesPageSkeleton.jsx — WOW Edition
 * -----------------------------------------------------------
 * Skeleton premium, brillant et scintillant avec keyframes CSS
 * injectés directement. Hero animé, Cards glow, Stats éclatantes.
 * -----------------------------------------------------------
 */

import React from 'react';
import SkeletonSection from '@/components/ui/SkeletonSection';
import ServiceCardsSkeleton from '@/components/services/ServiceCardsSkeleton';

/* ── Styles Globaux pour les Skeletons WOW ───────────────── */
const GlobalWowStyles = () => (
  <style>{`
    @keyframes wowShimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    @keyframes pulseGlow {
      0%, 100% { opacity: 0.95; box-shadow: 0 4px 15px rgba(20, 40, 201, 0.02); transform: translateY(0px); }
      50% { opacity: 1; box-shadow: 0 15px 30px rgba(20, 40, 201, 0.08); transform: translateY(-4px); }
    }
    @keyframes gradientShiftHero {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    @keyframes floatLight {
      0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
      50% { transform: translate(15px, -15px) scale(1.15); opacity: 0.8; }
    }
  `}</style>
);

/* ── 1. Hero WOW ─────────────────────────────────────────── */
const HeroSkeletonWow = () => (
  <SkeletonSection>
    <section className="relative w-full h-[55vh] md:h-[65vh] min-h-[450px] flex items-center justify-center pt-20 overflow-hidden bg-slate-900">
      
      {/* Background animé dynamique (Bleu nuit vers éclat) */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(-45deg,#040829,#111827,#1428C9,#081051)] bg-[length:400%_400%]"
        style={{ animation: 'gradientShiftHero 12s ease infinite' }}
      />

      {/* Texture douce & Light sweeps over the hero */}
      <div className="absolute inset-0 bg-black/40 mix-blend-overlay" />
      <div 
        className="absolute inset-0 w-[200%] h-full opacity-30"
        style={{ animation: 'wowShimmer 4s infinite cubic-bezier(0.4, 0, 0.2, 1)' }}
      >
        <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white to-transparent skew-x-[-30deg]" />
      </div>

      {/* Contenu Hero */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6 w-full">
        {/* Titre H1 */}
        <div className="h-16 md:h-20 lg:h-24 2xl:h-32 w-4/5 max-w-[600px] rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[200%] h-full" style={{ animation: 'wowShimmer 2.5s infinite 0.2s' }}>
            <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg]" />
          </div>
        </div>
        
        {/* Sous-titre Ligne 1 */}
        <div className="h-5 md:h-6 2xl:h-7 w-[90%] max-w-[800px] rounded-full bg-white/10 backdrop-blur-md border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[200%] h-full" style={{ animation: 'wowShimmer 2.5s infinite 0.4s' }}>
            <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg]" />
          </div>
        </div>
        
        {/* Sous-titre Ligne 2 */}
        <div className="h-5 md:h-6 2xl:h-7 w-[75%] max-w-[600px] rounded-full bg-white/10 backdrop-blur-md border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[200%] h-full" style={{ animation: 'wowShimmer 2.5s infinite 0.5s' }}>
            <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg]" />
          </div>
        </div>
      </div>
    </section>
  </SkeletonSection>
);

/* ── 3. Stats WOW ────────────────────────────────────────── */
const StatsSkeletonWow = () => (
  <SkeletonSection delay={120}>
    <section className="py-16 md:py-20 bg-white border-y border-slate-100 relative overflow-hidden">
      
      {/* Background glow subtil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-[#1428C9]/[0.02] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonSection key={i} delay={i * 100}>
               <div className="flex flex-col items-center gap-5">
                {/* Gros chiffre stat */}
                <div 
                  className="h-16 md:h-20 w-32 md:w-40 rounded-[2rem] bg-gradient-to-b from-slate-100 to-slate-50 relative overflow-hidden shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] border border-slate-200/50" 
                  style={{ animation: `pulseGlow 4s infinite ${i * 0.2}s` }}
                >
                   <div className="absolute top-0 left-0 w-[200%] h-full" style={{ animation: `wowShimmer 2.5s infinite ${i * 0.1}s` }}>
                     <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/90 to-transparent skew-x-[-20deg]" />
                   </div>
                </div>
                {/* Titre stat */}
                <div className="h-4 md:h-5 w-24 md:w-28 rounded-full bg-slate-200/80 relative overflow-hidden">
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
  <div className="min-h-screen bg-white font-sans" aria-busy="true" aria-label="Chargement flamboyant de la page Services">
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
