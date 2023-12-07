import { cn } from "@/lib/utils";
import { FC, PropsWithChildren } from "react";

type Element = "div" | "ul" | "ol" | "section" | "article" | "main" | "aside";

export const ScrollArea: FC<
  PropsWithChildren & {
    className?: string;
    as?: Element;
  }
> = ({ className, as, ...rest }) => {
  const cnTw = cn("scrollable-area relative w-full", className);

  switch (as) {
    case "div":
      return <div className={cnTw} {...rest} />;
    case "ul":
      return <ul className={cnTw} {...rest} />;
    case "ol":
      return <ol className={cnTw} {...rest} />;
    case "section":
      return <section className={cnTw} {...rest} />;
    case "article":
      return <article className={cnTw} {...rest} />;
    case "main":
      return <main className={cnTw} {...rest} />;
    case "aside":
      return <aside className={cnTw} {...rest} />;
    default:
      return <div className={cnTw} {...rest} />;
  }
};
