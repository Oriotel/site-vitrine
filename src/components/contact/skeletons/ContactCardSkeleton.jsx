import React from 'react';

const ContactCardSkeleton = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 h-full">
      {/* Icon Skeleton */}
      <div className="p-3 bg-gray-100 rounded-lg w-12 h-12 animate-pulse" />
      
      <div className="flex-1 space-y-3">
        {/* Title Skeleton */}
        <div className="h-4 w-20 bg-gray-200 animate-pulse rounded-md" />
        
        {/* Value Skeleton */}
        <div className="h-6 w-3/4 bg-gray-200 animate-pulse rounded-md" />
        
        {/* Subtext Skeleton */}
        <div className="h-4 w-1/2 bg-gray-200 animate-pulse rounded-md" />
      </div>
    </div>
  );
};

export default ContactCardSkeleton;
