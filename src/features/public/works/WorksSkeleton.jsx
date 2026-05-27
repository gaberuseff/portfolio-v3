"use client";

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

function WorkItemSkeleton() {
  return (
    <div className="p-3 rounded-[2rem] bg-zinc-50/30 dark:bg-zinc-900/10 border border-zinc-200/50 dark:border-zinc-800/50 flex flex-col justify-between h-full">
      <div className="space-y-4">
        <Skeleton className="relative aspect-[16/10] w-full rounded-2xl bg-zinc-200/60 dark:bg-zinc-800/50" />

        <div className="px-2 space-y-3">
          <div className="flex gap-2">
            <Skeleton className="h-3 w-12 bg-zinc-200/50 dark:bg-zinc-800/40 rounded" />
            <Skeleton className="h-3 w-16 bg-zinc-200/50 dark:bg-zinc-800/40 rounded" />
          </div>

          <div className="space-y-2">
            <Skeleton className="h-5 w-3/4 bg-zinc-200/70 dark:bg-zinc-800/60 rounded-md" />
            
            <div className="space-y-1.5 pt-1">
              <Skeleton className="h-3.5 w-full bg-zinc-200/50 dark:bg-zinc-800/40 rounded" />
              <Skeleton className="h-3.5 w-5/6 bg-zinc-200/50 dark:bg-zinc-800/40 rounded" />
            </div>
          </div>
        </div>
      </div>

      <div className="px-2 pt-5 pb-1 mt-auto">
        <Skeleton className="h-[1px] w-full bg-zinc-200/50 dark:bg-zinc-800/40 mb-3.5" />
        <div className="flex items-center justify-between">
          <Skeleton className="h-4 w-24 bg-zinc-200/60 dark:bg-zinc-800/50 rounded-md" />
          <Skeleton className="size-6 bg-zinc-200/60 dark:bg-zinc-800/50 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function WorksSkeleton() {
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((n) => (
          <WorkItemSkeleton key={n} />
        ))}
      </div>
    </div>
  );
}

export default WorksSkeleton;
