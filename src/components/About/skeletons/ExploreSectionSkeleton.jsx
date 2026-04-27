import React from 'react';
import Shimmer from '@/components/ui/Shimmer';
import SkeletonSection from '@/components/ui/SkeletonSection';
import InteractiveStoryGallerySkeleton from './InteractiveStoryGallerySkeleton';

/**
 * ExploreSectionSkeleton
 * Skeleton for the main ExploreSection on the About page.
 */
const ExploreSectionSkeleton = () => (
  <SkeletonSection delay={80}>
    <section className="section-padding bg-white overflow-x-hidden">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2rem] p-3 lg:p-4 shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Sidebar Skeleton */}
            <aside className="lg:col-span-4 p-4 sm:p-5 md:p-6 bg-slate-50/50 rounded-[1.5rem] border border-white/50 flex flex-col gap-6">
              <Shimmer className="h-8 w-3/4 rounded-xl" />
              <div className="space-y-3">
                <Shimmer className="h-4 w-full rounded-md" />
                <Shimmer className="h-4 w-11/12 rounded-md" />
                <Shimmer className="h-4 w-5/6 rounded-md" />
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Shimmer key={i} className="h-8 w-24 rounded-lg" />
                ))}
              </div>
              <div className="flex gap-3 mt-auto pt-4 border-t border-slate-200/50">
                <Shimmer className="h-11 flex-1 rounded-xl" />
                <Shimmer className="h-11 w-11 rounded-xl flex-shrink-0" />
              </div>
            </aside>

            {/* Gallery Skeleton Area */}
            <main className="lg:col-span-8">
              <InteractiveStoryGallerySkeleton />
            </main>
          </div>
        </div>
      </div>
    </section>
  </SkeletonSection>
);

export default ExploreSectionSkeleton;
