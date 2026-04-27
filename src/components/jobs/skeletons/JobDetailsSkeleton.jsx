import React from 'react';

const JobDetailsSkeleton = () => {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Header Skeleton */}
      <div className="p-8 md:p-10 border-b border-gray-100 space-y-6">
        <div className="h-6 w-24 bg-gray-100 animate-pulse rounded-full" />
        <div className="h-10 w-3/4 bg-gray-200 animate-pulse rounded-md" />
        
        <div className="flex flex-wrap items-center gap-6">
          <div className="h-5 w-32 bg-gray-100 animate-pulse rounded-md" />
          <div className="h-5 w-32 bg-gray-100 animate-pulse rounded-md" />
          <div className="h-5 w-32 bg-gray-100 animate-pulse rounded-md" />
        </div>

        <div className="flex gap-4">
          <div className="h-12 w-48 bg-gray-200 animate-pulse rounded-xl" />
          <div className="h-12 w-12 bg-gray-100 animate-pulse rounded-xl" />
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="p-8 md:p-10 space-y-10 bg-gray-50/30">
        <div className="space-y-4">
          <div className="h-6 w-40 bg-gray-200 animate-pulse rounded-md" />
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-100 animate-pulse rounded-md" />
            <div className="h-4 w-11/12 bg-gray-100 animate-pulse rounded-md" />
            <div className="h-4 w-4/5 bg-gray-100 animate-pulse rounded-md" />
          </div>
        </div>

        <div className="space-y-4">
          <div className="h-6 w-48 bg-gray-200 animate-pulse rounded-md" />
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex gap-3">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-gray-200 shrink-0" />
                <div className="h-4 w-full bg-gray-100 animate-pulse rounded-md" />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="h-6 w-44 bg-gray-200 animate-pulse rounded-md" />
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-9 w-24 bg-white border border-gray-200 animate-pulse rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsSkeleton;
