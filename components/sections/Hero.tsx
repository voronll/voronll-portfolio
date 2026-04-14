import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import GithubLogoIcon from "@/components/icons/github";
import LinkedinLogoIcon from "@/components/icons/linkedin";
import InstagramLogoIcon from "@/components/icons/instagram";
import { useTranslations } from "next-intl";

const HERO = {
  cvUrl: "/curriculo.pdf",
  photo: "/images/hero-wbg.png",
  linkedinUrl: "https://www.linkedin.com/in/eduardo-bachosky-da-silveira-925111202/",
  githubUrl: "https://github.com/voronll",
  instagramUrl: "https://www.instagram.com/eduardoinsano/",
};

const iconSize = 48;
const iconClassName = "text-foreground hover:text-(--muted) transition-colors";

export function Hero() {
  const t = useTranslations();

  return (
    <GlassCard strong className="group p-8 sm:p-10 flex flex-col items-center text-center w-full max-w-[24rem] mx-auto">
      <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden glass border-2 border-(--glass-border) mb-8 relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO.photo}
          alt={t("hero.profilePhotoAlt")}
          className="object-cover w-full h-full size-full grayscale transition-[filter] duration-300 ease-out group-hover:grayscale-0"
        />
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
        {t("hero.name")}
      </h1>
      <span className="text-sm sm:text-base font-semibold text-(--muted) uppercase tracking-wider mb-6">
        {t("hero.role")}
      </span>

      {/* Ícones sociais */}
      <div className="flex items-center justify-center gap-5 mb-6">
        <a href={HERO.linkedinUrl} target="_blank" rel="noopener noreferrer" className={iconClassName} aria-label={t("hero.social.linkedin")}>
          <LinkedinLogoIcon size={iconSize} color="currentColor" strokeWidth={0.1} />
        </a>
        <a href={HERO.githubUrl} target="_blank" rel="noopener noreferrer" className={iconClassName} aria-label={t("hero.social.github")}>
          <GithubLogoIcon size={iconSize} color="currentColor" strokeWidth={0.1} />
        </a>
        <a href={HERO.instagramUrl} target="_blank" rel="noopener noreferrer" className={iconClassName} aria-label={t("hero.social.instagram")}>
          <InstagramLogoIcon size={iconSize} color="currentColor" strokeWidth={0.1} />
        </a>
      </div>

      <div className="w-full">
        <Button href={HERO.cvUrl} variant="secondary" download className="w-full justify-center">
          {t("hero.downloadCv")}
        </Button>
      </div>
    </GlassCard>
  );
}
