import { HTMLAttributes, ReactNode } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  chidlren: ReactNode;
}

const Container = ({ chidlren }: ContainerProps) => {
  return <div>{chidlren}</div>;
};

export default Container;
