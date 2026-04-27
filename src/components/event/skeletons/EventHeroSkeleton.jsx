import React from 'react';

const EventHeroSkeleton = () => {
  return (
    <div className="relative w-full h-[50vh] min-h-[400px] bg-gray-100 flex items-center justify-center animate-pulse">
      <div className="container mx-auto px-6 text-center space-y-4">
        <div className="h-4 w-32 bg-gray-200 rounded-full mx-auto" />
        <div className="h-12 w-3/4 bg-gray-200 rounded-xl mx-auto" />
        <div className="h-4 w-1/2 bg-gray-200 rounded-full mx-auto" />
      </div>
    </div>
  );
};

export default EventHeroSkeleton;
