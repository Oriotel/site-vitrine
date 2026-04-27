import React from 'react';
import Shimmer from '@/components/ui/Shimmer';

const HeroSkeleton = () => {
  return (
    <section className="relative w-full h-[100vh] min-h-[600px] flex items-center justify-center bg-white overflow-hidden" aria-busy="true">
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-slate-100/50 to-transparent" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8">
        <Shimmer className="h-32 w-32 rounded-full" />
        <div className="flex flex-col gap-4 items-center">
          <Shimmer className="h-16 md:h-24 w-80 md:w-[600px] rounded-2xl" />
          <Shimmer className="h-16 md:h-24 w-60 md:w-[450px] rounded-2xl" />
        </div>
        <Shimmer className="h-12 w-48 rounded-full mt-4" />
      </div>
    </section>
  );
};

export default HeroSkeleton;
