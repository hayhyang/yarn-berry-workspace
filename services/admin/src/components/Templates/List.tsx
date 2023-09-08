import { ReactNode } from "react";

interface ListTemplateProps {
  children: ReactNode;
}

const ListTemplate = (props: ListTemplateProps) => {
  const { children } = props;

  return <div>{children}</div>;
};

export default ListTemplate;
