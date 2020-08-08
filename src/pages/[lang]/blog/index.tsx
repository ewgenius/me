import { Layout } from "@components/Layout";
import { getLangStaticPaths } from "utils";
import { GetStaticProps } from "next";
import { PropsWithLocale } from "utils/withLocale";
import { getPosts, Post } from "utils/ghost";
import Link from "next/link";
import { useLocale } from "utils/useLocale";
import { format } from "date-fns";

export type BlogProps = PropsWithLocale<{
  posts: Post[];
}>;

export default function Blog({ posts }: BlogProps) {
  const { lang } = useLocale();

  return (
    <Layout title="Blog">
      {posts.map((post) => (
        <Link
          key={post.id}
          as={`/${lang}/blog/${post.slug}`}
          href="/[lang]/blog/[slug]"
        >
          <a className="flex flex-col mb-8 overflow-hidden border rounded-lg w-full hover:shadow-lg transition-all">
            {post.feature_image && (
              <div className="relative h-64 overflow-hidden">
                <img
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src={post.feature_image}
                />
              </div>
            )}
            <div className="py-4 px-4">
              <p className="text-gray-800 text-xl font-bold">{post.title}</p>
              <p className="text-gray-600">
                {format(new Date(post.published_at), "yyyy/MM/dd")}
              </p>
              <p className="mt-2 text-gray-600">
                {post.custom_excerpt || post.excerpt}...
              </p>
            </div>
          </a>
        </Link>
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
