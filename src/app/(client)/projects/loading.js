import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { LuFolderClosed } from "react-icons/lu";

export default function Loading() {
  return (
    <div className="space-y-6 animate-pulse w-full">
      {/* Header Skeleton Block */}
      <div className="flex items-center gap-3 border-b border-border/40 pb-4">
        <LuFolderClosed className="size-6 text-muted/40 shrink-0" />
        <div className="h-8 w-48 bg-muted/40 rounded" />
      </div>

      {/* Symmetrical Grid of Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {[1, 2, 3].map((i) => (
          <Card
            key={i}
            className="w-full p-5 space-y-5 border border-border/60 bg-card hover:shadow-sm transition-all duration-300 h-full min-h-[250px] flex flex-col justify-between"
          >
            <div className="space-y-3">
              <Skeleton className="h-5 w-3/4 rounded bg-muted/40" />
              <Skeleton className="h-4 w-1/3 rounded bg-muted/30" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <Skeleton className="h-3 w-1/5 rounded bg-muted/35" />
                <Skeleton className="h-3 w-10 rounded bg-muted/35" />
              </div>
              <Skeleton className="h-2 w-full rounded-full bg-muted/30" />
            </div>
            <div className="pt-2">
              <Skeleton className="h-9 w-full rounded-lg bg-muted/40" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
