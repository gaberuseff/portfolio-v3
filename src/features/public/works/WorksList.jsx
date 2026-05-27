import { getWorks } from "@/services/apiWorks";
import WorkItem from "./WorkItem";

async function WorksList() {
  const works = await getWorks();

  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {works.map((work) => (
          <WorkItem key={work.id} work={work} />
        ))}
      </div>
    </div>
  );
}

export default WorksList;
