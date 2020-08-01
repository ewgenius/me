import { useRouter } from "next/router";
import Link from "next/link";
import { ArrowRight } from "react-feather";
import { Layout } from "@components/Layout";
import { GetStaticProps } from "next";
import { getLangStaticPaths } from "utils";

export default function Home() {
  const { query } = useRouter();

  return (
    <Layout>
      <img className="avatar" src="/images/avatar.png" alt="logo" />
      <h1 className="title">ewgenius</h1>
      <p className="description">Making things...</p>
      <nav>
        <Link href={`/${query.lang}/resume`}>
          <a>
            <ArrowRight size={16} />
            resume
          </a>
        </Link>
        {/* <Link href="/projects">
          <a>
            <ArrowRight size={16} />
            projects
          </a>
        </Link> */}
        {/* <Link href="/blog">
          <a>
            <ArrowRight size={16} />
            blog
          </a>
        </Link> */}
        <Link href="/contacts">
          <a>
            <ArrowRight size={16} />
            contacts
          </a>
        </Link>
      </nav>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<{}> = async () => {
  return {
    props: {},
  };
};

export const getStaticPaths = getLangStaticPaths;
