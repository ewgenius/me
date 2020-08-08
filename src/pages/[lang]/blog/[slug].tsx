import { Layout } from "@components/Layout";
import { GetStaticPaths, GetStaticProps } from "next";
import { PropsWithLocale } from "utils/withLocale";
import { getPosts, getPost, Post } from "utils/ghost";

export type PostViewProps = PropsWithLocale<{
  post: Post;
}>;

export default function PostView({ post }: PostViewProps) {
  return (
    <Layout title={post.title} description={post.meta_description}>
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
  const post = await getPost(params.slug as string);

  return {
    props: {
      messages,
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts: Post[] = await getPosts();
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
