import ProjectsList from "@/features/client/projects/ProjectsList";
import {Suspense} from "react";

export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Your Projects</h1>

      <Suspense fallback={<div>Loading...</div>}>
        <ProjectsList />
      </Suspense>
    </div>
  );
}
