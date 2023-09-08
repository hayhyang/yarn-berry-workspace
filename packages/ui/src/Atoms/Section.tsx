import React, { HTMLAttributes, ReactNode } from "react";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Section = (props: SectionProps) => {
  const { children } = props;

  return <section>{children}</section>;
};

export default Section;
