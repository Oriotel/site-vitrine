import React from 'react';
import Shimmer from '@/components/ui/Shimmer';

const StatsSectionSkeleton = () => (
  <section className="py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-col items-center gap-3">
            <Shimmer className="h-12 w-24 rounded-xl" />
            <Shimmer className="h-4 w-32 rounded-md" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSectionSkeleton;
