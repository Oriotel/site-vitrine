import React from 'react';
import Shimmer from '@/components/ui/Shimmer';

/**
 * InteractiveStoryGallerySkeleton
 * Skeleton for the InteractiveStoryGallery component.
 */
const InteractiveStoryGallerySkeleton = () => (
  <div className="flex flex-col xl:flex-row gap-6 lg:gap-8 w-full items-stretch h-full py-1">
    {/* Main Card Skeleton */}
    <div className="xl:flex-1 relative w-full h-[320px] sm:h-[340px] md:h-[380px] lg:h-[400px]">
      <Shimmer className="h-full w-full rounded-[2rem]" />
    </div>

    {/* Right Panel Skeleton */}
    <div className="xl:flex-1 relative w-full h-[320px] sm:h-[340px] md:h-[380px] lg:h-[400px]">
      <div className="relative h-full w-full p-4 md:p-6 flex flex-col justify-center items-center xl:items-start bg-slate-50/30 rounded-[2rem] border border-slate-100">
        
        {/* Thumbnail Stack Skeleton */}
        <div className="relative w-full h-[140px] md:h-[160px] flex items-center justify-center xl:justify-start mb-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <Shimmer 
              key={i} 
              className="absolute h-24 w-18 md:h-32 md:w-24 rounded-xl shadow-lg border-2 border-white"
              style={{ left: `${20 + i * 15}%`, zIndex: 10 - i }}
            />
          ))}
        </div>

        {/* Description Skeleton */}
        <footer className="w-full xl:max-w-xs px-2 lg:px-0 mt-auto">
          <Shimmer className="h-3 w-20 rounded-full mb-3" />
          <div className="space-y-2">
            <Shimmer className="h-4 w-full rounded-md" />
            <Shimmer className="h-4 w-5/6 rounded-md" />
          </div>
        </footer>
      </div>
    </div>
  </div>
);

export default InteractiveStoryGallerySkeleton;
