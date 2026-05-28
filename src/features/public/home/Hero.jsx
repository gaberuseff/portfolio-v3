"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

import SectionWrapper from "@/components/ui/SectionWrapper";

function Hero() {
  return (
    <SectionWrapper hasBorder={false} py="default">
      <div className="grid gap-12 lg:grid-cols-12 items-center">
        
        <div className="flex flex-col items-start lg:col-span-7 space-y-8">
          <div className="text-[10px] font-mono tracking-widest text-muted-foreground/60 uppercase">
            Gaber Usef   ·   Front-End Engineer
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground font-geist leading-[1.1] max-w-2xl">
            Building fast, clean, and accessible digital interfaces.
          </h1>
          
          <p className="text-base sm:text-lg text-muted-foreground/85 leading-relaxed max-w-xl font-light">
            I focus on creating responsive, accessible, and visually striking applications with React and Next.js, turning complex ideas into smooth, elegant digital experiences.
          </p>

          <div className="flex items-center gap-4 pt-2 text-[11px] font-semibold tracking-wider uppercase text-foreground">
            <Link 
              href="/works" 
              className="inline-flex items-center gap-2 hover:text-primary transition-colors duration-300 group"
            >
              <span>Explore Works</span>
              <FaArrowRight className="size-2.5 text-muted-foreground/60 group-hover:text-primary transition-transform group-hover:translate-x-0.5 duration-300" />
            </Link>
            <span className="text-zinc-200 dark:text-zinc-800">/</span>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 hover:text-primary transition-colors duration-300"
            >
              <span>Let's Connect</span>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 w-full flex justify-center items-center">
          <div className="relative aspect-[3/4] w-full max-w-[340px] sm:max-w-[4000px] lg:max-w-[430px] rounded-[2rem] overflow-hidden bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200/30 dark:border-zinc-800/30 shadow-sm hover:shadow-md transition-shadow duration-500">
            <Image
              src="/mee.webp"
              alt="Gaber Usef"
              fill
              priority
              quality={100}
              className="object-cover w-full h-full filter brightness-[0.98] dark:brightness-[0.95] transition-transform duration-700 ease-out hover:scale-[1.01]"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </div>

      </div>
    </SectionWrapper>

  );
}

export default Hero;
