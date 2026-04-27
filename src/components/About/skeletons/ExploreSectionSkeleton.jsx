import React from 'react';

const ExploreSectionSkeleton = () => {
  return (
    <div className="py-24 bg-white animate-pulse">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="space-y-6">
            <div className="h-8 w-3/4 bg-gray-100 rounded-xl" />
            <div className="h-20 w-full bg-gray-100 rounded-xl" />
            <div className="flex gap-4">
              <div className="h-10 w-32 bg-gray-100 rounded-full" />
              <div className="h-10 w-32 bg-gray-100 rounded-full" />
            </div>
          </div>
          <div className="h-96 bg-gray-100 rounded-[2rem]" />
        </div>
      </div>
    </div>
  );
};

export default ExploreSectionSkeleton;
