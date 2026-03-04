import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";

export type StatusProjeto = "finalizado" | "em-desenvolvimento";

export type Projeto = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  demoUrl?: string;
  repoUrl?: string;
  metric: string;
  status: StatusProjeto;
};

const STATUS_LABEL: Record<StatusProjeto, string> = {
  finalizado: "Finalizado",
  "em-desenvolvimento": "Em desenvolvimento",
};

const PROJETOS: Projeto[] = [
  {
    id: "1",
    title: "Fortnite Jam Tracker ",
    description: "Plataforma de pesquisa e visualização de músicas do jogo Fortnite, com busca por nome da música, artista, album, além de permitir ouvir uma prévia das músicas diretamente no site.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    demoUrl: "https://fortnite-jam-tracker.vercel.app/",
    repoUrl: "https://github.com/voronll/fortnite-jam-tracker",
    metric: "Next.js + Vercel",
    status: "finalizado",
  },
  {
    id: "2",
    title: "Sneaker Tracker ",
    description: "Plataforma de coleção de sneakers, onde o usuário pode adicionar, remover e visualizar seus sneakers favoritos.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    repoUrl: "https://github.com/voronll/sneaker-tracker",
    metric: "Next.js + Vercel",
    status: "em-desenvolvimento",
  },
];

const linkClass =
  "text-sm font-medium text-foreground/90 hover:text-foreground transition-colors inline-flex items-center gap-1";

function ProjectCard({ projeto }: { projeto: Projeto }) {
  return (
    <GlassCard className="p-5 md:p-6 flex flex-col h-full hover:border-white/20 transition-colors duration-200">
      <div className="flex-1 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-foreground min-w-0">
            {projeto.title}
          </h3>
          <span
            className="shrink-0 text-xs font-medium px-2.5 py-1 rounded-md glass text-(--muted)"
            aria-label={`Status: ${STATUS_LABEL[projeto.status]}`}
          >
            {STATUS_LABEL[projeto.status]}
          </span>
        </div>
        <p className="text-(--foreground)/90 text-sm leading-relaxed">
          {projeto.description}
        </p>
        <ul className="flex flex-wrap gap-1.5">
          {projeto.stack.map((tech) => (
            <li
              key={tech}
              className="px-2 py-0.5 rounded-md glass text-xs text-(--foreground)/90"
            >
              {tech}
            </li>
          ))}
        </ul>
        <span className="text-xs text-(--muted) mt-1">
          {projeto.metric}
        </span>
      </div>
      <div className="flex gap-4 mt-4 pt-4 border-t border-(--glass-border)">
        {projeto.demoUrl && (
          <Link
            href={projeto.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Demo →
          </Link>
        )}
        {projeto.repoUrl && (
          <Link
            href={projeto.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Repo →
          </Link>
        )}
      </div>
    </GlassCard>
  );
}

export function Projetos() {
  return (
    <section
      id="projetos"
      className="relative py-12 sm:py-16"
    >
      <div className="w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
          Projetos que eu desenvolvi
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {PROJETOS.map((projeto) => (
            <li key={projeto.id}>
              <ProjectCard projeto={projeto} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
