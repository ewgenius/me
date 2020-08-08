import GhostContentAPI from "@tryghost/content-api";

export interface Post {
  slug: string;
  id: string;
  uuid: string;
  title: string;
  html: string;
  comment_id: string;
  feature_image: string;
  featured: boolean;
  visibility: string;
  send_email_when_published: boolean;
  created_at: string;
  updated_at: string;
  published_at: string;
  custom_excerpt?: any;
  codeinjection_head?: any;
  codeinjection_foot?: any;
  custom_template?: any;
  canonical_url?: any;
  url: string;
  excerpt: string;
  reading_time: number;
  access: boolean;
  og_image?: any;
  og_title?: any;
  og_description?: any;
  twitter_image?: any;
  twitter_title?: any;
  twitter_description?: any;
  meta_title?: any;
  meta_description?: any;
  email_subject?: any;
}

const ghostApi = new GhostContentAPI({
  url: "https://blog.ewgenius.me",
  key: process.env.GHOST_API_KEY,
  version: "v3",
});

export async function getPosts(): Promise<Post[]> {
  return ghostApi.posts.browse({
    limit: "all",
  });
}

export async function getPost(slug: string): Promise<Post> {
  return ghostApi.posts.read({
    slug,
  });
}
