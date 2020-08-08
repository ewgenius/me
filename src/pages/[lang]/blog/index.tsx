import { Layout } from "@components/Layout";
import { getLangStaticPaths } from "utils";
import { GetStaticProps } from "next";
import { PropsWithLocale } from "utils/withLocale";
import { getPosts, Post } from "utils/ghost";

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

  const posts = await getPosts();

  return {
    props: {
      messages,
      posts,
    },
  };
};

export const getStaticPaths = getLangStaticPaths;
