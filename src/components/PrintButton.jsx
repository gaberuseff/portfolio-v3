"use client";

import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";

export default function PrintButton() {
  return (
    <Button 
      onClick={() => window.print()}
      className="gap-2 cursor-pointer shadow-sm bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-primary dark:hover:bg-primary/95 dark:text-primary-foreground font-bold text-xs rounded-xl px-4 py-2 transition-all animate-none"
    >
      <Printer className="size-4" />
      <span>Print Invoice</span>
    </Button>
  );
}
