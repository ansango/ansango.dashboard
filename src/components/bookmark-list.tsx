"use client";

import { useEffect, useState, useCallback, useMemo, FC } from "react";

import { Raindrop, RaindropsResponse, getRaindrops } from "@/lib/raindrop";

import { Button } from "./ui/button";
import { ClipLink, PlusCircle } from "./icons";
import { Body, Container, Cover, Description, Grid, Title } from "./list-item";
import { ExternalLink } from "./external-link";

import { Badge } from "@/components/ui/badge";

export const BookmarkItem: FC<{ bookmark: Raindrop }> = ({
  bookmark: { title, cover, domain, excerpt, tags, link },
}) => {
  return (
    <ExternalLink href={link}>
      <Container>
        <Grid>
          <Cover src={cover} alt={title} />
          <Body>
            <Title>{title}</Title>

            <Description className="text-neutral-500">
              <ClipLink className="inline-flex" /> <span>{domain}</span>
            </Description>

            <Description className="mt-1">{excerpt}</Description>
            <div className="flex flex-wrap gap-2 mt-1">
              {tags.map((tag) => (
                <Badge key={tag} variant={"outline"}>
                  {tag}
                </Badge>
              ))}
            </div>
          </Body>
        </Grid>
      </Container>
    </ExternalLink>
  );
};

export const BookmarkList: FC<{
  initialData: RaindropsResponse;
  id: number;
}> = ({ initialData, id }) => {
  const [data, setData] = useState(initialData.items);
  const [pageIndex, setPageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    if (!isReachingEnd && !isLoading)
      setPageIndex((prevPageIndex) => prevPageIndex + 1);
  };

  const fetchInfiniteData = useCallback(async () => {
    setIsLoading(true);
    const newData = await getRaindrops(id, pageIndex);
    setData((prevData) => (newData && [...prevData, ...newData.items]) || []);
    setIsLoading(false);
  }, [id, pageIndex]);

  useEffect(() => {
    if (pageIndex > 0) fetchInfiniteData();
  }, [pageIndex, fetchInfiniteData]);

  const getChunks = useCallback(() => {
    const firstChunk: any[] = [];
    const lastChunk: any[] = [];
    data.forEach((element, index) => {
      if (index % 2 === 0) {
        firstChunk.push(element);
      } else {
        lastChunk.push(element);
      }
    });
    return [[...firstChunk], [...lastChunk]];
  }, [data]);

  const chunks = useMemo(() => getChunks(), [getChunks]);
  const isReachingEnd = data.length >= initialData.count;

  return (
    <>
      <div className="flex flex-col gap-4 @lg:hidden">
        {data.map((bookmark, bookmarkIndex) => {
          return (
            <BookmarkItem
              key={`bookmark_${bookmarkIndex}`}
              bookmark={bookmark}
            />
          );
        })}
      </div>
      <div className="hidden @lg:grid @7xl:grid-cols-2 @lg:gap-4">
        {chunks.map((chunk, chunkIndex) => {
          return (
            <div key={`chunk_${chunkIndex}`}>
              {chunk.map((bookmark: Raindrop) => {
                return (
                  <BookmarkItem
                    key={`bookmark_${bookmark._id}`}
                    bookmark={bookmark}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="mt-8 flex min-h-[4rem] items-center justify-center text-sm lg:mt-12">
        {!isReachingEnd && (
          <>
            {isLoading ? (
              <div
                className="inline-block h-4 w-4 animate-spin rounded-full border-[2px] border-current border-t-transparent text-black"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <Button
                variant="ghost"
                size={"icon"}
                onClick={handleLoadMore}
                disabled={isLoading}
              >
                <PlusCircle className="w-5 h-5" />
              </Button>
            )}
          </>
        )}
      </div>
    </>
  );
};
