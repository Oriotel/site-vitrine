import React from 'react';
import Shimmer from '@/components/ui/Shimmer';

const SectionTitleSkeleton = ({ align = 'left' }) => (
  <div className={`mb-10 flex flex-col gap-3 ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}>
    <Shimmer className="h-4 w-32 rounded-full" />
    <Shimmer className="h-10 md:h-12 w-64 md:w-80 rounded-xl" />
    <Shimmer className="h-4 w-full max-w-lg rounded-full" />
  </div>
);

const EventsSkeleton = () => {
  return (
    <section className="font-sans w-full py-6 md:py-10" aria-busy="true">
      <div className="max-w-6xl mx-auto relative px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <SectionTitleSkeleton align="center" />
        <div className="flex flex-col items-start w-full gap-8 mt-8 md:mt-12">
            <Shimmer className="h-12 w-40 rounded-full" />
        </div>
        <div className="relative w-full h-[350px] md:h-[500px] flex justify-center items-center mt-6">
            <Shimmer className="absolute w-[220px] md:w-[340px] h-[280px] md:h-[420px] rounded-2xl z-30" />
            <Shimmer className="absolute w-[220px] md:w-[340px] h-[280px] md:h-[420px] rounded-2xl z-20 translate-x-[75%] opacity-80" />
            <Shimmer className="absolute w-[220px] md:w-[340px] h-[280px] md:h-[420px] rounded-2xl z-20 -translate-x-[75%] opacity-80" />
        </div>
      </div>
    </section>
  );
};

export default EventsSkeleton;
