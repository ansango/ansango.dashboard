"use client";

import { MOBILE_SCROLL_THRESHOLD, SCROLL_AREA_ID } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NamedExoticComponent,
  PropsWithChildren,
  memo,
  useEffect,
  useState,
} from "react";
import { Drawer } from "./drawer";
import Balancer from "react-wrap-balancer";
import { ArrowLeft, Feed } from "./icons";
import { Button } from "./ui/button";

const Header: NamedExoticComponent<
  PropsWithChildren & {
    scrollTitle?: string;
    title?: string;
    goBackLink?: string;
  }
> = memo(({ scrollTitle, title, goBackLink, children }) => {
  const pathname = usePathname();
  const isCodingPath = pathname === "/coding";
  const isBookmarksPath = pathname === "/bookmarks";
  const [transformValues, setTransformValues] = useState({
    translateY: 0,
    opacity: scrollTitle ? 0 : 1,
  });

  useEffect(() => {
    const scrollAreaElem = document.querySelector(
      `#${SCROLL_AREA_ID}`
    ) as HTMLDivElement;

    const onScroll = (e: Event) => {
      const scrollY = (e.target as HTMLDivElement).scrollTop;

      const translateY = Math.max(100 - scrollY, 0);
      const opacity = Math.min(
        Math.max(
          (
            (scrollY -
              MOBILE_SCROLL_THRESHOLD *
                (MOBILE_SCROLL_THRESHOLD / (scrollY ** 2 / 100))) /
            100
          ).toFixed(2) as unknown as number,
          0
        ),
        1
      );

      setTransformValues({ translateY, opacity });
    };

    if (scrollTitle) {
      scrollAreaElem?.addEventListener("scroll", onScroll, {
        passive: true,
      });
    }
    return () => scrollAreaElem?.removeEventListener("scroll", onScroll);
  }, [scrollTitle]);

  return (
    <header className="sticky inset-x-0 top-0 z-10 mx-auto flex h-12 w-full shrink-0 items-center overflow-hidden border-b bg-white text-sm font-medium lg:hidden">
      <div className="flex h-full w-full items-center px-3">
        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex flex-1 items-center gap-1">
            {goBackLink ? (
              <Button variant="ghost" size="icon" className="shrink-0" asChild>
                <Link href={goBackLink} title="Go back">
                  <ArrowLeft />
                </Link>
              </Button>
            ) : (
              <Drawer />
            )}
            <div className="flex flex-1 items-center justify-between">
              {scrollTitle && (
                <span
                  className="line-clamp-2 font-semibold tracking-tight"
                  style={{
                    transform: `translateY(${transformValues.translateY}%)`,
                    opacity: transformValues.opacity,
                  }}
                >
                  {scrollTitle}
                </span>
              )}
              {title && (
                <Balancer ratio={0.35}>
                  <span className="line-clamp-2 font-semibold tracking-tight">
                    {title}
                  </span>
                </Balancer>
              )}
              {(isCodingPath || isBookmarksPath) && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0"
                  asChild
                >
                  <Link
                    href={isCodingPath ? "/writing.xml" : "/bookmarks.xml"}
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
          {scrollTitle && (
            <div className="flex min-w-[50px] justify-end">{children}</div>
          )}
        </div>
      </div>
    </header>
  );
});

Header.displayName = "Header";

export { Header };
