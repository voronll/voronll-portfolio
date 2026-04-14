"use client";

import { useMemo } from "react";
import { useParams, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { locales, type Locale } from "@/i18n/routing";

function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
}

function stripLeadingLocalePrefix(pathname: string, locale: Locale) {
  const prefix = `/${locale}`;
  if (pathname === prefix) return "/";
  if (pathname.startsWith(`${prefix}/`)) return pathname.slice(prefix.length) || "/";
  return pathname;
}

function buildLocalizedPath(targetLocale: Locale, pathnameWithoutLocale: string) {
  if (pathnameWithoutLocale === "/") return `/${targetLocale}`;
  return `/${targetLocale}${pathnameWithoutLocale}`;
}

function setNextIntlLocaleCookie(locale: Locale) {
  // Mirrors next-intl defaults (see receiveRoutingConfig): name=NEXT_LOCALE, sameSite=lax
  document.cookie = `NEXT_LOCALE=${encodeURIComponent(locale)}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

export function LocaleSwitcher() {
  const t = useTranslations("localeSwitcher");
  const pathname = usePathname();
  const params = useParams();

  const locale = useMemo(() => {
    const fromParams = params?.locale;
    return isLocale(fromParams) ? fromParams : undefined;
  }, [params]);

  const pathnameWithoutLocale = useMemo(() => {
    if (!locale) return pathname || "/";
    return stripLeadingLocalePrefix(pathname || "/", locale);
  }, [locale, pathname]);

  if (!locale) return null;

  const hrefPt = buildLocalizedPath("pt-BR", pathnameWithoutLocale);
  const hrefEn = buildLocalizedPath("en-US", pathnameWithoutLocale);

  return (
    <div
      className="glass inline-flex items-center rounded-xl p-1 border border-white/10"
      role="group"
      aria-label={t("groupAriaLabel")}
    >
      <span className="relative inline-flex items-center rounded-lg overflow-hidden">
        <span
          className={`glass-strong absolute inset-0 w-1/2 rounded-lg border border-(--glass-border) transition-transform duration-300 ${
            locale === "pt-BR" ? "translate-x-0" : "translate-x-full"
          }`}
          aria-hidden="true"
        />

        <a
          href={hrefPt}
          onClick={() => setNextIntlLocaleCookie("pt-BR")}
          className={`relative z-10 h-9 px-3 text-xs font-semibold tracking-wide rounded-lg inline-flex items-center justify-center transition-colors ${
            locale === "pt-BR" ? "text-foreground" : "text-(--muted) hover:text-foreground"
          }`}
          aria-current={locale === "pt-BR" ? "true" : undefined}
        >
          PT
        </a>

        <a
          href={hrefEn}
          onClick={() => setNextIntlLocaleCookie("en-US")}
          className={`relative z-10 h-9 px-3 text-xs font-semibold tracking-wide rounded-lg inline-flex items-center justify-center transition-colors ${
            locale === "en-US" ? "text-foreground" : "text-(--muted) hover:text-foreground"
          }`}
          aria-current={locale === "en-US" ? "true" : undefined}
        >
          EN
        </a>
      </span>
    </div>
  );
}
