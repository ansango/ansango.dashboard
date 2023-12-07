import { cn } from "@/lib/utils";
import { FC, PropsWithChildren } from "react";

export const Container: FC<
  PropsWithChildren & {
    className?: string;
  }
> = ({ children, className }) => {
  const cls = cn(
    "flex flex-col gap-1 border-b lg:border-0 px-4 py-3 text-sm hover:bg-neutral-100",
    className
  );
  return <div className={cls}>{children}</div>;
};
