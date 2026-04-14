"use client";

import { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { useTranslations } from "next-intl";

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ChevronUpIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}

export type ExperienciaItem = {
  id: string;
  empresaKey: string;
  cargoKey: string;
  periodoKey: string;
  descricaoKey: string;
};

const EXPERIENCIA: ExperienciaItem[] = [
  {
    id: "1",
    empresaKey: "experience.items.calpar.company",
    cargoKey: "experience.items.calpar.role",
    periodoKey: "experience.items.calpar.period",
    descricaoKey: "experience.items.calpar.description",
  },
  {
    id: "2",
    empresaKey: "experience.items.unimed.company",
    cargoKey: "experience.items.unimed.role",
    periodoKey: "experience.items.unimed.period",
    descricaoKey: "experience.items.unimed.description",
  },
  {
    id: "3",
    empresaKey: "experience.items.compass.company",
    cargoKey: "experience.items.compass.role",
    periodoKey: "experience.items.compass.period",
    descricaoKey: "experience.items.compass.description",
  },
];

function ExperienciaCard({ item }: { item: ExperienciaItem }) {
  const [expanded, setExpanded] = useState(false);
  const t = useTranslations();

  return (
    <GlassCard className="p-5 sm:p-6 relative">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
        <h3 className="text-base sm:text-lg font-semibold text-foreground">
          {t(item.cargoKey)}
        </h3>
        <span className="text-xs sm:text-sm font-medium text-(--muted)">
          {t(item.periodoKey)}
        </span>
      </div>
      <p className="text-sm font-medium text-foreground/80 mb-2">
        {t(item.empresaKey)}
      </p>
      <div className="relative">
        <p
          className={`text-(--foreground)/90 text-sm sm:text-base leading-relaxed ${
            expanded ? "whitespace-pre-line" : "line-clamp-2 pr-8"
          }`}
        >
          {t(item.descricaoKey)}
        </p>
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="absolute bottom-0 right-0 p-1 -mb-1 -mr-1 rounded text-foreground/70 hover:text-foreground hover:bg-white/10 transition-colors"
          aria-label={expanded ? t("experience.toggle.collapse") : t("experience.toggle.expand")}
        >
          {expanded ? (
            <ChevronUpIcon className="shrink-0" />
          ) : (
            <ChevronDownIcon className="shrink-0" />
          )}
        </button>
      </div>
    </GlassCard>
  );
}

export function Experiencia() {
  const t = useTranslations();

  return (
    <section
      id="experiencia"
      className="relative w-full min-w-0"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
        {t("experience.title")}
      </h2>

      <div className="space-y-4">
        {EXPERIENCIA.map((item) => (
          <ExperienciaCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
