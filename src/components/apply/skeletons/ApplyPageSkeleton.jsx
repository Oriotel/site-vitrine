import React from 'react';
import InfoCardSkeleton from './InfoCardSkeleton';
import ApplyFormSkeleton from './ApplyFormSkeleton';

const ApplyPageSkeleton = () => {
  return (
    <div className="bg-cloud-white min-h-screen pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="h-8 w-32 bg-gray-200 animate-pulse rounded-full" />
              <div className="space-y-2">
                <div className="h-12 md:h-16 w-3/4 bg-gray-200 animate-pulse rounded-2xl" />
                <div className="h-12 md:h-16 w-1/2 bg-gray-200 animate-pulse rounded-2xl" />
              </div>
              <div className="h-5 w-5/6 bg-gray-100 animate-pulse rounded-lg" />
            </div>

            <div className="relative rounded-3xl bg-gray-200 animate-pulse aspect-[4/3] w-full" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InfoCardSkeleton />
              <InfoCardSkeleton />
            </div>
          </div>

          <ApplyFormSkeleton />
        </div>
      </div>
    </div>
  );
};

export default ApplyPageSkeleton;
