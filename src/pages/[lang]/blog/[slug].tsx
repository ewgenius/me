import { Layout } from "@components/Layout";
import { GetServerSideProps } from "next";
import GhostContentAPI from "@tryghost/content-api";
import { PropsWithLocale } from "utils/withLocale";
import { Post } from "@data/post";
// import { getLangStaticPaths } from "utils";

export type PostViewProps = PropsWithLocale<{
  post: Post;
}>;

export default function PostView({ post }: PostViewProps) {
  return (
    <Layout title={post.title}>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<PostViewProps> = async ({
  params,
}) => {
  const lang = params.lang;
  const messages = require(`../../../content/${lang}/messages.json`);

  const ghostApi = new GhostContentAPI({
    url: "https://blog.ewgenius.me",
    key: "fe03ac3555290484c0bdc1aa99",
    version: "v3",
  });

  const post = await ghostApi.posts.read({
    slug: params.slug,
  });

  return {
    props: {
      messages,
      post,
    },
  };
};

// export const getStaticPaths = getLangStaticPaths;
