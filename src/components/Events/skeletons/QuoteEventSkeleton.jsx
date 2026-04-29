import React from 'react';

const QuoteEventSkeleton = () => {
  return (
    <div className="relative py-24 px-6 bg-white animate-pulse">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="h-10 w-10 bg-gray-100 rounded-full mx-auto" />
        <div className="h-8 w-3/4 bg-gray-100 rounded-lg mx-auto" />
        <div className="h-4 w-1/4 bg-gray-100 rounded-full mx-auto mt-8" />
      </div>
    </div>
  );
};

export default QuoteEventSkeleton;
