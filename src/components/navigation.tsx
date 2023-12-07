import { cn } from "@/lib/utils";
import { ScrollArea } from "./scroll-area";
import { FC, PropsWithChildren } from "react";
import Link from "next/link";
import { Feed } from "./icons";
import { Button } from "./ui/button";

export const Navigation: FC<
  PropsWithChildren & {
    title?: string;
    href?: string;
    isInner?: boolean;
  }
> = ({ children, title, href, isInner }) => {
  const isWritingHref = href === "/writing";
  const isBookmarksHref = href === "/bookmarks";

  return (
    <ScrollArea
      className={cn(
        "hidden bg-neutral-50 lg:flex lg:flex-col",
        isInner ? "lg:w-80 xl:w-96 lg:border-l" : "lg:w-60 xl:w-72"
      )}
    >
      {title && (
        <div className="sticky top-0 z-10 border-b bg-neutral-50 px-5 py-3">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold tracking-tight">
              {href ? <Link href={href}>{title}</Link> : <span>{title}</span>}
            </div>
            {(isWritingHref || isBookmarksHref) && (
              <Button variant="ghost" size="icon" className="shrink-0" asChild>
                <Link
                  href={isWritingHref ? "/writing.xml" : "/bookmarks.xml"}
                  title="RSS feed"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Feed className="w-5 h-5" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      )}
      <div className="bg-neutral-50 p-3">{children}</div>
    </ScrollArea>
  );
};
