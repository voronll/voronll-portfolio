import { Button } from "@/components/ui/Button";

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
    <section
      id="hero"
      className="relative flex flex-col items-start justify-start w-full"
    >
      <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8 w-full">
        {/* Foto: placeholder até você adicionar /public/photo.jpg */}
        <div className="relative shrink-0">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden glass-strong border-2 border-(--glass-border)">
            {/* Troque por <Image> quando tiver photo.jpg em public */}
            <div className="w-full h-full bg-white/5 flex items-center justify-center text-3xl sm:text-4xl font-bold text-foreground">
              V
            </div>
            {/* Descomente quando tiver a foto:
            <Image
              src={HERO.photo}
              alt="Foto de perfil"
              width={208}
              height={208}
              className="object-cover w-full h-full"
              priority
            />
            */}
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 min-w-0">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-foreground">
            {HERO.tagline}
          </h1>
          <span className="text-sm font-semibold text-(--muted) uppercase tracking-wider">
            {HERO.subtagline}
          </span>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <Button href="#projetos" variant="primary">
              {HERO.ctaProjects}
            </Button>
            <Button href={HERO.cvUrl} variant="secondary" download>
              {HERO.ctaCV}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
