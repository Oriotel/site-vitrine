import React from 'react';
import Shimmer from '@/components/ui/Shimmer';

const TeamSectionSkeleton = () => (
  <section className="py-24 bg-white">
    <div className="max-w-[1600px] mx-auto px-6">
      <div className="text-center space-y-4 mb-16">
        <Shimmer className="h-10 w-80 mx-auto rounded-xl" />
        <Shimmer className="h-4 w-96 mx-auto rounded-md" />
      </div>

      <div className="flex gap-8 overflow-hidden">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex-[0_0_300px] sm:flex-[0_0_320px] md:flex-[0_0_340px]">
            <Shimmer className="h-[450px] md:h-[500px] w-full rounded-3xl" />
          </div>
        ))}
      </div>

      <div className="mt-20 flex flex-col items-center gap-6">
        <Shimmer className="h-8 w-full max-w-2xl rounded-lg" />
        <div className="flex flex-col items-center gap-4">
          <Shimmer className="h-20 w-20 rounded-full" />
          <div className="space-y-2">
            <Shimmer className="h-6 w-40 rounded-md" />
            <Shimmer className="h-4 w-32 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TeamSectionSkeleton;
