import { ReactNode } from "react";
import Organisms from "../Organisms";

interface AppTemplateProps {
  children: ReactNode;
}

const AppTemplate = (props: AppTemplateProps) => {
  const { children } = props;

  return (
    <div>
      <Organisms.Header />
      <Organisms.Menu />
      {children}
      <Organisms.Footer />
    </div>
  );
};

export default AppTemplate;
