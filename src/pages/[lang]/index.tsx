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
    <Layout>
      <header className="flex flex-col justify-center items-center pb-8">
        <img className="w-64" src="/images/avatar.png" alt="logo" />
        <h1 className="text-2xl font-bold">ewgenius</h1>
        <p className="text-gray-600">Making things...</p>
      </header>
      <div className="flex flex-col justify-center items-center">
        <nav className="">
          <Link as={`/${query.lang}/resume`} href="/[lang]/resume">
            <a className="flex items-center">
              <ArrowRight className="mr-1" size={16} />
              {messages["nav.resume"]}
            </a>
          </Link>
          {/* <Link href="/projects">
          <a className="flex items-center">
              <ArrowRight className="mr-1" size={16} />
            projects
          </a>
        </Link> */}
          {/* <Link href="/blog">
          <a className="flex items-center">
              <ArrowRight className="mr-1" size={16} />
            blog
          </a>
        </Link> */}
          <Link as={`/${query.lang}/contacts`} href="/[lang]/contacts">
            <a className="flex items-center">
              <ArrowRight className="mr-1" size={16} />
              {messages["nav.contacts"]}
            </a>
          </Link>
        </nav>
      </div>
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
