import React from 'react';
import Shimmer from '@/components/ui/Shimmer';

const SectionTitleSkeleton = ({ align = 'left' }) => (
  <div className={`mb-10 flex flex-col gap-3 ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}>
    <Shimmer className="h-4 w-32 rounded-full" />
    <Shimmer className="h-10 md:h-12 w-64 md:w-80 rounded-xl" />
    <Shimmer className="h-4 w-full max-w-lg rounded-full" />
  </div>
);

const TestimonialsSkeleton = () => {
  return (
    <section className="font-sans w-full py-6 md:py-10" aria-busy="true">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <SectionTitleSkeleton align="center" />
        <div className="relative w-full h-[280px] md:h-[400px] flex justify-center items-center mt-6">
            <Shimmer className="absolute w-[220px] h-[220px] md:w-[340px] md:h-[340px] rounded-[2rem] z-30" />
            <Shimmer className="absolute w-[220px] h-[220px] md:w-[340px] md:h-[340px] rounded-[2rem] z-20 translate-x-[75%] opacity-80" />
            <Shimmer className="absolute w-[220px] h-[220px] md:w-[340px] md:h-[340px] rounded-[2rem] z-20 -translate-x-[75%] opacity-80" />
        </div>
        <div className="mt-12 text-center max-w-3xl mx-auto h-[160px] flex flex-col items-center w-full">
          <div className="mb-8 flex flex-col items-center w-full">
            <Shimmer className="h-6 w-48 rounded-xl mb-2" />
            <Shimmer className="h-4 w-32 rounded-full" />
          </div>
          <div className="w-full flex flex-col items-center gap-2">
              <Shimmer className="h-6 w-3/4 rounded-full" />
              <Shimmer className="h-6 w-5/6 rounded-full" />
              <Shimmer className="h-6 w-2/3 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSkeleton;
