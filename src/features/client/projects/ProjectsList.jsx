import ProjectItem from "./ProjectItem";
import {MOCK_PROJECTS} from "./projectsData";

function ProjectsList() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_PROJECTS.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsList;
