import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

import { cn } from "../lib/utils";

const headingVariants = cva("tracking-tight", {
  variants: {
    level: {
      h1: "text-2xl sm:text-3xl font-semibold tracking-tight",
      h2: "text-xl sm:text-2xl font-semibold tracking-tight",
      h3: "text-lg font-semibold",
      h4: "text-base font-medium",
    },
  },
  defaultVariants: {
    level: "h1",
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
  asChild?: boolean;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = "h1", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : (level ?? "h1");
    return <Comp className={cn(headingVariants({ level, className }))} ref={ref} {...props} />;
  },
);
Heading.displayName = "Heading";

export { Heading, headingVariants };
