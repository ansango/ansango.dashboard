import { cn } from "@/lib/utils";
import { FC, PropsWithChildren } from "react";

export const Grid: FC<
  PropsWithChildren & {
    className?: string;
  }
> = ({ children, className }) => {
  const cls = cn("grid grid-cols-12 gap-5", className);
  return <div className={cls}>{children}</div>;
};
