import { cn } from "@/lib/utils";
import { FC } from "react";
import Balancer from "react-wrap-balancer";

export const Title: FC<{
    title: string;
    subtitle?: string;
    className?: string;
}> = ({ title, subtitle, className, ...rest }) => {
  return (
    <div className={cn("mb-6", className)}>
      <Balancer as="h1" {...rest}>
        {title}
      </Balancer>
      {subtitle}
    </div>
  );
};

