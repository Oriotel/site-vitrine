import React from 'react';
import Shimmer from '@/components/ui/Shimmer';
import SkeletonSection from '@/components/ui/SkeletonSection';

/**
 * AboutHeroSkeleton
 * Skeleton for the PageHero component when used in the About page.
 */
const AboutHeroSkeleton = () => (
  <SkeletonSection>
    <section className="relative w-full h-[50vh] md:h-[65vh] min-h-[380px] md:min-h-[450px] flex items-center justify-center pt-20 bg-slate-100">
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6">
        <Shimmer className="h-12 md:h-20 lg:h-24 w-3/4 md:w-[600px] rounded-xl" />
        <Shimmer className="h-5 w-full max-w-2xl rounded-md" />
        <Shimmer className="h-5 w-11/12 max-w-xl rounded-md" />
      </div>
    </section>
  </SkeletonSection>
);

export default AboutHeroSkeleton;
