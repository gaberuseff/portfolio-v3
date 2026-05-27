"use client";

import { Button } from "@/components/ui/button";
import { LuCircleAlert, LuRotateCcw } from "react-icons/lu";

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center border border-border rounded-xl bg-card/60 backdrop-blur-md space-y-4 max-w-md mx-auto my-12 shadow-sm">
      <LuCircleAlert className="size-8 text-muted-foreground" />
      <div className="space-y-1">
        <h3 className="text-base font-semibold text-foreground">Failed to Load Projects</h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Something went wrong while retrieving your projects database. Please check your connection and try again.
        </p>
      </div>
      <Button 
        onClick={() => reset()} 
        variant="outline" 
        size="sm"
        className="gap-1.5 cursor-pointer text-xs"
      >
        <LuRotateCcw className="size-3.5" />
        <span>Try Again</span>
      </Button>
    </div>
  );
}
