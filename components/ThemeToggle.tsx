"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a7 7 0 1 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted ? theme === "dark" : true;
  const nextTheme = isDark ? "light" : "dark";

  async function toggleWithCircle(e: React.MouseEvent<HTMLButtonElement>) {
    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (!mounted || reducedMotion) {
      setTheme(nextTheme);
      return;
    }

    const doc = document.documentElement;
    const x = e.clientX;
    const y = e.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    doc.style.setProperty("--vt-x", `${x}px`);
    doc.style.setProperty("--vt-y", `${y}px`);
    doc.style.setProperty("--vt-r", `${endRadius}px`);

    const startViewTransition = (
      document as unknown as {
        startViewTransition?: (cb: () => void) => { finished: Promise<void> };
      }
    ).startViewTransition;

    if (!startViewTransition) {
      setTheme(nextTheme);
      return;
    }

    doc.classList.add("theme-circle-transition");
    const transition = (document as unknown as {
      startViewTransition: (cb: () => void) => { finished: Promise<void> };
    }).startViewTransition(() => setTheme(nextTheme));

    try {
      await transition.finished;
    } finally {
      doc.classList.remove("theme-circle-transition");
    }
  }

  return (
    <button
      type="button"
      onClick={toggleWithCircle}
      className="glass relative h-11 w-24 rounded-xl p-1 inline-flex items-center transition-colors hover:bg-white/5 border-white/10"
      aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
      title={isDark ? "Tema: escuro" : "Tema: claro"}
      aria-pressed={isDark}
    >
      <span className="relative w-full h-full grid grid-cols-2 rounded-lg overflow-hidden">
        {/* Indicador (retangular) — ocupa exatamente 1 coluna */}
        <span
          className={`glass-strong absolute inset-0 w-1/2 rounded-lg border border-(--glass-border) transition-transform duration-300 ${
            isDark ? "translate-x-0" : "translate-x-full"
          }`}
          aria-hidden="true"
        />

        {/* Ícones (sem texto) */}
        <span
          className={`relative z-10 grid place-items-center transition-colors ${
            isDark ? "text-foreground" : "text-(--muted)"
          }`}
          aria-hidden="true"
        >
          <MoonIcon />
        </span>
        <span
          className={`relative z-10 grid place-items-center transition-colors ${
            isDark ? "text-(--muted)" : "text-foreground"
          }`}
          aria-hidden="true"
        >
          <SunIcon />
        </span>
      </span>
    </button>
  );
}

