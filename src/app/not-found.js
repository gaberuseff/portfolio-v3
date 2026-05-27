"use client";

import React from "react";
import Link from "next/link";
import { FaArrowLeft, FaGhost } from "react-icons/fa6";

function notFound() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 sm:px-12 text-center font-inter antialiased">
      <div className="relative max-w-md w-full space-y-6">
        
        <div className="absolute -inset-10 bg-radial from-primary/10 via-transparent to-transparent blur-3xl rounded-full pointer-events-none opacity-0 dark:opacity-100" />

        <div className="flex justify-center">
          <div className="size-12 rounded-2xl bg-zinc-50/40 dark:bg-zinc-900/10 border border-zinc-200/20 dark:border-zinc-800/40 flex items-center justify-center text-muted-foreground/60 shadow-[0_8px_30px_rgb(0,0,0,0.01)] dark:shadow-[0_8px_30px_oklch(0.155_0.008_120_/_0.05)] transition-transform duration-500 hover:scale-105">
            <FaGhost className="size-5 text-primary/80 animate-bounce" />
          </div>
        </div>

        <div className="text-[10px] font-mono tracking-widest text-muted-foreground/60 uppercase">
          404   ·   Page Not Found
        </div>

        <div className="inline-block font-mono text-[9px] text-muted-foreground/45 uppercase tracking-widest px-3 py-1 bg-zinc-50/30 dark:bg-zinc-900/20 border border-zinc-200/40 dark:border-zinc-800/40 rounded-full">
          [SYS // ERR-404]
        </div>

        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground font-geist leading-tight">
          Lost in digital space.
        </h1>

        <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed max-w-sm mx-auto font-light">
          The page you are looking for doesn't exist, has been moved, or resides in another dimension.
        </p>

        <div className="pt-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-wider uppercase text-foreground hover:text-primary transition-colors duration-300 group"
          >
            <FaArrowLeft className="size-2.5 text-muted-foreground/60 group-hover:text-primary transition-transform group-hover:-translate-x-0.5 duration-300" />
            <span>Return to Home</span>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default notFound;
