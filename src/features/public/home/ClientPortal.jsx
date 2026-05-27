"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight, FaLock, FaUserPlus } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/ui/SectionWrapper";

function ClientPortal({ isLoggedIn }) {
  return (
    <SectionWrapper hasBorder={true} py="default">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">
        
        <div className="lg:col-span-8 space-y-6 lg:pr-12">
          <div className="text-[10px] font-mono tracking-widest text-muted-foreground/60 uppercase flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
            Active Projects   ·   Client Hub
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground font-geist leading-[1.15] max-w-xl">
            Do you already have a project with me? <span className="text-primary">Track your progress now.</span>
          </h2>
          
          <p className="text-sm sm:text-base text-muted-foreground/80 leading-relaxed max-w-xl font-light">
            Securely access your custom dashboard to monitor active milestones, review structural progress updates, check live deployment previews, and review invoices in real-time.
          </p>
        </div>

        <div className="lg:col-span-4 space-y-6 lg:border-l border-zinc-200/40 dark:border-zinc-800/40 pt-8 lg:pt-0 lg:pl-10">
          <div className="space-y-4">
            <div>
              <span className="text-[10px] text-muted-foreground uppercase font-mono tracking-widest block">
                Secure Workspace Access
              </span>
              <p className="text-xs text-muted-foreground/60 mt-1">
                {isLoggedIn 
                  ? "Welcome back! Access your tailored project environment."
                  : "Register your client email or sign in to enter your workspace."
                }
              </p>
            </div>

            <div className="h-[1px] w-full bg-zinc-200/50 dark:bg-zinc-800/50 my-4" />

            {isLoggedIn ? (
              <div className="pt-2">
                <Button asChild size="default" className="w-full flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider h-11 bg-primary text-primary-foreground hover:bg-primary/95 transition-all duration-300 group">
                  <Link href="/redirect">
                    <span>Go to Project Dashboard</span>
                    <FaArrowRight className="size-3 transition-transform group-hover:translate-x-1 duration-300" />
                  </Link>
                </Button>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 pt-2">
                <Button asChild size="default" variant="default" className="w-full flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider h-11 bg-primary text-primary-foreground hover:bg-primary/95 transition-all duration-300 group">
                  <Link href="/login">
                    <FaLock className="size-3" />
                    <span>Sign In to Track</span>
                    <FaArrowRight className="size-3 transition-transform group-hover:translate-x-1 duration-300" />
                  </Link>
                </Button>
                <Button asChild size="default" variant="outline" className="w-full flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider h-11 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900/50 transition-all duration-300">
                  <Link href="/signup">
                    <FaUserPlus className="size-3" />
                    <span>Create Client Account</span>
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}

export default ClientPortal;
