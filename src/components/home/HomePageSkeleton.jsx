import React from 'react';
import Shimmer from '@/components/ui/Shimmer';

/**
 * HomePageSkeleton.jsx
 * -----------------------------------------------------------
 * Mimics the structure of HomePage for initial loading state.
 * -----------------------------------------------------------
 */

const SectionTitleSkeleton = ({ align = 'left' }) => (
  <div className={`mb-10 flex flex-col gap-3 ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}>
    <Shimmer className="h-4 w-32 rounded-full" />
    <Shimmer className="h-10 md:h-12 w-64 md:w-80 rounded-xl" />
    <Shimmer className="h-4 w-full max-w-lg" />
  </div>
);

const HomePageSkeleton = () => {
  return (
    <div className="min-h-screen bg-white font-sans" aria-busy="true">
      {/* 1. Hero Skeleton */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center bg-white overflow-hidden">
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-slate-100/50 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8">
          <Shimmer className="h-32 w-32 rounded-full" />
          <div className="flex flex-col gap-4 items-center">
            <Shimmer className="h-16 md:h-24 w-80 md:w-[600px]" />
            <Shimmer className="h-16 md:h-24 w-60 md:w-[450px]" />
          </div>
          <Shimmer className="h-12 w-48 rounded-full mt-4" />
        </div>
      </section>

      {/* 2. Content Sections Container */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 flex flex-col gap-20 py-20">
        
        {/* About Section Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <SectionTitleSkeleton />
            <div className="flex flex-col gap-3">
              <Shimmer className="h-4 w-full" />
              <Shimmer className="h-4 w-full" />
              <Shimmer className="h-4 w-4/5" />
            </div>
          </div>
          <Shimmer className="h-[400px] w-full rounded-3xl" />
        </div>

        {/* Expertises Section Skeleton */}
        <div className="flex flex-col gap-12">
          <SectionTitleSkeleton align="center" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="p-8 rounded-3xl border border-slate-100 flex flex-col gap-6">
                <Shimmer className="h-12 w-12 rounded-xl" />
                <Shimmer className="h-6 w-3/4" />
                <Shimmer className="h-20 w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Full-width Sections Skeletons */}
      
      {/* Events Section Skeleton */}
      <section className="w-full py-16 bg-slate-50/50">
        <div className="px-6 md:px-8 lg:px-12 mb-12">
          <SectionTitleSkeleton align="center" />
        </div>
        <div className="flex gap-8 justify-center overflow-hidden px-10">
          {Array.from({ length: 5 }).map((_, i) => (
            <Shimmer 
              key={i} 
              className={`flex-shrink-0 rounded-2xl ${
                i === 2 ? 'h-[420px] w-[320px]' : 'h-[380px] w-[280px] opacity-50'
              }`} 
            />
          ))}
        </div>
      </section>

      {/* Testimonials Section Skeleton */}
      <section className="w-full py-16">
        <SectionTitleSkeleton align="center" />
        <div className="mt-12 flex flex-col items-center gap-8">
          <Shimmer className="h-24 w-24 rounded-full" />
          <Shimmer className="h-6 w-3/4 max-w-2xl" />
          <div className="flex flex-col gap-2 items-center">
            <Shimmer className="h-4 w-32" />
            <Shimmer className="h-3 w-24" />
          </div>
        </div>
      </section>

      {/* Sponsors Skeleton */}
      <section className="py-12 border-t border-slate-100 overflow-hidden">
        <div className="flex gap-20 justify-center">
          {Array.from({ length: 6 }).map((_, i) => (
            <Shimmer key={i} className="h-12 w-32" />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePageSkeleton;
