import React from 'react';
import Shimmer from '@/components/ui/Shimmer';

const SponsorsSkeleton = () => {
  return (
    <section className="py-12 border-t border-slate-100 overflow-hidden" aria-busy="true">
      <div className="flex gap-20 justify-center">
        {Array.from({ length: 6 }).map((_, i) => (
          <Shimmer key={i} className="h-12 w-32 rounded-lg" />
        ))}
      </div>
    </section>
  );
};

export default SponsorsSkeleton;
