import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import {
  CompletionStatus,
  FinancialSummary,
  ProjectDeliverables,
  ProjectHeader,
  ProjectMilestones,
  ProjectOverview
} from "@/features/client/project";
import NotFound from "@/features/client/project/NotFound";
import { formatDate } from "@/lib/helpers";
import { getClientProject } from "@/services/apiProjects";

export const dynamic = "force-dynamic";

export default async function Page({ params }) {
  const { id } = await params;

  const session = await auth();
  if (!session?.user?.id) {
    redirect("/login");
  }

  const p = await getClientProject(id, session.user.id);

  if (!p) {
    return (
      <NotFound />
    );
  }

  const total = p.totalAmount || 0;
  const paid = p.paidAmount || 0;
  const remaining = Math.max(0, total - paid);

  const project = {
    id: p.id,
    title: p.title,
    description: p.description,
    progress: p.progress ?? 0,
    milestoneLevel: p.milestoneLevel ?? 1,
    statusLabel: p.statusLabel || "In Active Development",
    startDate: formatDate(p.startDate),
    deadline: formatDate(p.deadline),
    endDate: formatDate(p.endDate),
    liveUrl: p.liveUrl,
    figmaUrl: p.figmaUrl,
    currentMilestone: p.currentMilestone,
    lastUpdated: p.lastUpdated || "Just now",
    total_amount: String(total),
    paid_amount: String(paid),
    remaining_amount: String(remaining),
    currency: p.currency || "EGP",
  };

  const hasDeliverables = !!(project.figmaUrl || project.liveUrl);

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <ProjectHeader project={project} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <ProjectOverview project={project} />
          <ProjectMilestones project={project} />
          {hasDeliverables && <ProjectDeliverables project={project} />}
        </div>

        <div className="lg:col-span-1 space-y-6">
          <CompletionStatus project={project} />
          <FinancialSummary project={project} />
        </div>
      </div>
    </div>
  );
}
