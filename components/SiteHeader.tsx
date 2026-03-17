"use client";

import { ThemeToggle } from "@/components/ThemeToggle";

export function SiteHeader() {
  return (
    <header className="fixed top-4 right-4 z-20 flex items-center gap-2">
      <ThemeToggle />
    </header>
  );
}

