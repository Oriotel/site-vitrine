import React from 'react';
import Shimmer from '@/components/ui/Shimmer';
import SkeletonSection from '@/components/ui/SkeletonSection';

/**
 * StatsSectionSkeleton
 * Skeleton for the numeric stats section.
 */
const StatsSectionSkeleton = () => (
  <SkeletonSection delay={90}>
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <Shimmer className="h-12 md:h-16 w-24 md:w-32 rounded-xl" />
              <Shimmer className="h-4 w-20 md:w-28 rounded-md" />
            </div>
          ))}
        </div>
      </div>
    </section>
  </SkeletonSection>
);

export default StatsSectionSkeleton;
