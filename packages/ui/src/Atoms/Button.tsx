import React, {
  ButtonHTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from "react";

import { Size } from "../../types/index";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  size: Size;
  icon: string;
};

const Button = (props: ButtonProps) => {
  const { value, onClick, icon, ...other } = props;

  return (
    <button onClick={onClick} {...other}>
      {value}
      {icon && icon}
    </button>
  );
};

export default Button;
