import { fetcher } from "./utils";

export type Raindrop = {
  _id: number;
  link: string;
  title: string;
  excerpt: string;
  note: string;
  type: "link" | "image" | "video" | "article" | "rss";
  cover: string;
  media: Array<{
    type: "image";
    link: string;
  }>;
  tags: Array<string>;
  collectionId: number;
  domain: string;
};

export type RaindropsResponse = {
  result: boolean;
  items: Array<Raindrop>;
  count: number;
};

export type Collection = {
  _id: number;
  title: string;
  description: string;
  public: boolean;
  count: number;
  slug: string;
};

export type CollectionsResponse = {
  result: boolean;
  items: Array<Collection>;
};

export type CollectionResponse = {
  result: boolean;
  item: Collection;
};

const baseurl = "https://api.raindrop.io/rest/v1";
const excludedIds = [39737790];
const options: RequestInit = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_RAINDROP_ACCESS_TOKEN}`,
    "Content-Type": "application/json",
  },
};

export async function getCollections() {
  try {
    const response = await fetcher<CollectionsResponse>(
      `${baseurl}/collections`,
      options
    );

    return response?.items
      .filter((collection: Collection) => !excludedIds.includes(collection._id))
      .sort((a: Collection, b: Collection) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      });
  } catch (error) {
    console.info(error);
    return null;
  }
}

export async function getCollection(id: number) {
  try {
    const response = await fetcher<CollectionResponse>(
      `${baseurl}/collection/${id}`,
      options
    );
    return response?.item;
  } catch (error) {
    console.info(error);
    return null;
  }
}

export async function getRaindrops(id: number, pageIndex: number = 0) {
  try {
    return await fetcher<RaindropsResponse>(
      `${baseurl}/raindrops/${id}?` +
        new URLSearchParams({
          page: pageIndex,
          perpage: 50,
        } as unknown as URLSearchParams),
      options
    );
  } catch (error) {
    console.info(error);
    return null;
  }
}
