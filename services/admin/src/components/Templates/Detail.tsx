import { ReactNode } from "react";

interface DetailTemplateProps {
  children: ReactNode;
}

const DetailTemplate = (props: DetailTemplateProps) => {
  const { children } = props;

  return <div>{children}</div>;
};

export default DetailTemplate;
