import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { FaCompass } from "react-icons/fa6";

export default function ProjectOverview({ project }) {
  return (
    <Card className="border border-border/60 bg-card/60 backdrop-blur-md shadow-sm">
      <CardHeader className="border-b border-border/40 pb-4">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <FaCompass className="size-4 text-primary" />
          <span>Project Description</span>
        </CardTitle>
        <CardDescription>Comprehensive overview detailing scope and objectives.</CardDescription>
      </CardHeader>
      <CardContent className="pt-5">
        <p className="text-sm text-muted-foreground leading-relaxed font-light">
          {project.description}
        </p>
      </CardContent>
    </Card>
  );
}
