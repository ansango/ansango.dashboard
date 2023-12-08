import { FC, PropsWithChildren } from "react";

export const ExternalLink: FC<
  PropsWithChildren & {
    className?: string;
    href: string;
  }
> = ({ children, className, href }) => {
  return (
    <a
      {...{ href }}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
