"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LuSun, LuMoon, LuMonitor, LuSettings } from "react-icons/lu";

export default function SettingsPage() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="space-y-6 max-w-xl py-6 px-4">
        <div className="space-y-2">
          <Skeleton className="h-9 w-48 rounded-md" />
          <Skeleton className="h-5 w-80 rounded-md" />
        </div>
        <Card className="border border-border/60 bg-card">
          <CardHeader className="space-y-2">
            <Skeleton className="h-6 w-32 rounded-md" />
            <Skeleton className="h-4 w-64 rounded-md" />
          </CardHeader>
          <CardContent className="pt-2">
            <Skeleton className="h-10 w-48 rounded-md" />
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-xl">
      <div className="flex items-center gap-3">
        <LuSettings className="size-6" />
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Settings</h1>
      </div>

      <Card className="border border-border/60 bg-card/60 backdrop-blur-md shadow-sm overflow-hidden relative">        
        <CardHeader className="pb-4">
          <CardTitle className="text-base font-semibold flex items-center gap-2">
            <span>Appearance & Theme</span>
          </CardTitle>
          <CardDescription>
            Choose how your Client Portal looks. Switch between light, dark, or system-sync themes.
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="max-w-xs">
            <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Select Theme
            </label>
            <Select value={theme} onValueChange={(val) => setTheme(val)}>
              <SelectTrigger className="w-full justify-between focus:ring-1 cursor-pointer">
                <SelectValue placeholder="Choose a theme" />
              </SelectTrigger>
              <SelectContent position="popper" className="bg-popover border border-border/80">
                <SelectItem value="light" className="cursor-pointer">
                  <div className="flex items-center gap-2">
                    <LuSun className="size-4 shrink-0 text-amber-500" />
                    <span>Light Mode</span>
                  </div>
                </SelectItem>
                <SelectItem value="dark" className="cursor-pointer">
                  <div className="flex items-center gap-2">
                    <LuMoon className="size-4 shrink-0 text-indigo-400" />
                    <span>Dark Mode</span>
                  </div>
                </SelectItem>
                <SelectItem value="system" className="cursor-pointer">
                  <div className="flex items-center gap-2">
                    <LuMonitor className="size-4 shrink-0 text-muted-foreground" />
                    <span>System Preference</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="p-4 rounded-xl border border-border/40 bg-muted/20 text-xs text-muted-foreground flex items-center gap-2">
            <LuMonitor className="size-4 text-primary/70 shrink-0" />
            <span>
              Your portal is currently displaying in{" "}
              <strong className="text-foreground capitalize">{resolvedTheme} Mode</strong> based on your selections.
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


