import { InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = (props: InputProps) => {
  return <input {...props} />;
};

export default Input;
