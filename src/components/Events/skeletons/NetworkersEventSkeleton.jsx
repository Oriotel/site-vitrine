import React from 'react';

const NetworkersEventSkeleton = () => {
  return (
    <div className="pt-24 pb-24 bg-gray-50 flex flex-col items-center animate-pulse">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16 space-y-4">
          <div className="h-4 w-32 bg-gray-200 rounded-full" />
          <div className="h-10 w-64 bg-gray-200 rounded-xl" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-[400px] bg-gray-200 rounded-3xl" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NetworkersEventSkeleton;
