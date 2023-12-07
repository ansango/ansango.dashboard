import { Header } from "@/components/header";
import { ScrollArea } from "@/components/scroll-area";
import { Title } from "@/components/title";
import { getCollections } from "@/lib/raindrop";
import Link from "next/link";

async function fetchData() {
  const collections = await getCollections();

  return { collections };
}

export default async function Page() {
  const { collections } = await fetchData();
  return (
    <ScrollArea>
      <Header title="Bookmarks" />
      <div className="bg-white lg:h-[calc(100vh-2rem)] lg:m-4 lg:shadow-sm rounded-md lg:p-8 overflow-auto">
        <ul className="lg:hidden">
          {collections?.map((collection) => {
            return (
              <Link
                key={collection._id}
                href={`/bookmarks/${collection.slug}`}
                className="flex flex-col gap-1 border-b px-4 py-3 text-sm hover:bg-neutral-100"
              >
                <span className="font-medium">{collection.title}</span>
                <span className="text-neutral-500">
                  {collection.count} bookmarks
                </span>
              </Link>
            );
          })}
        </ul>
      </div>
    </ScrollArea>
  );
}
