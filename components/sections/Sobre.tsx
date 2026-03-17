import { GlassCard } from "@/components/ui/GlassCard";

const SOBRE = {
  title: "Sobre",
  bio: `
Me chamo Eduardo, tenho 22 anos e sou um Desenvolvedor Full Stack apaixonado por Tecnologia da Informação e Segurança Cibernética. Sou um profissional curioso e motivado que adora explorar novas tecnologias, resolver problemas e aprender constantemente. Tenho experiência prática em projetar e desenvolver sistemas web, tanto em projetos acadêmicos quanto profissionais. 

Trabalho com stacks e ferramentas modernas, sempre buscando construir soluções eficientes e seguras. Também tenho um grande interesse em segurança cibernética, o que adiciona uma camada extra de cuidado aos sistemas que ajudo a criar. `,
  stackLabel: "Stacks principais",
  stack: ["React", "Next.js", "Node.js", "TypeScript", "JavaScript", "PostgreSQL", "Tailwind", "Docker", "Kotlin"],
  buildLabel: "Formação",
  build: "Graduado em Análise e Desenvolvimento de Sistemas pela Faculdade SENAC - Ponta Grossa, PR.",
  languagesLabel: "Idiomas",
  languages: ["Português (Nativo)", "Inglês (B2)"],
};

export function Sobre() {
  return (
    <section
      id="sobre"
      className="relative w-full min-w-0"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
        {SOBRE.title}
      </h2>

      <GlassCard className="p-5 sm:p-6 space-y-4">
        <p className="text-(--foreground)/90 leading-relaxed text-sm sm:text-base whitespace-pre-line">
          {SOBRE.bio}
        </p>

        <div>
          <span className="text-xs sm:text-sm font-semibold text-(--muted) uppercase tracking-wider">
            {SOBRE.stackLabel}
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
            {SOBRE.buildLabel}
          </span>
          <p className="mt-1.5 text-(--foreground)/90 text-sm sm:text-base">
            {SOBRE.build}
          </p>
        </div>

        <div>
          <span className="text-xs sm:text-sm font-semibold text-(--muted) uppercase tracking-wider">
            {SOBRE.languagesLabel}
          </span>
          <p className="mt-1.5 text-(--foreground)/90 text-sm sm:text-base">
            {SOBRE.languages.join(", ")}
          </p>
        </div>
      </GlassCard>
    </section>
  );
}
