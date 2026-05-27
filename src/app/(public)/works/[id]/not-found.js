import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa6"

function NotFound() {
    return (
        <div className="min-h-[50vh] flex flex-col justify-center items-start max-w-lg mx-auto py-24 px-6 font-inter antialiased animate-in fade-in duration-700">
            <span className="text-[10px] font-mono tracking-widest text-muted-foreground/60 uppercase mb-4">
                Error 404
            </span>
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-4 font-geist">
                Project Not Found
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground/80 leading-relaxed font-light mb-8">
                The project you are looking for does not exist or has been moved. Explore our active works instead.
            </p>
            <Link 
                href="/works" 
                className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 group"
            >
                <FaArrowLeft className="size-3 transition-transform duration-300 group-hover:-translate-x-0.5" />
                Back to all projects
            </Link>
        </div>
    )
}

export default NotFound
