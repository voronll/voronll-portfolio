import { GlassCard } from "@/components/ui/GlassCard";
import { useTranslations } from "next-intl";

const SOBRE = {
  stack: ["React", "Next.js", "Node.js", "TypeScript", "JavaScript", "PostgreSQL", "Tailwind", "Docker", "Kotlin"],
};

export function Sobre() {
  const t = useTranslations();

  return (
    <section
      id="sobre"
      className="relative w-full min-w-0"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
        {t("about.title")}
      </h2>

      <GlassCard className="p-5 sm:p-6 space-y-4">
        <p className="text-(--foreground)/90 leading-relaxed text-sm sm:text-base whitespace-pre-line">
          {t("about.bio")}
        </p>

        <div>
          <span className="text-xs sm:text-sm font-semibold text-(--muted) uppercase tracking-wider">
            {t("about.primaryStacks")}
          </span>
          <ul className="flex flex-wrap gap-1.5 mt-1.5">
            {SOBRE.stack.map((tech) => (
              <li
                key={tech}
                className="px-2.5 py-0.5 rounded-lg glass text-xs sm:text-sm text-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="text-xs sm:text-sm font-semibold text-(--muted) uppercase tracking-wider">
            {t("about.education")}
          </span>
          <p className="mt-1.5 text-(--foreground)/90 text-sm sm:text-base">
            {t("about.educationValue")}
          </p>
        </div>

        <div>
          <span className="text-xs sm:text-sm font-semibold text-(--muted) uppercase tracking-wider">
            {t("about.languages")}
          </span>
          <p className="mt-1.5 text-(--foreground)/90 text-sm sm:text-base">
            {t("about.languagesValue")}
          </p>
        </div>
      </GlassCard>
    </section>
  );
}
