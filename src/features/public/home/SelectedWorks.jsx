import React from "react";
import WorkItem from "@/features/public/works/WorkItem";
import { getWorks } from "@/services/apiWorks";
import SectionWrapper from "@/components/ui/SectionWrapper";

async function SelectedWorks() {
  const works = await getWorks();
  const featuredWorks = works.slice(0, 3);

  return (
    <SectionWrapper hasBorder={true} py="default">
      <div className="space-y-12">
        
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
    </SectionWrapper>
  );
}

export default SelectedWorks;
