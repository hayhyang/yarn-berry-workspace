import React, {
  ButtonHTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from "react";

import { Size, Variant } from "../../types/index";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  size: Size;
  icon?: string;
  variant: Variant;
};

const Button = (props: ButtonProps) => {
  const { children, variant, onClick, icon, ...other } = props;

  return (
    <button onClick={onClick} {...other}>
      {children}
      {icon && icon}
    </button>
  );
};

export default Button;
