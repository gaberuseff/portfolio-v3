"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/ui/SectionWrapper";

function CTA() {
  return (
    <SectionWrapper hasBorder={true} py="default">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">
        
        {/* Left Column (spans 8 columns on desktop) */}
        <div className="lg:col-span-8 space-y-6 lg:pr-12">
          <div className="text-[10px] font-mono tracking-widest text-muted-foreground/60 uppercase">
            Collaboration   ·   Let's Create
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground font-geist leading-[1.1] max-w-xl">
            Have a project in mind? Let's build it together.
          </h2>
          
          <p className="text-sm sm:text-base text-muted-foreground/80 leading-relaxed max-w-xl font-light">
            Whether you have a fully formed concept or are just beginning your development journey, I can help you engineer highly optimized, responsive, and fully accessible web interfaces.
          </p>
        </div>

        {/* Right Column (spans 4 columns on desktop) */}
        <div className="lg:col-span-4 space-y-6 lg:border-l border-zinc-200/40 dark:border-zinc-800/40 pt-8 lg:pt-0 lg:pl-10">
          <div className="space-y-4">
            <div>
              <span className="text-[10px] text-muted-foreground uppercase font-mono tracking-widest block">
                Direct Contact
              </span>
              <a 
                href="https://wa.me/+201500223440" 
                target="_blank"
                className="text-sm font-semibold text-foreground hover:text-primary transition-colors duration-300 block mt-1.5"
              >
                +20 1500223440
              </a>
            </div>

            <div className="h-[1px] w-full bg-zinc-200/50 dark:bg-zinc-800/50 pt-2" />

            <div className="flex items-center gap-4 pt-2 text-[11px] font-semibold tracking-wider uppercase text-foreground">
              <Button asChild size="sm" variant="link">
                <Link href="/contact">
                  <span>Let's Connect</span>
                  <FaArrowRight className="size-2.5 text-muted-foreground/60 group-hover:text-primary transition-transform group-hover:translate-x-0.5 duration-300" />
                </Link>
              </Button>
              <span className="text-zinc-200 dark:text-zinc-800">/</span>
              <Button asChild size="sm" variant="link">
                <a 
                  href="/resume.pdf" 
                  target="_blank"
                >
                  View Resume
                </a>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}

export default CTA;
