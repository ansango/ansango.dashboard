import { BookmarkList } from "@/components/bookmark-list";
import { Header } from "@/components/header";
import { ScrollArea } from "@/components/scroll-area";
import { Title } from "@/components/title";
import { getCollection, getCollections, getRaindrops } from "@/lib/raindrop";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const collections = await getCollections();
  return collections?.map((collection) => ({ slug: collection.slug }));
}

export const revalidate = 0;

async function fetchData(slug: string) {
  const collections = await getCollections();
  const currentCollection = collections?.find(
    (collection) => collection.slug === slug
  );

  if (!currentCollection) notFound();

  const collection = await getCollection(currentCollection._id);

  if (!collection) notFound();
  const raindrops = await getRaindrops(currentCollection._id);

  return {
    collection,
    raindrops,
  };
}

export default async function CollectionPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const { collection, raindrops } = await fetchData(slug);

  return (
    <ScrollArea className="flex flex-col">
      <Header scrollTitle={collection.title} goBackLink="/bookmarks" />

      <div className="bg-white lg:h-[calc(100vh-2rem)] lg:m-4 lg:shadow-sm rounded-md overflow-auto">
        <div className="mx-auto w-full max-w-screen-2xl @container">
          <Title title={collection.title} className="p-4" />
          {raindrops && (
            <BookmarkList id={collection._id} initialData={raindrops} />
          )}
        </div>
      </div>
    </ScrollArea>
  );
}
