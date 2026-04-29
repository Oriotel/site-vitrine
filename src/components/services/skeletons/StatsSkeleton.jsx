/**
 * StatsSkeleton.jsx
 * -----------------------------------------------------------
 * Skeleton de la section Statistiques avec l'effet pulsé premium.
 * -----------------------------------------------------------
 */

import React from 'react';
import SkeletonSection from '@/components/ui/SkeletonSection';

const StatsSkeleton = () => (
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

export default StatsSkeleton;
