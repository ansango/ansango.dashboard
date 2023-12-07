import { NavigationItem } from "@/components/navigation-item";
import { Navigation } from "@/components/navigation";
import { Spinner } from "@/components/spinner";
import { getCollections } from "@/lib/raindrop";
import { PropsWithChildren, Suspense } from "react";

export const revalidate = 0;

async function fetchData() {
  const collections = await getCollections();
  return { collections };
}

export default async function Layout({ children }: PropsWithChildren) {
  const { collections } = await fetchData();

  return (
    <div className="flex w-full">
      <Navigation title="Bookmarks" href="/bookmarks" isInner>
        <Suspense fallback={<Spinner />}>
          <div className="flex flex-col gap-1 text-sm">
            {collections?.map((collection) => {
              return (
                <NavigationItem
                  key={collection._id}
                  title={collection.title}
                  path={`/bookmarks/${collection.slug}`}
                  description={`${collection.count} bookmarks`}
                />
              );
            })}
          </div>
        </Suspense>
      </Navigation>
      <div className="lg:bg-grid flex-1">{children}</div>
    </div>
  );
}
