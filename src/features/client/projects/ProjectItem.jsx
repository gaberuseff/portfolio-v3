import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { formatCurrency } from "@/lib/helpers";
import Link from "next/link";

function ProjectItem({project}) {
  return (
    <Card className="w-full p-4">
      <p className="text-sm sm:text-base font-semibold">{project.title}</p>

      <div className="mt-4 flex items-center gap-2">
        <Progress value={project.progress} />
        <span className="text-xs">{project.progress}%</span>
      </div>

      <p className="mt-2 text-sm text-muted-foreground">
        Status: {project.statusLabel}
      </p>

      <div className="flex items-center gap-2 mt-2">
        <span className="text-sm">Total:</span>
        <span className="text-sm font-medium text-green-600">{formatCurrency(project.total_amount, project.currency)}</span>
      </div>

      <div className="w-full mt-4">
        <Button variant="outline" className="w-full" asChild>
          <Link href={project.id} rel="noopener noreferrer">
            View Details
          </Link>
        </Button>
      </div>
    </Card>
  );
}

export default ProjectItem;
