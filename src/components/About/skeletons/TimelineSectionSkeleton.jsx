import React from 'react';
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

export default TimelineSectionSkeleton;
