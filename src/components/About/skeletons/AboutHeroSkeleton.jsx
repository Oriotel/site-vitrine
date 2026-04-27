import React from 'react';
import Shimmer from '@/components/ui/Shimmer';

const AboutHeroSkeleton = () => (
  <div className="relative w-full h-[60vh] min-h-[500px] overflow-hidden bg-slate-50 flex items-center justify-center">
    <div className="container relative z-10 px-6 lg:px-16 flex flex-col items-center text-center gap-6">
      <Shimmer className="h-4 w-32 rounded-full mb-2" />
      <Shimmer className="h-16 w-full max-w-2xl rounded-2xl" />
      <Shimmer className="h-24 w-full max-w-xl rounded-2xl" />
      <div className="flex gap-4 mt-4">
        <Shimmer className="h-12 w-40 rounded-full" />
        <Shimmer className="h-12 w-40 rounded-full" />
      </div>
    </div>
  </div>
);

export default AboutHeroSkeleton;
