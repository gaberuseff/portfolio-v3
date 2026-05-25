import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { formatCurrency } from "@/lib/helpers";
import Link from "next/link";
import { 
  Clock, 
  Activity, 
  ArrowRight, 
  Wallet 
} from "lucide-react";

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

function ProjectItem({ project }) {
  const status = statusConfig[project.statusLabel] || defaultStatus;
  const isCompleted = project.progress === 100;

  return (
    <Card className="group/project-card w-full p-0 flex flex-col justify-between border border-border/60 bg-card h-full min-h-[250px]">
      {/* Premium Top Indicator Bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover/project-card:opacity-100 transition-opacity duration-500" />

      {/* Header Block */}
      <div className="flex items-start justify-between gap-3 p-5 pb-3">
        <div className="space-y-1 min-w-0 flex-1">
          <h3 
            className="font-heading font-semibold text-base text-foreground leading-tight tracking-tight group-hover/project-card:text-primary transition-colors duration-200 line-clamp-1" 
            title={project.title}
          >
            {project.title}
          </h3>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="size-3.5 shrink-0" />
            <span>Updated {project.lastUpdated}</span>
          </div>
        </div>

        {/* Status Badge */}
        <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold border shrink-0 ${status.color}`}>
          <span className="relative flex h-1.5 w-1.5">
            {status.pulse && (
              <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${status.dotColor} ${status.pulse}`} />
            )}
            <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${status.dotColor}`} />
          </span>
          {project.statusLabel}
        </span>
      </div>

      {/* Body Content */}
      <div className="px-5 pb-4 space-y-4 flex-grow flex flex-col justify-between">
        {/* Progress Section */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs">
            <span className="font-medium text-foreground/80 flex items-center gap-1">
              <Activity className="size-3.5 text-primary shrink-0" />
              <span>Progress</span>
            </span>
            <span className="font-bold text-primary">{project.progress}%</span>
          </div>
          
          <Progress 
            value={project.progress} 
            className="h-1.5 bg-muted/60" 
            indicatorClassName={
              isCompleted ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]" :
              project.progress > 50 ? "bg-primary shadow-[0_0_8px_rgba(var(--primary),0.3)]" :
              "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.3)]"
            }
          />
        </div>

        {/* Financial Info */}
        <div className="flex items-center justify-between text-xs py-1.5 px-2.5 rounded-lg border border-border/40 bg-muted/10">
          <span className="text-muted-foreground flex items-center gap-1 font-semibold uppercase tracking-wider text-[10px]">
            <Wallet className="size-3.5 text-primary/70 shrink-0" />
            <span>Total Value</span>
          </span>
          <span className="font-bold text-foreground text-sm">
            {formatCurrency(project.total_amount, project.currency)}
          </span>
        </div>
      </div>

      {/* Footer Block */}
      <div className="p-5 pt-0 mt-auto border-t border-border/30 bg-muted/5">
        <Button variant="outline" className="w-full h-9 group-hover/project-card:bg-primary group-hover/project-card:text-primary-foreground group-hover/project-card:border-primary transition-all duration-300 gap-1.5 cursor-pointer mt-4" asChild>
          <Link href={`/projects/${project.id}`}>
            <span>View Project Dashboard</span>
            <ArrowRight className="size-3.5 transition-transform duration-300 group-hover/project-card:translate-x-1" />
          </Link>
        </Button>
      </div>
    </Card>
  );
}

export default ProjectItem;
