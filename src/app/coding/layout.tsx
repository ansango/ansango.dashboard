import { NavigationItem } from "@/components/navigation-item";
import { Navigation } from "@/components/navigation";
import { Spinner } from "@/components/spinner";
import { getPostsGroupedByCategory } from "@/lib/coding";
import { capitalize } from "@/lib/utils";
import { PropsWithChildren, Suspense } from "react";

export const revalidate = 0;

async function fetchData() {
  const categories = await getPostsGroupedByCategory();
  return { categories };
}

export default async function Layout({ children }: PropsWithChildren) {
  const { categories } = await fetchData();

  return (
    <div className="flex w-full">
      <Navigation title="Coding" href="/bookmarks" isInner>
        <Suspense fallback={<Spinner />}>
          <div className="flex flex-col gap-1 text-sm">
            {Object.entries(categories).map(([category, posts]) => {
              return (
                <NavigationItem
                  key={category}
                  title={capitalize(category)}
                  path={`/coding/${category}`}
                  description={`${posts.length} posts`}
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
