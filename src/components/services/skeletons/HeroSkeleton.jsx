/**
 * HeroSkeleton.jsx
 * -----------------------------------------------------------
 * Skeleton du Hero de la page Services avec les effets WOW vibrants.
 * -----------------------------------------------------------
 */

import React from 'react';
import SkeletonSection from '@/components/ui/SkeletonSection';

const HeroSkeleton = () => (
  <SkeletonSection>
    <section className="relative w-full h-[55vh] md:h-[65vh] min-h-[450px] flex items-center justify-center pt-20 overflow-hidden bg-slate-900">
      
      {/* Background animé dynamique */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(-45deg,#040829,#111827,#1428C9,#081051)] bg-[length:400%_400%]"
        style={{ animation: 'gradientShiftHero 12s ease infinite' }}
      />

      {/* Texture douce & Light sweeps */}
      <div className="absolute inset-0 bg-black/40 mix-blend-overlay" />
      <div 
        className="absolute inset-0 w-[200%] h-full opacity-30"
        style={{ animation: 'wowShimmer 4s infinite cubic-bezier(0.4, 0, 0.2, 1)' }}
      >
        <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white to-transparent skew-x-[-30deg]" />
      </div>

      {/* Contenu Hero */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6 w-full">
        <div className="h-16 md:h-20 lg:h-24 2xl:h-32 w-4/5 max-w-[600px] rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[200%] h-full" style={{ animation: 'wowShimmer 2.5s infinite 0.2s' }}>
            <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg]" />
          </div>
        </div>
        
        <div className="h-5 md:h-6 2xl:h-7 w-[90%] max-w-[800px] rounded-full bg-white/10 backdrop-blur-md border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[200%] h-full" style={{ animation: 'wowShimmer 2.5s infinite 0.4s' }}>
            <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg]" />
          </div>
        </div>
        
        <div className="h-5 md:h-6 2xl:h-7 w-[75%] max-w-[600px] rounded-full bg-white/10 backdrop-blur-md border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[200%] h-full" style={{ animation: 'wowShimmer 2.5s infinite 0.5s' }}>
            <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg]" />
          </div>
        </div>
      </div>
    </section>
  </SkeletonSection>
);

export default HeroSkeleton;
