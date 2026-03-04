import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";

const HERO = {
  tagline: "Eduardo Bachosky",
  subtagline: "Analista e Desenvolvedor de Sistemas",
  ctaProjects: "Ver projetos",
  ctaCV: "Baixar CV",
  cvUrl: "/cv.pdf",
  photo: "/photo.jpg",
};

export function Hero() {
  return (
    <GlassCard strong className="p-6 sm:p-8 flex flex-col items-center text-center w-full max-w-[18rem] mx-auto">
      {/* Foto maior — placeholder até você adicionar /public/photo.jpg */}
      <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden glass border-2 border-(--glass-border) mb-6">
        <div className="w-full h-full bg-white/5 flex items-center justify-center text-5xl sm:text-6xl font-bold text-foreground">
          V
        </div>
        {/* Descomente quando tiver a foto:
        <Image
          src={HERO.photo}
          alt="Foto de perfil"
          width={192}
          height={192}
          className="object-cover w-full h-full"
          priority
        />
        */}
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
        {HERO.tagline}
      </h1>
      <span className="text-xs sm:text-sm font-semibold text-(--muted) uppercase tracking-wider mb-6">
        {HERO.subtagline}
      </span>

      <div className="flex flex-col gap-2 w-full">
        <Button href="#projetos" variant="primary" className="w-full justify-center">
          {HERO.ctaProjects}
        </Button>
        <Button href={HERO.cvUrl} variant="secondary" download className="w-full justify-center">
          {HERO.ctaCV}
        </Button>
      </div>
    </GlassCard>
  );
}
