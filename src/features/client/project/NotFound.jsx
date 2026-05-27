import { Button } from "@/components/ui/button"
import { LuCircleAlert, LuArrowLeft } from "react-icons/lu"
import Link from "next/link"

function NotFound() {
    return (
       <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 space-y-4">
        <LuCircleAlert className="size-16 text-destructive animate-bounce" />
        <h2 className="text-2xl font-bold tracking-tight">Project Not Found</h2>
        <p className="text-muted-foreground max-w-sm">
          We couldn&apos;t find a project with This ID. Please double-check your link or contact support.
        </p>
        <Button asChild>
          <Link href="/projects" className="gap-2 cursor-pointer">
            <LuArrowLeft className="size-4" />
            Back to Projects
          </Link>
        </Button>
      </div>
    )
}

export default NotFound
