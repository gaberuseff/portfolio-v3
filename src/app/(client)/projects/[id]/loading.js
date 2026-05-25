export default function Loading() {
  return (
    <div className="w-full space-y-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 animate-pulse">
      
      {/* Header Skeleton Block */}
      <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-border/40 pb-6">
        <div className="space-y-2.5">
          <div className="h-4 w-28 bg-muted/40 rounded" />
          <div className="flex flex-wrap items-center gap-3">
            <div className="h-8 w-64 sm:w-96 bg-muted/50 rounded" />
            <div className="h-6 w-32 bg-muted/45 rounded-full" />
          </div>
          <div className="h-4 w-44 bg-muted/30 rounded" />
        </div>
      </div>

      {/* 2-Column Sidebar Grid Skeleton */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column (Wide) Skeleton */}
        <div className="lg:col-span-2 space-y-6 w-full">
          
          {/* Project Overview (Description) Card Skeleton */}
          <div className="w-full border border-border/60 bg-card/60 backdrop-blur-md rounded-xl p-6 h-[170px] flex flex-col justify-between">
            <div className="flex items-center gap-2 border-b border-border/40 pb-4 w-full">
              <div className="size-5 bg-muted/45 rounded" />
              <div className="h-5 w-32 bg-muted/50 rounded" />
            </div>
            <div className="space-y-2 pt-4 flex-1">
              <div className="h-4 w-full bg-muted/30 rounded" />
              <div className="h-4 w-11/12 bg-muted/30 rounded" />
              <div className="h-4 w-3/4 bg-muted/30 rounded" />
            </div>
          </div>

          {/* Project Milestones Card Skeleton */}
          <div className="w-full border border-border/60 bg-card/60 backdrop-blur-md rounded-xl p-6 h-[350px] flex flex-col justify-between">
            <div className="flex items-center gap-2 border-b border-border/40 pb-4 w-full">
              <div className="size-5 bg-muted/45 rounded" />
              <div className="h-5 w-44 bg-muted/50 rounded" />
            </div>
            
            {/* Stepper Steps Skeleton */}
            <div className="relative py-6 flex justify-between items-center w-full px-6">
              <div className="absolute top-[38px] left-[30px] right-[30px] h-[2px] bg-muted/30" />
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex flex-col items-center space-y-2.5 z-10">
                  <div className="size-8 rounded-full bg-muted/40 border border-border/20" />
                  <div className="h-3.5 w-16 bg-muted/30 rounded" />
                </div>
              ))}
            </div>

            {/* Active Milestone Card Detail Skeleton */}
            <div className="border border-border/40 rounded-xl p-4 space-y-2.5 bg-muted/10 w-full">
              <div className="h-3 w-32 bg-muted/45 rounded" />
              <div className="h-4 w-11/12 bg-muted/30 rounded" />
              <div className="h-3 w-48 bg-muted/30 rounded" />
            </div>
          </div>

        </div>

        {/* Right Column (Sidebar) Skeleton */}
        <div className="lg:col-span-1 space-y-6 w-full">
          
          {/* Completion Status Card Skeleton */}
          <div className="w-full border border-border/60 bg-card/60 backdrop-blur-md rounded-xl p-6 h-[225px] flex flex-col justify-between">
            <div className="flex items-center gap-2 border-b border-border/40 pb-4 w-full">
              <div className="size-4.5 bg-muted/45 rounded" />
              <div className="h-5 w-36 bg-muted/50 rounded" />
            </div>
            <div className="space-y-3 pt-4 flex-1">
              <div className="flex justify-between items-center">
                <div className="h-3.5 w-20 bg-muted/30 rounded" />
                <div className="h-3.5 w-10 bg-muted/40 rounded" />
              </div>
              <div className="h-2 w-full bg-muted/40 rounded-full" />
            </div>
            <div className="border border-border/40 rounded-xl overflow-hidden bg-muted/10 mt-4 w-full">
              <div className="h-10 border-b border-border/30 bg-muted/5" />
              <div className="h-10 bg-muted/5" />
            </div>
          </div>

          {/* Financial Summary Card Skeleton */}
          <div className="w-full border border-border/60 bg-card/60 backdrop-blur-md rounded-xl p-6 h-[295px] flex flex-col justify-between">
            <div className="flex items-center gap-2 border-b border-border/40 pb-4 w-full">
              <div className="size-4.5 bg-muted/45 rounded" />
              <div className="h-5 w-32 bg-muted/50 rounded" />
            </div>
            <div className="pt-4 space-y-4 flex-1">
              <div className="border border-border/40 rounded-xl p-4 bg-muted/10 h-16 flex flex-col justify-center items-center space-y-1.5 w-full">
                <div className="h-3 w-24 bg-muted/35 rounded" />
                <div className="h-5 w-36 bg-muted/50 rounded" />
              </div>
              <div className="grid grid-cols-2 gap-3 w-full">
                <div className="h-12 bg-muted/10 border border-border/40 rounded-xl" />
                <div className="h-12 bg-muted/10 border border-border/40 rounded-xl" />
              </div>
              <div className="space-y-2 pt-2 w-full">
                <div className="h-3 w-20 bg-muted/30 rounded" />
                <div className="h-1.5 w-full bg-muted/40 rounded-full" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
