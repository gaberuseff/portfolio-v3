"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  FaArrowLeft, 
  FaCheck, 
  FaCopy,
  FaGithub,
  FaLinkedinIn,
  FaFacebook
} from "react-icons/fa6";

import SectionWrapper from "@/components/ui/SectionWrapper";

function ContactClient() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "dev.gaber@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  return (
    <SectionWrapper hasBorder={false} py="default">
        
        <div className="grid gap-16 lg:grid-cols-12 items-start">
          
          <div className="flex flex-col items-start lg:col-span-7 space-y-8 lg:pr-12">
            
            <div className="text-[10px] font-mono tracking-widest text-muted-foreground/60 uppercase">
              Connect   ·   Gaber Usef
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground font-geist leading-[1.1] max-w-xl">
              Let's build something exceptional.
            </h1>
            
            <p className="text-base sm:text-lg text-muted-foreground/85 leading-relaxed max-w-xl font-light">
              I focus on engineering highly responsive, accessible, and visually striking applications with React and Next.js. I am always open to discussing new front-end engineering roles, custom full-stack solutions, or technical consulting projects.
            </p>

            <div className="flex items-center gap-4 pt-2 text-[11px] font-semibold tracking-wider uppercase text-foreground">
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 hover:text-primary transition-colors duration-300 group"
              >
                <FaArrowLeft className="size-2.5 text-muted-foreground/60 group-hover:text-primary transition-transform group-hover:-translate-x-0.5 duration-300" />
                <span>Back to Home</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-10 lg:border-l border-zinc-200/40 dark:border-zinc-800/40 pt-8 lg:pt-0 lg:pl-10">
            
            <div className="space-y-3">
              <span className="text-[10px] text-muted-foreground uppercase font-mono tracking-widest block">
                Direct Email
              </span>
              
              <div className="flex flex-wrap items-center gap-3">
                <a 
                  href={`mailto:${emailAddress}`}
                  className="text-lg sm:text-xl font-semibold text-foreground hover:text-primary transition-colors duration-300"
                >
                  {emailAddress}
                </a>
                
                <button 
                  onClick={handleCopyEmail}
                  className="px-2 py-1 rounded border border-zinc-200/50 dark:border-zinc-800/50 hover:border-zinc-200/80 dark:hover:border-zinc-800/80 bg-zinc-50/30 dark:bg-zinc-900/20 hover:bg-zinc-50/80 dark:hover:bg-zinc-900/40 text-[9px] font-mono tracking-wider uppercase text-muted-foreground hover:text-foreground transition-all duration-300 flex items-center gap-1 cursor-pointer shrink-0"
                >
                  {copied ? (
                    <>
                      <FaCheck className="size-2 text-emerald-500" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <FaCopy className="size-2" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              
              <p className="text-xs text-muted-foreground/75 font-light leading-relaxed">
                For job proposals, technical inquiries, or consulting briefs.
              </p>
            </div>

            <div className="h-[1px] w-full bg-zinc-200/40 dark:bg-zinc-800/20" />

            <div className="space-y-3">
              <span className="text-[10px] text-muted-foreground uppercase font-mono tracking-widest block">
                Instant Hotline
              </span>
              
              <div className="flex items-center gap-2">
                <a 
                  href="https://wa.me/+201500223440" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg sm:text-xl font-semibold text-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2"
                >
                  <span>+20 1500223440</span>
                  <span className="inline-block size-1 bg-emerald-500 rounded-full animate-pulse" />
                </a>
              </div>
              
              <p className="text-xs text-muted-foreground/75 font-light leading-relaxed">
                For quick messages, brief development queries, or immediate calls.
              </p>
            </div>

            <div className="h-[1px] w-full bg-zinc-200/40 dark:bg-zinc-800/20" />

            <div className="space-y-3">
              <span className="text-[10px] text-muted-foreground uppercase font-mono tracking-widest block">
                Professional Networks
              </span>
              
              <div className="flex flex-wrap items-center gap-4 text-[11px] font-semibold tracking-wider uppercase text-foreground">
                <a 
                  href="https://github.com/gaberuseff" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-primary transition-colors duration-300 group"
                >
                  <FaGithub className="size-3.5 text-muted-foreground/60 group-hover:text-primary transition-colors duration-300" />
                  <span>GitHub</span>
                </a>
                <span className="text-zinc-200 dark:text-zinc-800">/</span>
                <a 
                  href="https://linkedin.com/in/gaberuseff" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-primary transition-colors duration-300 group"
                >
                  <FaLinkedinIn className="size-3.5 text-muted-foreground/60 group-hover:text-primary transition-colors duration-300" />
                  <span>LinkedIn</span>
                </a>
                <span className="text-zinc-200 dark:text-zinc-800">/</span>
                <a 
                  href="https://facebook.com/gaberuseff" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-primary transition-colors duration-300 group"
                >
                  <FaFacebook className="size-3.5 text-muted-foreground/60 group-hover:text-primary transition-colors duration-300" />
                  <span>Facebook</span>
                </a>
              </div>
              
              <p className="text-xs text-muted-foreground/75 font-light leading-relaxed">
                Explore open-source contributions or connect on professional updates.
              </p>
            </div>

          </div>

        </div>

    </SectionWrapper>
  );
}

export default ContactClient;
