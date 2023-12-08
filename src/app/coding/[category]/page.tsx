import { ExternalLink } from "@/components/external-link";
import { Header } from "@/components/header";
import { Body, Container, Cover, Grid } from "@/components/list-item";
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
              <ExternalLink key={`post_${post.slug}-${i}`} href={post.slug}>
                <Container>
                  <Grid>
                    <Cover src={post.cover} alt={post.title || ""} />
                    <Body title={post.title} description={post.description} />
                  </Grid>
                </Container>
              </ExternalLink>
            );
          })}
        </div>
      </div>
    </ScrollArea>
  );
}
