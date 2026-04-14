import { getRequestConfig } from "next-intl/server";
import { defaultLocale, locales, type Locale } from "@/i18n/routing";

function isLocale(value: string): value is Locale {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (locales as readonly any[]).includes(value);
}

export default getRequestConfig(async ({ requestLocale }) => {
  const maybeLocale = await requestLocale;
  const locale = maybeLocale && isLocale(maybeLocale) ? maybeLocale : defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});

