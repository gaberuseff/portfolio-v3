import React from "react";
import WorkItem from "@/features/public/works/WorkItem";
import { getWorks } from "@/services/apiWorks";

async function SelectedWorks() {
  const works = await getWorks();
  const featuredWorks = works.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-24 border-t border-zinc-100 dark:border-zinc-900/40 font-inter antialiased">
      <div className="mx-auto w-[90%] max-w-6xl px-4 space-y-12">
        
        <div className="space-y-4">
          <div className="text-[10px] font-mono tracking-widest text-muted-foreground/60 uppercase">
            Showcase   ·   Featured Creations
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground font-geist leading-tight">
            Selected Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredWorks.map((work) => (
            <WorkItem key={work.id} work={work} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default SelectedWorks;
