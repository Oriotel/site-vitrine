import React from 'react';
<<<<<<< HEAD

const ExploreSectionSkeleton = () => {
  return (
    <div className="py-24 bg-white animate-pulse">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="space-y-6">
            <div className="h-8 w-3/4 bg-gray-100 rounded-xl" />
            <div className="h-20 w-full bg-gray-100 rounded-xl" />
            <div className="flex gap-4">
              <div className="h-10 w-32 bg-gray-100 rounded-full" />
              <div className="h-10 w-32 bg-gray-100 rounded-full" />
            </div>
          </div>
          <div className="h-96 bg-gray-100 rounded-[2rem]" />
        </div>
      </div>
    </div>
  );
};
=======
import Shimmer from '@/components/ui/Shimmer';
import InteractiveStoryGallerySkeleton from './InteractiveStoryGallerySkeleton';

const ExploreSectionSkeleton = () => (
  <section className="py-12 md:py-16 px-4 bg-white relative">
    <div className="mx-auto w-full max-w-[1440px]">
      <div className="bg-white rounded-[2.5rem] p-4 shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Sidebar Skeleton */}
          <aside className="lg:col-span-4 flex flex-col gap-6 p-6 bg-slate-50/50 rounded-[1.5rem] border border-white/50">
            <Shimmer className="h-8 w-3/4 rounded-lg" />
            <Shimmer className="h-20 w-full rounded-xl" />
            <div className="flex flex-wrap gap-2">
              <Shimmer className="h-8 w-24 rounded-md" />
              <Shimmer className="h-8 w-32 rounded-md" />
              <Shimmer className="h-8 w-28 rounded-md" />
            </div>
            <div className="mt-auto pt-6 border-t border-slate-200/50 flex gap-4">
              <Shimmer className="h-10 flex-1 rounded-lg" />
              <Shimmer className="h-10 w-10 rounded-lg" />
            </div>
          </aside>

          {/* Media Skeleton */}
          <main className="lg:col-span-8 relative">
            <InteractiveStoryGallerySkeleton />
          </main>
        </div>
      </div>
    </div>
  </section>
);
>>>>>>> 542a43cf8930394cf6d0d173e32fc8ea4df6f95a

export default ExploreSectionSkeleton;
