import { Layout } from "@components/Layout";
import { getLangStaticPaths } from "utils";
import { GetStaticProps } from "next";

export default function Blog() {
  return <Layout title="Blog"></Layout>;
}

export const getStaticProps: GetStaticProps<{}> = async () => {
  return {
    props: {},
  };
};

export const getStaticPaths = getLangStaticPaths;
