import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";

export const Cover: FC<{
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}> = ({ src, alt, className, height = 100, width = 100 }) => {
  const cls = cn(
    "col-span-2 @3xl:col-span-1 aspect-[1/1] rounded-lg border bg-[url('/assets/fallback.webp')] bg-cover bg-center bg-no-repeat object-cover",
    className
  );
  return (
    <Image
      {...{
        alt,
        width,
        height,
        src,
      }}
      className={cls}
    />
  );
};
