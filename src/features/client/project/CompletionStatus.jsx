import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Activity, Calendar, CheckCircle2 } from "lucide-react";

export default function CompletionStatus({ project }) {
  const isCompleted = project.progress === 100;

  return (
    <Card className="border border-border/60 bg-card/60 backdrop-blur-md shadow-sm">
      <CardHeader className="border-b border-border/40 pb-4">
        <CardTitle className="text-base font-semibold flex items-center gap-2">
          <Activity className="size-4.5 text-primary" />
          <span>Completion Status</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-5 space-y-4">
        
        {/* Progress Value Info */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs">
            <span className="text-muted-foreground font-medium">Work Completion</span>
            <span className="font-bold text-primary text-sm">{project.progress}%</span>
          </div>
          <Progress 
            value={project.progress} 
            className="h-2 bg-muted/60" 
            indicatorClassName={
              isCompleted ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]" :
              project.progress > 50 ? "bg-primary shadow-[0_0_8px_rgba(var(--primary),0.3)]" :
              "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.3)]"
            }
          />
        </div>

        {/* Start & End Dates Table */}
        <div className="border border-border/40 rounded-xl overflow-hidden text-xs bg-muted/10">
          <div className="flex items-center gap-2.5 p-3 border-b border-border/30">
            <Calendar className="size-4 text-primary/70 shrink-0" />
            <div>
              <span className="block text-[9px] uppercase tracking-wider text-muted-foreground/60 leading-none">Date Started</span>
              <span className="font-semibold text-foreground">{project.startDate}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2.5 p-3">
            {isCompleted ? (
              <>
                <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                <div>
                  <span className="block text-[9px] uppercase tracking-wider text-emerald-600/80 dark:text-emerald-400/80 leading-none">Completed On</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">{project.endDate || project.deadline}</span>
                </div>
              </>
            ) : (
              <>
                <Calendar className="size-4 text-muted-foreground/60 shrink-0" />
                <div>
                  <span className="block text-[9px] uppercase tracking-wider text-muted-foreground/60 leading-none">Expected Delivery</span>
                  <span className="font-semibold text-foreground">{project.deadline}</span>
                </div>
              </>
            )}
          </div>
        </div>

      </CardContent>
    </Card>
  );
}
