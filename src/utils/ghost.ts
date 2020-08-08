import GhostContentAPI from "@tryghost/content-api";
import { Post } from "utils/post";

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
