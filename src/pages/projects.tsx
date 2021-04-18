import { Layout } from "@components/Layout";
import { GetStaticProps } from "next";
import { getLocaleStaticPaths } from "utils";

export default function Projects() {
  return <Layout title="Projects"></Layout>;
}

export const getStaticProps: GetStaticProps<{}> = async () => {
  return {
    props: {},
  };
};

export const getStaticPaths = getLocaleStaticPaths;
