import React from 'react';

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

export default TimelineSectionSkeleton;
