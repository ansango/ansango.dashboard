import { BookmarkItem } from "@/components/bookmark-item";
import { BookmarkList } from "@/components/bookmark-list";
import { ListItem } from "@/components/generic-list-item";
import { Header } from "@/components/header";
import { ScrollArea } from "@/components/scroll-area";
import { Title } from "@/components/title";
import { getPostsGroupedByCategory } from "@/lib/coding";

import { capitalize } from "@/lib/utils";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const categories = await getPostsGroupedByCategory();
  return Object.keys(categories).map((category) => ({ category }));
}

export const revalidate = 0;

async function fetchData(category: string) {
  const categories = await getPostsGroupedByCategory();
  const [currentCategory, posts] = Object.entries(categories).find(
    ([key]) => key === category
  ) || [null, null];

  if (!currentCategory) notFound();
  if (!posts) notFound();

  return {
    category: capitalize(currentCategory),
    posts,
  };
}

export default async function CollectionPage({
  params,
}: {
  params: { category: string };
}) {
  const { category, posts } = await fetchData(params.category);

  return (
    <ScrollArea className="flex flex-col">
      <Header scrollTitle={category} goBackLink="/coding" />

      <div className="bg-white lg:h-[calc(100vh-2rem)] lg:m-4 lg:shadow-sm rounded-md overflow-auto">
        <div className="mx-auto w-full max-w-screen-2xl @container">
          <Title title={category} className="p-4" />
          {posts.map((post, i) => {
            return (
              <a
                key={`post_${post.slug}-${i}`}
                href={post.slug}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListItem
                  key={`post_${post.slug}-${i}`}
                  title={post.title || ""}
                  cover={post.cover}
                  description={post.description}
                />
              </a>
            );
          })}
        </div>
      </div>
    </ScrollArea>
  );
}
