import React from 'react';

const ProcessSectionSkeleton = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="h-4 w-40 bg-gray-100 animate-pulse rounded-md mx-auto" />
          <div className="h-12 md:h-16 w-3/4 bg-gray-200 animate-pulse rounded-2xl mx-auto" />
          <div className="h-5 w-full bg-gray-100 animate-pulse rounded-lg mx-auto" />
          <div className="h-5 w-5/6 bg-gray-100 animate-pulse rounded-lg mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col items-center text-center px-4 space-y-6">
              <div className="w-20 h-20 rounded-[20px] bg-gray-200 animate-pulse" />
              <div className="h-6 w-32 bg-gray-200 animate-pulse rounded-md" />
              <div className="space-y-2 w-full">
                <div className="h-4 w-full bg-gray-100 animate-pulse rounded-md" />
                <div className="h-4 w-5/6 bg-gray-100 animate-pulse rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSectionSkeleton;
