import Image from "next/image";
import {
  FaArrowUpRightFromSquare,
  FaAward
} from "react-icons/fa6";
import { getCertifications } from "@/services/apiCertifications";

async function Page() {
  const certifications = await getCertifications();

  return (
    <div className="mx-auto w-[90%] max-w-5xl py-16 font-inter antialiased">
      <div className="space-y-4 mb-16">
        <div className="text-[10px] font-mono tracking-widest text-muted-foreground/60 uppercase flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
          Showcase   ·   Credentials & Specialties
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-geist leading-[1.1] max-w-xl">
          Professional Certifications
        </h1>
        
        <p className="text-sm sm:text-base text-muted-foreground/80 leading-relaxed max-w-2xl font-light">
          Specialized credentials validating operational competence in advanced frontend frameworks, cloud architecture, and modern interface designs.
        </p>
      </div>

      <div className="flex flex-col gap-6 sm:gap-8">
        {certifications.map((cert) => (
          <div 
            key={cert.id}
            className="group border border-zinc-200/20 dark:border-zinc-800/20 bg-card/60 backdrop-blur-md rounded-2xl hover:shadow-[0_0_20px_rgba(16,185,129,0.02)] transition-all duration-300 relative overflow-hidden flex flex-col md:flex-row gap-6 p-6"
          >
            <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-gradient-to-b from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative aspect-video md:aspect-[4/3] w-full md:w-72 shrink-0 overflow-hidden rounded-xl border border-zinc-200/10 dark:border-zinc-800/10 bg-muted">
              <Image 
                src={cert.image}
                alt={cert.title}
                fill
                sizes="(max-width: 768px) 100vw, 288px"
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent md:hidden" />
              
              <div className="absolute bottom-3 left-3 flex items-center justify-between md:hidden">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-semibold border border-primary/20 bg-primary/10 text-primary">
                  <FaAward className="size-2.5" />
                  Verified
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between flex-grow space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-muted-foreground/60 uppercase">
                  <span className="font-semibold text-primary">{cert.issuer}</span>
                  <span className="text-zinc-200 dark:text-zinc-800 font-light">•</span>
                  <span>{cert.issueDate}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200 leading-snug">
                  {cert.title}
                </h3>

                <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed font-light">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-zinc-200/10 dark:border-zinc-800/10">
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="text-[9px] font-semibold tracking-wider px-2.5 py-1 uppercase rounded bg-zinc-100/50 dark:bg-zinc-800/50 text-foreground/75 border border-zinc-200/10 dark:border-zinc-800/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a 
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-primary hover:underline flex items-center gap-1 cursor-pointer shrink-0"
                >
                  <span>Verify Credential</span>
                  <FaArrowUpRightFromSquare className="size-2.5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
