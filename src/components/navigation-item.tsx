"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { FC } from "react";

type Props = {
  title: string;
  description?: string;
  path: string;
};

export const NavigationItem: FC<Props> = ({ title, description, path }) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link
      key={path}
      href={path}
      className={cn(
        "flex flex-col gap-1 rounded-lg p-2 transition-colors duration-300 [&>*]:transition-colors [&>*]:duration-300",
        isActive ? "bg-black" : "hover:bg-neutral-200"
      )}
    >
      <span className={cn("font-medium", isActive && "text-white")}>
        {title}
      </span>
      {description && (
        <span className={cn(isActive ? "text-neutral-300" : "text-neutral-500")}>
          {description}
        </span>
      )}
    </Link>
  );
};
