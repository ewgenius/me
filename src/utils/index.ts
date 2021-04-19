import { GetStaticPaths, GetStaticProps } from "next";
import { PropsWithLocale } from "./withLocale";

export const getLocaleStaticPaths: GetStaticPaths = async ({ locales }) => {
  return {
    paths: locales.map((locale) => ({ params: { locale } })),
    fallback: false,
  };
};

export const getLocaleStaticProps: GetStaticProps<PropsWithLocale> = async ({
  locale,
}) => {
  const messages = require(`../content/${locale}/messages.json`);
  return {
    props: {
      messages,
    },
  };
};
