import WorksList from "@/features/public/works/WorksList"
import WorksSkeleton from "@/features/public/works/WorksSkeleton"
import SectionWrapper from "@/components/ui/SectionWrapper"
import { Suspense } from "react"

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
