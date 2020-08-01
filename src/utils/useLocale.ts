import { useRouter } from "next/router";
import { useCallback } from "react";

export type Lang = "ru" | "en";

export const useLocale = () => {
  const router = useRouter();

  const lang = (router.query.lang as Lang) || "en";

  const setLang = useCallback(
    (newLang: Lang) => {
      const route = router.asPath.substr(3);
      router.push(`/${newLang}${route}`);
    },
    [router.asPath]
  );

  const toggleLang = useCallback(() => setLang(lang === "en" ? "ru" : "en"), [
    lang,
  ]);

  return { lang, setLang, toggleLang };
};
