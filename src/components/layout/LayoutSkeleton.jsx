import Shimmer from '@/components/ui/Shimmer';

export const HeaderSkeleton = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 px-6 lg:px-10">
    <nav className="flex w-full items-center justify-between">
      <Shimmer className="h-8 w-32 rounded-lg" />
      <div className="hidden lg:flex gap-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Shimmer key={i} className="h-4 w-20 rounded-md" />
        ))}
      </div>
      <Shimmer className="h-10 w-36 rounded-full" />
    </nav>
  </header>
);

export const FooterSkeleton = () => (
  <footer className="w-full bg-[#020C1A] py-16 border-t border-white/10">
    <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col gap-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-4">
            <Shimmer className="h-5 w-32 bg-slate-800" />
            <div className="flex flex-col gap-2">
              <Shimmer className="h-4 w-full bg-slate-800" />
              <Shimmer className="h-4 w-3/4 bg-slate-800" />
              <Shimmer className="h-4 w-1/2 bg-slate-800" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 pt-12">
        <Shimmer className="h-10 w-40 bg-slate-800" />
        <Shimmer className="h-4 w-64 bg-slate-800" />
      </div>
    </div>
  </footer>
);
