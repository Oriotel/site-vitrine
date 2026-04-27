import React from 'react';

const HeroSkeleton = () => {
  return (
    <section className="pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl space-y-6">
          {/* Badge Skeleton */}
          <div className="h-8 w-32 bg-gray-200 animate-pulse rounded-full" />
          
          {/* Title Skeleton */}
          <div className="space-y-3">
            <div className="h-12 md:h-16 w-3/4 bg-gray-200 animate-pulse rounded-2xl" />
            <div className="h-12 md:h-16 w-1/2 bg-gray-200 animate-pulse rounded-2xl" />
          </div>

          {/* Paragraph Skeleton */}
          <div className="space-y-2 max-w-2xl">
            <div className="h-5 w-full bg-gray-200 animate-pulse rounded-lg" />
            <div className="h-5 w-5/6 bg-gray-200 animate-pulse rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSkeleton;
