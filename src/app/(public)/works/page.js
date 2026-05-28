import WorksList from "@/features/public/works/WorksList"
import WorksSkeleton from "@/features/public/works/WorksSkeleton"
import SectionWrapper from "@/components/ui/SectionWrapper"
import { Suspense } from "react"

export const metadata = {
  title: "Works & Case Studies",
  description: "Explore the curated gallery of professional front-end architecture and full-stack applications built using Next.js, React, Supabase, and Prisma by Gaber Usef.",
  alternates: {
    canonical: "/works",
  },
  openGraph: {
    title: "Works & Case Studies | Gaber Usef",
    description: "Explore the curated gallery of professional front-end architecture and full-stack applications built using Next.js, React, Supabase, and Prisma.",
    url: "https://gaberuseff.info/works",
  },
  twitter: {
    title: "Works & Case Studies | Gaber Usef",
    description: "Explore the curated gallery of professional front-end architecture and full-stack applications built using Next.js, React, Supabase, and Prisma.",
  }
};

function page() {
    return (
        <SectionWrapper isPage maxWidth="6xl" py="default">
            <h1 className="text-4xl font-bold font-geist text-foreground">
                Works
            </h1>

            <Suspense fallback={<WorksSkeleton />}>
                <WorksList />
            </Suspense>
        </SectionWrapper>
    )
}

export default page
