import { ReactNode } from "react";
import styles from "./Title.module.scss";

interface TitleProps {
  level: number;
  children: ReactNode;
}

const Title = ({ level, children }: TitleProps) => {
  return <h1 className={styles.title}>{children}</h1>;
};

export default Title;
