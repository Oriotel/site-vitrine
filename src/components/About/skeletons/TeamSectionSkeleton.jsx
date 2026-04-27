import React from 'react';

const TeamSectionSkeleton = () => {
  return (
    <div className="py-24 bg-white animate-pulse">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="h-4 w-32 bg-gray-100 rounded-full mx-auto" />
          <div className="h-10 w-64 bg-gray-100 rounded-xl mx-auto" />
        </div>
        <div className="flex gap-6 overflow-hidden mb-16">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="min-w-[280px] h-96 bg-gray-100 rounded-2xl shrink-0" />
          ))}
        </div>
        <div className="max-w-xl mx-auto space-y-4 text-center">
          <div className="h-20 w-20 bg-gray-100 rounded-full mx-auto" />
          <div className="h-4 w-40 bg-gray-100 rounded-full mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default TeamSectionSkeleton;
