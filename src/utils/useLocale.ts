import { useRouter } from "next/router";
import { useCallback } from "react";

export type Locale = "ru" | "en";

export const useLocale = () => {
  const router = useRouter();

  const locale = router.locale || "en";

  const toggleLocale = useCallback(
    () =>
      router.push(router.pathname, router.pathname, {
        locale: locale === "ru" ? "en" : "ru",
      }),
    [router.asPath, locale]
  );

  return { locale, toggleLocale };
};
