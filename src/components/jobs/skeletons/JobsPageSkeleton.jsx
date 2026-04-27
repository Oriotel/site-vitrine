import React from 'react';
import ProcessSectionSkeleton from './ProcessSectionSkeleton';
import WhyJoinUsSkeleton from './WhyJoinUsSkeleton';
import JobListSkeleton from './JobListSkeleton';
import JobDetailsSkeleton from './JobDetailsSkeleton';

const JobsPageSkeleton = () => {
  return (
    <div className="min-h-screen bg-cloud-white pt-20">
      {/* Header Skeleton */}
      <div className="bg-white border-b border-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-4">
          <div className="h-12 md:h-16 w-3/4 bg-gray-200 animate-pulse rounded-2xl mx-auto" />
          <div className="h-5 w-3/4 bg-gray-100 animate-pulse rounded-lg mx-auto" />
        </div>
      </div>

      <ProcessSectionSkeleton />
      
      {/* Jobs Section Skeleton */}
      <section className="py-20 bg-gray-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 space-y-4">
            <div className="h-10 w-64 bg-gray-200 animate-pulse rounded-xl" />
            <div className="h-5 w-2/3 bg-gray-100 animate-pulse rounded-lg" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5 h-[600px] overflow-hidden pr-2">
              <JobListSkeleton />
            </div>
            <div className="lg:col-span-7">
              <JobDetailsSkeleton />
            </div>
          </div>
        </div>
      </section>
      
      <WhyJoinUsSkeleton />
    </div>
  );
};

export default JobsPageSkeleton;
