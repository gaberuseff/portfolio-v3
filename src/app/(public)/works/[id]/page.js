import { getWorks, getWorkById } from "@/services/apiWorks"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { FaArrowLeft, FaArrowRight, FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6"

export async function generateMetadata({ params }) {
    const { id } = await params
    const work = await getWorkById(id)
    if (!work) {
        return {
            title: "Project Not Found | Gaber Usef"
        }
    }
    return {
        title: `${work.title} | Gaber Usef Portfolio`,
        description: work.description,
    }
}

async function page({ params }) {
    const { id } = await params
    const works = await getWorks()
    const workId = Number(id)
    const workIndex = works.findIndex((w) => w.id === workId)

    if (workIndex === -1) {
        notFound()
    }

    const work = works[workIndex]

    const prevWork = works[(workIndex - 1 + works.length) % works.length]
    const nextWork = works[(workIndex + 1) % works.length]

    return (
        <div className="min-h-screen py-12 px-6 sm:px-12 lg:px-16 max-w-4xl mx-auto flex flex-col justify-between font-inter antialiased">
            <div>
                <div className="mb-12">
                    <Link 
                        href="/works" 
                        className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 group"
                    >
                        <FaArrowLeft className="size-3 transition-transform duration-300 group-hover:-translate-x-0.5" />
                        Back to all projects
                    </Link>
                </div>

                <article className="space-y-12">
                    <header className="space-y-4">
                        <div className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase">
                            {work.tech_stack.join("  •  ")}
                        </div>
                        
                        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground font-geist">
                            {work.title}
                        </h1>
                        
                        <p className="text-base sm:text-lg text-muted-foreground/80 leading-relaxed max-w-2xl font-light">
                            {work.description}
                        </p>

                        <div className="flex items-center gap-6 pt-4 text-xs font-semibold tracking-wider uppercase text-foreground">
                            <a 
                                href={work.live_link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-flex items-center gap-1.5 hover:text-primary transition-colors duration-300 group"
                            >
                                Live Preview
                                <FaArrowUpRightFromSquare className="size-2.5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                            </a>
                            <a 
                                href={work.source_link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-flex items-center gap-1.5 hover:text-primary transition-colors duration-300 group"
                            >
                                Source Code
                                <FaGithub className="size-3 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                            </a>
                        </div>
                    </header>

                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200/30 dark:border-zinc-800/30">
                        <Image
                            src={work.image}
                            alt={work.title}
                            fill
                            priority
                            quality={90}
                            className="object-cover w-full h-full filter brightness-[0.98] dark:brightness-[0.95]"
                            sizes="(max-width: 768px) 100vw, 800px"
                        />  
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-6">
                        <div className="md:col-span-2 space-y-6">
                            <h2 className="text-xs font-semibold tracking-wider uppercase text-foreground">
                                Core Features
                            </h2>
                            <ul className="space-y-5">
                                {work.features.map((feature, idx) => (
                                    <li 
                                        key={idx} 
                                        className="flex gap-4 items-start text-sm sm:text-base text-muted-foreground/90 font-light leading-relaxed"
                                    >
                                        <span className="text-xs font-mono font-normal text-muted-foreground/45 pt-1">
                                            0{idx + 1}
                                        </span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-xs font-semibold tracking-wider uppercase text-foreground">
                                Details
                            </h2>
                            <div className="space-y-4 text-xs sm:text-sm">
                                <div className="space-y-1">
                                    <span className="text-[10px] text-muted-foreground uppercase font-mono tracking-wider block">
                                        Role
                                    </span>
                                    <span className="text-foreground/80 font-light">
                                        {work.role}
                                    </span>
                                </div>
                                <div className="space-y-1 pt-2">
                                    <span className="text-[10px] text-muted-foreground uppercase font-mono tracking-wider block">
                                        Tech Stack
                                    </span>
                                    <span className="text-foreground/80 font-light leading-relaxed">
                                        {work.tech_stack.join(", ")}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

            <footer className="border-t border-zinc-100 dark:border-zinc-900/60 pt-10 mt-20 flex items-center justify-between">
                <Link 
                    href={`/works/${prevWork.id}`} 
                    className="group flex flex-col items-start gap-1"
                >
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 transition-colors duration-300 group-hover:text-foreground">
                        <FaArrowLeft className="size-2.5 transition-transform duration-300 group-hover:-translate-x-0.5" /> 
                        Previous project
                    </span>
                    <span className="text-xs text-muted-foreground/60 transition-colors duration-300 group-hover:text-foreground max-w-[150px] sm:max-w-xs truncate">
                        {prevWork.title}
                    </span>
                </Link>

                <Link 
                    href={`/works/${nextWork.id}`} 
                    className="group flex flex-col items-end gap-1"
                >
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 transition-colors duration-300 group-hover:text-foreground">
                        Next project 
                        <FaArrowRight className="size-2.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                    <span className="text-xs text-muted-foreground/60 transition-colors duration-300 group-hover:text-foreground max-w-[150px] sm:max-w-xs truncate">
                        {nextWork.title}
                    </span>
                </Link>
            </footer>
        </div>
    )
}

export default page

