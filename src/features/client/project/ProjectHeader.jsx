import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

const statusConfig = {
  "In Active Development": {
    color: "bg-blue-500/10 text-blue-600 border-blue-200/50 dark:border-blue-500/20 dark:text-blue-400",
    dotColor: "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]",
    pulse: "animate-pulse"
  },
  "Testing & QA Review": {
    color: "bg-amber-500/10 text-amber-600 border-amber-200/50 dark:border-amber-500/20 dark:text-amber-400",
    dotColor: "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]",
    pulse: "animate-pulse"
  },
  "Completed & Deployed": {
    color: "bg-emerald-500/10 text-emerald-600 border-emerald-200/50 dark:border-emerald-500/20 dark:text-emerald-400",
    dotColor: "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]",
    pulse: ""
  },
  "Planning & Requirements Gathering": {
    color: "bg-purple-500/10 text-purple-600 border-purple-200/50 dark:border-purple-500/20 dark:text-purple-400",
    dotColor: "bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.5)]",
    pulse: "animate-pulse"
  }
};

const defaultStatus = {
  color: "bg-muted text-muted-foreground border-border",
  dotColor: "bg-muted-foreground",
  pulse: ""
};

export default function ProjectHeader({ project }) {
  const status = statusConfig[project.statusLabel] || defaultStatus;

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-border/40 pb-6">
      <div className="space-y-2">
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors group cursor-pointer"
        >
          <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />
          <span>Back to Projects list</span>
        </Link>
        
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-2xl sm:text-3xl font-bold font-heading tracking-tight text-foreground">
            {project.title}
          </h1>
          
          {/* Status Badge */}
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border shrink-0 ${status.color}`}>
            <span className="relative flex h-2 w-2">
              {status.pulse && (
                <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${status.dotColor} ${status.pulse}`} />
              )}
              <span className={`relative inline-flex rounded-full h-2 w-2 ${status.dotColor}`} />
            </span>
            {project.statusLabel}
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Clock className="size-3.5 shrink-0 text-primary/60" />
            Updated {project.lastUpdated}
          </span>
          <span className="h-3 w-px bg-border/40" />
          <span>ID: <code className="bg-muted px-1.5 py-0.5 rounded font-mono text-[10px]">{project.id}</code></span>
        </div>
      </div>
    </div>
  );
}
