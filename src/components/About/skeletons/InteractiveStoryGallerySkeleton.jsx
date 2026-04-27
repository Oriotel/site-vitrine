import React from 'react';
import Shimmer from '@/components/ui/Shimmer';

export const InteractiveStoryGallerySkeleton = () => (
  <div className="flex flex-col xl:flex-row gap-6 lg:gap-8 w-full items-stretch lg:h-full py-1">
    {/* Main Card Skeleton */}
    <div className="xl:flex-1 relative w-full h-[320px] sm:h-[340px] md:h-[380px] lg:h-[400px]">
      <Shimmer className="h-full w-full rounded-[2rem]" />
    </div>

    {/* Thumbnail Stack Skeleton */}
    <div className="xl:flex-1 relative w-full h-[320px] sm:h-[340px] md:h-[380px] lg:h-[400px]">
      <div className="relative h-full w-full p-6 flex flex-col justify-center items-center xl:items-start bg-slate-50/30 rounded-[2rem] border border-slate-100">
        <div className="relative w-full h-[140px] mb-4">
          <Shimmer className="absolute h-24 w-18 md:h-32 md:w-24 rounded-xl left-10" />
          <Shimmer className="absolute h-24 w-18 md:h-32 md:w-24 rounded-xl left-24 opacity-60" />
          <Shimmer className="absolute h-24 w-18 md:h-32 md:w-24 rounded-xl left-36 opacity-30" />
        </div>
        <Shimmer className="h-4 w-24 mb-2" />
        <Shimmer className="h-12 w-full max-w-xs rounded-lg" />
      </div>
    </div>
  </div>
);

export default InteractiveStoryGallerySkeleton;
