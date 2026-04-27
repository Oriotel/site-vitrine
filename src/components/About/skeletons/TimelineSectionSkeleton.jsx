import React from 'react';
<<<<<<< HEAD

const TimelineSectionSkeleton = () => {
  return (
    <div className="py-24 bg-gray-50 animate-pulse">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="h-4 w-32 bg-gray-200 rounded-full mx-auto" />
          <div className="h-10 w-64 bg-gray-200 rounded-xl mx-auto" />
        </div>
        <div className="space-y-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-8 items-center">
              <div className="h-12 w-12 bg-gray-200 rounded-full shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-6 w-1/4 bg-gray-200 rounded-lg" />
                <div className="h-4 w-3/4 bg-gray-200 rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
=======
import Shimmer from '@/components/ui/Shimmer';

const TimelineSectionSkeleton = () => (
  <section className="py-24 bg-white relative">
    <div className="max-w-5xl mx-auto flex flex-col items-center gap-16">
      <div className="text-center space-y-4">
        <Shimmer className="h-4 w-24 mx-auto rounded-full" />
        <Shimmer className="h-10 w-64 mx-auto rounded-xl" />
      </div>

      <div className="relative w-full">
        {/* Line */}
        <div className="absolute left-6 md:left-1/2 w-0.5 h-full bg-slate-100 -translate-x-1/2" />
        
        {/* Item 1 */}
        <div className="relative flex items-center w-full md:flex-row mb-20">
          <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-100 z-10 border-4 border-white shadow-sm" />
          <div className="w-full pl-16 md:pl-0 md:w-1/2 md:pr-16 flex md:justify-end">
            <Shimmer className="w-full max-w-md h-48 rounded-[2.5rem]" />
          </div>
        </div>

        {/* Item 2 */}
        <div className="relative flex items-center w-full md:flex-row-reverse">
          <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-100 z-10 border-4 border-white shadow-sm" />
          <div className="w-full pl-16 md:pl-0 md:w-1/2 md:pl-16 flex md:justify-start">
            <Shimmer className="w-full max-w-md h-48 rounded-[2.5rem]" />
          </div>
        </div>
      </div>
    </div>
  </section>
);
>>>>>>> 542a43cf8930394cf6d0d173e32fc8ea4df6f95a

export default TimelineSectionSkeleton;
