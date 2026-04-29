import React from 'react';

const EventFormSkeleton = () => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6 animate-pulse">
      <div className="h-8 w-1/2 bg-gray-50 rounded-lg" />
      <div className="space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-12 w-full bg-gray-50 rounded-xl" />
        ))}
      </div>
      <div className="h-14 w-full bg-gray-50 rounded-xl" />
    </div>
  );
};

export default EventFormSkeleton;
