import { Header } from "@/components/header";
import { ScrollArea } from "@/components/scroll-area";

export default function Page() {
  return (
    <ScrollArea>
      <Header />
      <div className="bg-white lg:h-[calc(100vh-2rem)] lg:m-4 lg:shadow-sm rounded-md p-8 overflow-auto">
        {/* <PageTitle title="Home" className="lg:hidden" /> */}

        {/* <Button asChild variant="link" className="inline px-0">
            <Link href="/writing">
              <h2 className="mb-4 mt-8">Writing</h2>
            </Link>
          </Button>
          <Suspense fallback={<LoadingSpinner />}>
            <WritingList items={sortedPosts} header="Writing" />
          </Suspense> */}
      </div>
    </ScrollArea>
  );
}
