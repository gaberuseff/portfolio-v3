import WorksList from "@/features/public/works/WorksList"
import WorksSkeleton from "@/features/public/works/WorksSkeleton"
import { Suspense } from "react"

function page() {
    return (
        <div className="p-12 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold font-geist text-foreground">
                Works
            </h1>

            <Suspense fallback={<WorksSkeleton />}>
                <WorksList />
            </Suspense>
        </div>
    )
}

export default page
