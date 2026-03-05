"use client";

import { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";

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
  empresa: string;
  cargo: string;
  periodo: string;
  descricao: string;
};

const EXPERIENCIA: ExperienciaItem[] = [
  {
    id: "1",
    empresa: "CALPAR",
    cargo: "Desenvolvedor Front End",
    periodo: "Setembro/2025 – Atual",
    descricao: "Desenvolvimento de sistemas web para a empresa CALPAR, utilizando as tecnologias HTML, CSS, JavaScript, React, Next.js, Node.js, TypeScript, PostgreSQL, Tailwind, Docker, Kotlin e Java.",
  },
  {
    id: "2",
    empresa: "Unimed Ponta Grossa",
    cargo: "Assistente de Desenvolvimento - Full Stack",
    periodo: "Julho/2024 – Julho/2025",
    descricao: `
Trabalhei como desenvolvedor full-stack em projetos escaláveis e complexos, com foco em soluções modernas e de alto desempenho para o setor de saúde. Trabalhei com tecnologias como TypeScript, React, Kotlin e Dart, utilizando os frameworks Next.js, Flutter e Node.js, e apliquei Tailwind CSS para construir interfaces responsivas e modernas. 

Ao longo da minha carreira, fui responsável por desenvolver e manter aplicações robustas em ambientes de produção, liderando iniciativas técnicas e colaborando diretamente com equipes multidisciplinares. Participei ativamente da gestão de projetos, aplicando metodologias ágeis (Scrum) para garantir entregas pontuais e alinhadas aos objetivos de negócio.`,
  },
  {
    id: "3",
    empresa: "Compass UOL",
    cargo: "Estagiário em Cloud Security",
    periodo: "Abril/2023 – Agosto/2023",
    descricao: `
Participei do Programa de Bolsas de Estudo da empresa, com foco na formação de novos talentos para a certificação em Nuvem AWS (AWS Certified Cloud Practitioner). Adquiri experiência prática com serviços de nuvem da AWS, melhores práticas de segurança em nuvem e configuração e gerenciamento de ambientes de nuvem. 

Desenvolvi habilidades em metodologias ágeis, infraestrutura em nuvem e monitoramento de segurança.`,
  },
];

function ExperienciaCard({ item }: { item: ExperienciaItem }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <GlassCard className="p-5 sm:p-6 relative">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
        <h3 className="text-base sm:text-lg font-semibold text-foreground">
          {item.cargo}
        </h3>
        <span className="text-xs sm:text-sm font-medium text-(--muted)">
          {item.periodo}
        </span>
      </div>
      <p className="text-sm font-medium text-foreground/80 mb-2">
        {item.empresa}
      </p>
      <div className="relative">
        <p
          className={`text-(--foreground)/90 text-sm sm:text-base leading-relaxed ${
            expanded ? "whitespace-pre-line" : "line-clamp-2 pr-8"
          }`}
        >
          {item.descricao}
        </p>
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="absolute bottom-0 right-0 p-1 -mb-1 -mr-1 rounded text-foreground/70 hover:text-foreground hover:bg-white/10 transition-colors"
          aria-label={expanded ? "Recolher" : "Expandir"}
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
  return (
    <section
      id="experiencia"
      className="relative w-full min-w-0"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
        Experiência profissional
      </h2>

      <div className="space-y-4">
        {EXPERIENCIA.map((item) => (
          <ExperienciaCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
