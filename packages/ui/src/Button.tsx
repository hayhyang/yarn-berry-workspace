import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react';

type Size = 'large' | 'medium' | 'small' | 'tiny';

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
    </button>
  );
};

export default Button;
