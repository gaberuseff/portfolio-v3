import { FolderOpen } from "lucide-react";
import ProjectItem from "./ProjectItem";

function ProjectsList({ projects }) {
  if (!projects || projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center border border-dashed border-border rounded-2xl bg-muted/5 space-y-4 max-w-lg mx-auto my-6">
        <div className="p-4 rounded-full bg-muted text-muted-foreground shrink-0">
          <FolderOpen className="size-8" />
        </div>
        <div className="space-y-1.5">
          <h3 className="text-lg font-semibold">No Projects Found</h3>
          <p className="text-sm text-muted-foreground">
            You do not have any active projects linked to your account at this time. If this is unexpected, please contact support.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsList;