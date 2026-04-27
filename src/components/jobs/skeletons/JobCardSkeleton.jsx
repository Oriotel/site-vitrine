import React from 'react';

const JobCardSkeleton = () => {
  return (
    <div className="p-6 rounded-2xl border border-gray-100 bg-white space-y-4">
      <div className="flex flex-col gap-4">
        <div>
          {/* Badge Skeleton */}
          <div className="h-6 w-24 bg-gray-100 animate-pulse rounded-full mb-3" />
          {/* Title Skeleton */}
          <div className="h-6 w-3/4 bg-gray-200 animate-pulse rounded-md" />
        </div>

        {/* Icons/Info Skeleton */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="h-4 w-20 bg-gray-100 animate-pulse rounded-md" />
          <div className="h-4 w-20 bg-gray-100 animate-pulse rounded-md" />
          <div className="h-4 w-20 bg-gray-100 animate-pulse rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default JobCardSkeleton;
