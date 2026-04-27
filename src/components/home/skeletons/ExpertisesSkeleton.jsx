import React from 'react';
import Shimmer from '@/components/ui/Shimmer';

const SectionTitleSkeleton = ({ align = 'left' }) => (
  <div className={`mb-10 flex flex-col gap-3 ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}>
    <Shimmer className="h-4 w-32 rounded-full" />
    <Shimmer className="h-10 md:h-12 w-64 md:w-80 rounded-xl" />
    <Shimmer className="h-4 w-full max-w-lg rounded-full" />
  </div>
);

const ExpertisesSkeleton = () => {
  return (
    <section className="font-sans w-full pt-12" aria-busy="true">
      <SectionTitleSkeleton align="center" />
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-0 mt-8">
        {/* Text Area */}
        <div className="w-full md:w-1/2 flex flex-col md:pr-8 lg:pr-10">
          <Shimmer className="h-10 w-64 rounded-xl mb-4" />
          <Shimmer className="h-5 w-40 rounded-full mb-2" />
          <Shimmer className="h-4 w-32 rounded-full mb-8" />
          <div className="flex flex-col gap-3">
            <Shimmer className="h-4 w-full max-w-lg rounded-full" />
            <Shimmer className="h-4 w-full max-w-lg rounded-full" />
            <Shimmer className="h-4 w-4/5 max-w-lg rounded-full" />
            <Shimmer className="h-4 w-3/4 max-w-lg rounded-full" />
          </div>
          <Shimmer className="h-12 w-40 rounded-full mt-10" />
        </div>
        {/* Cards Area */}
        <div className="w-full md:w-1/2 relative h-[380px] md:h-[500px] flex items-center justify-center">
            <Shimmer className="w-[85%] md:w-[85%] h-[75%] md:h-[80%] rounded-3xl z-30" />
        </div>
      </div>
    </section>
  );
};

export default ExpertisesSkeleton;
