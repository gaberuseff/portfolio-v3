import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Globe, ArrowRight } from "lucide-react";
import FigmaIcon from "./FigmaIcon";

export default function ProjectDeliverables({ project }) {
  if (!project.figmaUrl && !project.liveUrl) return null;

  return (
    <Card className="border border-border/60 bg-card/60 backdrop-blur-md shadow-sm">
      <CardHeader className="border-b border-border/40 pb-4">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Globe className="size-5 text-primary" />
          <span>Shared Project Deliverables</span>
        </CardTitle>
        <CardDescription>Live deliverables, mockups, and client asset portals.</CardDescription>
      </CardHeader>
      <CardContent className="pt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Figma Card */}
          {project.figmaUrl && (
            <div className="group/del border border-border/50 rounded-xl p-4 bg-muted/10 hover:bg-muted/20 hover:border-primary/20 transition-all duration-300 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="bg-[#F24E1E]/10 p-2 rounded-lg border border-[#F24E1E]/10 text-[#F24E1E] shrink-0">
                    <FigmaIcon className="size-6" />
                  </div>
                  <span className="text-[10px] font-bold text-[#F24E1E] uppercase tracking-wider bg-[#F24E1E]/10 px-2 py-0.5 rounded">Design Spec</span>
                </div>
                <h4 className="font-semibold text-sm text-foreground">Interactive Figma Prototypes</h4>
                <p className="text-xs text-muted-foreground leading-normal">
                  Review design layouts, typography patterns, wireframe specs, and components live.
                </p>
              </div>
              <Button variant="outline" className="w-full text-xs font-semibold cursor-pointer group-hover/del:bg-primary group-hover/del:text-primary-foreground group-hover/del:border-primary transition-all gap-1.5" asChild>
                <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer">
                  <span>Open Figma designs</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover/del:translate-x-1" />
                </a>
              </Button>
            </div>
          )}

          {/* Live Website Card */}
          {project.liveUrl && (
            <div className="group/del border border-border/50 rounded-xl p-4 bg-muted/10 hover:bg-muted/20 hover:border-primary/20 transition-all duration-300 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/10 text-emerald-500 shrink-0">
                    <Globe className="size-6" />
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded">Production</span>
                </div>
                <h4 className="font-semibold text-sm text-foreground">Live Staging Environment</h4>
                <p className="text-xs text-muted-foreground leading-normal">
                  Access the deployed application live to test responsive flows and test-bed features.
                </p>
              </div>
              <Button variant="outline" className="w-full text-xs font-semibold cursor-pointer group-hover/del:bg-primary group-hover/del:text-primary-foreground group-hover/del:border-primary transition-all gap-1.5" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <span>Visit Live Website</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover/del:translate-x-1" />
                </a>
              </Button>
            </div>
          )}

        </div>
      </CardContent>
    </Card>
  );
}
