import React from 'react';
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

export default ExploreSectionSkeleton;
