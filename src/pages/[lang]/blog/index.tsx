import Link from "next/link";
import { GetStaticProps } from "next";
import { format } from "date-fns";
import { Layout } from "@components/Layout";
import { getLangStaticPaths } from "utils";
import { PropsWithLocale } from "utils/withLocale";
import { getPosts } from "utils/ghost";
import { Post } from "utils/post";
import { useLocale } from "utils/useLocale";

export type BlogProps = PropsWithLocale<{
  posts: Post[];
}>;

export default function Blog({ posts, messages }: BlogProps) {
  const { lang } = useLocale();

  return (
    <Layout title={messages["page.blog"]}>
      {posts.length === 0 && (
        <div className="text-center text-gray-600 my-32">
          Nothing here yet...
        </div>
      )}
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
  // const messages = require(`../../../content/${lang}/messages.json`);

  // const posts = await getPosts();

  return {
    props: {
      messages: [],
      posts: [],
    },
  };
};

export const getStaticPaths = getLangStaticPaths;
