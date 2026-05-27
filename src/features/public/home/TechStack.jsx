"use client";

import React from "react";

import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaGitAlt, 
  FaCode, 
  FaLaptopCode, 
  FaServer
} from "react-icons/fa6";
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiPrisma, 
  SiPostgresql,
  SiRedux,
  SiSupabase,
  SiReactquery
} from "react-icons/si";
import SectionWrapper from "@/components/ui/SectionWrapper";

function TechStack() {
  const categories = [
    {
      title: "Frontend Development",
      icon: <FaLaptopCode className="size-3.5 text-muted-foreground/60" />,
      items: [
        { 
          name: "JavaScript", 
          desc: "ES6+, modern asynchronous patterns, clean architecture", 
          icon: <FaJs className="size-4" />,
          hoverClass: "group-hover:text-yellow-500 group-hover:border-yellow-500/30 group-hover:bg-yellow-500/5",
          shadowClass: "hover:shadow-[0_0_15px_rgba(234,179,8,0.03)]"
        },
        { 
          name: "Next.js & React", 
          desc: "App Router, Server Components, serverless APIs, SEO, React hooks", 
          icon: <div className="flex gap-0.5"><SiNextdotjs className="size-3.5" /><FaReact className="size-3.5" /></div>,
          hoverClass: "group-hover:text-sky-400 group-hover:border-sky-400/30 group-hover:bg-sky-400/5",
          shadowClass: "hover:shadow-[0_0_15px_rgba(56,189,248,0.03)]"
        },
        { 
          name: "Tailwind CSS", 
          desc: "Custom theme setups, glassmorphic tokens, modern layout design", 
          icon: <SiTailwindcss className="size-3.5" />,
          hoverClass: "group-hover:text-cyan-400 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/5",
          shadowClass: "hover:shadow-[0_0_15px_rgba(34,211,238,0.03)]"
        },
        { 
          name: "HTML5 & CSS3", 
          desc: "Semantic markup, flexbox/grid layouts, fluid typography", 
          icon: <div className="flex gap-0.5"><FaHtml5 className="size-3.5" /><FaCss3Alt className="size-3.5" /></div>,
          hoverClass: "group-hover:text-orange-500 group-hover:border-orange-500/30 group-hover:bg-orange-500/5",
          shadowClass: "hover:shadow-[0_0_15px_rgba(249,115,22,0.03)]"
        }
      ]
    },
    {
      title: "State & Integration",
      icon: <FaCode className="size-3.5 text-muted-foreground/60" />,
      items: [
        { 
          name: "React Query", 
          desc: "Asynchronous cache synchronization, query mutations, remote state", 
          icon: <SiReactquery className="size-3.5" />,
          hoverClass: "group-hover:text-rose-500 group-hover:border-rose-500/30 group-hover:bg-rose-500/5",
          shadowClass: "hover:shadow-[0_0_15px_rgba(244,63,94,0.03)]"
        },
        { 
          name: "Redux Toolkit", 
          desc: "Global client-side state slices, custom middlewares, action stores", 
          icon: <SiRedux className="size-3.5" />,
          hoverClass: "group-hover:text-purple-500 group-hover:border-purple-500/30 group-hover:bg-purple-500/5",
          shadowClass: "hover:shadow-[0_0_15px_rgba(168,85,247,0.03)]"
        },
        { 
          name: "API Integration", 
          desc: "Asynchronous fetch operations, RESTful endpoints, data parsing", 
          icon: <FaCode className="size-3.5" />,
          hoverClass: "group-hover:text-indigo-400 group-hover:border-indigo-400/30 group-hover:bg-indigo-400/5",
          shadowClass: "hover:shadow-[0_0_15px_rgba(129,140,248,0.03)]"
        }
      ]
    },
    {
      title: "Database & DevOps",
      icon: <FaServer className="size-3.5 text-muted-foreground/60" />,
      items: [
        { 
          name: "Postgres & Prisma", 
          desc: "ORM schemas, PostgreSQL poolers, relational migrations", 
          icon: <div className="flex gap-0.5"><SiPrisma className="size-3.5" /><SiPostgresql className="size-3.5" /></div>,
          hoverClass: "group-hover:text-emerald-400 group-hover:border-emerald-400/30 group-hover:bg-emerald-400/5",
          shadowClass: "hover:shadow-[0_0_15px_rgba(52,211,153,0.03)]"
        },
        { 
          name: "Supabase", 
          desc: "Backend-as-a-Service, real-time database, OAuth security, storage", 
          icon: <SiSupabase className="size-3.5" />,
          hoverClass: "group-hover:text-green-500 group-hover:border-green-500/30 group-hover:bg-green-500/5",
          shadowClass: "hover:shadow-[0_0_15px_rgba(34,197,94,0.03)]"
        },
        { 
          name: "Git & Deployments", 
          desc: "Version control, automated pipelines, cloud deployments", 
          icon: <FaGitAlt className="size-4" />,
          hoverClass: "group-hover:text-amber-600 group-hover:border-amber-600/30 group-hover:bg-amber-600/5",
          shadowClass: "hover:shadow-[0_0_15px_rgba(217,119,6,0.03)]"
        }
      ]
    }
  ];

  return (
    <SectionWrapper hasBorder={true} py="default">
      
      <div className="space-y-3 mb-10">
        <div className="text-[10px] font-mono tracking-widest text-muted-foreground/60 uppercase">
          Technology   ·   The Core Engine
        </div>
        
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground font-geist leading-tight">
          Expertise & Toolchain
        </h2>
        
        <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed max-w-xl font-light">
          A curated selection of languages, frameworks, and infrastructure tools I leverage to engineer responsive, accessible, and highly optimized digital solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0">
        {categories.map((cat, catIdx) => (
          <div 
            key={cat.title} 
            className={`space-y-4 ${
              catIdx > 0 
                ? "lg:border-l border-zinc-200/40 dark:border-zinc-800/40 lg:pl-6" 
                : ""
            }`}
          >
            <div className="flex items-center gap-2 mb-1.5">
              {cat.icon}
              <h3 className="text-[11px] font-semibold tracking-widest uppercase text-foreground">
                {cat.title}
              </h3>
            </div>

            <div className="space-y-2.5">
              {cat.items.map((item) => (
                <div 
                  key={item.name} 
                  className={`flex gap-3 items-start p-2.5 bg-zinc-50/10 dark:bg-zinc-900/5 hover:bg-zinc-50/40 dark:hover:bg-zinc-900/15 border border-zinc-200/10 dark:border-zinc-800/25 hover:border-zinc-200/20 dark:hover:border-zinc-800/50 rounded-lg transition-all duration-300 group ${item.shadowClass}`}
                >
                  <div className={`size-7 rounded bg-zinc-50/60 dark:bg-zinc-900/25 border border-zinc-200/30 dark:border-zinc-800/40 flex items-center justify-center text-muted-foreground/75 transition-all duration-300 shrink-0 text-xs ${item.hoverClass}`}>
                    {item.icon}
                  </div>

                  <div className="space-y-0.5">
                    <h4 className="text-xs font-semibold text-foreground/90 group-hover:text-primary transition-colors duration-300">
                      {item.name}
                    </h4>
                    <p className="text-[10px] text-muted-foreground/80 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </SectionWrapper>
  );
}

export default TechStack;
