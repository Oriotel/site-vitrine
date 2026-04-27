import React from 'react';

const WhyJoinUsSkeleton = () => {
  return (
    <section className="py-20 bg-midnight-slate relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="h-10 w-64 bg-white/10 animate-pulse rounded-xl mx-auto" />
          <div className="h-5 w-full bg-white/5 animate-pulse rounded-lg mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-6">
              <div className="w-14 h-14 rounded-xl bg-white/10 animate-pulse" />
              <div className="h-6 w-32 bg-white/10 animate-pulse rounded-md" />
              <div className="space-y-2">
                <div className="h-4 w-full bg-white/5 animate-pulse rounded-md" />
                <div className="h-4 w-11/12 bg-white/5 animate-pulse rounded-md" />
                <div className="h-4 w-4/5 bg-white/5 animate-pulse rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUsSkeleton;
