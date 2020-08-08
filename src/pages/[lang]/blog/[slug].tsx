import { Layout } from "@components/Layout";
import { GetStaticPaths, GetStaticProps } from "next";
import GhostContentAPI from "@tryghost/content-api";
import { PropsWithLocale } from "utils/withLocale";
import { Post } from "@data/post";

export type PostViewProps = PropsWithLocale<{
  post: Post;
}>;

export default function PostView({ post }: PostViewProps) {
  return (
    <Layout title={post.title}>
      {post.feature_image && (
        <img className="rounded-lg" src={post.feature_image} />
      )}
      <div
        className="mt-4 mb-16 prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<PostViewProps> = async ({
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

export const getStaticPaths: GetStaticPaths = async () => {
  const ghostApi = new GhostContentAPI({
    url: "https://blog.ewgenius.me",
    key: "fe03ac3555290484c0bdc1aa99",
    version: "v3",
  });

  const posts: Post[] = await ghostApi.posts.browse({
    limit: "all",
  });

  const paths: { params: { lang: string; slug: string } }[] = posts.reduce(
    (list, post) => {
      return [
        ...list,
        { params: { lang: "en", slug: post.slug } },
        { params: { lang: "ru", slug: post.slug } },
      ];
    },
    []
  );

  return {
    paths,
    fallback: false,
  };
};
