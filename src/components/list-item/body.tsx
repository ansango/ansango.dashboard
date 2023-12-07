import { FC, PropsWithChildren, ReactNode } from "react";

export const Body: FC<
  PropsWithChildren & {
    title?: ReactNode;
    description?: ReactNode;
  }
> = ({ children, title, description }) => {
  return (
    <div className="col-span-10">
      {!children && (
        <>
          {title && <h3 className="font-medium">{title}</h3>}
          {description && <p className="text-neutral-500">{description}</p>}
        </>
      )}
    </div>
  );
};
