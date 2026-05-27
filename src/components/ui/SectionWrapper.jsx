import React from "react";
import { cn } from "@/lib/utils";

function SectionWrapper({
  children,
  className,
  containerClassName,
  id,
  as: Component = "section",
  hasBorder = false,
  py = "default", // 'default' | 'none'
  maxWidth = "6xl", // '5xl' | '6xl' | '7xl'
  isPage = false // true if wrapping a whole page
}) {
  const pyClasses = {
    default: "py-16 sm:py-20",
    none: ""
  };

  const maxWidthClasses = {
    "5xl": "max-w-5xl",
    "6xl": "max-w-6xl",
    "7xl": "max-w-7xl"
  };

  // If wrapping a full public page body
  if (isPage) {
    return (
      <div
        id={id}
        className={cn(
          "mx-auto w-[90%] font-inter antialiased",
          maxWidthClasses[maxWidth],
          pyClasses[py],
          className
        )}
      >
        {children}
      </div>
    );
  }

  // Standard Section with unified Outer Background + Inner Container Alignments
  return (
    <Component
      id={id}
      className={cn(
        "relative overflow-hidden bg-background font-inter antialiased",
        hasBorder && "border-t border-zinc-100 dark:border-zinc-900/40",
        pyClasses[py],
        className
      )}
    >
      <div
        className={cn(
          "mx-auto w-[90%] px-4",
          maxWidthClasses[maxWidth],
          containerClassName
        )}
      >
        {children}
      </div>
    </Component>
  );
}

export default SectionWrapper;
