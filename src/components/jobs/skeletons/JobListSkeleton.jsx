import React from 'react';
import JobCardSkeleton from './JobCardSkeleton';

const JobListSkeleton = ({ count = 4 }) => {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <JobCardSkeleton key={i} />
      ))}
    </div>
  );
};

export default JobListSkeleton;
