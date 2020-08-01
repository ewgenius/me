import { GetStaticPaths } from "next";

export const getLangStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { lang: "en" } }, { params: { lang: "ru" } }],
    fallback: false,
  };
};
