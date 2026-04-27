import React from 'react';
<<<<<<< HEAD

const TeamSectionSkeleton = () => {
  return (
    <div className="py-24 bg-white animate-pulse">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="h-4 w-32 bg-gray-100 rounded-full mx-auto" />
          <div className="h-10 w-64 bg-gray-100 rounded-xl mx-auto" />
        </div>
        <div className="flex gap-6 overflow-hidden mb-16">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="min-w-[280px] h-96 bg-gray-100 rounded-2xl shrink-0" />
          ))}
        </div>
        <div className="max-w-xl mx-auto space-y-4 text-center">
          <div className="h-20 w-20 bg-gray-100 rounded-full mx-auto" />
          <div className="h-4 w-40 bg-gray-100 rounded-full mx-auto" />
        </div>
      </div>
    </div>
  );
};
=======
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
>>>>>>> 542a43cf8930394cf6d0d173e32fc8ea4df6f95a

export default TeamSectionSkeleton;
