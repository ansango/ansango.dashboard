import { cn } from "@/lib/utils";
import { FC, PropsWithChildren, ReactNode } from "react";

export const Title: FC<
  PropsWithChildren & {
    className?: string;
  }
> = ({ children, className }) => {
  return <h3 className={cn("font-medium", className)}>{children}</h3>;
};

export const Description: FC<
  PropsWithChildren & {
    className?: string;
  }
> = ({ children, className }) => {
  return <p className={cn("text-neutral-600 line-clamp-3", className)}>{children}</p>;
};

export const Body: FC<
  PropsWithChildren & {
    title?: ReactNode;
    description?: ReactNode;
    className?: string;
  }
> = ({ children, title, description, className }) => {
  return (
    <div className={cn("col-span-10", className)}>
      {!children && (
        <>
          {title && <Title>{title}</Title>}
          {description && <Description>{description}</Description>}
        </>
      )}
      {children}
    </div>
  );
};
