"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

function WorkItem({ work }) {
  const {
    id,
    title = "Untitled Project",
    description = "A beautiful and highly functional web application.",
    image = "/work.webp",
    tech_stack = ["React", "Next.js"]
  } = work;

  return (
    <Link href={`/works/${id}`} className="group block h-full">
      <article className="h-full flex flex-col justify-between space-y-4 transition-all duration-500 ease-out hover:-translate-y-1">
        
        <div className="space-y-4">
          {/* Showcase Image Frame */}
          <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200/30 dark:border-zinc-800/30">
            <Image
              src={image}
              quality={90}
              alt={title}
              fill
              className="object-cover w-full h-full filter brightness-[0.98] dark:brightness-[0.95] transition-transform duration-700 ease-out group-hover:scale-[1.01]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          {/* Details Content */}
          <div className="px-1 space-y-2.5">
            {/* Tech Stack List - quiet & dotted */}
            <div className="text-[9px] font-mono tracking-widest text-muted-foreground/60 uppercase">
              {tech_stack.slice(0, 3).join("   ·   ")}
            </div>

            {/* Title & Desc */}
            <div className="space-y-1.5">
              <h3 className="text-base font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 font-geist leading-snug">
                {title}
              </h3>
              
              <p className="text-xs text-muted-foreground/75 leading-relaxed font-light line-clamp-2">
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* Action Link Footer */}
        <div className="px-1 pt-1 shrink-0">
          <div className="flex items-center gap-2 text-[10px] font-semibold tracking-wider uppercase text-foreground">
            <span>Explore Project</span>
            <FaArrowRight className="size-2.5 text-muted-foreground/60 group-hover:text-primary transition-transform group-hover:translate-x-0.5 duration-300" />
          </div>
        </div>

      </article>
    </Link>
  );
}

export default WorkItem;
