import { GetStaticPaths } from "next";

export const getLocaleStaticPaths: GetStaticPaths = async ({ locales }) => {
  return {
    paths: locales.map((locale) => ({ params: { locale } })),
    fallback: false,
  };
};
