import React from 'react';

const SlideEventSkeleton = () => {
  return (
    <div className="relative w-full h-[60vh] min-h-[420px] bg-gray-100 flex items-center justify-center animate-pulse mt-16 md:mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl space-y-4">
          <div className="h-4 w-32 bg-gray-200 rounded-full" />
          <div className="h-12 w-3/4 bg-gray-200 rounded-xl" />
          <div className="h-20 w-full bg-gray-200 rounded-xl" />
          <div className="flex gap-4">
            <div className="h-12 w-32 bg-gray-200 rounded-full" />
            <div className="h-12 w-32 bg-gray-200 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideEventSkeleton;
