import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { locales, type Locale } from "@/i18n/routing";
import { SiteHeader } from "@/components/SiteHeader";

function isLocale(value: string): value is Locale {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (locales as readonly any[]).includes(value);
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const messages = (await import(`../../messages/${locale}.json`)).default as {
    meta?: { title?: string; description?: string };
  };

  return {
    title: messages.meta?.title ?? "Portfolio",
    description: messages.meta?.description,
    alternates: {
      languages: {
        "pt-BR": "/pt-BR",
        "en-US": "/en-US",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <SiteHeader />
      {children}
    </NextIntlClientProvider>
  );
}

