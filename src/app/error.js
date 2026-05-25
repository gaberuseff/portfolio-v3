"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({ error, reset }) {
  return (

    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 space-y-6 max-w-md mx-auto">
      <div className="p-4 rounded-full bg-destructive/10 text-destructive animate-pulse shrink-0">
        <AlertTriangle className="size-12" />
      </div>

      <div className="space-y-3">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Something went wrong
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          An unexpected error occurred in the application. Please try again or return to your dashboard.
        </p>
        
        {error?.message && (
          <div className="p-3 bg-muted/60 border border-border/40 rounded-lg text-xs font-mono text-destructive dark:text-red-400 break-all select-all">
            Error: {error.message}
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-2">
        <Button onClick={() => reset()} className="gap-2 cursor-pointer w-full sm:w-auto">
          <RotateCcw className="size-4" />
          Try Again
        </Button>
        <Button asChild variant="outline" className="gap-2 cursor-pointer w-full sm:w-auto">
          <Link href="/redirect">
            <Home className="size-4" />
            Go to Dashboard
          </Link>
        </Button>
      </div>
    </div>
  );
}

