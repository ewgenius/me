import { useRouter } from "next/router";
import { useCallback } from "react";

export type Lang = "ru" | "en";

export const useLocale = () => {
  const router = useRouter();

  const lang = (router.query.lang as Lang) || "en";

  const toggleLang = useCallback(
    () =>
      router.push(
        router.pathname,
        router.asPath.replace(lang, lang === "ru" ? "en" : "ru")
      ),
    [router.asPath, lang]
  );

  return { lang, toggleLang };
};
