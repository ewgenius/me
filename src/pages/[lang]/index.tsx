import { useRouter } from "next/router";
import Link from "next/link";
import { ArrowRight } from "react-feather";
import { Layout } from "@components/Layout";
import { GetStaticProps } from "next";
import { getLangStaticPaths } from "utils";
import { PropsWithLocale } from "utils/withLocale";

export default function Home({ messages }: PropsWithLocale) {
  const { query } = useRouter();

  return (
    <Layout center>
      <img className="avatar" src="/images/avatar.png" alt="logo" />
      <h1 className="title">ewgenius</h1>
      <p className="description">Making things...</p>
      <nav>
        <Link as={`/${query.lang}/resume`} href="/[lang]/resume">
          <a>
            <ArrowRight size={16} />
            {messages["nav.resume"]}
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
        <Link as={`/${query.lang}/contacts`} href="/[lang]/contacts">
          <a>
            <ArrowRight size={16} />
            {messages["nav.contacts"]}
          </a>
        </Link>
      </nav>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<PropsWithLocale> = async ({
  params,
}) => {
  const lang = params.lang;
  const messages = require(`../../content/${lang}/messages.json`);
  return {
    props: {
      messages,
    },
  };
};

export const getStaticPaths = getLangStaticPaths;
