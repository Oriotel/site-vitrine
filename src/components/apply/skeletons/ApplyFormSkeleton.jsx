import React from 'react';

const ApplyFormSkeleton = () => {
  return (
    <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 space-y-8">
      <div className="space-y-2">
        <div className="h-8 w-48 bg-gray-200 animate-pulse rounded-lg" />
        <div className="h-4 w-64 bg-gray-100 animate-pulse rounded-md" />
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="h-4 w-20 bg-gray-100 animate-pulse rounded ml-1" />
            <div className="h-12 w-full bg-gray-50 animate-pulse rounded-xl" />
          </div>
          <div className="space-y-2">
            <div className="h-4 w-20 bg-gray-100 animate-pulse rounded ml-1" />
            <div className="h-12 w-full bg-gray-50 animate-pulse rounded-xl" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="h-4 w-32 bg-gray-100 animate-pulse rounded ml-1" />
            <div className="h-12 w-full bg-gray-50 animate-pulse rounded-xl" />
          </div>
          <div className="space-y-2">
            <div className="h-4 w-24 bg-gray-100 animate-pulse rounded ml-1" />
            <div className="h-12 w-full bg-gray-50 animate-pulse rounded-xl" />
          </div>
        </div>

        <div className="space-y-2">
          <div className="h-4 w-28 bg-gray-100 animate-pulse rounded ml-1" />
          <div className="h-12 w-full bg-gray-50 animate-pulse rounded-xl" />
        </div>

        <div className="space-y-2">
          <div className="h-4 w-32 bg-gray-100 animate-pulse rounded ml-1" />
          <div className="h-32 w-full bg-gray-50 animate-pulse rounded-xl" />
        </div>

        {/* Upload CV Skeleton */}
        <div className="h-24 w-full bg-gray-50 border-2 border-dashed border-gray-200 animate-pulse rounded-2xl" />

        <div className="h-14 w-full bg-gray-200 animate-pulse rounded-xl" />
      </div>
    </div>
  );
};

export default ApplyFormSkeleton;
