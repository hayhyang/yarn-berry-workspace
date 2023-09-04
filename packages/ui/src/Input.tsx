import { InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

// type: text, number, file, password, search, tel, email, date, time
// text: {}

const Input = (props: InputProps) => {
  return <input {...props} />;
};

export default Input;
