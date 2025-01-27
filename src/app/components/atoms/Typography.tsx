import React, { JSX } from "react";
import { VariantProps, tv } from "tailwind-variants";

const typography = tv({
  base: "text-foreground",
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      h5: "scroll-m-20 text-lg font-semibold tracking-tight",
      h6: "scroll-m-20 text-base font-semibold tracking-tight",
      p: "leading-7 [&:not(:first-child)]:mt-6",
      blockquote: "mt-6 border-l-2 pl-6 italic",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground",
    },
    weight: {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    color: {
      default: "text-foreground",
      black: "text-black",
      muted: "text-muted-foreground",
      gray: "text-gray-600",
      lightGray: "text-gray-800",
    },
  },
  defaultVariants: {
    variant: "p",
    weight: "normal",
    align: "left",
    color: "default",
  },
});

type TypographyProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof typography> & {
    as?: keyof JSX.IntrinsicElements;
    children: React.ReactNode;
  };

export const Typography: React.FC<TypographyProps> = ({
  variant,
  weight,
  align,
  color,
  children,
  className,
  ...props
}) => {
  return (
    <span
      className={typography({ variant, weight, align, color, className })}
      {...props}
    >
      {children}
    </span>
  );
};
