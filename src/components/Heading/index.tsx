import React from "react";

const sizes = {
  headingxs: "text-[10px] font-semibold",
  headings: "text-[36px] font-bold md:text-[34px] sm:text-[32px]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "headings",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-indigo-50 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
