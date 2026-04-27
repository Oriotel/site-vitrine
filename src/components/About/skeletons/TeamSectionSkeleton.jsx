import React from 'react';
import Shimmer from '@/components/ui/Shimmer';
import SkeletonSection from '@/components/ui/SkeletonSection';

/**
 * TeamSectionSkeleton
 * Skeleton for the team gallery and founder quote.
 */
const TeamSectionSkeleton = () => (
  <SkeletonSection delay={120}>
    <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1600px]">
        {/* Header Skeleton */}
        <div className="mx-auto mb-20 flex max-w-4xl flex-col items-center px-6 text-center gap-5">
          <Shimmer className="h-12 md:h-16 lg:h-20 w-80 md:w-[450px] rounded-2xl" />
          <Shimmer className="h-5 w-full max-w-xl rounded-md" />
        </div>

        {/* Carousel Tracks Skeleton */}
        <div className="flex gap-8 px-8 overflow-hidden mb-24">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex-shrink-0 flex flex-col gap-4">
              <Shimmer className="h-[450px] md:h-[500px] w-[300px] md:w-[340px] rounded-[2.5rem]" />
              <div className="px-4 space-y-2">
                <Shimmer className="h-6 w-32 rounded-lg" />
                <Shimmer className="h-4 w-24 rounded-md" />
              </div>
            </div>
          ))}
        </div>

        {/* Founder Testimonial Skeleton */}
        <div className="mx-auto max-w-4xl px-6 text-center flex flex-col items-center gap-8 border-t border-slate-50 pt-20">
          <div className="space-y-4 w-full flex flex-col items-center">
            <Shimmer className="h-8 w-full max-w-2xl rounded-xl" />
            <Shimmer className="h-8 w-3/4 max-w-xl rounded-xl" />
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <Shimmer className="h-20 w-20 rounded-full shadow-lg" />
            <div className="space-y-2 flex flex-col items-center">
              <Shimmer className="h-6 w-40 rounded-lg" />
              <Shimmer className="h-4 w-32 rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </SkeletonSection>
);

export default TeamSectionSkeleton;
