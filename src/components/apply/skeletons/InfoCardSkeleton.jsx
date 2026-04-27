import React from 'react';

const InfoCardSkeleton = () => {
  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-100 flex items-center gap-4">
      <div className="p-3 bg-gray-100 rounded-xl w-12 h-12 animate-pulse shrink-0" />
      <div className="flex-1 space-y-2">
        <div className="h-4 w-24 bg-gray-200 animate-pulse rounded" />
        <div className="h-3 w-full bg-gray-100 animate-pulse rounded" />
      </div>
    </div>
  );
};

export default InfoCardSkeleton;
