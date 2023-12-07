import { fetcher } from "./utils";

const baseUrl = "https://s-static-ansango.deno.dev/coding";
const absoluteUrl = "https://coding.ansango.com";
type Post = {
  title?: string;
  description?: string;
  date?: string;
  cover: string;
  category: string;
  slug: string;
};

type PostAllResponse = Array<Post>;

export async function getPosts() {
  try {
    const response = await fetcher<PostAllResponse>(`${baseUrl}/posts`);

    return response?.map((post) => ({
      ...post,
      slug: `${absoluteUrl}/${post.slug}`,
      cover: `${absoluteUrl}${post.cover}`.replace(".jpg", "-640w.webp"),
    }));
  } catch (error) {
    console.info(error);
    return null;
  }
}

export const getPostsGroupedByCategory = async (): Promise<
  Record<Post["category"], Post[]>
> => {
  const posts = await getPosts();

  const postsGroupedByCategory = posts?.reduce(
    (acc: Record<Post["category"], Post[]>, post) => {
      if (acc[post.category]) {
        acc[post.category].push(post);
      } else {
        acc[post.category] = [post];
      }
      return acc;
    },
    {}
  );

  return postsGroupedByCategory || {};
};
