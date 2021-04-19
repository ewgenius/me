import { GetStaticProps } from "next";
import { PropsWithLocale } from "./withLocale";

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
