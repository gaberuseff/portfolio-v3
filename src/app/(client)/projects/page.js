import { ProjectsList } from "@/features/client/projects";
import { FolderClosed } from "lucide-react";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getClientProjects } from "@/services/apiProjects";

export const dynamic = "force-dynamic";

export default async function Page() {
  const session = await auth();
  if (!session?.user?.id) {
    redirect("/login");
  }

  // 2. Fetch projects using Next.js unstable_cache
  const projects = await getClientProjects(session.user.id);

  const mappedProjects = projects.map((p) => {
    const total = Number(p.totalAmount) || 0;

    return {
      id: p.id,
      title: p.title,
      progress: p.progress ?? 0,
      statusLabel: p.statusLabel || "In Active Development",
      lastUpdated: p.lastUpdated || "Just now",
      total_amount: total,
      currency: p.currency || "EGP",
    };
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <FolderClosed className="size-6 text-primary" />
        <h1 className="text-2xl font-bold">Your Projects</h1>
      </div>
      <ProjectsList projects={mappedProjects} />
    </div>
  );
}
