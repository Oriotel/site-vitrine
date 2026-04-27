import React from 'react';

const ContactFormSkeleton = () => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-8">
      {/* Grid for Name and Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name Field Skeleton */}
        <div className="space-y-3">
          <div className="h-4 w-24 bg-gray-200 animate-pulse rounded-md ml-1" />
          <div className="h-12 w-full bg-gray-100 animate-pulse rounded-xl" />
        </div>
        {/* Email Field Skeleton */}
        <div className="space-y-3">
          <div className="h-4 w-32 bg-gray-200 animate-pulse rounded-md ml-1" />
          <div className="h-12 w-full bg-gray-100 animate-pulse rounded-xl" />
        </div>
      </div>

      {/* Department Selection Skeleton */}
      <div className="space-y-3">
        <div className="h-4 w-40 bg-gray-200 animate-pulse rounded-md ml-1" />
        <div className="h-12 w-full bg-gray-100 animate-pulse rounded-xl" />
      </div>

      {/* Message Textarea Skeleton */}
      <div className="space-y-3">
        <div className="h-4 w-28 bg-gray-200 animate-pulse rounded-md ml-1" />
        <div className="h-32 w-full bg-gray-100 animate-pulse rounded-xl" />
      </div>

      {/* Button Skeleton */}
      <div className="h-12 w-full bg-gray-200 animate-pulse rounded-xl" />

      {/* Response Time Text Skeleton */}
      <div className="flex justify-center">
        <div className="h-3 w-48 bg-gray-100 animate-pulse rounded-md" />
      </div>
    </div>
  );
};

export default ContactFormSkeleton;
