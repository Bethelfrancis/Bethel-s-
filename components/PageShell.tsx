"use client";

import { type PropsWithChildren } from "react";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

export function PageShell({ children }: PropsWithChildren) {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-background text-foreground font-clash">
      {children}
    </div>
  );
}
