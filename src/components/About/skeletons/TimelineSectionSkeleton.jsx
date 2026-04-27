import React from 'react';
import Shimmer from '@/components/ui/Shimmer';
import SkeletonSection from '@/components/ui/SkeletonSection';

/**
 * TimelineItemSkeleton
 * Internal component for a single timeline entry placeholder.
 */
const TimelineItemSkeleton = ({ reverse = false }) => (
  <div className={`relative flex items-center w-full ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
    {/* Point */}
    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-100 z-20 border-4 border-white shadow-sm" />
    
    {/* Card Container */}
    <div className={`w-full pl-16 md:pl-0 md:w-1/2 flex ${reverse ? 'md:pl-16 md:justify-start' : 'md:pr-16 md:justify-end'}`}>
      <div className="w-full max-w-md bg-slate-800/95 rounded-[2.5rem] p-8 md:p-10 shadow-2xl flex flex-col gap-5">
        <Shimmer className="h-8 w-24 rounded-lg bg-slate-700/50" />
        <Shimmer className="h-10 w-full rounded-xl bg-slate-700/50" />
        <div className="space-y-3">
          <Shimmer className="h-4 w-full rounded-md bg-slate-700/30" />
          <Shimmer className="h-4 w-5/6 rounded-md bg-slate-700/30" />
        </div>
      </div>
    </div>
  </div>
);

/**
 * TimelineSectionSkeleton
 * Skeleton for the historical timeline section.
 */
const TimelineSectionSkeleton = () => (
  <SkeletonSection delay={100}>
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header Skeleton */}
        <div className="flex flex-col items-center gap-5 mb-20 text-center">
          <Shimmer className="h-12 md:h-16 w-64 md:w-80 rounded-2xl" />
          <Shimmer className="h-4 w-48 md:w-64 rounded-full" />
        </div>

        {/* Vertical Line & Items */}
        <div className="relative mt-20">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-slate-100" />
          <div className="space-y-24 md:space-y-40">
            {Array.from({ length: 3 }).map((_, i) => (
              <TimelineItemSkeleton key={i} reverse={i % 2 !== 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  </SkeletonSection>
);

export default TimelineSectionSkeleton;
