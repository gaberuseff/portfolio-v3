import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { FaStar, FaCircleCheck, FaChartLine } from "react-icons/fa6";

const milestonePhases = [
  { label: "Planning" },
  { label: "Development" },
  { label: "QA & Testing" },
  { label: "Deployment" }
];

export default function ProjectMilestones({ project }) {
  const level = project.milestoneLevel ?? 1;
  const totalSteps = milestonePhases.length;
  const activeLevel = Math.max(1, Math.min(level, totalSteps));
  const percentage = ((activeLevel - 1) / (totalSteps - 1)) * 100;

  return (
    <Card className="border border-border/60 bg-card/60 backdrop-blur-md shadow-sm">
      <CardHeader className="border-b border-border/40 pb-4">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <FaStar className="size-4 text-primary" />
          <span>Roadmap & Milestones</span>
        </CardTitle>
        <CardDescription>Visual tracker of milestones and delivery phases.</CardDescription>
      </CardHeader>
      <CardContent className="pt-5 space-y-6">
        
        <div className="relative pt-2 pb-6">
          <div className="absolute top-[26px] left-[15px] right-[15px] h-[2px] bg-muted dark:bg-muted/30 -z-10" />
          
          <div 
            className="absolute top-[26px] left-[15px] h-[2px] bg-primary transition-all duration-500 -z-10" 
            style={{ width: percentage > 0 ? `calc(${percentage}% - 30px)` : "0px" }}
          />

          <div className="flex justify-between items-start">
            {milestonePhases.map((phase, idx) => {
              const isPassed = level > (idx + 1);
              const isActive = level === (idx + 1);
              
              return (
                <div key={phase.label} className="flex flex-col items-center text-center space-y-2 z-10">
                  <div className={`size-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    isPassed 
                      ? "bg-primary border-primary text-primary-foreground shadow-[0_0_8px_rgba(16,185,129,0.3)]" 
                      : isActive 
                      ? "bg-background border-primary text-primary ring-2 ring-primary/20 animate-pulse" 
                      : "bg-background border-border text-muted-foreground"
                  }`}>
                    {isPassed ? (
                      <FaCircleCheck className="size-4 shrink-0" />
                    ) : (
                      <span className="text-xs font-bold font-mono">{idx + 1}</span>
                    )}
                  </div>
                  <div className="space-y-0.5 max-w-[80px] sm:max-w-[110px]">
                    <span className={`block text-xs font-semibold ${isPassed || isActive ? "text-foreground" : "text-muted-foreground"}`}>
                      {phase.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-primary/[0.03] dark:bg-primary/[0.01] border border-primary/10 rounded-xl p-4 space-y-2.5">
          <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
            <FaStar className="size-3.5 shrink-0" />
            <span>Current Focus & Active Task</span>
          </div>
          <p className="text-sm text-foreground/90 font-medium leading-relaxed">
            {project.currentMilestone}
          </p>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground pt-1 border-t border-primary/5">
            <FaChartLine className="size-3.5 text-primary/60 shrink-0" />
            <span>The project is actively advancing through this phase.</span>
          </div>
        </div>

      </CardContent>
    </Card>
  );
}
