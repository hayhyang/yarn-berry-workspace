import Footer from "Organisms/Footer";
import Header from "Organisms/Header";
import { ReactNode } from "react";

interface AppTemplateProps {
  children: ReactNode;
}

const AppTemplate = (props: AppTemplateProps) => {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default AppTemplate;
