import React from 'react';

const MapSkeleton = () => {
  return (
    <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-gray-100 animate-pulse">
      {/* Background Skeleton */}
      <div className="w-full h-full bg-gray-200" />
      
      {/* Label Skeleton */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg border border-gray-200 w-32 h-12 flex flex-col justify-center space-y-1">
        <div className="h-3 w-20 bg-gray-200 rounded" />
        <div className="h-2 w-16 bg-gray-100 rounded" />
      </div>
    </div>
  );
};

export default MapSkeleton;
