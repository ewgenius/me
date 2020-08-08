import { Layout } from "@components/Layout";
import { getLangStaticPaths } from "utils";
import { GetStaticProps } from "next";
import GhostContentAPI from "@tryghost/content-api";
import { PropsWithLocale } from "utils/withLocale";
import { Post } from "@data/post";

export type BlogProps = PropsWithLocale<{
  posts: Post[];
}>;

export default function Blog({ posts }: BlogProps) {
  return (
    <Layout title="Blog">
      {posts.map((post) => (
        <p>
          {post.title} {post.slug}
        </p>
      ))}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<BlogProps> = async ({ params }) => {
  const lang = params.lang;
  const messages = require(`../../../content/${lang}/messages.json`);

  const ghostApi = new GhostContentAPI({
    url: "https://blog.ewgenius.me",
    key: "fe03ac3555290484c0bdc1aa99",
    version: "v3",
  });

  const posts = await ghostApi.posts.browse({
    limit: "all",
  });

  console.log(posts);

  return {
    props: {
      messages,
      posts,
    },
  };
};

export const getStaticPaths = getLangStaticPaths;
