import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { useTranslations } from "next-intl";

export type StatusProjeto = "finalizado" | "em-desenvolvimento";

export type Projeto = {
  id: string;
  titleKey: string;
  descriptionKey: string;
  stack: string[];
  demoUrl?: string;
  repoUrl?: string;
  status: StatusProjeto;
};

const PROJETOS: Projeto[] = [
  {
    id: "1",
    titleKey: "projects.items.fortnite.title",
    descriptionKey: "projects.items.fortnite.description",
    stack: ["Next.js", "TypeScript", "Prisma", "Tailwind", "Neon"],
    demoUrl: "https://fortnite-jam-tracker.vercel.app/",
    repoUrl: "https://github.com/voronll/fortnite-jam-tracker",
    status: "finalizado",
  },
  {
    id: "2",
    titleKey: "projects.items.sneaker.title",
    descriptionKey: "projects.items.sneaker.description",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    repoUrl: "https://github.com/voronll/sneaker-tracker",
    status: "em-desenvolvimento",
  },
  {
    id: "3",
    titleKey: "projects.items.portfolio.title",
    descriptionKey: "projects.items.portfolio.description",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    repoUrl: "https://github.com/voronll/voronll-portfolio",
    status: "finalizado",
  },
  {
    id: "4",
    titleKey: "projects.items.packpull.title",
    descriptionKey: "projects.items.packpull.description",
    stack: ["Vite", "Electron", "React"],
    repoUrl: "https://github.com/voronll/packpull",
    status: "em-desenvolvimento",
  },
];

const linkClass =
  "text-sm font-medium text-foreground/90 hover:text-foreground transition-colors inline-flex items-center gap-1";

function ProjectCard({ projeto }: { projeto: Projeto }) {
  const t = useTranslations();
  const statusLabel = t(`projects.status.${projeto.status}`);

  return (
    <GlassCard className="p-5 md:p-6 flex flex-col h-full">
      <div className="flex-1 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-foreground min-w-0">
            {t(projeto.titleKey)}
          </h3>
          <span
            className="shrink-0 text-xs font-medium px-2.5 py-1 rounded-md glass text-(--muted)"
            aria-label={t("projects.statusLabel", { status: statusLabel })}
          >
            {statusLabel}
          </span>
        </div>
        <p className="text-(--foreground)/90 text-sm leading-relaxed">
          {t(projeto.descriptionKey)}
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
      </div>
      <div className="flex gap-4 mt-4 pt-4 border-t border-(--glass-border)">
        {projeto.demoUrl && (
          <Link
            href={projeto.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            {t("projects.links.demo")}
          </Link>
        )}
        {projeto.repoUrl && (
          <Link
            href={projeto.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            {t("projects.links.repo")}
          </Link>
        )}
      </div>
    </GlassCard>
  );
}

export function Projetos() {
  const t = useTranslations();

  return (
    <section
      id="projetos"
      className="relative py-12 sm:py-16"
    >
      <div className="w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
          {t("projects.title")}
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
