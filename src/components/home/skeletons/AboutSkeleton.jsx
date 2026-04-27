import React from 'react';
import Shimmer from '@/components/ui/Shimmer';

const SectionTitleSkeleton = ({ align = 'left' }) => (
  <div className={`mb-10 flex flex-col gap-3 ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}>
    <Shimmer className="h-4 w-32 rounded-full" />
    <Shimmer className="h-10 md:h-12 w-64 md:w-80 rounded-xl" />
    <Shimmer className="h-4 w-full max-w-lg rounded-full" />
  </div>
);

const AboutSkeleton = () => {
  return (
    <section className="w-full" aria-busy="true">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <SectionTitleSkeleton />
          <div className="flex flex-col gap-3">
            <Shimmer className="h-4 w-full rounded-full" />
            <Shimmer className="h-4 w-full rounded-full" />
            <Shimmer className="h-4 w-4/5 rounded-full" />
            <Shimmer className="h-4 w-5/6 rounded-full mt-4" />
            <Shimmer className="h-4 w-3/4 rounded-full" />
          </div>
          <Shimmer className="h-12 w-40 rounded-full mt-6" />
        </div>
        <div className="relative h-[400px] md:h-[500px] w-full">
            <Shimmer className="absolute inset-0 w-full h-full rounded-3xl" />
        </div>
      </div>
    </section>
  );
};

export default AboutSkeleton;
